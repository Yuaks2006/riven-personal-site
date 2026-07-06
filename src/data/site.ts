export type ImageAsset = {
  src: string;
  alt: string;
  kind?: "photo" | "poster" | "document";
};

export type Project = {
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  titleZh: string;
  summary: string;
  period?: string;
  role: string;
  type: string;
  facts: string[];
  projectUrl?: string;
  materials: { label: string; href: string }[];
  images: ImageAsset[];
};

export type EventNode = {
  slug: string;
  title: string;
  date: string;
  place: string;
  role: string;
  summary: string;
  actions: string[];
  result?: string;
  images: ImageAsset[];
};

export const profile = {
  displayName: "Riven",
  legalName: "谭宇峻",
  city: "Guangzhou",
  cityZh: "广州",
  title: "连接 Agent 应用、AIGC 创作、社区现场与项目实践的行动型节点。",
  titleEn:
    "An action-driven node connecting Agent apps, AIGC creation, community scenes, and project practice.",
  intro:
    "我把想法推进成可见作品，把现场连接成社区节点，也用 Agent 把创意快速带到可交互的页面和产品形态里。",
  introEn:
    "I turn ideas into visible works, connect people in real scenes, and use agents to move creative concepts into interactive products.",
  avatar: "/assets/profile/ip-avatar.jpg",
  portrait: "/assets/profile/real-riven.jpg"
};

export const contact = {
  email: "yuaks2006@gmail.com",
  wechat: {
    value: "Tanwu20061204",
    note: "添加微信请备注来意。"
  },
  github: "https://github.com/Yuaks2006",
  linkedIn: "https://www.linkedin.com/in/Riven2006"
};

export const contactTopics = [
  "Agent 应用与开发",
  "AIGC 创作",
  "AI 产品与项目合作",
  "线下 AI 活动",
  "社区运营",
  "实习与成长路径"
];

export const navItems = [
  { label: "作品", en: "Work", href: "/#work" },
  { label: "现场", en: "Connect", href: "/#connect" },
  { label: "能力", en: "Skills", href: "/#skills" },
  { label: "履历", en: "Experience", href: "/#experience" },
  { label: "联系", en: "Contact", href: "/#contact" }
];

export const identityTags = [
  ["Agent 应用探索者", "Agent App Explorer"],
  ["AIGC 创作实践者", "AIGC Creator"],
  ["社区连接者", "Community Connector"],
  ["项目推进者", "Project Driver"],
  ["高能量表达者", "High-energy Communicator"],
  ["青年行动节点", "Young Action Node"]
];

export const projects: Project[] = [
  {
    slug: "flash-idea",
    index: "01",
    title: "Flash Idea",
    subtitle: "On-device AI note app",
    titleZh: "端侧 AI 笔记 APP",
    summary:
      "面向移动端灵感记录场景的 AI 笔记产品探索，覆盖调研、产品定位、移动端页面与数据流设计。",
    period: "2026",
    role: "队长 / 产品与技术负责人",
    type: "AI 竞赛项目 · Android App · AI 产品策划",
    facts: [
      "规划并带领团队完成前期调研、产品设计、技术方案、Agent 框架设计、协同开发与宣传材料产出。",
      "完成 6 轮市场调研与竞品分析，形成产品定位与功能优先级。",
      "主导 Kotlin + Jetpack Compose 移动端方案。",
      "设计笔记列表、详情、AI 对话、图谱、洞察流等 7 个核心页面与数据流。"
    ],
    materials: [],
    images: []
  },
  {
    slug: "service-agent",
    index: "02",
    title: "Service Agent",
    subtitle: "Customer-service agent solution",
    titleZh: "企业客服智能体解决方案",
    summary:
      "面向家装企业客服自动化场景，拆解需求并参与搭建获客、沟通、沉淀和销售跟进链路。",
    period: "2026.04 — 2026.05",
    role: "核心技术骨干 / 方案设计与 Agent 协同开发",
    type: "B 端 AI 应用 · RPA 自动化 · CRM",
    facts: [
      "拆解甲方 8 项需求，明确微信客服、CRM、销售看板与飞书同步交付边界。",
      "搭建 FastAPI + SQLAlchemy + SQLite 线索底座。",
      "协同完成 PC 微信 UIA 自动客服控制台、飞书 Bitable 同步与 Sales Dashboard 的接口和运行文档。"
    ],
    materials: [],
    images: []
  },
  {
    slug: "digital-museum",
    index: "03",
    title: "Digital Museum",
    subtitle: "Shenzhen Cultural Expo website",
    titleZh: "深圳文博会数字博物馆网站",
    summary:
      "在深圳文博会现场对接企业需求，作为唯一技术开发人员推进数字博物馆网站原型与后续迭代。",
    period: "2026.05.22 — 2026.05.25",
    role: "参赛者 / 唯一技术开发人员",
    type: "AI 黑客松 · 商业需求对接",
    facts: [
      "在团队中担任唯一技术开发人员，现场对接企业真实需求。",
      "4 天黑客松中团队与 3 家企业取得后续合作意向。",
      "会后继续为江西邹氏兄弟「板耕斋」工作室迭代数字博物馆网站。"
    ],
    materials: [],
    images: [
      {
        src: "/assets/events/culture-expo-roadshow.jpg",
        alt: "Riven 在深圳文博会现场展示数字博物馆项目",
        kind: "photo"
      }
    ]
  }
];

