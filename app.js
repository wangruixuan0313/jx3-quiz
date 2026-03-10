const AXES = [
  {
    key: "discipline",
    label: "持守",
    opposite: "任气",
    detail: "你对训练、边界与成规的依赖程度。",
    positive: "你会先把边界立稳，再决定如何出手。",
    negative: "你更相信活人的判断，不愿把自己完全交给成规。",
    positiveRisk: "你容易把自己锁进过度自律，偶尔会错过突然出现的机会。",
    negativeRisk: "你可能低估长期训练的价值，凭感觉走太久会积累隐患。",
  },
  {
    key: "compassion",
    label: "仁心",
    opposite: "冷裁",
    detail: "你面对他人伤痛时，更偏向安顿还是切割。",
    positive: "你对别人的痛感很敏锐，愿意替他人留余地。",
    negative: "你更重结果与代价，必要时能果断剜掉坏口。",
    positiveRisk: "你有时会把本该别人承担的代价，先揽到自己身上。",
    negativeRisk: "你容易被理解成冷血，哪怕你其实是在控制损失。",
  },
  {
    key: "freedom",
    label: "逍遥",
    opposite: "定锚",
    detail: "你更愿流动探索，还是长期驻守一处。",
    positive: "你需要流动、试错与更大的天地来确认自己。",
    negative: "你愿意扎根一线，把一个地方守成长期承诺。",
    positiveRisk: "你可能在持续变动里削弱耐心，错过深耕带来的复利。",
    negativeRisk: "你容易被稳定感绑住，明知该变也会延迟转身。",
  },
  {
    key: "ferocity",
    label: "锋决",
    opposite: "缓锋",
    detail: "冲突来时，你偏正面决断还是留白观察。",
    positive: "你一旦判断清楚，就会毫不含糊地向前。",
    negative: "你不急着亮锋，更相信分寸与时机。",
    positiveRisk: "你可能把有效的耐心误判成软弱，过早开战。",
    negativeRisk: "你可能把必要的出手拖成被动，错失压制窗口。",
  },
  {
    key: "secrecy",
    label: "幽隐",
    opposite: "昭言",
    detail: "你更习惯把锋芒藏进布局，还是放在明面。",
    positive: "你天然懂得藏锋、留后手，也能承受不被理解。",
    negative: "你倾向把话和态度放在明处，不喜太多遮掩。",
    positiveRisk: "你可能把自己藏得太深，让同伴无法及时读懂你。",
    negativeRisk: "你容易把底牌摊得过早，给对手提前准备的时间。",
  },
  {
    key: "culture",
    label: "风雅",
    opposite: "务实",
    detail: "你是否重视审美、学识与仪式感。",
    positive: "你会在技艺、审美与表达里建立自己的秩序。",
    negative: "你优先考虑有没有用，而不是它好不好看。",
    positiveRisk: "你有时会把表达质量看得过重，压缩了决策速度。",
    negativeRisk: "你可能低估语言和氛围的力量，让合作成本变高。",
  },
  {
    key: "faith",
    label: "志念",
    opposite: "审势",
    detail: "你更依据信念行动，还是依局势权衡。",
    positive: "你愿意为相信的东西多走一段难路。",
    negative: "你会反复校正现实，不轻易把自己交给口号。",
    positiveRisk: "你可能在信念最亮的时候，忽略了局势正在变化。",
    negativeRisk: "你可能因为过度权衡，错过本该坚定站出来的时刻。",
  },
  {
    key: "kinship",
    label: "同袍",
    opposite: "孤行",
    detail: "你把门庭、袍泽与亲缘看得有多重。",
    positive: "你不是独自成事的人，你会替自己人兜住后果。",
    negative: "你对关系有边界，更适合独立完成漫长道路。",
    positiveRisk: "你容易在护短时牺牲公平，让自己背下额外风险。",
    negativeRisk: "你可能把边界设得过硬，让本可并肩的人停在门外。",
  },
];

