# Rosa v1.1.0 Mod 与资源包说明

本页用于说明 Xintinglei客户端（Rosa_Tenuifolia 特调优化版）的大致功能结构。这里不会列出完整 Mod 清单，只保留分类和主要代表，避免页面变成零件仓库。

普通玩家保持客户端默认配置即可，不需要自行移动、删除或禁用 Mod 文件。想了解每类功能的用途，可以阅读下方分类说明。

完整 Mod 表会作为内部附件单独整理；Mod 与前置关系的大网会在后续联网核对后再制作。

## 性能 / 稳定性优化

这一类主要负责减少卡顿、降低内存占用、加快加载或提升服务端/客户端稳定性。普通玩家不需要单独配置，保持默认即可。

主要代表：

- C^2M 引擎（Concurrent Chunk Management Engine）
- Iris
- 现代化修复（ModernFix）
- 钠 · 扩展（Sodium Extra）

## 界面 / 信息显示

这一类负责把游戏状态、物品信息、调试信息等内容显示得更清楚。它们不会大幅改变玩法，但能让你少猜很多东西。

主要代表：

- 更好的F3（BetterF3）
- 模组菜单（Mod Menu）
- 玉（Jade）
- 苹果皮（AppleSkin）
- 物品边框（Item Borders）
- 物品高亮（Highlighter）
- 聊天动画（ChatAnimation）
- 聊天头像（Chat Heads）
- 聊天工具箱（Chat Tools）
- 进度牌匾（Advancement Plaques）

## 背包 / 物品 / 操作辅助

这一类主要减少重复操作，让整理背包、查看配方、移动物品更顺手。

主要代表：

- REI物品管理器（Roughly Enough Items）
- 一键背包整理Next（Inventory Profiles Next）
- 物品滚轮（Item Scroller）
- 鼠标手势（Mouse Tweaks）
- Quick Shulker
- 箱子追踪（Chest Tracker）
- 通用拼音搜索（Just Enough Characters）

## 地图 / 建造 / 技术辅助

这一类面向跑图、建造、生电与结构复现。刚开始游玩时按默认配置使用即可；需要了解具体功能时，再根据说明或管理指引查看对应按键和用途。

主要代表：

- TweakerMore
- Tweakeroo
- Xaero的世界地图（Xaero's World Map）
- Xaero的小地图（Xaero's Minimap）
- 投影（Litematica）
- 迷你HUD（MiniHUD）
- Servux
- 共享原理图（Syncmatica）

## Carpet / 生电与规则拓展

这一类与技术生存、生电调试、服务器规则拓展有关。部分功能需要服务器端规则配合，不建议在不了解用途的情况下改动相关配置。

主要代表：

- Carpet Org Addition
- Carpet TIS Addition
- Carpet 拓展（Carpet Extra）
- 地毯（Carpet Mod）
- Carpet AMS Addition
- Gugle的Carpet附加包（gugle-carpet-addition-Wrapper）
- MiniTweaks

## 画面 / 声音 / 资源支持

这一类用于渲染、资源包兼容、动态视觉或声音体验。这里不是主打光影，所以光影不放进本页面主线。

主要代表：

- Continuity
- Blur+
- Chunks Fade In
- 物理声效重制版（Sound Physics Remastered）

## 前置 / API / 库

这一类是其他 Mod 的基础组件。它们通常不直接提供玩家功能，但删掉会导致相关 Mod 无法启动。

主要代表：

- Architectury
- Cloth Config API（Cloth Config v17）
- Fabric API
- MaLiLib
- YetAnotherConfigLib
- 钠（Sodium）
- Almanac
- Configurable

## 玩法 / 多媒体 / 其他功能

这一类包含少量内容扩展、音乐、输入法、高清截图等功能性组件。

主要代表：

- AllMusic Client
- Better McDonald's Mod
- Fabrishot
- Figura
- Happy Ghast Legacy
- 游戏内输入法 XPlus 版（XPlus ContingameIME）
- 藤（Fuji）
- 铜轨汉化版（The Copper Rail）

## 资源包

Rosa v1.1.0 补充了多组资源包，用于改善字体、界面、物品显示和部分视觉细节。资源包可能会相互覆盖，若出现显示异常，优先恢复默认资源包顺序，不要改动 `mods` 文件夹。

代表资源包：

- 梧桐系列资源包：包含字体、UI、树叶、红石显示、CIT 与部分视觉细节调整；
- 世吞运维助手2.0.zip；
- 自定义不死图腾.zip。

::: tip
资源包与 Mod 不一样，大多数资源包不会参与游戏逻辑，只会影响显示效果。遇到贴图、字体或界面问题时，优先从资源包顺序排查。

其中，梧桐加减法的排序从上至下需为

  可视化CIT

  红石衍生

  多彩UI

  加减法

  其他材质不必考虑排序顺序
:::

## 不在本页展开的内容

- 光影包：本页面暂不把光影作为客户端主线介绍；
- 完整 Mod 清单：请前往 QQ 群文件下载；
- Mod 前置关系大网：后续联网核对后单独制作（Rosa快燃尽了）。