export const connectCommunity = {
  name: "WaytoAGI",
  nameZh: "通往 AGI 之路社区",
  role: "校园方向活动推进 · 广州线下活动支持",
  intro:
    "我参与校园方向活动推进和广州线下活动支持，在活动现场进行技术指导、工具配置、参与者答疑和项目路演支持。",
  span: "2025.11 — 2026.05",
  count: 7
};

export const waytoagiEvents: EventNode[] = [
  {
    slug: "guangzhou-codex-20260531",
    title: "WaytoAGI 第 24 期 AI 切磋大会：Codex 轻造物局",
    date: "2026-05-31",
    place: "广州",
    role: "技术指导（志愿者）",
    summary:
      "辅助参与者下载和配置 Codex，支持参与者在 90 分钟内完成创意实现与路演准备。",
    actions: [
      "辅助参与者下载和配置 Codex。",
      "帮助解决开发过程中的工具与环境问题。",
      "支持参与者完成创意实现与路演准备。"
    ],
    images: [
      {
        src: "/assets/events/guangzhou-codex.jpg",
        alt: "广州 Codex 轻造物局活动现场",
        kind: "photo"
      }
    ]
  },
  {
    slug: "macau-codex-20260530",
    title: "WaytoAGI 第 24 期 AI 切磋大会（澳门）：Codex 轻造物局",
    date: "2026-05-30",
    place: "澳门威尼斯人金光会展中心",
    role: "技术指导（志愿者）",
    summary: "在澳门场辅助参与者配置 Codex，处理开发过程中的工具与环境问题。",
    actions: [
      "辅助参与者配置 Codex。",
      "处理工具与环境问题。",
      "支持创意实现与路演准备。"
    ],
    images: [
      {
        src: "/assets/events/macau-codex.jpg",
        alt: "澳门 Codex 轻造物局活动现场",
        kind: "photo"
      }
    ]
  },
  {
    slug: "culture-expo-20260522",
    title: "WaytoAGI × 深圳文博会 MINI 黑客松",
    date: "2026-05-22 至 2026-05-25",
    place: "深圳国际文化产业博览交易会",
    role: "参赛者 / 唯一技术开发人员",
    summary: "现场对接企业真实需求，推进数字博物馆网站原型和后续迭代。",
    actions: [
      "在团队中担任唯一技术开发人员。",
      "现场对接企业真实需求。",
      "会后持续迭代数字博物馆网站产品。"
    ],
    result: "团队与 3 家企业取得后续合作意向。",
    images: [
      {
        src: "/assets/events/culture-expo-roadshow.jpg",
        alt: "深圳文博会路演现场",
        kind: "photo"
      }
    ]
  },
  {
    slug: "feishu-cli-20260426",
    title: "WaytoAGI 第 23 期 AI 切磋大会：飞书 CLI 专场",
    date: "2026-04-26",
    place: "广州海珠区华新中心清智孵化器琶洲模方",
    role: "技术指导（志愿者）",
    summary:
      "帮助 Win/Mac 用户安装 Agent 环境，协助参与者联通飞书 CLI，收集现场工具使用问题。",
    actions: [
      "帮助 Win/Mac 用户安装 Agent 环境。",
      "协助参与者联通飞书 CLI。",
      "收集现场工具使用问题。"
    ],
    images: [
      {
        src: "/assets/events/feishu-cli-work.jpg",
        alt: "飞书 CLI 专场，Riven 在现场协助参与者",
        kind: "photo"
      }
    ]
  },
  {
    slug: "openclaw-20260321",
    title: "WaytoAGI 第 22 期 AI 切磋大会：龙虾街区",
    date: "2026-03-21",
    place: "广州天河未来社",
    role: "参与者",
    summary: "参与社区 OpenClaw 主题活动，了解 OpenClaw 展位、部署和使用场景。",
    actions: [
      "参与社区 OpenClaw 主题活动。",
      "了解 OpenClaw 展位、部署和使用场景。"
    ],
    images: [
      {
        src: "/assets/events/openclaw-scene.jpg",
        alt: "OpenClaw 主题社区活动现场",
        kind: "photo"
      }
    ]
  },
  {
    slug: "miaoda-20251130",
    title: "WaytoAGI × 百度秒哒第 19 届 AI 切磋大会",
    date: "2025-11-30",
    place: "广州海珠区华新中心清智孵化器琶洲模方",
    role: "参与者",
    summary:
      "体验 NFC 个人简介卡片，在 Social 环节链接 AI 从业者和工具使用者，使用秒哒制作并提交 3 个网页作品。",
    actions: [
      "体验 NFC 个人简介卡片。",
      "在 Social 环节链接 AI 从业者和工具使用者。",
      "使用秒哒制作并提交 3 个网页作品。"
    ],
    images: [
      {
        src: "/assets/events/miaoda-meetup.jpg",
        alt: "百度秒哒切磋大会合影",
        kind: "photo"
      }
    ]
  },
  {
    slug: "aipo-20251108",
    title: "WaytoAGI × 飞书广州大学城站 AIPO 校园创投活动",
    date: "2025-11-08",
    place: "广州大学城",
    role: "活动组织负责人之一 / WaytoAGI 校园大使 / 参赛者",
    summary:
      "协同完成场地、邀约、现场流程和路演组织；作为参赛者路演项目获创业者第二名。",
    actions: [
      "协同完成场地、邀约、现场流程和路演组织。",
      "作为创业者上台路演并展示项目。"
    ],
    result: "活动覆盖广州大学城及周边 10+ 高校、50+ 现场参与者。",
    images: [
      {
        src: "/assets/events/aipo-poster.jpg",
        alt: "AIPO 校园创投活动海报",
        kind: "poster"
      }
    ]
  }
];