const SECTS = [
  {
    id: "shaolin",
    name: "少林寺",
    title: "守心如山，出手如钟",
    crest: "禅钟 / 棍影 / 慈悲",
    tags: ["克己", "悲悯", "稳如中流砥柱"],
    palette: {
      accent: "#c0833a",
      accentSoft: "rgba(192, 131, 58, 0.18)",
      accentStrong: "#7a4f1f",
    },
    profile: { discipline: 5, compassion: 4, freedom: -3, ferocity: 1, secrecy: 1, culture: 0, faith: 5, kinship: 3 },
    summary:
      "你不是靠喧哗建立存在感的人。你更擅长把力量压进骨子里，先守住人，再决定是否出手。越是混乱的时候，你越会往内收，像一口不响却稳的钟。",
    reasons: [
      "你对“该不该做”比“能不能赢”更敏感，先有心法，后有手段。",
      "你能承担克制带来的寂寞，也愿意替别人扛住最先到来的冲击。",
      "你不是没有锋芒，只是习惯把锋芒放在真正必要的一刻。",
    ],
    role: "队伍里的定心石",
    verse: "山门不语，但你站在那里，旁人就知道退路仍在。",
  },
  {
    id: "wanhua",
    name: "万花谷",
    title: "自在成谷，知人亦知己",
    crest: "花谷 / 笔墨 / 岐黄",
    tags: ["自由", "洞察", "对知己极重"],
    palette: {
      accent: "#4f8b74",
      accentSoft: "rgba(79, 139, 116, 0.18)",
      accentStrong: "#2d5f4d",
    },
    profile: { discipline: 1, compassion: 4, freedom: 4, ferocity: -1, secrecy: 2, culture: 5, faith: 2, kinship: 2 },
    summary:
      "你想要的不是单纯躲开尘世，而是给自己和别人留一块能安心呼吸的地方。你尊重人的独特性，也愿意在真正信任之后把心交出去。",
    reasons: [
      "你对自由与个体差异的需求很高，厌恶僵硬地被归类。",
      "你既能看见人的伤，也能看见人为什么会受伤。",
      "一旦你认定是自己人，忠诚会变得近乎偏执。",
    ],
    role: "队伍里的知己与医者",
    verse: "你不急着和世界和解，但你会替值得的人留灯。",
  },
  {
    id: "qixiu",
    name: "七秀坊",
    title: "心敏如水，出剑如舞",
    crest: "水阁 / 双剑 / 红袖",
    tags: ["审美敏锐", "重情", "柔中带锋"],
    palette: {
      accent: "#ca6c8e",
      accentSoft: "rgba(202, 108, 142, 0.18)",
      accentStrong: "#8f4061",
    },
    profile: { discipline: 1, compassion: 4, freedom: 2, ferocity: 2, secrecy: -1, culture: 5, faith: 2, kinship: 4 },
    summary:
      "你对人心的冷暖比旁人更敏感。你并不天真，只是不会把锋利写在脸上，而是让它藏在风度、节拍和分寸里，等真正需要的时候再亮出来。",
    reasons: [
      "你对“情”的判断力很强，知道谁值得靠近，谁不该再被纵容。",
      "你擅长用审美、礼数和气氛维持场面，却不是没有决绝。",
      "你很看重自己选择的家人与同路人，愿意为他们返身而战。",
    ],
    role: "队伍里的情绪感应器",
    verse: "你的锋芒常披着温柔的外衣，可一旦动念，旁人很难装作没看见。",
  },
  {
    id: "chunyang",
    name: "纯阳宫",
    title: "问道于雪，出剑于心",
    crest: "云阶 / 长剑 / 清修",
    tags: ["清明", "修己", "天人相照"],
    palette: {
      accent: "#7d9dca",
      accentSoft: "rgba(125, 157, 202, 0.18)",
      accentStrong: "#425f87",
    },
    profile: { discipline: 4, compassion: 1, freedom: -1, ferocity: 0, secrecy: 2, culture: 3, faith: 5, kinship: 1 },
    summary:
      "你更在意自己是否站得端正，而不是眼下能不能一时压过别人。你会先校准心，再校准剑，宁愿慢一点，也不愿把自己练偏。",
    reasons: [
      "你相信修行不是逃世，而是把自己修成足以回到人间的样子。",
      "你对信念、路径与自我约束有稳定需求，不轻易被喧响带走。",
      "你不是最吵的人，却经常是那个把方向定下来的人。",
    ],
    role: "队伍里的定盘问道者",
    verse: "你并非离尘而去，你只是先把心中的风雪理顺。",
  },
  {
    id: "tiance",
    name: "天策府",
    title: "长枪立地，先把人接住",
    crest: "战旗 / 铁骑 / 枪锋",
    tags: ["担当", "正面推进", "不退"],
    palette: {
      accent: "#b64b48",
      accentSoft: "rgba(182, 75, 72, 0.18)",
      accentStrong: "#7b2827",
    },
    profile: { discipline: 4, compassion: 2, freedom: -3, ferocity: 5, secrecy: -3, culture: -2, faith: 4, kinship: 5 },
    summary:
      "你对责任的感知是身体性的。只要前线还缺人、后面还有人要护，你就很难退。你不擅长绕太多弯，但你擅长让别人知道，有你在就不会散。",
    reasons: [
      "你天然会往最需要正面接敌的地方走，不爱逃避碰撞。",
      "你把袍泽、承诺和守线这件事看得非常重。",
      "你宁可自己多扛一些，也不愿让队伍在关键处断掉。",
    ],
    role: "队伍里的前线与号角",
    verse: "你不一定永远赢，但你几乎总是第一个把缺口堵上。",
  },
  {
    id: "cangjian",
    name: "藏剑山庄",
    title: "以礼养锋，以锋定名",
    crest: "剑炉 / 金翎 / 山庄",
    tags: ["名门气度", "工艺与锋芒并重", "热而不乱"],
    palette: {
      accent: "#c69c42",
      accentSoft: "rgba(198, 156, 66, 0.2)",
      accentStrong: "#7a5b16",
    },
    profile: { discipline: 2, compassion: 1, freedom: 0, ferocity: 3, secrecy: -2, culture: 4, faith: 2, kinship: 3 },
    summary:
      "你在意体面，也在意真本事。你能把热血包进礼数里，让人先看到风度，再慢慢意识到那层风度下面其实一直压着锋。",
    reasons: [
      "你重视名声，但不是空名，而是与实力相称、能传得久的名声。",
      "你对技艺、手感和仪式有要求，不愿将就粗糙地过完一生。",
      "你既讲体面，也讲担当，该拔剑的时候不会拖泥带水。",
    ],
    role: "队伍里的门面与主剑",
    verse: "你的讲究不是装饰，它本身就是锋的一部分。",
  },
  {
    id: "wuxian",
    name: "五仙教",
    title: "与草木虫兽共息，向护短处用命",
    crest: "银饰 / 蛊铃 / 深林",
    tags: ["自然直觉", "护族", "奇而不邪"],
    palette: {
      accent: "#2f8f75",
      accentSoft: "rgba(47, 143, 117, 0.18)",
      accentStrong: "#175847",
    },
    profile: { discipline: -1, compassion: 3, freedom: 4, ferocity: 1, secrecy: 2, culture: 1, faith: 2, kinship: 4 },
    summary:
      "你看世界并不只看规矩和言辞，你也看风、土地、草药、气味与活物的反应。你对自己的人有很强的保护本能，外人未必一眼读懂你，但你从不轻慢生命。",
    reasons: [
      "你对自然与身体的感知很强，不容易被表面叙事骗过去。",
      "你愿意接纳世人眼中的奇异，只要它能护人、能活人。",
      "你对族群和自己认定的人极其护短，温柔与狠都来得真。",
    ],
    role: "队伍里的生机与逆解",
    verse: "你知道毒与药常隔着一线，所以你对生命从不轻率。",
  },
  {
    id: "tangmen",
    name: "唐门",
    title: "话可以少，准头不能偏",
    crest: "机括 / 暗芒 / 崖城",
    tags: ["精密", "边界感", "因果清楚"],
    palette: {
      accent: "#6773a3",
      accentSoft: "rgba(103, 115, 163, 0.18)",
      accentStrong: "#39426d",
    },
    profile: { discipline: 3, compassion: -2, freedom: 0, ferocity: 2, secrecy: 5, culture: 1, faith: 0, kinship: 2 },
    summary:
      "你不爱把自己摆到太亮的地方。你更重视角度、时机、后手和边界感，也很少把感情当成唯一依据。一旦决定动手，你希望每一步都精确到没有浪费。",
    reasons: [
      "你习惯在旁人还没看清的时候就已经布好局。",
      "你对距离感有需求，宁可冷一点，也不愿失去判断。",
      "你相信技艺与精度能替情绪节省很多代价。",
    ],
    role: "队伍里的暗线与制衡器",
    verse: "你未必要被人看见，但你留下的结果往往最难忽视。",
  },
  {
    id: "mingjiao",
    name: "明教",
    title: "心火不灭，便敢逆风而行",
    crest: "焰轮 / 圣火 / 荒原",
    tags: ["热烈", "信仰驱动", "护短也护众"],
    palette: {
      accent: "#db6d38",
      accentSoft: "rgba(219, 109, 56, 0.2)",
      accentStrong: "#8e3f18",
    },
    profile: { discipline: 0, compassion: 2, freedom: 4, ferocity: 4, secrecy: 1, culture: 0, faith: 5, kinship: 4 },
    summary:
      "你适合被强烈的意义点燃。你不是为了混乱而反叛，你只是很难对压迫、背叛与长期失明的秩序保持顺从。你一旦认定道路，火会烧得很亮。",
    reasons: [
      "你做决定常常带着明确的精神指向，不喜欢空转地活着。",
      "你面对压迫与困局时，天然更愿意往前冲，而不是先妥协。",
      "你对同路人有很强的护持感，愿意一起扛过最难的时候。",
    ],
    role: "队伍里的火种与号召者",
    verse: "你不是为了燃烧而燃烧，你是怕夜太久，没人再肯点灯。",
  },
  {
    id: "gaibang",
    name: "丐帮",
    title: "路在脚下，义在酒里",
    crest: "竹杖 / 酒葫 / 江湖路",
    tags: ["随性", "热血", "兄弟气"],
    palette: {
      accent: "#617b3d",
      accentSoft: "rgba(97, 123, 61, 0.18)",
      accentStrong: "#35511d",
    },
    profile: { discipline: -4, compassion: 3, freedom: 5, ferocity: 3, secrecy: -2, culture: -2, faith: 1, kinship: 4 },
    summary:
      "你很难把自己塞进四平八稳的格子里。你要的是能喘气、能走路、能自己判断对错的江湖。你未必讲究排场，但往往最先替弱者出头，也最先把朋友扛起来。",
    reasons: [
      "你对自由的需求非常强，讨厌被名分与架子锁住。",
      "你行事直接，认人也直接，喜欢把真情真意摆在桌面上。",
      "你愿意为义气和眼前的不平多管一点闲事。",
    ],
    role: "队伍里的破局活气",
    verse: "你走得不规整，却总能把死路踩出一条活路来。",
  },
  {
    id: "cangyun",
    name: "苍云堡",
    title: "铁甲横城，先把线守住",
    crest: "玄甲 / 盾墙 / 关塞",
    tags: ["守城心态", "耐受极强", "同袍优先"],
    palette: {
      accent: "#607287",
      accentSoft: "rgba(96, 114, 135, 0.18)",
      accentStrong: "#374658",
    },
    profile: { discipline: 5, compassion: 2, freedom: -4, ferocity: 4, secrecy: -1, culture: -3, faith: 4, kinship: 5 },
    summary:
      "你不是那种把自己放在第一位的人。对你来说，先把线守住、先让人活下来，比个人风采重要得多。你耐受高、执行稳，是真正适合扛长线压力的人。",
    reasons: [
      "你能接受重复、沉重和无人喝彩的职责，只要它确有意义。",
      "你对集体与职责的忠诚高于个人舒适。",
      "你在风头最硬的时候，反而最容易让人安心。",
    ],
    role: "队伍里的盾墙与压舱石",
    verse: "你不一定站在最亮处，但大多数人活下来的原因里会有你。",
  },
  {
    id: "changge",
    name: "长歌门",
    title: "清音可载礼，亦可藏锋",
    crest: "琴案 / 水榭 / 长歌",
    tags: ["礼序", "风骨", "洞察局面"],
    palette: {
      accent: "#4e617d",
      accentSoft: "rgba(78, 97, 125, 0.18)",
      accentStrong: "#2d3f57",
    },
    profile: { discipline: 2, compassion: 2, freedom: 1, ferocity: -1, secrecy: 1, culture: 5, faith: 3, kinship: 2 },
    summary:
      "你对形式、礼序与表达有天然敏感，这不是花架子，而是你理解世界的一种方式。你很会控场，也很会在众声喧哗里保留自己的分寸和骨头。",
    reasons: [
      "你不轻视言辞、礼法与气氛，因为你知道它们能改变局势。",
      "你倾向以更高维的秩序感和审美感整理混乱。",
      "你不一定最激进，却很擅长把人和局都放回应有的位置。",
    ],
    role: "队伍里的控场与定调者",
    verse: "你未必用最大的音量说话，但你常常定义整场谈话的气候。",
  },
  {
    id: "badao",
    name: "霸刀山庄",
    title: "刀出北地，规矩比雪还硬",
    crest: "雪岭 / 长刀 / 庄规",
    tags: ["强硬", "家族感", "不拖泥带水"],
    palette: {
      accent: "#70809b",
      accentSoft: "rgba(112, 128, 155, 0.18)",
      accentStrong: "#435062",
    },
    profile: { discipline: 4, compassion: -2, freedom: -1, ferocity: 5, secrecy: 2, culture: 0, faith: 2, kinship: 4 },
    summary:
      "你并不害怕成为那个看起来太硬的人。你尊重规则、实力和承担后果的能力，也明白很多局面不是靠温声细语能收住的。你出手往往很少犹疑。",
    reasons: [
      "你对拖延、含糊与反复横跳的容忍度很低。",
      "你把家门、立场与承担看得很重，宁可自己冷，也不愿局势烂。",
      "你能在高压里保持动作干净，少情绪，多决断。",
    ],
    role: "队伍里的斩断者",
    verse: "你常常是那个把话说尽、把路砍开的硬声口。",
  },
  {
    id: "penglai",
    name: "蓬莱",
    title: "向海天去，身法与心都要轻",
    crest: "海崖 / 风翼 / 云舟",
    tags: ["高远", "灵动", "不恋旧港"],
    palette: {
      accent: "#63a5d2",
      accentSoft: "rgba(99, 165, 210, 0.2)",
      accentStrong: "#2e6f98",
    },
    profile: { discipline: -1, compassion: 1, freedom: 5, ferocity: 1, secrecy: 1, culture: 4, faith: 3, kinship: 1 },
    summary:
      "你需要开阔感。过于拥挤、过于死板、过于重复的生活会让你迅速失去气。你喜欢高处、远行、轻灵与一种不被地面拖住的姿态，但并不等于你没有原则。",
    reasons: [
      "你对广阔空间和精神呼吸的需求很高，适合远眺也适合远行。",
      "你愿意为理想或美感离开熟悉环境，不害怕重新开始。",
      "你不喜欢把人生活成沉重的驻扎，更适合向新的海天推进。",
    ],
    role: "队伍里的远望与机动位",
    verse: "你不是站不住，你只是知道有些人天生适合风更大的地方。",
  },
  {
    id: "lingxue",
    name: "凌雪阁",
    title: "身在影中，刀向要处",
    crest: "夜雪 / 飞刃 / 密令",
    tags: ["冷静执行", "隐忍", "能扛误解"],
    palette: {
      accent: "#7d3941",
      accentSoft: "rgba(125, 57, 65, 0.18)",
      accentStrong: "#4e1f25",
    },
    profile: { discipline: 4, compassion: -1, freedom: -3, ferocity: 3, secrecy: 5, culture: -1, faith: 3, kinship: 1 },
    summary:
      "你很适合承担那些必须有人做、但很难被好好歌颂的任务。你能忍住解释冲动，也能在高压与不透明里保持手稳。你不一定冷，只是知道情绪不能先于职责。",
    reasons: [
      "你能接受隐藏、潜行与无法公开邀功的工作模式。",
      "你比多数人更能承受孤独和误读，只要任务值当。",
      "你做判断时很重效率和清洁度，少绕路，直抵要害。",
    ],
    role: "队伍里的暗刃与清障者",
    verse: "你知道不是所有人都该活在光下，但事情总得有人做完。",
  },
  {
    id: "yantian",
    name: "衍天宗",
    title: "观星定势，心先过一遍万象",
    crest: "星盘 / 算筹 / 观象台",
    tags: ["推演", "理性中的敬畏", "远视"],
    palette: {
      accent: "#6a76ae",
      accentSoft: "rgba(106, 118, 174, 0.18)",
      accentStrong: "#404a7a",
    },
    profile: { discipline: 1, compassion: 0, freedom: 0, ferocity: -2, secrecy: 4, culture: 4, faith: 4, kinship: -1 },
    summary:
      "你对因果与走势的敏感高于一般人。你不是不动情，而是更习惯先看全局、看结构、看时间差，再决定是否下场。你适合做判断，也适合做预判。",
    reasons: [
      "你不满足于解决眼前一招，更想知道这一步会把未来推向哪里。",
      "你能同时保有理性推演与对未知的敬畏，不会粗暴地简化世界。",
      "你适合在众人情绪最高的时候，替队伍看见更远的后果。",
    ],
    role: "队伍里的观局与前瞻者",
    verse: "你不一定最先出手，但你经常最先看见那只还没落下来的靴子。",
  },
  {
    id: "yaozong",
    name: "北天药宗",
    title: "草木知寒暖，你也知",
    crest: "药炉 / 山泽 / 本草",
    tags: ["疗愈", "细察", "自然伦理"],
    palette: {
      accent: "#7fa25d",
      accentSoft: "rgba(127, 162, 93, 0.18)",
      accentStrong: "#4d6a2f",
    },
    profile: { discipline: 1, compassion: 5, freedom: 2, ferocity: -2, secrecy: 1, culture: 3, faith: 2, kinship: 3 },
    summary:
      "你对生命的脆弱与恢复力都很敏感。你会本能地先去看伤口、病因、环境和能不能救，而不是急着给人贴标签。你的温柔并不软，它更像一套耐心的修复技术。",
    reasons: [
      "你习惯先理解身体与环境，再做判断，少凭想象行事。",
      "你对护生、疗伤和长期修复有稳定耐性。",
      "你愿意为了真正的恢复去做繁琐、慢、看不见掌声的工作。",
    ],
    role: "队伍里的修复与续航",
    verse: "你不是把裂痕遮起来的人，你更擅长让它慢慢长回去。",
  },
  {
    id: "daozong",
    name: "刀宗",
    title: "先把自己练直，再谈一刀",
    crest: "绝壁 / 刀路 / 试锋石",
    tags: ["硬练", "直接", "简而不浅"],
    palette: {
      accent: "#8b919b",
      accentSoft: "rgba(139, 145, 155, 0.2)",
      accentStrong: "#535961",
    },
    profile: { discipline: 4, compassion: -1, freedom: 0, ferocity: 5, secrecy: 0, culture: -2, faith: 3, kinship: 1 },
    summary:
      "你不太信那些绕来绕去的漂亮话。你更相信身体、反复、硬练和一遍遍把动作磨直。你不是没有思考，而是很多道理你必须用自己的一身筋骨去确认。",
    reasons: [
      "你对直线推进和以身试法的接受度很高，不喜欢过多修辞。",
      "你相信真正的东西得靠反复打磨，而不是靠表演。",
      "你一旦认准，就愿意在同一条路上苦练到看见结果。",
    ],
    role: "队伍里的强攻与试锋手",
    verse: "你要的不是花样，你要的是一刀下去自己也服气。",
  },
  {
    id: "wanling",
    name: "万灵山庄",
    title: "与万物结契，也与人结缘",
    crest: "山庄 / 灵兽 / 山风",
    tags: ["共感", "亲近生灵", "柔韧"],
    palette: {
      accent: "#709867",
      accentSoft: "rgba(112, 152, 103, 0.18)",
      accentStrong: "#3d6138",
    },
    profile: { discipline: -1, compassion: 5, freedom: 3, ferocity: 0, secrecy: 2, culture: 1, faith: 2, kinship: 4 },
    summary:
      "你很少把世界切得太硬。你更擅长去感受连接，感受人和活物之间细微的信任、戒备与依存。你愿意靠近温柔的东西，也愿意在必要时为这些温柔变得顽强。",
    reasons: [
      "你对生命的回应很直接，不只对人，对所有活物都如此。",
      "你具备温柔但不脆弱的气质，适合照看、陪伴和慢慢建立信任。",
      "你很重视关系里的真实感，不爱被纯粹的权谋牵着走。",
    ],
    role: "队伍里的抚慰与连结者",
    verse: "你不是最响的那一个，却总能让周围的生命先安静下来。",
  },
  {
    id: "duanshi",
    name: "段氏",
    title: "贵而不矜，雅而能战",
    crest: "玉简 / 凤羽 / 府门",
    tags: ["贵气不傲", "温润", "有家学与担当"],
    palette: {
      accent: "#9b6a7f",
      accentSoft: "rgba(155, 106, 127, 0.18)",
      accentStrong: "#66374b",
    },
    profile: { discipline: 2, compassion: 3, freedom: 0, ferocity: 2, secrecy: -1, culture: 4, faith: 3, kinship: 2 },
    summary:
      "你重视教养，也重视把这种教养落到行动上。你不喜欢粗鲁地证明自己，但真到要守要战的时候，也不会退得太快。你追求的是一种体面而有筋骨的存在方式。",
    reasons: [
      "你对礼法、家学与风度有天然认同，但并不想做空壳。",
      "你愿意在温润之外保留战斗力，不把柔和误当软弱。",
      "你适合站在朝堂与江湖之间，用自己的分寸做缓冲。",
    ],
    role: "队伍里的雅正中枢",
    verse: "你希望自己既配得上被仰望，也配得上被托付。",
  },
];

