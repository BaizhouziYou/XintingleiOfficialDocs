# 新亭泪生电客户端介绍
**整合包（工具）分类：**
-  XintingleiClient-Rosa  windows用户首选  （windows专用客户端）  
-  XintingleiClient-All    手机/低配玩家首选  （通用客户端，优化较好）  
-  XintingleiClient-Basic  自定义客户端首选   （只包含进服必备和优化模组）  
-  XintingleiClient-Vulkan  帧数过低/尝鲜可用   （确定自己的设备支持Vulkan1.2再用）  
-  Sempervirens          客户端设置迁移器    （可迁移如键位等设置，暂适配Rosa   
  
**最新版：**
-  XintingleiClient-Rosa   v1.1.2
-  XintingleiClient-All     v1.2.2
-  XintingleiClient-Basic   v1.1.1
-  XintingleiClient-Vulkan  v1.0.0
-  Sempervirens         v1.0.0  

**制作中：**
-  手机专用键位（FCL启动器键位，适配XintingleiClient-All）
-  各整合包性能测试整合  

**出了问题可联系制作者**
-  @破碎的烟之恶魔[Rosa]  （XintingleiClient-Rosa和Sempervirens联系）
-  @3659dfg              （XintingleiClient-Vulkan , XintingleiClient-All和XintingleiClient-Basic联系）

# 新亭泪生电客户端安装教程

本教程适用于 Windows 与 PCL。客户端已经包含对应的游戏版本与大部分配置；请不要将它与旧客户端混在同一个文件夹中。

## 1. 下载客户端

从群文件处下载当前客户端压缩包

## 2. 解压到单独文件夹

在方便找到的位置新建一个文件夹，例如：

```txt
D:\Games\XintingleiClient
```

将客户端压缩包完整解压到这里。解压后，顶层应能看到：

```txt
Plain Craft Launcher.exe
PCL/
.minecraft/
```

## 3. 打开 PCL

双击运行：

```txt
Plain Craft Launcher.exe
```

PCL 会默认选中 `XinTingLeiClient-Rosa-V1.1.2`。如启动器要求选择 Java，请使用 Java 21

## 4. 下载外部 Mod

在 PCL 主页找到“外部 Mod 下载”，点击“一键下载外部 Mod（3 个）”。它会将缺少的外部组件下载到当前版本的 `mods` 文件夹，并自动校验文件完整性。

下载结束前不要关闭启动器。如果提示下载或校验失败，请前往群文件处下载这三个外源性mod

## 5. 登录皮肤站账号

进入 PCL 后，以新亭泪皮肤站账号登录。注册、邀请码和认证方式请参考[入服步骤](/guide/join-steps)。

注册皮肤站时，游戏 ID 请与自己实际使用的游戏 ID 保持一致。

## 6. 启动并进入服务器

选择客户端版本并点击启动。首次加载 Mod、资源包与配置时可能较慢，请耐心等待。

客户端已带有服务器相关的基础配置；进入游戏后，按[入服步骤](/guide/join-steps)完成绑定与选服即可。

# Sempervirens迁移MC个人预设相关教程

**使用方法**  
1.关闭 Minecraft 和正在使用相关实例的启动器。  
2.选择迁出实例和迁入实例。  
3.扫描可迁移内容，并查看每一项的差异说明。  
4.选择需要迁移的内容和同名文件处理方式。  
5.确认清单后开始迁移。  
**处理重要存档前，建议额外保留一份独立备份。迁出实例始终只读，程序只会改动你选定的迁入实例。**

**主要功能**
- 自动发现 Minecraft 实例并显示完整路径。  
- 内置“仅原版 Minecraft”和“新亭泪整合实例”规则。  
- 支持从本地 JSON 文件载入自定义迁移规则。  
- 在迁移前逐项展示差异、迁移内容和处理方式。  
- 提供备份后覆盖、直接覆盖和保留目标三种同名内容策略。  
- 支持迁移记录、备份定位、托盘运行、中英文界面和键盘操作。  
- 支持应用内差分更新；更新失败时自动保留或恢复可用版本。  
- 优先使用 GitHub Release 下载更新，无法访问时自动切换到国内加速源。  