export const capabilities = [
  {
    index: "A",
    title: "Agent 应用与快速实现",
    titleEn: "Agent apps & rapid builds",
    items: [
      "常用 Codex、Claude Code、Cursor、VS Code 等开发工具",
      "Agent 框架设计",
      "需求拆解与任务编排",
      "前后端协作开发",
      "快速开发实现 demo",
      "接口联调与运行文档整理"
    ]
  },
  {
    index: "B",
    title: "产品与项目推进",
    titleEn: "Product & project driving",
    items: [
      "市场调研与竞品分析",
      "产品定位与功能优先级",
      "页面结构与数据流设计",
      "宣传材料与交付材料制作",
      "从想法到可展示原型的推进"
    ]
  },
  {
    index: "C",
    title: "社区与活动运营",
    titleEn: "Community & event ops",
    items: [
      "活动策划与环节设计",
      "现场人员分工与统筹",
      "面向技术小白的教学经验",
      "用户需求与反馈采集",
      "社区社群的运营与维护"
    ]
  },
  {
    index: "D",
    title: "内容与表达",
    titleEn: "Content & expression",
    items: ["文案创作", "演讲与主持", "沟通对接"]
  }
];

export const workExperience = [
  {
    company: "浪尖儿教育科技（沈阳）有限公司",
    title: "浪尖儿教育科技（沈阳）有限公司",
    role: "运营实习",
    period: "2025.12 — 2026.02",
    region: "广东线下社区运营",
    summary:
      "负责广东地区线下社区运营，参与活动触达、用户维护、课程/产品推广与数据整理。",
    details: [
      "负责广东地区线下社区的社群运营、内容规划、活动触达、用户维护和课程 / 产品推广。",
      "参与线下活动从预热、邀约、通知、现场沟通到复盘的完整链路。",
      "使用飞书文档、飞书多维表格等工具进行活动宣发、用户反馈采集和数据整理。"
    ],
    metrics: [
      { value: "100+", label: "累计服务社区用户" },
      { value: "2 场", label: "组织线下活动" },
      { value: "122 → 186", label: "广东社区人数，增长约 52%" }
    ],
    images: [
      {
        src: "/assets/work/wavepeak-certificate.jpg",
        alt: "浪尖儿教育科技实习证明",
        kind: "document" as const
      }
    ]
  }
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getEvent(slug: string) {
  return waytoagiEvents.find((event) => event.slug === slug);
}