const LORE_BY_SECT = {
  shaolin: { loreLine: "从禅宗祖庭到乱世武僧，你更像少林在‘慈悲与杀伐并存’里的那条硬线。", loreHooks: ["禅宗祖庭", "十三棍僧", "大光明寺之变"] },
  wanhua: { loreLine: "你更贴近万花‘避世并非避责’的路数，在风雅与医理之间做长期选择。", loreHooks: ["万花七圣", "群贤聚谷", "岐黄与百艺并修"] },
  qixiu: { loreLine: "你与七秀的同频点不在外表柔美，而在‘情义判断与锋芒节拍’。", loreHooks: ["公孙剑舞", "七秀十三钗", "碧霞神令"] },
  chunyang: { loreLine: "你的取舍像纯阳的山门逻辑：先修心法，再问胜负。", loreHooks: ["吕洞宾立派", "谢云流与李忘生", "三才化道"] },
  tiance: { loreLine: "你的路径更像天策在边军岁月里的选择：先顶住，再谈漂亮。", loreHooks: ["东都之狼", "府军制", "战线与号令"] },
  cangjian: { loreLine: "你落在藏剑并非只因名门，而是‘礼与锋并存’的家学取向。", loreHooks: ["名剑大会", "铸剑传承", "山庄门风"] },
  wuxian: { loreLine: "你更接近五仙‘与自然共生而非征服自然’的处世方式。", loreHooks: ["苗疆教脉", "虫蛊医毒", "族群守护"] },
  tangmen: { loreLine: "你的核心像唐门：边界、精度、后手，重于情绪表达。", loreHooks: ["机关暗器", "堡内家法", "秘谱与暗线"] },
  mingjiao: { loreLine: "你与明教同频于‘信念驱动的组织动员’，不是单纯热血。", loreHooks: ["圣火体系", "荒漠东归", "教众凝聚"] },
  gaibang: { loreLine: "你更像丐帮的江湖肌理：路感、义气、临场破局。", loreHooks: ["污衣净衣", "帮会江湖网", "行路与济困"] },
  cangyun: { loreLine: "你和苍云最像的地方是‘长期扛压’，不是一时冲锋。", loreHooks: ["玄甲守关", "边塞军堡", "盾墙体系"] },
  changge: { loreLine: "你更贴近长歌‘以礼乐控场，以文骨定调’的门派逻辑。", loreHooks: ["门内雅集", "琴剑同修", "文脉与局势"] },
  badao: { loreLine: "你与霸刀共振于‘北地家法+强执行’，该断时不留尾巴。", loreHooks: ["北地山庄", "三刀体系", "家门纪律"] },
  penglai: { loreLine: "你像蓬莱的海上思维：高度机动、远距视野、节奏轻快。", loreHooks: ["海外仙山叙事", "云舟海路", "高机动战法"] },
  lingxue: { loreLine: "你更接近凌雪‘在阴影里执行秩序’的职业伦理。", loreHooks: ["密令体系", "京畿暗线", "不记功簿"] },
  yantian: { loreLine: "你的选择方式像衍天：先看因果链，再定落子点。", loreHooks: ["观星推演", "术数框架", "前瞻判断"] },
  yaozong: { loreLine: "你更接近北天药宗的长期修复观：先理解生命，再谈效率。", loreHooks: ["雪域本草", "药理传承", "群体疗愈"] },
  daozong: { loreLine: "你和刀宗的契合点在‘硬练硬解’，不靠花招换结果。", loreHooks: ["绝壁试锋", "刀路重构", "体魄与心志并锻"] },
  wanling: { loreLine: "你与万灵同频在‘生命连接感’，擅长让系统重新有呼吸。", loreHooks: ["灵兽契约", "山庄共生", "护生取向"] },
  duanshi: { loreLine: "你贴合段氏‘家学礼制与实战责任并行’的中轴路线。", loreHooks: ["世家门训", "府学传承", "朝野缓冲角色"] },
};

