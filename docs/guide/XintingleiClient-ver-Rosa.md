# Xintinglei客户端（Rosa_Tenuifolia 特调优化版）

<div class="client-hero">
  <p>客户端截图：待补充</p>

  <div class="client-hero-text">
    <p class="client-hero-title">Rosa_Tenuifolia 特调优化版</p>
    <p class="client-hero-desc">基于官方 XintingleiClient V1.1.0 整理并优化制作而成，面向 Windows + PCL 玩家使用。</p>
  </div>
</div>

## 简介

Xintinglei客户端（Rosa_Tenuifolia 特调优化版）是由 Rosa_Tenuifolia 基于官方客户端整理并优化制作而成的整合包分支。

它的目标不是把游戏改成另一个样子，而是在尽量保持新亭泪原有体验的基础上，补充常用辅助、性能优化、资源包支持和 PCL 个性化配置，让玩家少折腾一点，更快完成客户端安装。

本客户端已经预设新亭泪服务器相关信息。正常情况下，玩家只需要完成安装、登录账号并启动客户端，不需要再手动填写服务器地址或端口。

## 版本信息

| 项目 | 内容 |
| --- | --- |
| 当前版本 | Rosa v1.1.0 |
| 基准版本 | XintingleiClient V1.1.0 |
| 游戏版本 | Minecraft 1.21.4 |
| 加载器 | Fabric Loader 0.19.3 |
| 适用平台 | Windows |
| 推荐启动器 | Plain Craft Launcher（PCL） |
| 包体文件名 | `XintingleiClient-Rosa-V1.1.0.zip` |
| 下载地址 | https://wwbco.lanzoup.com/ixFty3sh6hhe |

::: tip 下载说明
请以本页面提供的下载链接为准。如链接失效，请联系维护者获取最新版本。
:::

## 主要调整

Rosa v1.1.0 主要做了这些整理：

- 将 Fabric Loader 调整为 0.19.3；
- 对 Mod 文件和配置进行重新整理、版本适配与稳定性调整；
- 增加常用的信息显示、背包操作、地图建造和技术辅助类功能；
- 补充多组资源包，用于改善界面、字体、物品显示和部分视觉细节；
- 附带适配后的 PCL 主页与基础配置；
- 预设新亭泪服务器信息，减少新玩家手动配置步骤。

如果你只想正常游玩，保持默认配置即可。想了解客户端里大致包含哪些功能，可以查看 [Mod 与资源包说明](/guide/XintingleiClient-ver-Rosa-mods)。

## 安装教程（Windows + PCL）

下面按完全没接触过整合包的情况来写。本教程只讲客户端安装，不再单独讲服务器地址和端口设置。

### 1. 新建一个文件夹

先在一个你找得到的位置新建文件夹，比如：

```txt
D:\Games\XintingleiClient-Rosa
```

不要直接扔在桌面一堆文件中间，也不要放进系统盘很深的奇怪目录里。以后排错、更新、备份都会更方便。

### 2. 下载客户端压缩包

下载文件名应为：

```txt
XintingleiClient-Rosa-V1.1.0.zip
```

如果文件名不一样，先确认是不是下载到了旧版本，或者别人二次转发的版本。

### 3. 解压压缩包

把 `XintingleiClient-Rosa-V1.1.0.zip` 解压到刚才新建的文件夹里。

解压完成后，你应该能看到类似这些内容：

```txt
Plain Craft Launcher.exe
PCL/
modpack.mrpack
```

如果你只看到另一个压缩包，或者解压后文件夹套了很多层，可以先把最里面那层包含 `Plain Craft Launcher.exe` 的文件夹找出来。

### 4. 打开 PCL

双击运行：

```txt
Plain Craft Launcher.exe
```

如果系统提示未知来源或安全提醒，请确认文件来自新亭泪官方提供的下载地址，再继续运行。

### 5. 登录账号

进入 PCL 后，按你的账号类型登录。

如果你使用的是正版账号，就选择对应的微软账号登录方式；如果服务器有额外皮肤站或登录要求，请以新亭泪入服说明为准。

### 6. 启动客户端

在 PCL 里选择 Rosa 特调优化版对应的版本，然后点击启动。

第一次启动可能会稍慢，这是正常情况。整合包需要加载 Mod、资源包和配置，请等待窗口完成加载。

### 7. 等待进入服务器

客户端已预设新亭泪服务器信息。正常启动后，按照客户端内的预设流程进入即可。

如果启动失败、卡住或提示错误，不建议自行删除 Mod 或改动配置文件。可以先保留错误报告，再联系管理或将错误信息反馈给维护者。

## 已知问题与处理记录

这里记录的是 Rosa v1.1.0 整理过程中的试车记录。错误不是羞耻柱，而是之后维护时能少踩坑的路标。

### Rosa v1.1.0

#### 进食动画功能暂不加入

曾测试过进食动画类 Mod，但相关版本与 Minecraft 1.21.4 存在兼容问题，可能导致客户端启动失败。因此 Rosa v1.1.0 暂不加入该功能。

#### 截图复制到剪贴板功能暂不加入

旧版截图复制类 Mod 在 Minecraft 1.21.4 中可能在截图时触发崩溃，因此当前版本不将该功能作为默认组件加入。

#### 资源包显示异常时的处理

如果出现字体、物品图标、方块模型或界面显示异常，优先恢复客户端默认资源包顺序，或向维护者反馈。不要自行删除 `mods` 文件夹内的文件，也不要随意改动启动器中的 Mod 配置。

## 更新记录

### Rosa v1.1.0

- 基于官方 XintingleiClient V1.1.0 整理；
- 保持 Minecraft 1.21.4；
- 调整 Fabric Loader 至 0.19.3；
- 整理 Mod、配置与资源包；
- 补充 PCL 个性化主页与基础配置；
- 预设新亭泪服务器信息；
- 暂不加入存在兼容风险的进食动画与截图复制功能。

## 相关页面

- [Mod 与资源包说明](/guide/XintingleiClient-ver-Rosa-mods)
- [PCL配置教程](/guide/pcl-config)
- [入服步骤](/guide/join-steps)

<style>
.client-hero {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 18px 20px;
  margin: 18px 0 28px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  background: var(--vp-c-bg-soft);
}

.client-hero-img {
  width: 110px;
  height: 110px;
  object-fit: contain;
  flex-shrink: 0;
  border-radius: 12px;
}

.client-hero-text { min-width: 0; }

.client-hero-title {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 600;
}

.client-hero-desc {
  margin: 0;
  line-height: 1.7;
  color: var(--vp-c-text-2);
}

@media (max-width: 640px) {
  .client-hero {
    flex-direction: column;
    align-items: flex-start;
  }

  .client-hero-img {
    width: 96px;
    height: 96px;
  }
}
</style>
