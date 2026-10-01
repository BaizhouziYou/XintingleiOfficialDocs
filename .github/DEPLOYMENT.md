# 自动构建与部署

GitHub Actions 负责安装依赖、检查、构建；通过 SSH / rsync 将静态文件推送到 Ubuntu 24.04。大陆服务器无需连接 GitHub、npm，也无需安装 Node.js。公网 SSH 必须能从 GitHub 托管 runner 访问；不要为此关闭防火墙或 SSH 身份校验。

- 普通分支提交（包括 `main`）和 PR：不触发此工作流，不构建、不部署。
- 推送 `v*` 版本标签（例如 `v0.1.1`）：构建该标签对应的提交，成功后自动部署（需先完成下列配置）。只接受已经合并到 `main` 的标签提交；删除标签不会执行构建。
- Actions → Docs Build → Run workflow：保留手动入口；`main` 和 `v*` 标签可以部署，其他分支仅构建。手动构建标签时同样检查提交已合并到 `main`。
- 页脚：`v0.1.1 · 基于构建 #编号.重试次数 · 提交`，分别链接到标签、本次运行和完整提交；手动构建分支不冒用已有版本号，本地运行显示“本地构建”。
- 本地检查：`node --test scripts/build-info.test.mjs`；Linux 下另运行 `bash scripts/deploy.test.sh`。

## 1. 宝塔与服务器准备

现有宝塔网站根目录是 `/www/wwwroot/docs.xintinglei.cn`，保留该目录不动。新建旁边的 `/www/wwwroot/docs.xintinglei.cn-deploy` 作为部署目录，以便首次迁移失败时切回原站。部署目录应是至少三级的绝对路径，仅用英文字母、数字、点、下划线、短横线和斜杠，末尾不加斜杠。

服务器管理员执行一次（若已有专用部署用户则复用并调整用户名）：

```bash
sudo apt-get update
sudo apt-get install -y rsync
sudo adduser --disabled-password --gecos '' docs-deploy
sudo install -d -o docs-deploy -g docs-deploy -m 755 /www/wwwroot/docs.xintinglei.cn-deploy
sudo -u docs-deploy touch /www/wwwroot/docs.xintinglei.cn-deploy/.docs-deploy-root
sudo install -d -o docs-deploy -g docs-deploy -m 700 /home/docs-deploy/.ssh
```

在可信任的本机生成专用 SSH 密钥（例如 `ssh-keygen -t ed25519 -f docs-deploy-key`；无人值守使用无口令的**专用密钥**），将公钥单独加入部署用户的 `/home/docs-deploy/.ssh/authorized_keys`，不要覆盖其中已有条目。目录权限 700、该文件权限 600，归部署用户所有。公钥条目前加 `restrict `，禁用端口转发和交互终端。该用户不需要 sudo，仅需此部署目录的写权限。私钥只放 GitHub Secrets，不提交仓库。

通过宝塔终端核对 SSH 主机公钥指纹：

```bash
sudo ssh-keygen -lf /etc/ssh/ssh_host_ed25519_key.pub
```

在可信任本机用 `ssh-keyscan -p 端口 -t ed25519 主机` 收集公钥，使用 `ssh-keygen -lf` 对扫描结果核对指纹，**一致后**将完整 known_hosts 行保存为下文的 Secret。非 22 端口应保留 `[主机]:端口` 格式。不要只扫描就直接信任。

## 2. GitHub 配置

仓库 Settings → Environments 新建或打开 `production`，在 Deployment branches and tags 中选择 **Selected branches and tags**，分别添加两条规则：

- 类型 **Branch**，名称 `main`：供手动部署使用。
- 类型 **Tag**，名称 `v*`：供版本发布使用。已有的 `main` 分支规则不能代替这条标签规则，否则标签构建成功后部署仍会被环境拒绝。

需要审批时可添加 required reviewers；启用后每次部署需要人工批准。若仓库分支保护曾要求 PR 必须通过 `Build documentation` 检查，需要同步调整，因为本工作流不再监听 PR。

在 `production` 中配置 Secrets：

| 名称 | 内容 |
| --- | --- |
| `SSH_HOST` | 公网 IPv4 或域名，不含协议前缀 |
| `SSH_PORT` | SSH 端口；省略默认 22 |
| `SSH_USER` | 例如 `docs-deploy` |
| `SSH_PRIVATE_KEY` | 上述专用私钥的完整内容 |
| `SSH_KNOWN_HOSTS` | 经过指纹核对的 known_hosts 行 |