SECTS.forEach((sect) => {
  if (LORE_BY_SECT[sect.id]) {
    Object.assign(sect, LORE_BY_SECT[sect.id]);
  }
});

const LORE_JSON_PATH = "./wiki_sect_notes_enriched.json";
const LORE_MECHANIC_HEADINGS = ["门派武学", "门派心法", "门派阵法", "门派称号", "门派诗", "门派领地", "门派专长"];

function compactText(text) {
  return (text || "").replace(/\s+/g, " ").trim();
}

function shortSnippet(text, maxLength = 68) {
  const compact = compactText(text);
  if (!compact) {
    return "";
  }
  return compact.length > maxLength ? `${compact.slice(0, maxLength)}…` : compact;
}

function buildSectLoreFromProfile(profile, sect) {
  const loreSections = profile.lore_sections || {};
  const story = profile.story || profile.intro || "";
  const faith = profile.faith || "";
  const timeline = profile.timeline || "";
  const fullText = profile.full_text_excerpt || "";

  const headings = Object.keys(loreSections).filter((heading) => !LORE_MECHANIC_HEADINGS.some((name) => heading.includes(name)));
  const headingHooks = headings.slice(0, 3).map((heading) => heading.replace(/^【|】$/g, ""));
  const canonicalHooks = Array.from(new Set([...(profile.hooks || []), ...headingHooks])).slice(0, 4);

  const narrativeSource = [story, faith, timeline, fullText].find((item) => compactText(item).length > 24) || "";
  const narrative = shortSnippet(narrativeSource, 86);

  const extraReasons = [];
  if (narrative) {
    extraReasons.push(`你与「${sect.name}」的契合点，更多落在其江湖叙事：${narrative}`);
  }
  if (faith) {
    extraReasons.push(`在价值排序上，你更接近这一门派的处世框架：${shortSnippet(faith, 64)}`);
  }
  if (timeline) {
    extraReasons.push(`你的选项分布有明显“长期线索”，这和该门派的大事脉络同频。`);
  }

  return {
    loreHooks: canonicalHooks.length ? canonicalHooks : sect.loreHooks || [],
    loreLine: narrative ? `你的落点也呼应了该门派的一条核心叙事线：${narrative}` : sect.loreLine || "",
    loreReasons: extraReasons.slice(0, 2),
    loreExcerpt: shortSnippet([story, faith, timeline].join(" "), 120),
  };
}

