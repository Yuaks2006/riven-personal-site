# 极光 · AURORA VEIL — 设计系统 v4.1（2026-07-04）

> v4.1 增量：Hero 信息层级重排 —— **Riven（Unbounded 渐变巨字）是唯一主标题**，
> 真名"谭宇峻"以小字距字号置于其右侧基线；头像放大为第二视觉焦点
> （极光弧环 + 轨道卫星光点 + 指针视差倾斜 + 滚动下沉退场）；
> "连接 Agent、AIGC 与社区现场，做一个行动型节点。"降级为副标题量级 slogan。
> 动态层：卡片跟手聚光灯（PointerVeil 全局监听 + `--mx/--my`）、导航极光滚动进度条、
> CTA 流光扫过、Reveal 模糊入场、跑马灯悬停暂停。图片说明改"on Dali — Riven"。

> 当前生效版本。v3「流光 LUMEN FIELD」（近白舞台 + 细宋体 + 毛笔签名词）已废弃——
> 用户明确否决其古风气质：**禁用毛笔字、书法体、宋体标题与文言腔文案**。
> v4 主基调：北极永夜的极光天幕。现代、简约、前沿艺术；参考 Apple / Gemini 产品页的完成度。
> 设计原则：照片素材只决定"放什么"，不决定网站色调与美术风格。

## 1. 概念

深蓝黑的极夜天空（不是纯黑），星辰隐现；一层绿-青为主、紫罗兰镶边的极光纱幔
在页面顶部缓慢摇曳，幔内颜色隐约变换（hue 微移）。标题是**超细现代黑体**，
关键艺术词用**极光渐变**书写——渐变以近白薄荷起笔，质感类似冷光流过金属表面，
但不是金属材质。结尾终章是极光在深夜上空的最后一次泛亮。

## 2. 色彩

| Token | 值 | 用途 |
| --- | --- | --- |
| `--bg / --bg-deep` | `#060a14 / #04070d` | 极夜天幕（蓝黑，非纯黑） |
| `--ink / --ink-soft / --ink-faint` | `#edf3fa / #a8b5c9 / #667187` | 冰白三级 |
| 极光五色 | `#9cf8d4 → #3cebb0 → #26d3cf → #6f9dff → #a583ff` | `--grad-aurora`（起笔近白 #eafff6 制造冷光高光） |
| `--surface` | `rgba(14,22,38,.52)` | 夜色玻璃卡 |

配色依据：真实极光 = 氧原子绿为主 + 青色漂移 + 氮紫镶边；亮色只留给焦点（CTA、渐变词）。

## 3. 字体（全部本地子集化，`src/fonts/`）

- **中文标题**：思源黑体 Noto Sans SC 变量字重（`display-hair` 250 / `display-mid` 460）— Apple 发布页气质
- **英文 / 数字 / eyebrow**：Unbounded 变量字重（`font-un` / `en-line` / `eyebrow` / `metric-veil`）— 宽几何、现代前沿
- **正文**：系统 CJK 栈（正文可方正，用户确认）
- **禁用**：毛笔体、楷体、宋体标题、衬线斜体（古风红线）
- 子集管线：`font-src/` 存源 TTF；`glyphs.txt` 由源码自动收集生成；
  `G:/miniconda3/python.exe -m fontTools.subset <src.ttf> --text-file=font-src/glyphs.txt --flavor=woff2 --layout-features='*' --output-file=src/fonts/<name>-sub.woff2`
  （Unbounded 用 `--unicodes="U+0020-007E,..."`）。新增中文内容出现缺字回退时重跑。

## 4. 签名视觉语言

1. `.sky` 全局固定天幕：星辰平铺层（三层错位 radial 瓦片）+ 三条 `.veil` 极光纱幔
   （skew 长带 + blur64 + 30s+ 摇曳 + hue-rotate 微变）
2. `.text-aurora` 极光渐变文字（11s 流动）；`.mark-idx` Unbounded 渐变巨型编号（01/02/03/A-D/✦）
3. `.card-veil` 夜色玻璃卡（暗面 + 发丝线描边 + hover 微升 + 边缘泛绿）；`tint-*` 四色微晕
4. `.pill-aurora` 唯一的亮色光束（渐变底 + 深色字）/ `.pill-quiet` 夜色幽灵按钮 / `.chip-veil` 发丝线小片
5. `.halo` 头像极光弧环（细线 conic + 微光晕，非彩虹圆盘）
6. `.finale` 终章（极光余晖 + RIVEN 字标水印 5%）
7. `.timeline-rail` 极光渐变时间线；`.edge-fade` 跑马灯遮罩

## 5. 文案纪律

- **不用古风、文言腔**；措辞礼貌得体（"说来意"类命令式表达是红线，已改"来聊聊。"）
- 文案参考源：`00-网站内容结构化文档.md` 内的推荐文案与草稿（Hero 英文线用了草稿 B
  "Connect the scenes. Light the nodes."）
- 数据唯一来源 `src/data/site.ts`；空素材隐藏模块，不渲染"暂无"

## 6. 验证与 QA

- 验证链：`npm run build` + `npm test` + `npm run check:content` + `npx eslint .`
- QA：`npx http-server out -p 3017 -s` 后跑 `node scripts/qa-shots.mjs` / `qa-sections.mjs`
  （`QA_W/QA_H/QA_TAG` 切移动端）；`scripts/qa-overflow.mjs` 查移动端横向溢出
  （marquee max-content 曾撑宽画布，已用 overflow-hidden + html overflow-x:clip 双保险）
- 截图归档 `docs/qa/`（qa-v3-* 系列）
