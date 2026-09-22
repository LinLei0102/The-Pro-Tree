# The-Pro-Tree 专业树

来自 CrazyHighNumbers69 的模组树作品，由 LinLei_Baruch 汉化

源仓库链接：https://github.com/CrazyHighNumbers69/The-Modding-Tree

汉化在本地，暂时不上传GitHub

大家先凑合玩吧！如果对此模组树有疑问的，可加群 963150347 一同讨论哦

---

## 汉化说明

本次汉化覆盖**玩家可见的全部文本**，采用**纯中文**方案（除专有名词与引擎数值类型名外不保留英文对照）。

### 覆盖范围

| 范围 | 内容 |
|---|---|
| 层定义文本 | `js/` 下 42 个层文件中的名称、说明、提示框、里程碑、挑战、成就、可购买项、可点击项、信息框等 |
| 引擎界面 | `js/technical/`、`js/utils/`、`js/components.js`、`js/game.js`、`js/utils.js` 中的按钮、选项页、信息页、弹窗、快捷键说明、时长单位、主题名等 |
| 页面 | `index.html`（加载页、通关页、页脚署名） |
| 游戏内更新日志 | `js/mod.js` 中的 `changelog`（信息页「更新日志」标签页） |
| 仓库文档 | `changelog.md`、`README.md` |

### 未汉化的部分（有意保留）

- **专有名词**：The Modding Tree、The Prestige Tree、Acamaeda、Jacorb、Aarex、ProGamesGrinder、Discord 等。
- **引擎数值类型名**：`EternityNum`、`OmegaNum`、`ExpantaNum`（代码中直接引用，翻译会导致运行错误）。
- **代码标识符**：层 ID（如 `"re"`、`"su"`）、Vue 组件名（如 `display-text`、`raw-html`）、对象键、快捷键按键字母、记数法代号（`FGH-J`、`HYPER-E`）。
- **开发者文档**：`docs/`（The Modding Tree 引擎 API 文档，玩家不可见）。
- **模板残留**：`demo.html` 与 `js/Demo/`（引擎自带的演示模组，与本游戏无关）。

### 关于标签页名称

`microtabs` 与对象形式的 `tabFormat` 的**键名本身就是按钮文字**，因此这些键名也被翻译。
游戏引擎的 `fixSave()`（`js/utils/save.js`）会在读取存档时自动把失效的子标签键重置为第一项，
因此**旧存档不会因此损坏**，最多是当前停留的子标签被重置。

### 技术实现

汉化采用「提取 → 分块 → 并行翻译 → 程序化回填 → 多重校验」的流水线，全部脚本与术语表位于仓库同级目录
`../translation/`（不在本仓库内）：

- `extract.py` —— 词法扫描 JS，按「显示位置」提取待译文本（位置性保护，避免误译代码标识符）
- `apply.py` —— 按字符偏移从后往前精确回填；引擎/HTML 走 `engine.json` 精确串替换
- `apply_extra.py` —— 第二层补丁（`extra.json`），用于回填后期发现的漏译
- `check.py` —— 五步校验：语法 / 结构 / 英文残留 / 术语漂移 / Vue 模板编译回归
- `check_ids.py` —— 独立校验：确认没有任何代码标识符被误译
- `dupkey.mjs` —— 校验标签组键名无重复（重复键会导致标签页被静默覆盖）

原始英文版本已备份至同级目录 `../The-Pro-Tree_backup_original/`。