async function loadLoreProfiles() {
  try {
    const response = await fetch(LORE_JSON_PATH, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`load lore failed with status ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.warn("Failed to load lore profiles, fallback to built-in copy.", error);
    return null;
  }
}

function enrichSectsWithLore(profilesByName) {
  if (!profilesByName) {
    return;
  }

  SECTS.forEach((sect) => {
    const profile = profilesByName[sect.name];
    if (!profile || !profile.ok) {
      return;
    }
    const lore = buildSectLoreFromProfile(profile, sect);
    sect.loreHooks = lore.loreHooks;
    sect.loreLine = lore.loreLine;
    sect.loreExcerpt = lore.loreExcerpt;
    sect.reasons = [...(sect.reasons || []), ...lore.loreReasons].slice(0, 4);
  });
}

function enrichSectsProfileMetrics() {
  SECTS.forEach((sect) => {
    const squares = AXES.reduce((sum, axis) => sum + (sect.profile[axis.key] || 0) ** 2, 0);
    const magnitude = Math.sqrt(squares / AXES.length);
    sect.profileMagnitude = magnitude;
  });
}

enrichSectsProfileMetrics();


function bOption(title, text, axes, affinity) {
  return { title, text, axes, affinity };
}

function bQuestion(scene, prompt, context, left, right) {
  return { scene, prompt, context, options: [left, right] };
}

const QUESTIONS = [
  bQuestion("稻香村", "村里新收上来的米袋只够两日。", "账房把户帖和伤簿一起推到你手边，等你定分法。", bOption("按户帖分粮", "", { discipline: 2, kinship: 1 }, { shaolin: 1, cangyun: 1, duanshi: 1 }), bOption("按伤簿分粮", "", { compassion: 2, faith: 1 }, { wanhua: 1, yaozong: 1, wanling: 1 })),
  bQuestion("长安·西市", "两拨人把坊口堵了个严实。", "巡街的人还没到，摊贩和行人都在看你先怎么处理。", bOption("留在场中断事", "", { faith: 1, culture: 1, secrecy: -1 }, { changge: 1, duanshi: 1, shaolin: 1 }), bOption("把人带离拆事", "", { secrecy: 1, compassion: 1, kinship: 1 }, { qixiu: 1, gaibang: 1, wanling: 1 })),
  bQuestion("洛阳·天街", "有人递来一封火漆未冷的信。", "封角压着旧印，落款却只写了一个时辰。", bOption("拆封先看来意", "", { freedom: 1, secrecy: 1, ferocity: 1 }, { tangmen: 1, lingxue: 1, yantian: 1 }), bOption("封口转呈上手", "", { discipline: 2, secrecy: 1 }, { cangyun: 1, shaolin: 1, duanshi: 1 })),
  bQuestion("扬州·码头", "子时一过，两路人同时来借你的人手。", "一边要保明早船期，一边要稳渡口夜宿。", bOption("保住明早船期", "", { discipline: 1, culture: 1 }, { cangjian: 1, duanshi: 1, tangmen: 1 }), bOption("稳住渡口夜宿", "", { compassion: 2, kinship: 1 }, { wanhua: 1, yaozong: 1, gaibang: 1 })),
  bQuestion("洛道", "路边捡到一块带血的旧教腰牌。", "前头连着旧路，后头能折回官道把消息递出去。", bOption("顺旧线继续查", "", { ferocity: 1, secrecy: 1 }, { lingxue: 1, tangmen: 1, tiance: 1 }), bOption("先把消息送回", "", { discipline: 1, freedom: 1 }, { yantian: 1, cangyun: 1, duanshi: 1 })),
  bQuestion("枫华谷", "谷边还困着一批伤者。", "断桥未修，官道远却稳，山路近却险。", bOption("走官道慢出谷", "", { ferocity: 1, freedom: 1 }, { tiance: 1, badao: 1, daozong: 1 }), bOption("走山路快出谷", "", { discipline: 2, secrecy: 1 }, { cangyun: 1, tangmen: 1, yantian: 1 })),
  bQuestion("瞿塘峡", "栈道口只够你接一份委托。", "一份押着时限，一份续着后路。", bOption("先护押契物", "", { discipline: 1, faith: 1 }, { duanshi: 1, cangjian: 1, changge: 1 }), bOption("先护续命药", "", { compassion: 2, freedom: 1 }, { wanhua: 1, yaozong: 1, wanling: 1 })),
  bQuestion("昆仑", "雪线上有人来借营。", "风口一合就要封路，帐位只够先给一边。", bOption("先核来路再分帐", "", { secrecy: 1, discipline: 2 }, { tangmen: 1, lingxue: 1, cangyun: 1 }), bOption("先开帐位再核来路", "", { compassion: 2, faith: 1 }, { mingjiao: 1, gaibang: 1, yaozong: 1 })),
  bQuestion("龙门荒漠", "驼队的水囊不够撑到下一口井。", "水要怎么拆，眼下就得定。", bOption("按人数均分水囊", "", { discipline: 2, kinship: 1 }, { cangyun: 1, shaolin: 1, duanshi: 1 }), bOption("按路程重分水囊", "", { ferocity: 1, freedom: 1, compassion: -1 }, { badao: 1, daozong: 1, tiance: 1 })),
  bQuestion("黑戈壁", "一队商旅被本地人拦在营外。", "他们只想借旧商道过沙，却没人肯替他们开口。", bOption("替商旅接本地线", "", { compassion: 1, kinship: 1, culture: 1 }, { mingjiao: 1, changge: 1, gaibang: 1 }), bOption("教商旅另开新线", "", { secrecy: 1, discipline: 1 }, { tangmen: 1, yantian: 1, lingxue: 1 })),
  bQuestion("万花谷", "旧册旁多了一张还没入案的新方。", "它见效更快，但还没过谷中共议。", bOption("记案后先试新方", "", { culture: 1, freedom: 1, compassion: 1 }, { wanhua: 1, yaozong: 1, yantian: 1 }), bOption("共议后再试新方", "", { discipline: 2, compassion: 1 }, { shaolin: 1, chunyang: 1, cangyun: 1 })),
  bQuestion("七秀坊", "开宴前一刻，主舞忽然伤了腕。", "楼船已满，乐声却没停。", bOption("照旧节拍补位", "", { discipline: 1, culture: 1 }, { qixiu: 1, changge: 1, duanshi: 1 }), bOption("临场改拍补位", "", { freedom: 1, compassion: 1, culture: 1 }, { qixiu: 1, wanhua: 1, penglai: 1 })),
  bQuestion("藏剑山庄", "新出炉的名剑只够一名弟子先试。", "剑庐里有人看门序，有人看贴手。", bOption("按门序先试剑", "", { discipline: 2, kinship: 1 }, { cangjian: 1, duanshi: 1, badao: 1 }), bOption("按贴手先试剑", "", { ferocity: 1, freedom: 1 }, { daozong: 1, tiance: 1, gaibang: 1 })),
  bQuestion("纯阳宫", "新弟子想越过入门课直接去论剑坪。", "悟性不差，但次第未满。", bOption("先允越阶习剑", "", { freedom: 1, faith: 1, discipline: -1 }, { penglai: 1, mingjiao: 1, wanhua: 1 }), bOption("仍按次第习剑", "", { discipline: 2, faith: 1 }, { chunyang: 1, shaolin: 1, daozong: 1 })),
  bQuestion("少林寺", "晨钟响过，出勤仍旧稀落。", "是把课次重新立紧，还是把修行交回各院。", bOption("重立晨课课次", "", { discipline: 2, faith: 1 }, { shaolin: 1, chunyang: 1, cangyun: 1 }), bOption("分院各自修课", "", { freedom: 2, culture: 1 }, { wanhua: 1, penglai: 1, gaibang: 1 })),
  bQuestion("天策府", "演武场临时缺一名授课助教。", "你要在完整示范和拆讲关键之间选一种教法。", bOption("先演整套枪路", "", { discipline: 2, ferocity: 1 }, { tiance: 1, daozong: 1, badao: 1 }), bOption("先拆关键用法", "", { culture: 1, compassion: 1, kinship: 1 }, { cangyun: 1, wanhua: 1, changge: 1 })),
  bQuestion("黑龙沼", "旧祭坛边挖出一册残谱。", "一边想辨其用途，一边想先把它封住。", bOption("收谱回看用途", "", { freedom: 1, compassion: 1, faith: -1 }, { wuxian: 1, mingjiao: 1, wanhua: 1 }), bOption("封谱暂不流转", "", { faith: 2, discipline: 1, secrecy: 1 }, { wuxian: 1, yaozong: 1, tangmen: 1 })),
  bQuestion("成都·唐家集", "外门弟子求你开一次核心机关课。", "门外挤满了人，内堡催得也紧。", bOption("开外堂分层讲", "", { culture: 1, secrecy: 1, discipline: 1 }, { tangmen: 1, changge: 1, cangjian: 1 }), bOption("留内堡小范围授", "", { secrecy: 2, discipline: 1 }, { tangmen: 1, lingxue: 1, cangyun: 1 })),
  bQuestion("明教总坛", "分坛礼仪与总坛旧规起了冲撞。", "要么收成一式，要么容它因地而变。", bOption("分坛一体行礼", "", { faith: 2, kinship: 1, discipline: 1 }, { mingjiao: 1, shaolin: 1, cangyun: 1 }), bOption("分坛因地行礼", "", { freedom: 2, compassion: 1 }, { mingjiao: 1, gaibang: 1, penglai: 1 })),
  bQuestion("洞庭湖", "帮中有人借旧名头接私单。", "账怎么拆、线怎么断，要你先定。", bOption("当众核账断单", "", { discipline: 2, faith: 1, kinship: -1 }, { duanshi: 1, shaolin: 1, tangmen: 1 }), bOption("私下拆账分线", "", { secrecy: 2, kinship: 1 }, { gaibang: 1, lingxue: 1, mingjiao: 1 })),
  bQuestion("苍云堡", "补给只够先顾一边。", "前沿营口和全堡冬储，二者只能先保其一。", bOption("先补前沿营口", "", { ferocity: 1, discipline: 1, kinship: -1 }, { tiance: 1, badao: 1, tangmen: 1 }), bOption("先补全堡冬储", "", { kinship: 2, compassion: 1, discipline: 1 }, { cangyun: 1, shaolin: 1, gaibang: 1 })),
  bQuestion("长歌门", "旧谱与新编争了一夜。", "席上只差你一句话决定明日开席用哪一版。", bOption("仍按旧谱开席", "", { culture: 2, discipline: 1 }, { changge: 1, duanshi: 1, qixiu: 1 }), bOption("改用新编开席", "", { freedom: 2, compassion: 1, culture: -1 }, { qixiu: 1, penglai: 1, mingjiao: 1 })),
  bQuestion("霸刀山庄", "旁支弟子想改修另一条刀路。", "庄规没写死，但众人都在看你先站哪边。", bOption("仍守原脉刀路", "", { discipline: 2, faith: 1 }, { badao: 1, duanshi: 1, cangjian: 1 }), bOption("允许转修新路", "", { freedom: 2, compassion: 1 }, { wanhua: 1, penglai: 1, mingjiao: 1 })),
  bQuestion("蓬莱", "你拿到一张还没入册的新海图。", "要不要立刻把它并进现有档册。", bOption("海图暂缓入档", "", { secrecy: 2, freedom: 1, ferocity: 1 }, { penglai: 1, tangmen: 1, lingxue: 1 }), bOption("海图并入公档", "", { culture: 1, compassion: 1, kinship: 1 }, { changge: 1, duanshi: 1, mingjiao: 1 })),
  bQuestion("凌雪阁", "线已经咬住，但证据还差最后一环。", "你得定是先收口，还是先补齐链路。", bOption("先收口再补证", "", { ferocity: 2, discipline: 1 }, { lingxue: 1, badao: 1, tiance: 1 }), bOption("先补证再收口", "", { secrecy: 2, culture: 1, ferocity: -1 }, { yantian: 1, tangmen: 1, duanshi: 1 })),
  bQuestion("衍天宗", "你要交一份趋势判断。", "盘上还有变量，但各方已经等着听话。", bOption("给出单一定盘", "", { discipline: 1, faith: 1, secrecy: 1 }, { yantian: 1, tiance: 1, cangyun: 1 }), bOption("给出区间判断", "", { culture: 2, secrecy: 1, faith: -1 }, { yantian: 1, changge: 1, tangmen: 1 })),
  bQuestion("北天药宗", "药引只够先压一条线。", "要么先救最重的个体，要么先切会蔓开的那条线。", bOption("先压个体重症", "", { compassion: 2, kinship: 1 }, { yaozong: 1, wanhua: 1, wanling: 1 }), bOption("先压群体扩散", "", { discipline: 2, secrecy: 1, compassion: -1 }, { tangmen: 1, cangyun: 1, yantian: 1 })),
  bQuestion("刀宗", "新刀路有一套快成型的简架。", "能更快出招，但不如正架扎实。", bOption("先用简架成招", "", { ferocity: 1, freedom: 1, discipline: -1 }, { daozong: 1, mingjiao: 1, gaibang: 1 }), bOption("先按正架打底", "", { discipline: 2, faith: 1 }, { daozong: 1, chunyang: 1, shaolin: 1 })),
  bQuestion("万灵山庄", "灵兽始终不肯入训。", "要先把契限写清，还是先把相处养熟。", bOption("先立契限", "", { discipline: 2, ferocity: 1, compassion: -1 }, { cangyun: 1, badao: 1, daozong: 1 }), bOption("先养默契", "", { compassion: 2, kinship: 1 }, { wanling: 1, wuxian: 1, qixiu: 1 })),
  bQuestion("南屏山", "一场敏感会面要在山口开席。", "旧礼、座次和现场局势，不可能全都顾到。", bOption("按旧礼制排席", "", { culture: 2, discipline: 1, kinship: 1 }, { duanshi: 1, changge: 1, cangjian: 1 }), bOption("按现场局势排席", "", { freedom: 1, compassion: 1, culture: -1 }, { gaibang: 1, mingjiao: 1, penglai: 1 })),
];

const QUESTION_ECHOES = [
  ["先把份额定清", "先把急缓分清"],
  ["愿意留在场中定分寸", "更愿意把冲突先拆开"],
  ["先把来意看明白", "先把流程守清楚"],
  ["先护住已定下的时序", "先稳住眼前这一摊人"],
  ["会沿着旧线往里查", "会先把消息送回去"],
  ["宁肯走稳一点", "宁肯抢快一点"],
  ["先保已经押下的约", "先保还能续上的路"],
  ["先确认边界", "先腾出缓冲"],
  ["先讲平", "先讲效率"],
  ["愿意替人把线接上", "更愿意替人换条线"],
  ["愿意边试边记", "愿意先把规程补齐"],
  ["先守原来的拍子", "先顺现场改节奏"],
  ["先看次序", "先看手感"],
  ["愿意给天分开口", "更在意根基完整"],
  ["先把课次立住", "先把修行放开"],
  ["更相信整套示范", "更相信拆开讲清"],
  ["想先看明白再定", "想先封住再说"],
  ["愿意把学路分出去", "更愿意把核心收回来"],
  ["更看重一体", "更看重在地"],
  ["会把账摊开", "会把线拆开"],
  ["先补最前面的口子", "先补最长线的底盘"],
  ["更愿意守住旧格", "更愿意把门风往前推"],
  ["更像守住门里的线", "更像给人换条线"],
  ["想先把图握住", "想先把图摊开"],
  ["会先收口", "会先补链"],
  ["更愿意给一个答案", "更愿意给一段范围"],
  ["先压眼前最重的那一点", "先压可能外扩的那一条"],
  ["想先把招成出来", "想先把底架打稳"],
  ["先把界限立明", "先把相处养熟"],
  ["会先让礼序起作用", "会先让现场起作用"],
];

function computeAffinityFrequency() {
  const freq = initializeAffinity();
  QUESTIONS.forEach((question) => {
    question.options.forEach((option) => {
      Object.entries(option.affinity || {}).forEach(([sectId, value]) => {
        freq[sectId] += Math.abs(value);
      });
    });
  });
  return freq;
}

function computeAffinityWeights() {
  const freq = computeAffinityFrequency();
  const values = Object.values(freq).filter((value) => value > 0);
  const median = values.sort((a, b) => a - b)[Math.floor(values.length / 2)] || 1;
  return SECTS.reduce((acc, sect) => {
    const count = Math.max(freq[sect.id] || 1, 1);
    const ratio = median / count;
    acc[sect.id] = clamp(Math.sqrt(ratio), 0.72, 1.42);
    return acc;
  }, {});
}

const AFFINITY_WEIGHTS = computeAffinityWeights();
const RESULT_BLOCKS = [
  { key: "opening", label: "起手", start: 0, end: 6 },
  { key: "pressure", label: "救急", start: 6, end: 12 },
  { key: "inheritance", label: "传承", start: 12, end: 18 },
  { key: "collective", label: "共事", start: 18, end: 24 },
  { key: "verdict", label: "落槌", start: 24, end: 30 },
];

const state = {
  name: "少侠",
  index: 0,
  answers: Array(QUESTIONS.length).fill(null),
  timings: Array(QUESTIONS.length).fill(null),
  revisions: Array(QUESTIONS.length).fill(0),
  questionStartAt: null,
  questionTimerCapMs: 18000,
  result: null,
};

const refs = {
  sectCloud: document.querySelector("#sectCloud"),
  introCard: document.querySelector("#introCard"),
  quizShell: document.querySelector("#quizShell"),
  resultShell: document.querySelector("#resultShell"),
  startForm: document.querySelector("#startForm"),
  playerName: document.querySelector("#playerName"),
  questionStage: document.querySelector("#questionStage"),
  progressLabel: document.querySelector("#progressLabel"),
  timerLabel: document.querySelector("#timerLabel"),
  timerFill: document.querySelector("#timerFill"),
  progressFill: document.querySelector("#progressFill"),
  questionScene: document.querySelector("#questionScene"),
  questionPrompt: document.querySelector("#questionPrompt"),
  questionContext: document.querySelector("#questionContext"),
  optionsGrid: document.querySelector("#optionsGrid"),
  backButton: document.querySelector("#backButton"),
  resultHero: document.querySelector("#resultHero"),
  resultNameplate: document.querySelector("#resultNameplate"),
  resultSectName: document.querySelector("#resultSectName"),
  resultSectTitle: document.querySelector("#resultSectTitle"),
  resultSummary: document.querySelector("#resultSummary"),
  resultLoreExcerpt: document.querySelector("#resultLoreExcerpt"),
  resultTags: document.querySelector("#resultTags"),
  resultVerse: document.querySelector("#resultVerse"),
  resultCrest: document.querySelector("#resultCrest"),
  resultPercent: document.querySelector("#resultPercent"),
  rankingList: document.querySelector("#rankingList"),
  axisGrid: document.querySelector("#axisGrid"),
  personaCopy: document.querySelector("#personaCopy"),
  shadowCopy: document.querySelector("#shadowCopy"),
  reasonList: document.querySelector("#reasonList"),
  resultRole: document.querySelector("#resultRole"),
  swayCopy: document.querySelector("#swayCopy"),
  restartButton: document.querySelector("#restartButton"),
  radarChart: document.querySelector("#radarChart"),
};

let timerTicker = null;

function startQuestionTimer() {
  if (timerTicker) {
    clearInterval(timerTicker);
  }
  timerTicker = setInterval(() => {
    if (!state.questionStartAt) {
      return;
    }
    const elapsedMs = performance.now() - state.questionStartAt;
    const elapsed = elapsedMs / 1000;
    refs.timerLabel.textContent = `本题用时 ${elapsed.toFixed(1)}s`;
    refs.timerFill.style.width = `${Math.min(100, (elapsedMs / state.questionTimerCapMs) * 100)}%`;
  }, 100);
}

function stopQuestionTimer() {
  if (timerTicker) {
    clearInterval(timerTicker);
    timerTicker = null;
  }
}

function renderSectCloud() {
  refs.sectCloud.innerHTML = "";
  SECTS.forEach((sect) => {
    const chip = document.createElement("span");
    chip.className = "sect-chip";
    chip.textContent = sect.name;
    refs.sectCloud.append(chip);
  });
}

function chineseOrder(index) {
  const names = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"];
  return names[index] || `${index + 1}`;
}

function showQuiz() {
  refs.introCard.classList.add("hidden");
  refs.resultShell.classList.add("hidden");
  refs.quizShell.classList.remove("hidden");
}

function showResult() {
  stopQuestionTimer();
  refs.quizShell.classList.add("hidden");
  refs.resultShell.classList.remove("hidden");
}

function setAnswer(questionIndex, optionIndex) {
  stopQuestionTimer();
  const previous = state.answers[questionIndex];
  if (previous !== null && previous !== optionIndex) {
    state.revisions[questionIndex] += 1;
  }

  const elapsedMs = Math.max(200, performance.now() - (state.questionStartAt || performance.now()));
  state.timings[questionIndex] = elapsedMs;
  state.answers[questionIndex] = optionIndex;

  if (questionIndex < QUESTIONS.length - 1) {
    state.index = questionIndex + 1;
    renderQuestion();
    return;
  }

  state.result = calculateResult();
  renderResult();
}

function renderQuestion() {
  const question = QUESTIONS[state.index];
  refs.questionStage.textContent = question.stage || `第${state.index + 1}程`;
  refs.progressLabel.textContent = `${String(state.index + 1).padStart(2, "0")} / ${QUESTIONS.length}`;
  refs.progressFill.style.width = `${((state.index + 1) / QUESTIONS.length) * 100}%`;
  refs.timerLabel.textContent = "本题用时 0.0s";
  refs.timerFill.style.width = "0%";
  refs.questionScene.textContent = question.scene;
  refs.questionPrompt.textContent = question.prompt;
  refs.questionContext.textContent = question.context;
  refs.optionsGrid.innerHTML = "";
  state.questionStartAt = performance.now();
  startQuestionTimer();

  question.options.forEach((option, optionIndex) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-button";
    button.innerHTML = `
      <span class="option-index">${optionIndex + 1}</span>
      <span class="option-text">${option.title}</span>
    `;
    button.addEventListener("click", () => setAnswer(state.index, optionIndex));
    refs.optionsGrid.append(button);
  });

  refs.backButton.disabled = state.index === 0;
  refs.quizShell.scrollIntoView({ block: "start" });
}

function initializeVector() {
  return AXES.reduce((acc, axis) => {
    acc[axis.key] = 0;
    return acc;
  }, {});
}

function initializeAffinity() {
  return SECTS.reduce((acc, sect) => {
    acc[sect.id] = 0;
    return acc;
  }, {});
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function computeAxisBounds() {
  const bounds = initializeVector();
  AXES.forEach((axis) => {
    bounds[axis.key] = { min: 0, max: 0 };
  });

  QUESTIONS.forEach((question) => {
    AXES.forEach((axis) => {
      const values = question.options.map((option) => option.axes[axis.key] || 0);
      bounds[axis.key].min += Math.min(...values);
      bounds[axis.key].max += Math.max(...values);
    });
  });

  return bounds;
}

const AXIS_BOUNDS = computeAxisBounds();

function normalizeAxisScore(raw, axisKey) {
  const bound = AXIS_BOUNDS[axisKey];
  const midpoint = (bound.max + bound.min) / 2;
  const halfRange = Math.max((bound.max - bound.min) / 2, 1);
  const centered = (raw - midpoint) / halfRange;
  return clamp(Math.tanh(centered * 1.35) * 5, -5, 5);
}

function axisToPercent(value) {
  return Math.round(((value + 5) / 10) * 100);
}

function timingWeight(ms) {
  const sec = clamp((ms || 9000) / 1000, 0.5, 45);
  const fastBoost = sec <= 4 ? 0.2 : 0;
  const slowPenalty = sec > 12 ? Math.min(0.28, (sec - 12) * 0.012) : 0;
  return clamp(1 + fastBoost - slowPenalty, 0.72, 1.22);
}

function questionSway(ms, revisions) {
  const sec = clamp((ms || 9000) / 1000, 0.5, 45);
  const hesitationFactor = clamp((sec - 1.6) / 7.4, 0, 1);
  const revisionFactor = clamp(revisions * 0.42, 0, 1);
  return clamp(hesitationFactor * 0.72 + revisionFactor * 0.28, 0, 1);
}

function hashString(input) {
  let hash = 2166136261;
  for (let index = 0; index < input.length; index += 1) {
    hash ^= input.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function axisSideLabel(axis) {
  return axis.value >= 0 ? axis.label : axis.opposite;
}

function pickBySeed(seed, items, offset = 0) {
  return items[(seed + offset) % items.length];
}

function buildChoiceEntries() {
  return QUESTIONS.map((question, questionIndex) => {
    const optionIndex = state.answers[questionIndex] ?? 0;
    const option = question.options[optionIndex];
    const timing = state.timings[questionIndex] || 0;
    const revisions = state.revisions[questionIndex] || 0;
    return {
      questionIndex,
      scene: question.scene,
      prompt: question.prompt,
      optionIndex,
      optionTitle: option.title,
      axes: option.axes,
      echo: QUESTION_ECHOES[questionIndex]?.[optionIndex] || option.title,
      timing,
      revisions,
      sway: questionSway(timing, revisions),
    };
  });
}

function buildNarrativeSeed(entries, topId = "") {
  const answerPattern = entries.map((entry) => entry.optionIndex).join("");
  const timingPattern = entries.map((entry) => Math.min(6, Math.floor((entry.timing || 0) / 1800))).join("");
  const revisionPattern = entries.map((entry) => Math.min(3, entry.revisions || 0)).join("");
  return hashString(`${topId}|${answerPattern}|${timingPattern}|${revisionPattern}`);
}

function buildSegmentLead(seed, options, offset = 0) {
  return pickBySeed(seed, options, offset);
}

function buildAxisMicroTrait(axis, seed, offset = 0) {
  const banks = {
    discipline: [
      ["先把次序立清", "不愿先被成规锁死"],
      ["先把边界收稳", "先给活路和变通留口"],
      ["更信训练与框架", "更信现场判断与活手"],
    ],
    compassion: [
      ["会先照看波动最大的一端", "会先把代价切清楚"],
      ["会先留出承接余地", "会先把损耗和风险压实"],
      ["对别人的受力很敏感", "对结果和后果更敏感"],
    ],
    freedom: [
      ["愿意让变数继续存在", "更愿意把长线先扎稳"],
      ["会给新路和试错留口", "会优先确认落点与归处"],
      ["需要空间才能看清方向", "更信守住一处后的复利"],
    ],
    ferocity: [
      ["判断一成就会推进", "会给局面多留半步观察"],
      ["更习惯把事情往前推", "更习惯先等时机自己浮上来"],
      ["出手时不爱拖延", "出手前很重分寸和留白"],
    ],
    secrecy: [
      ["喜欢把手段先藏住", "倾向把态度先摆明"],
      ["会先留后手再动作", "会先让人知道你的边界在哪"],
      ["能接受不被立刻看懂", "更愿意把话放在明面上"],
    ],
    culture: [
      ["重视体面、表达和方式", "更看有没有用和能不能落地"],
      ["会把气口和章法一起考虑", "会把效率和结果放在前头"],
      ["相信表达本身会改变局面", "相信能成事比好不好看更重要"],
    ],
    faith: [
      ["愿意替相信的东西多扛一步", "会先按局面反复校准"],
      ["判断里带着明确的内在标准", "判断里带着很强的现实修正"],
      ["一旦认准就不轻易后退", "除非条件足够明确否则不轻易押注"],
    ],
    kinship: [
      ["会先顾共同体有没有被托住", "更能把关系和事情分开"],
      ["天然会替自己人兜后果", "天然会把边界写得更清楚"],
      ["做决定时会想到同路人的承受", "做决定时更少被关系牵着走"],
    ],
  };
  const variants = banks[axis.key] || [[axis.positive, axis.negative]];
  const [positive, negative] = pickBySeed(seed, variants, offset);
  return axis.value >= 0 ? positive : negative;
}

function buildBlockProfiles(choiceEntries) {
  return RESULT_BLOCKS.map((block) => {
    const entries = choiceEntries.slice(block.start, block.end);
    const vector = initializeVector();
    entries.forEach((entry) => {
      Object.entries(entry.axes || {}).forEach(([key, value]) => {
        vector[key] += value * timingWeight(entry.timing);
      });
    });

    const rankedAxes = AXES.map((axis) => ({
      ...axis,
      value: vector[axis.key] || 0,
      strength: Math.abs(vector[axis.key] || 0),
    })).sort((left, right) => right.strength - left.strength);

    return {
      ...block,
      entries,
      dominant: rankedAxes[0],
      secondary: rankedAxes[1],
      vector,
    };
  });
}

function buildBlockLine(block, seed, offset = 0) {
  const lead = buildSegmentLead(
    seed,
    [
      `${block.label}上，你`,
      `放在${block.label}这组选择里，你`,
      `到了${block.label}这一层，你`,
    ],
    offset,
  );
  const main = buildAxisMicroTrait(block.dominant, seed, offset + 1);
  const sub = block.secondary && block.secondary.strength > 0.85 ? `，同时也${buildAxisMicroTrait(block.secondary, seed, offset + 2)}` : "";
  return `${lead}${main}${sub}`;
}

function buildSectFitCopy(result) {
  const topAxes = result.dominantAxes.slice(0, 2).map(axisSideLabel).join(" / ");
  const block = result.blockProfiles[2];
  return `${result.top.name}适合你的地方，在于它能把「${topAxes}」收进一套长期门风里。尤其落到${block.label}这一层时，你的取法和这门派最同路。`;
}

function optionSectFit(option, sect) {
  const axisFit = AXES.reduce((sum, axis) => {
    const choice = option.axes[axis.key] || 0;
    return sum + choice * sect.profile[axis.key];
  }, 0);
  const affinityFit = (option.affinity?.[sect.id] || 0) * 3.1;
  return axisFit + affinityFit;
}

function buildTopNarrative(result) {
  const first = result.blockProfiles[0];
  const second = result.blockProfiles[1];
  const opener = buildSegmentLead(
    result.narrativeSeed,
    [
      "你落到这个门派，不是因为表面气质像它，而是因为你的起手和它相合：",
      "真正把你带到这里的，是你处理局面时那种稳定的底盘：",
      "这份答卷最先露出来的，不是偏好，而是你的做事路数：",
    ],
    3,
  );
  return `${opener}${buildBlockLine(first, result.narrativeSeed, 5)}；${buildBlockLine(second, result.narrativeSeed, 8)}。`;
}

function calculateResult() {
  const rawAxes = initializeVector();
  const affinity = initializeAffinity();
  let swayAccumulator = 0;
  const choiceEntries = buildChoiceEntries();

  state.answers.forEach((optionIndex, questionIndex) => {
    const option = QUESTIONS[questionIndex].options[optionIndex];
    const w = timingWeight(state.timings[questionIndex]);
    const questionSwayScore = questionSway(state.timings[questionIndex], state.revisions[questionIndex]);
    swayAccumulator += questionSwayScore;
    Object.entries(option.axes).forEach(([key, value]) => {
      rawAxes[key] += value * w;
    });
    Object.entries(option.affinity || {}).forEach(([key, value]) => {
      const weight = AFFINITY_WEIGHTS[key] || 1;
      affinity[key] = (affinity[key] || 0) + value * w * weight;
    });
  });

  const normalizedAxes = AXES.reduce((acc, axis) => {
    acc[axis.key] = normalizeAxisScore(rawAxes[axis.key], axis.key);
    return acc;
  }, {});

  const dominantAxes = AXES.map((axis) => ({
    ...axis,
    value: normalizedAxes[axis.key],
    strength: Math.abs(normalizedAxes[axis.key]),
  })).sort((a, b) => b.strength - a.strength);

  const swayIndex = clamp(swayAccumulator / QUESTIONS.length, 0, 1);

  const ranked = SECTS.map((sect) => {
    const squaredDiff = AXES.reduce((sum, axis) => {
      const userValue = normalizedAxes[axis.key];
      const sectValue = sect.profile[axis.key];
      return sum + (userValue - sectValue) ** 2;
    }, 0);

    const distance = Math.sqrt(squaredDiff / AXES.length);
    const baseScore = 108 - distance * 13.8;

    const dominantAxisBoost = dominantAxes.slice(0, 3).reduce((sum, axis) => {
      const sectValue = sect.profile[axis.key];
      const sameSide = Math.sign(axis.value) === Math.sign(sectValue);
      const userWeight = axis.strength / 5;
      if (sameSide && Math.abs(sectValue) >= 2) {
        return sum + 2.1 * userWeight;
      }
      if (!sameSide && axis.strength >= 2.4 && Math.abs(sectValue) >= 2) {
        return sum - 1.9 * userWeight;
      }
      return sum;
    }, 0);

    const alignmentMatch = QUESTIONS.reduce((count, question, qIndex) => {
      const leftFit = optionSectFit(question.options[0], sect);
      const rightFit = optionSectFit(question.options[1], sect);
      const preferred = leftFit >= rightFit ? 0 : 1;
      return count + (state.answers[qIndex] === preferred ? 1 : 0);
    }, 0);
    const alignmentRate = alignmentMatch / QUESTIONS.length;
    const alignmentBoost = (alignmentRate - 0.5) * 18;
    const swayPenalty = swayIndex * 4.2;
    const profileBoost = clamp((sect.profileMagnitude - 2.05) * 1.1, -1.2, 2.2);
    const totalScore = baseScore + affinity[sect.id] * 1.72 + dominantAxisBoost + alignmentBoost + profileBoost - swayPenalty;

    return { ...sect, score: totalScore, alignmentRate };
  }).sort((a, b) => b.score - a.score);

  const topScore = ranked[0].score;
  const secondScore = ranked[1] ? ranked[1].score : topScore - 1;
  const scoreGap = Math.max(topScore - secondScore, 0.4);
  const axisIntensity = dominantAxes.slice(0, 3).reduce((sum, axis) => sum + axis.strength, 0) / 3;
  const topPercent = clamp(Math.round(64 + scoreGap * 5.3 + axisIntensity * 4.4), 68, 98);

  ranked.forEach((item, index) => {
    const gap = topScore - item.score;
    const percent = clamp(Math.round(topPercent - gap * 4.6 - index * 1.3), 35, topPercent - (index === 0 ? 0 : 2));
    item.percent = index === 0 ? topPercent : percent;
  });

  const narrativeSeed = buildNarrativeSeed(choiceEntries, ranked[0].id);
  const blockProfiles = buildBlockProfiles(choiceEntries);

  return {
    normalizedAxes,
    rawAxes,
    dominantAxes,
    swayIndex,
    topAlignmentRate: ranked[0].alignmentRate,
    topNarrative: "",
    choiceEntries,
    blockProfiles,
    narrativeSeed,
    ranked,
    top: ranked[0],
  };
}

function describeAxis(axis, value) {
  return {
    label: value >= 0 ? axis.label : axis.opposite,
    value: axisToPercent(value),
    copy: value >= 0 ? axis.positive : axis.negative,
  };
}

function buildPersonaCopy(result) {
  const first = result.dominantAxes[0];
  const second = result.dominantAxes[1];
  const third = result.dominantAxes[2];
  const middleBlocks = result.blockProfiles.slice(1, 3);
  const opener = buildSegmentLead(
    result.narrativeSeed,
    [
      "放到人格底色上看，你不是单轴的人：",
      "你的性格不像单一标签，更像几根绳拧在一起：",
      "如果把这份答卷抽成人格结构，大致会是这样：",
    ],
    7,
  );

  return `${opener}你会把「${axisSideLabel(first)}」「${axisSideLabel(second)}」和「${axisSideLabel(third)}」放在同一次判断里。${buildBlockLine(middleBlocks[0], result.narrativeSeed, 11)}；${buildBlockLine(middleBlocks[1], result.narrativeSeed, 14)}。`;
}

function buildShadowCopy(result) {
  const major = result.dominantAxes[0];
  const riskCopy = major.value >= 0 ? major.positiveRisk : major.negativeRisk;
  const tendency = axisSideLabel(major);
  const sharpestBlock = [...result.blockProfiles].sort((left, right) => right.dominant.strength - left.dominant.strength)[0];
  const opener = buildSegmentLead(
    result.narrativeSeed,
    [
      "你最容易走得过头的地方，也很清楚：",
      "你的锋处和代价常常是同一处：",
      "这份答卷里最需要自知的，不是优点，而是容易失手的那一面：",
    ],
    13,
  );

  return `${opener}当你把「${tendency}」推到最前面时，往往会在${sharpestBlock.label}这一层显得特别明显。${riskCopy}`;
}

function buildResultVerse(result) {
  const lastTwoBlocks = result.blockProfiles.slice(3, 5);
  const opener = buildSegmentLead(
    result.narrativeSeed,
    [
      "门中批注：",
      "门中批注：",
      "门中批注：",
    ],
    19,
  );

  return `${opener}${buildBlockLine(lastTwoBlocks[0], result.narrativeSeed, 23)}；${buildBlockLine(lastTwoBlocks[1], result.narrativeSeed, 26)}。${buildSectFitCopy(result)}`;
}

function buildLoreExcerpt(result) {
  const loreBase = result.top.loreLine || `你的取舍和${result.top.name}的长期门风是同一条线。`;
  const stableBlocks = [...result.blockProfiles].sort((left, right) => right.dominant.strength - left.dominant.strength).slice(0, 2);
  const opener = buildSegmentLead(
    result.narrativeSeed,
    [
      "门派卷宗摘记：",
      "门派卷宗摘记：",
      "门派卷宗摘记：",
    ],
    29,
  );

  return `${opener}${loreBase} 你最稳定的两层做法，分别是：${buildBlockLine(stableBlocks[0], result.narrativeSeed, 31)}；${buildBlockLine(stableBlocks[1], result.narrativeSeed, 34)}。`;
}

function buildDecisiveMoments(result) {
  return [...result.blockProfiles]
    .sort((left, right) => right.dominant.strength - left.dominant.strength)
    .slice(0, 2);
}

function buildDynamicReasonItems(result) {
  const decisive = buildDecisiveMoments(result);
  const hesitant = [...result.choiceEntries].sort((left, right) => {
    const swayGap = right.sway - left.sway;
    if (Math.abs(swayGap) > 0.001) {
      return swayGap;
    }
    return (right.timing || 0) - (left.timing || 0);
  })[0];

  const items = [];

  if (decisive.length) {
    items.push({
      title: `${result.top.name} · 稳定层`,
      text: decisive.map((block) => `${block.label}上，你${buildAxisMicroTrait(block.dominant, result.narrativeSeed, block.start)}`).join("；"),
    });
  }

  if (hesitant) {
    items.push({
      title: "答卷节奏",
      text: `你停顿最长的一题，最后仍然选了「${hesitant.optionTitle}」。这说明你不是反复横跳，而是会把代价想全后再落子。`,
    });
  }

  return items;
}

function applyTheme(sect) {
  document.documentElement.style.setProperty("--accent", sect.palette.accent);
  document.documentElement.style.setProperty("--accent-soft", sect.palette.accentSoft);
  document.documentElement.style.setProperty("--accent-strong", sect.palette.accentStrong);
}

function renderResult() {
  const result = state.result;
  const top = result.top;
  result.topNarrative = buildTopNarrative(result);

  applyTheme(top);
  showResult();

  refs.resultNameplate.textContent = `${state.name || "少侠"} 的归属门派`;
  refs.resultSectName.textContent = top.name;
  refs.resultSectTitle.textContent = top.title;
  refs.resultSummary.textContent = `${top.summary} ${result.topNarrative}`;
  refs.resultLoreExcerpt.textContent = buildLoreExcerpt(result);
  refs.resultVerse.textContent = buildResultVerse(result);
  refs.resultCrest.textContent = top.crest;
  refs.resultPercent.textContent = `${top.percent}%`;
  refs.resultRole.textContent = top.role;
  refs.swayCopy.textContent = `摇摆度 ${Math.round(result.swayIndex * 100)}：依据停顿时长与改答次数估算，数值越高，表示你在同类冲突中更容易改换手法。`;
  refs.personaCopy.textContent = buildPersonaCopy(result);
  refs.shadowCopy.textContent = buildShadowCopy(result);

  refs.resultTags.innerHTML = "";
  top.tags.forEach((tag) => {
    const node = document.createElement("span");
    node.className = "result-tag";
    node.textContent = tag;
    refs.resultTags.append(node);
  });

  refs.rankingList.innerHTML = "";
  result.ranked.slice(0, 3).forEach((sect, index) => {
    const item = document.createElement("div");
    item.className = "ranking-item";
    item.innerHTML = `
      <span class="ranking-order">${index + 1}</span>
      <strong>${sect.name}</strong>
      <span>${sect.percent}%</span>
    `;
    refs.rankingList.append(item);
  });

  refs.reasonList.innerHTML = "";
  buildDynamicReasonItems(result).forEach((reason) => {
    const item = document.createElement("div");
    item.className = "reason-item";
    item.innerHTML = `<strong>${reason.title}</strong><span>${reason.text}</span>`;
    refs.reasonList.append(item);
  });
  top.reasons.forEach((reason) => {
    const item = document.createElement("div");
    item.className = "reason-item";
    item.innerHTML = `<strong>${top.name}</strong><span>${reason}</span>`;
    refs.reasonList.append(item);
  });

  refs.axisGrid.innerHTML = "";
  AXES.forEach((axis) => {
    const copy = describeAxis(axis, result.normalizedAxes[axis.key]);
    const pill = document.createElement("div");
    pill.className = "axis-pill";
    pill.innerHTML = `<strong>${copy.label} · ${copy.value}</strong><span>${copy.copy}</span>`;
    refs.axisGrid.append(pill);
  });

  drawRadar(result.normalizedAxes);
  refs.resultShell.scrollIntoView({ behavior: "smooth", block: "start" });
}

function drawRadar(values) {
  const canvas = refs.radarChart;
  const rect = canvas.getBoundingClientRect();
  const size = Math.max(280, Math.min(rect.width || 420, 420));
  const dpr = window.devicePixelRatio || 1;
  canvas.width = size * dpr;
  canvas.height = size * dpr;
  canvas.style.width = `${size}px`;
  canvas.style.height = `${size}px`;

  const ctx = canvas.getContext("2d");
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, size, size);

  const center = size / 2;
  const radius = size * 0.31;

  ctx.save();
  ctx.translate(center, center);

  for (let ring = 1; ring <= 4; ring += 1) {
    const r = (radius * ring) / 4;
    ctx.beginPath();
    AXES.forEach((axis, index) => {
      const angle = (Math.PI * 2 * index) / AXES.length - Math.PI / 2;
      const x = Math.cos(angle) * r;
      const y = Math.sin(angle) * r;
      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.closePath();
    ctx.strokeStyle = "rgba(56, 42, 27, 0.12)";
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  AXES.forEach((axis, index) => {
    const angle = (Math.PI * 2 * index) / AXES.length - Math.PI / 2;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(x, y);
    ctx.strokeStyle = "rgba(56, 42, 27, 0.1)";
    ctx.stroke();

    const labelRadius = radius + 26;
    const lx = Math.cos(angle) * labelRadius;
    const ly = Math.sin(angle) * labelRadius;
    ctx.font = `600 ${Math.max(12, size * 0.034)}px "Songti SC"`;
    ctx.fillStyle = "rgba(31, 33, 34, 0.82)";
    ctx.textAlign = lx > 10 ? "left" : lx < -10 ? "right" : "center";
    ctx.textBaseline = ly > 10 ? "top" : ly < -10 ? "bottom" : "middle";
    ctx.fillText(axis.label, lx, ly);
  });

  ctx.beginPath();
  AXES.forEach((axis, index) => {
    const angle = (Math.PI * 2 * index) / AXES.length - Math.PI / 2;
    const ratio = (values[axis.key] + 5) / 10;
    const x = Math.cos(angle) * radius * ratio;
    const y = Math.sin(angle) * radius * ratio;
    if (index === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  });
  ctx.closePath();
  ctx.fillStyle = "rgba(138, 91, 70, 0.22)";
  ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim();
  ctx.lineWidth = 2.5;
  ctx.fill();
  ctx.stroke();

  AXES.forEach((axis, index) => {
    const angle = (Math.PI * 2 * index) / AXES.length - Math.PI / 2;
    const ratio = (values[axis.key] + 5) / 10;
    const x = Math.cos(angle) * radius * ratio;
    const y = Math.sin(angle) * radius * ratio;
    ctx.beginPath();
    ctx.arc(x, y, 4.5, 0, Math.PI * 2);
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--accent-strong").trim();
    ctx.fill();
  });

  ctx.restore();
}

function resetQuiz() {
  stopQuestionTimer();
  state.index = 0;
  state.answers = Array(QUESTIONS.length).fill(null);
  state.timings = Array(QUESTIONS.length).fill(null);
  state.revisions = Array(QUESTIONS.length).fill(0);
  state.questionStartAt = null;
  state.result = null;
  refs.resultShell.classList.add("hidden");
  refs.quizShell.classList.add("hidden");
  refs.introCard.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

refs.startForm.addEventListener("submit", (event) => {
  event.preventDefault();
  state.name = refs.playerName.value.trim() || "少侠";
  showQuiz();
  renderQuestion();
});

refs.backButton.addEventListener("click", () => {
  if (state.index === 0) {
    return;
  }
  state.index -= 1;
  renderQuestion();
});

refs.restartButton.addEventListener("click", resetQuiz);

window.addEventListener("resize", () => {
  if (state.result) {
    drawRadar(state.result.normalizedAxes);
  }
});

async function bootstrap() {
  const loreProfiles = await loadLoreProfiles();
  enrichSectsWithLore(loreProfiles);
  renderSectCloud();
}

bootstrap();
