# 新亭泪官方文档仓库

这里是 **新亭泪** 官方文档仓库。

## 官网
- 官网：<https://xintinglei.cn>

## 文档
- 文档地址：<https://docs.xintinglei.cn>

## 开发环境
- Node.js v24.14.1+

## 本地开发

```bash
npm install
npm run dev
```

## 构建
```bash
npm run build
```
构建产物位于`/docs/.vitepress/dist`

## 自动构建与部署

普通提交和 PR 不自动构建。推送 `v*` 版本标签（如 `v0.1.1`）时，检查并构建该标签对应的代码，配置完成后自动部署到宝塔静态站；标签提交必须已合并到 `main`。保留 Actions 手动运行入口。页脚显示对应版本标签、构建编号与提交。
发布新版本的操作步骤见 [协作者发布指南](CONTRIBUTING.md)。

## 预览
```bash
npm run serve
```

## 说明
本仓库内容随项目持续更新，欢迎反馈漏洞或提交功能建议。

## 开源协议 (License)

本项目采用双重协议开源：

* **文档内容**：`docs/` 目录下的所有文章、教程等内容采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh) 协议。**允许分享和修改，但必须署名，且禁止用于商业用途，修改后的作品也必须采用相同的协议。**
* **代码与配置**：项目的 VitePress 配置、网站代码等非文档内容采用 [MIT License](LICENSE) 协议。