在 `production` 中配置 Variable：

| 名称 | 内容 |
| --- | --- |
| `DEPLOY_PATH` | 新建部署目录，例如 `/www/wwwroot/docs.xintinglei.cn-deploy` |

最后在仓库 Settings → Secrets and variables → Actions → **Variables** 添加 `DEPLOY_ENABLED=true`。它必须是**仓库级变量**，不能只放 Environment，因为部署 job 的执行条件要提前读取。未开启时只构建，部署显示 skipped。

## 3. 首次启用与后续更新

1. 先备份现有网站及宝塔站点配置。保持原站点运行，手动执行一次 `main` 工作流。
2. 确认 Deploy documentation 成功后，在宝塔将文档站根目录设为 `DEPLOY_PATH/current`（例如 `/www/wwwroot/docs.xintinglei.cn-deploy/current`），运行目录为 `/`。只需首次修改，之后无需重启 Nginx。
3. 保留原来的域名、HTTPS、备案配置；Nginx 必须能读取部署目录并允许跟随 `current` 符号链接。若启用了禁止符号链接访问的选项，需要针对本站调整。
4. 默认首页为 `index.html`。无扩展名文档路径可配置 `try_files $uri $uri.html $uri/ =404;`，不要将所有不存在的资源都返回首页。
5. HTML 应设置重新验证缓存（`Cache-Control: no-cache`）；CDN 不要长期缓存 HTML，首次切换需刷新 HTML 缓存。带哈希的 `/assets/` 可使用长期缓存。否则页脚可能仍显示旧构建。
6. 访问主页和任意文档页，核对页脚编号是否与 Actions 运行一致，并检查图片、导航及 HTTPS。工作流成功表示文件上传和目录切换完成，**不代表 CDN、宝塔和公网访问已验证**。

### 后续发布版本

先把本次工作流调整提交并合并到 `main`，再给包含新工作流的提交打标签；不要给旧工作流所在的提交补标签来启用新规则。

日常修改正常提交、合并，不会自动上线。准备发布时，在干净的本地工作区执行（版本号按实际递增）：

```bash
git switch main
git pull --ff-only origin main
git tag -a v0.1.1 -m "Release v0.1.1"
git push origin v0.1.1
```

仅在本地打标签不会触发构建，必须推送该标签。也可以在 GitHub Releases 中新建 `v*` 标签并选择 `main` 上的目标提交；实际触发来自标签推送，不是 Release 描述的编辑。工作流使用标签指向的代码，不会改为构建随后更新的 `main`。

`v*` 是前缀匹配，不是严格的语义化版本校验；推荐统一使用 `v0.1.1` 这样的格式。它也会匹配 `v0.2.0-rc.1`，这类标签同样会部署到正式站，不要用它做仅供预览的发布。已发布标签不要移动或覆盖，修复后发布新版本；每次只推送一个待发布标签，不使用 `git push --tags` 批量发布。

不同版本共用发布并发组，不会中途取消正在执行的部署；连续触发多次时，GitHub 可能用新运行替换尚未开始的排队运行，请等当前发布结束后再推送下一版本。传输失败不会切换当前站点，服务器额外加锁，并拒绝用较小的构建编号覆盖较新的构建。重跑旧运行若编号仍较小也会被拒绝，回滚请使用下节方式。仅重跑部署 job 会复用原构建产物，页脚仍显示实际构建的那次 attempt；产物超过 7 天保留期后需重新运行全部 jobs。

## 回滚与空间管理

部署目录中 `releases/编号-重试次数-提交/` 保存完整版本，`current` 指向当前版本。没有自动删除旧版本或旧哈希资源，以便手工回滚且不打断已打开的页面；长期运行应关注磁盘占用。

回滚前在 GitHub 暂时把仓库变量 `DEPLOY_ENABLED` 改为 `false`，并等待已有部署结束。核对目标版本目录内 `index.html` 存在，然后用部署用户在部署目录执行（替换为实际已存在的目录名）：

```bash
cd /www/wwwroot/docs.xintinglei.cn-deploy
ln -s releases/目标版本目录 current-rollback
mv -Tf current-rollback current
```

刷新 HTML 缓存并检查站点。恢复自动部署前，在 `main` 修正或撤回问题提交，再发布新的版本标签；仅切回旧目录不会更改 Git 历史。清理时不要删除 `current` 指向的版本、最近需要的回滚版本或仍被缓存页面引用的哈希资源。
