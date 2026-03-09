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

const QUESTIONS = [
  {
    stage: "第一程",
    scene: "夜雨驿站",
    prompt: "风雨里同时来了一个负伤陌生人，和一封催你即刻上路的急令。",
    context:
      "驿灯只够照亮半间屋，马也只剩一匹。你知道拖延可能坏事，但把人关在门外，大概率也是一条命。",
    options: [
      {
        title: "先把人接进来",
        text: "让对方避雨止血，哪怕明晨得自己去解释误时。",
        axes: { compassion: 2, faith: 1, freedom: 1, kinship: 1 },
        affinity: { qixiu: 1, wanhua: 1, wanling: 1, yaozong: 1 },
      },
      {
        title: "先验明真假",
        text: "不急着选边，先查伤势、口供与脚印，看谁在说实话。",
        axes: { discipline: 1, secrecy: 1, culture: 1 },
        affinity: { tangmen: 1, yantian: 1, changge: 1 },
      },
      {
        title: "急令优先",
        text: "先把命令送到该到的人手里，再调头回来处理这里。",
        axes: { discipline: 2, ferocity: 1, kinship: 1 },
        affinity: { tiance: 1, cangyun: 1, lingxue: 1 },
      },
      {
        title: "两边都按住",
        text: "不让陌生人乱走，也不立刻离开，先把这个夜守过去。",
        axes: { secrecy: 2, discipline: 1, ferocity: 1 },
        affinity: { lingxue: 1, tangmen: 1, badao: 1 },
      },
    ],
  },
  {
    stage: "第二程",
    scene: "残卷入手",
    prompt: "你得了一门只剩半篇的绝学，继续练下去可能大成，也可能彻底走偏。",
    context:
      "所有人都说它值钱，只有你知道，真正麻烦的是它会把人练成什么样。",
    options: [
      {
        title: "先修心，再碰锋",
        text: "宁可进展慢一点，也要确保自己不被这门技艺反过来牵着走。",
        axes: { discipline: 2, faith: 1, secrecy: 1 },
        affinity: { chunyang: 1, shaolin: 1, daozong: 1 },
      },
      {
        title: "拆开来重读",
        text: "把它当成一道题，逐句辨义，缺的地方自己补到能自圆其说。",
        axes: { culture: 2, discipline: 1, freedom: 1 },
        affinity: { wanhua: 1, yantian: 1, changge: 1 },
      },
      {
        title: "直接拿去试",
        text: "真正的刀理拳理，终究要在实战和身体里见真章。",
        axes: { ferocity: 2, freedom: 1, faith: 1 },
        affinity: { tiance: 1, badao: 1, daozong: 1, gaibang: 1 },
      },
      {
        title: "向天地借答案",
        text: "去山水、草木、虫兽和风里找印证，让身体慢慢和它磨合。",
        axes: { freedom: 2, compassion: 1, secrecy: 1 },
        affinity: { wuxian: 1, penglai: 1, wanling: 1, yaozong: 1 },
      },
    ],
  },
  {
    stage: "第三程",
    scene: "闹市当场",
    prompt: "有人在众目睽睽下羞辱你的同伴，话里带刺，专挑旧伤口揭。",
    context:
      "动手很容易，收场很难；咽下去很容易，之后却未必还看得起自己。",
    options: [
      {
        title: "用更漂亮的话顶回去",
        text: "不必先失礼，但也绝不让对方占尽气势。",
        axes: { culture: 2, ferocity: 1 },
        affinity: { qixiu: 1, changge: 1, duanshi: 1 },
      },
      {
        title: "记住这笔账",
        text: "此刻不翻桌，但会让对方在最该疼的地方明白代价。",
        axes: { secrecy: 2, discipline: 1 },
        affinity: { tangmen: 1, lingxue: 1, badao: 1 },
      },
      {
        title: "直接挡上去",
        text: "场面要乱也先从你这里乱，别让话继续往同伴身上落。",
        axes: { ferocity: 2, kinship: 1 },
        affinity: { tiance: 1, cangyun: 1, gaibang: 1 },
      },
      {
        title: "先看人，再看话",
        text: "你会先判断对方是不是在借恶意遮自己的伤，再决定怎么处置。",
        axes: { compassion: 2, faith: 1 },
        affinity: { shaolin: 1, wanhua: 1, yaozong: 1 },
      },
    ],
  },
  {
    stage: "第四程",
    scene: "瘴村急病",
    prompt: "一座边村忽然爆出疫病，药材、人手和时间都不够。",
    context:
      "你不能什么都救，但你选的优先级会决定很多人的命。",
    options: [
      {
        title: "先保最弱的人",
        text: "老人、孩子、重症优先，先把最容易断掉的线接上。",
        axes: { compassion: 2, faith: 1 },
        affinity: { shaolin: 1, yaozong: 1, wanhua: 1 },
      },
      {
        title: "先立秩序",
        text: "分区、轮值、隔离、配给，先让混乱停下来。",
        axes: { discipline: 2, kinship: 1 },
        affinity: { cangyun: 1, tiance: 1, shaolin: 1 },
      },
      {
        title: "先追病源",
        text: "水、虫、伤口、食物，全都得回头查，堵不住源头只是拖。",
        axes: { secrecy: 1, culture: 1, compassion: 1, freedom: 1 },
        affinity: { wuxian: 1, yantian: 1, tangmen: 1, yaozong: 1 },
      },
      {
        title: "先教他们自救",
        text: "你会留下一套能自己运转的方法，而不只留一时的援手。",
        axes: { freedom: 2, culture: 1, compassion: 1 },
        affinity: { wanhua: 1, chunyang: 1, gaibang: 1 },
      },
    ],
  },
  {
    stage: "第五程",
    scene: "旧友失信",
    prompt: "一个你很看重的人背叛了约定，但你知道他背后另有苦衷。",
    context:
      "事情已经坏了，接下来考验的是你如何定义‘自己人’与‘底线’。",
    options: [
      {
        title: "先把人保下来",
        text: "局后再算账，但在眼下你仍会站在他身前。",
        axes: { kinship: 2, compassion: 1 },
        affinity: { wanhua: 1, qixiu: 1, mingjiao: 1, wanling: 1 },
      },
      {
        title: "可以理解，不代表不罚",
        text: "你会给理由，但不给第二次伤人的机会。",
        axes: { discipline: 1, faith: 1, ferocity: 1 },
        affinity: { cangjian: 1, duanshi: 1, shaolin: 1 },
      },
      {
        title: "任务先于情分",
        text: "先把该做的事做完，再谈此人还值不值得留。",
        axes: { secrecy: 2, ferocity: 1, discipline: 1 },
        affinity: { lingxue: 1, tangmen: 1, badao: 1 },
      },
      {
        title: "逼他把话说清",
        text: "你不急着判他死罪，想先看这份苦衷值不值得替他说话。",
        axes: { freedom: 1, culture: 1, compassion: 1, faith: 1 },
        affinity: { chunyang: 1, changge: 1, yantian: 1 },
      },
    ],
  },
  {
    stage: "第六程",
    scene: "十年孤守",
    prompt: "有人要你去守一处不见天日的要地，十年之内不得成名，也很难离开。",
    context:
      "这不是没意义的苦差，只是意义大多不会落在你自己身上。",
    options: [
      {
        title: "我守",
        text: "只要这件事确实重要，名字不写在自己身上也无妨。",
        axes: { faith: 1, discipline: 2, kinship: 1 },
        affinity: { cangyun: 1, lingxue: 1, shaolin: 1 },
      },
      {
        title: "我守，但为人守",
        text: "如果它能护住一城一地，我认这个苦。",
        axes: { compassion: 1, ferocity: 1, kinship: 1, faith: 1 },
        affinity: { tiance: 1, mingjiao: 1, wanling: 1 },
      },
      {
        title: "我不适合被钉死",
        text: "你更适合在流动中发挥作用，守一处会先把你守坏。",
        axes: { freedom: 2, culture: 1 },
        affinity: { penglai: 1, gaibang: 1, wanhua: 1 },
      },
      {
        title: "换一种守法",
        text: "你会把这件事改成一个能被后人接力的系统，而不是押一人十年。",
        axes: { secrecy: 1, discipline: 1, culture: 1, kinship: 1 },
        affinity: { changge: 1, tangmen: 1, chunyang: 1, yantian: 1 },
      },
    ],
  },
  {
    stage: "第七程",
    scene: "江湖名声",
    prompt: "如果终有一天你会被人记住，你最希望别人因为什么提起你？",
    context:
      "名声不是目的，但它会暴露你真正把什么看得最重。",
    options: [
      {
        title: "最难时靠得住",
        text: "不是最耀眼，但别人最想把命交给你。",
        axes: { compassion: 2, kinship: 1 },
        affinity: { shaolin: 1, cangyun: 1, wanhua: 1, yaozong: 1 },
      },
      {
        title: "一招一意都难忘",
        text: "你希望技艺、姿态和锋芒能留下长久回响。",
        axes: { ferocity: 2, culture: 1 },
        affinity: { cangjian: 1, qixiu: 1, badao: 1, daozong: 1 },
      },
      {
        title: "把那条线守住了",
        text: "你想留下的是职责被完成，而不是个人传奇。",
        axes: { discipline: 2, faith: 1 },
        affinity: { tiance: 1, cangyun: 1, chunyang: 1 },
      },
      {
        title: "比别人更早看懂局",
        text: "你希望自己是那个看见走势、挪开祸根的人。",
        axes: { secrecy: 1, culture: 1, faith: 1 },
        affinity: { yantian: 1, tangmen: 1, changge: 1, lingxue: 1 },
      },
    ],
  },
  {
    stage: "第八程",
    scene: "失控坐骑",
    prompt: "山路上，一头受惊又带伤的猛兽朝人群冲来。",
    context:
      "它此刻很危险，但你也看得出它不是纯粹在发疯。",
    options: [
      {
        title: "先稳住它",
        text: "用呼吸、站位和缓动作先把它从狂态里带出来。",
        axes: { compassion: 1, freedom: 1, culture: 1 },
        affinity: { wanling: 1, wuxian: 1, penglai: 1 },
      },
      {
        title: "先打停",
        text: "在人伤更多之前，必须以最快速度把它压制住。",
        axes: { ferocity: 2, discipline: 1 },
        affinity: { tiance: 1, badao: 1, daozong: 1 },
      },
      {
        title: "先看伤和毒",
        text: "也许不是兽性失控，而是别的东西正在驱使它。",
        axes: { compassion: 1, secrecy: 1, culture: 1 },
        affinity: { yaozong: 1, wanhua: 1, tangmen: 1, wuxian: 1 },
      },
      {
        title: "借地形困住",
        text: "你会把它引到更可控的位置，而不是原地硬接。",
        axes: { secrecy: 2, freedom: 1 },
        affinity: { lingxue: 1, tangmen: 1, yantian: 1 },
      },
    ],
  },
  {
    stage: "第九程",
    scene: "朝与野之间",
    prompt: "朝廷命令与江湖道义撞在一起时，你通常先站哪边？",
    context:
      "不是每次都真能两全，这题问的是你骨子里的优先级。",
    options: [
      {
        title: "先看法度",
        text: "有制度总比人人自说自话强，哪怕它不总是完美。",
        axes: { discipline: 2, kinship: 1 },
        affinity: { tiance: 1, lingxue: 1, duanshi: 1, cangyun: 1 },
      },
      {
        title: "先看百姓",
        text: "谁先在受苦，答案就先偏向谁。",
        axes: { compassion: 2, freedom: 1 },
        affinity: { gaibang: 1, mingjiao: 1, wanhua: 1, wanling: 1 },
      },
      {
        title: "先看师门和本心",
        text: "不是谁官更大，而是谁更合你认的那条道。",
        axes: { faith: 2, kinship: 1, discipline: 1 },
        affinity: { shaolin: 1, chunyang: 1, badao: 1, cangjian: 1 },
      },
      {
        title: "先找第三条路",
        text: "能不能不硬选其一，而是把代价拆开、让两边都少坏一点。",
        axes: { culture: 1, secrecy: 1, faith: 1, compassion: 1 },
        affinity: { changge: 1, yantian: 1, qixiu: 1, duanshi: 1 },
      },
    ],
  },
  {
    stage: "第十程",
    scene: "理想居处",
    prompt: "如果让你长住，你最想把自己的日子安放在什么地方？",
    context:
      "环境会暴露人的底色，也会养出人的做事方式。",
    options: [
      {
        title: "山门与钟声",
        text: "最好有风、有石阶、有能让心慢慢沉下去的清处。",
        axes: { discipline: 1, faith: 1, secrecy: 1, culture: 1 },
        affinity: { chunyang: 1, shaolin: 1, daozong: 1 },
      },
      {
        title: "水阁与书卷",
        text: "有琴、有茶、有花木，也有人愿意在这里谈心。",
        axes: { culture: 2, compassion: 1, freedom: 1 },
        affinity: { qixiu: 1, wanhua: 1, changge: 1, duanshi: 1 },
      },
      {
        title: "营地与城头",
        text: "要看得见人来人往，也看得见自己为什么守在这里。",
        axes: { kinship: 2, discipline: 1, ferocity: 1 },
        affinity: { tiance: 1, cangyun: 1, mingjiao: 1 },
      },
      {
        title: "崖海与山林",
        text: "最好离天和野都近一点，能听见风、潮或兽鸣。",
        axes: { freedom: 2, secrecy: 1, compassion: 1 },
        affinity: { penglai: 1, wuxian: 1, wanling: 1, yaozong: 1 },
      },
    ],
  },
  {
    stage: "第十一程",
    scene: "异兆将临",
    prompt: "天象怪异、卜兆纷乱，身边人都来问你该不该信。",
    context:
      "你对“看不见的东西”抱什么态度，会影响很多决定。",
    options: [
      {
        title: "信手里这点真本事",
        text: "比起天意，你更相信练出来的判断和当下能做的事。",
        axes: { discipline: 2, ferocity: 1 },
        affinity: { tiance: 1, daozong: 1, badao: 1 },
      },
      {
        title: "兆象也是语言",
        text: "可以参考，但必须带着敬畏去解，不可乱读。",
        axes: { culture: 2, faith: 1, secrecy: 1 },
        affinity: { yantian: 1, chunyang: 1, changge: 1 },
      },
      {
        title: "先看人心被它牵成什么样",
        text: "比天象本身更要紧的，是众人因此做出了什么。",
        axes: { compassion: 1, faith: 1, culture: 1 },
        affinity: { shaolin: 1, qixiu: 1, duanshi: 1 },
      },
      {
        title: "让山川草木先说话",
        text: "你会去看气味、气候、鸟兽和药性先变了什么。",
        axes: { freedom: 1, secrecy: 1, compassion: 1, culture: 1 },
        affinity: { wuxian: 1, wanling: 1, yaozong: 1, penglai: 1 },
      },
    ],
  },
  {
    stage: "第十二程",
    scene: "最后一问",
    prompt: "如果为了守住你认定的路，必须主动失去一样东西，你选什么？",
    context:
      "没有谁能什么都要。这题其实在问，你最舍不得放弃的不是哪样，而是哪样之后剩下的自己。",
    options: [
      {
        title: "名声",
        text: "被误解也行，不被记得也行，只要事情做成。",
        axes: { secrecy: 2, faith: 1 },
        affinity: { lingxue: 1, tangmen: 1, cangyun: 1 },
      },
      {
        title: "安稳",
        text: "你宁可一直在路上，也不想把自己活得太钝。",
        axes: { freedom: 2, ferocity: 1 },
        affinity: { gaibang: 1, penglai: 1, mingjiao: 1 },
      },
      {
        title: "锋芒",
        text: "若能让更多人活下来，没必要把最亮的那一刀留给自己。",
        axes: { compassion: 2, discipline: 1 },
        affinity: { shaolin: 1, yaozong: 1, wanhua: 1, wanling: 1 },
      },
      {
        title: "迟疑",
        text: "一旦选定，就别回头，哪怕接下来要多扛很多。",
        axes: { ferocity: 2, kinship: 1, faith: 1 },
        affinity: { tiance: 1, badao: 1, daozong: 1, mingjiao: 1 },
      },
    ],
  },
  {
    stage: "第十三程",
    scene: "劫镖之夜",
    prompt: "你提前一天得知有人要劫镖，同行却坚持按原计划走明路。",
    context:
      "你只有一次决策窗口。改线会得罪人，不改线可能死人。",
    options: [
      {
        title: "强行改线",
        text: "先保活口，不接受把侥幸当策略。",
        axes: { discipline: 3, ferocity: 2, compassion: 1, freedom: -1 },
        affinity: { cangyun: 1, tiance: 1, badao: 1, daozong: 1 },
      },
      {
        title: "暗里设伏",
        text: "明面不改，暗线先布，让劫镖的人自己撞进来。",
        axes: { secrecy: 3, discipline: 1, ferocity: 1, compassion: -1 },
        affinity: { tangmen: 1, lingxue: 1, yantian: 1 },
      },
      {
        title: "放话震慑",
        text: "先把消息放出去，逼对方退意，少打一场是最好。",
        axes: { culture: 1, faith: 2, ferocity: -2, secrecy: -1 },
        affinity: { changge: 1, qixiu: 1, duanshi: 1, shaolin: 1 },
      },
      {
        title: "照计划走",
        text: "你相信风险本就是路的一部分，不愿因风声自乱阵脚。",
        axes: { freedom: 2, ferocity: 1, discipline: -2, secrecy: -1 },
        affinity: { gaibang: 1, penglai: 1, mingjiao: 1 },
      },
    ],
  },
  {
    stage: "第十四程",
    scene: "门规之辩",
    prompt: "师门旧规明显压制新人，你被推去主持是否修规。",
    context:
      "守旧能稳，改制会痛，但继续拖会让更多人沉默离开。",
    options: [
      {
        title: "先守规",
        text: "乱改比坏规更危险，先把秩序稳住。",
        axes: { discipline: 3, kinship: 1, freedom: -2, compassion: -1 },
        affinity: { chunyang: 1, cangyun: 1, daozong: 1 },
      },
      {
        title: "立刻改规",
        text: "错就是错，不该再拿传统给它背书。",
        axes: { freedom: 2, compassion: 2, ferocity: 2, discipline: -2 },
        affinity: { mingjiao: 1, gaibang: 1, wanhua: 1 },
      },
      {
        title: "试点过渡",
        text: "先开一条新路，用结果让反对者闭嘴。",
        axes: { culture: 2, secrecy: 1, discipline: 1, compassion: 1 },
        affinity: { changge: 1, yantian: 1, duanshi: 1 },
      },
      {
        title: "带人另起",
        text: "不在烂结构里消耗，直接带愿意的人换场子。",
        axes: { freedom: 3, kinship: 1, discipline: -3, faith: 1 },
        affinity: { penglai: 1, wuxian: 1, wanhua: 1, gaibang: 1 },
      },
    ],
  },
  {
    stage: "第十五程",
    scene: "赎人与赎城",
    prompt: "你只能二选一：救回被俘的师兄，或守住将被焚毁的粮仓。",
    context:
      "两边都真，任何选择都会留下怨与债。",
    options: [
      {
        title: "先救人",
        text: "人若没了，守住的东西也迟早会失去意义。",
        axes: { compassion: 3, kinship: 2, faith: 1, discipline: -2 },
        affinity: { qixiu: 1, wanling: 1, wanhua: 1, yaozong: 1 },
      },
      {
        title: "先守城",
        text: "守住粮仓能救更多人，这笔账必须冷着算。",
        axes: { discipline: 3, compassion: -2, ferocity: 1, kinship: -1 },
        affinity: { tiance: 1, cangyun: 1, badao: 1, tangmen: 1 },
      },
      {
        title: "诈敌换时",
        text: "放出假消息拖住敌方，争出同时处理两边的窗口。",
        axes: { secrecy: 3, culture: 1, ferocity: 1, faith: -1 },
        affinity: { lingxue: 1, tangmen: 1, yantian: 1 },
      },
      {
        title: "先问其志",
        text: "若师兄愿意以身殉局，你会尊重他的选择先救城。",
        axes: { faith: 3, culture: 1, compassion: 1, ferocity: -1 },
        affinity: { shaolin: 1, chunyang: 1, changge: 1, duanshi: 1 },
      },
    ],
  },
  {
    stage: "第十六程",
    scene: "敌营来降",
    prompt: "敌营副将深夜来降，要求你立刻信任并给他兵权。",
    context:
      "你看得出他真有苦衷，但也可能是最精巧的一次投毒。",
    options: [
      {
        title: "先收后验",
        text: "先让人进来，但关键权限全部锁住。",
        axes: { secrecy: 2, discipline: 2, compassion: 1, kinship: -1 },
        affinity: { tangmen: 1, lingxue: 1, cangjian: 1 },
      },
      {
        title: "先拒再观",
        text: "不拿全局做赌注，先让时间证明他的立场。",
        axes: { discipline: 3, compassion: -1, ferocity: -1, freedom: -1 },
        affinity: { cangyun: 1, badao: 1, daozong: 1 },
      },
      {
        title: "当场重用",
        text: "危局里最缺敢投命的人，你愿意先给他机会。",
        axes: { faith: 3, freedom: 1, kinship: 1, secrecy: -2 },
        affinity: { mingjiao: 1, gaibang: 1, tiance: 1 },
      },
      {
        title: "试忠一役",
        text: "给他一场高风险但可控的任务，成则信，败则止。",
        axes: { ferocity: 2, discipline: 1, secrecy: 1, compassion: -1 },
        affinity: { tiance: 1, yantian: 1, cangjian: 1, lingxue: 1 },
      },
    ],
  },
  {
    stage: "第十七程",
    scene: "禁术换命",
    prompt: "你有一门禁术，能救重伤同伴，但施术者会永久失去一项天赋。",
    context:
      "没人逼你，所有人都在等你先开口。",
    options: [
      {
        title: "我来承担",
        text: "命先救回来，代价放在自己身上。",
        axes: { compassion: 3, kinship: 2, faith: 1, ferocity: -1 },
        affinity: { shaolin: 1, yaozong: 1, wanling: 1, qixiu: 1 },
      },
      {
        title: "拒绝禁术",
        text: "不能用失序的方法去救秩序，宁可换别的路。",
        axes: { discipline: 3, faith: 1, compassion: -1, freedom: -1 },
        affinity: { chunyang: 1, daozong: 1, cangyun: 1 },
      },
      {
        title: "代价共担",
        text: "拆成多人分担的慢疗，不让任何一个人独吞代价。",
        axes: { kinship: 2, culture: 1, compassion: 2, secrecy: -1 },
        affinity: { wanhua: 1, changge: 1, duanshi: 1 },
      },
      {
        title: "换敌人偿",
        text: "你会把这笔代价转成对敌方的精确追偿。",
        axes: { ferocity: 3, secrecy: 2, compassion: -2, freedom: 0 },
        affinity: { tangmen: 1, lingxue: 1, badao: 1, tiance: 1 },
      },
    ],
  },
  {
    stage: "第十八程",
    scene: "盛宴局中局",
    prompt: "你在宴席上识破主办者正在借酒布局，想挑起三方仇杀。",
    context:
      "你若当场掀桌，可能血溅席间；你若沉默，后患更大。",
    options: [
      {
        title: "当场掀桌",
        text: "立刻斩断节奏，哪怕自己先背锅。",
        axes: { ferocity: 3, faith: 1, secrecy: -2, culture: -1 },
        affinity: { badao: 1, tiance: 1, gaibang: 1 },
      },
      {
        title: "借词换局",
        text: "你会改写话题和席面秩序，把刀从酒里抽出来。",
        axes: { culture: 3, secrecy: 1, ferocity: -2, discipline: 1 },
        affinity: { changge: 1, qixiu: 1, duanshi: 1 },
      },
      {
        title: "暗记证据",
        text: "先让局面过线，后续连根拔起，不给对手洗白机会。",
        axes: { secrecy: 3, discipline: 2, compassion: -1, ferocity: 1 },
        affinity: { tangmen: 1, lingxue: 1, yantian: 1 },
      },
      {
        title: "私下示警",
        text: "你优先保全被利用的一方，先让无辜的人退场。",
        axes: { compassion: 2, kinship: 1, freedom: 1, ferocity: -1 },
        affinity: { wanhua: 1, wanling: 1, yaozong: 1, shaolin: 1 },
      },
    ],
  },
  {
    stage: "第十九程",
    scene: "海上风暴",
    prompt: "船队突遇风暴，你必须在保货与保人之间立刻下令。",
    context:
      "慢一刻就两边都没了。你不会有时间开会。",
    options: [
      {
        title: "弃货保人",
        text: "东西能再挣，人命没得重来。",
        axes: { compassion: 3, freedom: 1, discipline: -1, kinship: 1 },
        affinity: { penglai: 1, yaozong: 1, wanhua: 1, wanling: 1 },
      },
      {
        title: "分仓冒险",
        text: "你会极限分配资源，让人和货都保住一部分。",
        axes: { discipline: 2, secrecy: 1, culture: 1, compassion: 0 },
        affinity: { cangjian: 1, yantian: 1, changge: 1, duanshi: 1 },
      },
      {
        title: "以阵抗风",
        text: "不弃不退，强行顶过浪头，赌的是全员执行力。",
        axes: { discipline: 3, ferocity: 2, freedom: -2, kinship: 1 },
        affinity: { cangyun: 1, tiance: 1, daozong: 1 },
      },
      {
        title: "转险借势",
        text: "你会借风改航线，把危局变成甩开追兵的机会。",
        axes: { freedom: 3, secrecy: 1, ferocity: 1, discipline: -2 },
        affinity: { penglai: 1, mingjiao: 1, gaibang: 1, wuxian: 1 },
      },
    ],
  },
  {
    stage: "第二十程",
    scene: "孤城谣言",
    prompt: "城内谣言四起，说你们私吞赈粮。你有证据，但公开会暴露线人。",
    context:
      "眼下名声在塌，沉默会继续掉血，公开会断暗线。",
    options: [
      {
        title: "公开证据",
        text: "短痛换长稳，先把百姓信心拉回来。",
        axes: { secrecy: -3, culture: 1, compassion: 1, faith: 1 },
        affinity: { qixiu: 1, changge: 1, duanshi: 1, gaibang: 1 },
      },
      {
        title: "护住线人",
        text: "宁愿暂时背锅，也不让暗线断在自己手里。",
        axes: { secrecy: 3, discipline: 1, compassion: -1, faith: 1 },
        affinity: { lingxue: 1, tangmen: 1, cangyun: 1 },
      },
      {
        title: "制造反证",
        text: "你会借舆论反向钓出幕后推手，一次拔净。",
        axes: { secrecy: 2, ferocity: 2, culture: 1, compassion: -2 },
        affinity: { tangmen: 1, yantian: 1, badao: 1 },
      },
      {
        title: "开仓自证",
        text: "直接把余粮按户派下去，让事实替你说话。",
        axes: { compassion: 2, kinship: 1, discipline: -1, freedom: 1 },
        affinity: { tiance: 1, shaolin: 1, wanhua: 1, mingjiao: 1 },
      },
    ],
  },
  {
    stage: "第二十一程",
    scene: "师承之争",
    prompt: "两位前辈都想收你为徒，一位重心法，一位重杀伐。",
    context:
      "你只能选一条主路，另一条会暂时关闭。",
    options: [
      {
        title: "拜心法一脉",
        text: "你先要一个能长期约束自己的框架。",
        axes: { discipline: 2, faith: 2, ferocity: -2, freedom: -1 },
        affinity: { chunyang: 1, shaolin: 1, changge: 1 },
      },
      {
        title: "拜杀伐一脉",
        text: "先把胜负手练出来，再谈其余。",
        axes: { ferocity: 3, discipline: 1, compassion: -2, culture: -1 },
        affinity: { daozong: 1, badao: 1, tiance: 1 },
      },
      {
        title: "双脉并修",
        text: "你会硬吃更高成本，不愿提前放弃任何一个维度。",
        axes: { culture: 2, discipline: 1, freedom: 1, secrecy: 1 },
        affinity: { cangjian: 1, yantian: 1, duanshi: 1, wanhua: 1 },
      },
      {
        title: "暂不拜师",
        text: "你想先走自己的路，再决定把谁请进来。",
        axes: { freedom: 3, kinship: -2, discipline: -1, faith: 1 },
        affinity: { penglai: 1, gaibang: 1, wuxian: 1, mingjiao: 1 },
      },
    ],
  },
  {
    stage: "第二十二程",
    scene: "封卷题",
    prompt: "若你的一生只能在“成名、成事、成人”里保住两样，你舍哪一样？",
    context:
      "答案没有标准，但会把你的江湖底色逼出来。",
    options: [
      {
        title: "舍成名",
        text: "你更在乎事情和自己，名声可有可无。",
        axes: { secrecy: 2, faith: 2, culture: -1, compassion: 1 },
        affinity: { lingxue: 1, tangmen: 1, cangyun: 1, shaolin: 1 },
      },
      {
        title: "舍成事",
        text: "若成事必须违背本心，你宁可不成。",
        axes: { faith: 3, compassion: 2, ferocity: -2, discipline: -1 },
        affinity: { chunyang: 1, shaolin: 1, qixiu: 1, wanling: 1 },
      },
      {
        title: "舍成人",
        text: "你接受自己变硬，只要能把关键局面赢下来。",
        axes: { ferocity: 3, discipline: 2, compassion: -3, secrecy: 1 },
        affinity: { badao: 1, daozong: 1, tiance: 1, tangmen: 1 },
      },
      {
        title: "都不舍，代价我扛",
        text: "你会把代价推给未来的自己，不愿提前删去任何可能。",
        axes: { freedom: 2, kinship: 1, culture: 1, discipline: -1 },
        affinity: { wanhua: 1, mingjiao: 1, penglai: 1, cangjian: 1 },
      },
    ],
  },
];

const state = {
  name: "少侠",
  index: 0,
  answers: Array(QUESTIONS.length).fill(null),
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
  restartButton: document.querySelector("#restartButton"),
  radarChart: document.querySelector("#radarChart"),
};

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
  refs.quizShell.classList.add("hidden");
  refs.resultShell.classList.remove("hidden");
}

function setAnswer(questionIndex, optionIndex) {
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
  refs.questionStage.textContent = question.stage;
  refs.progressLabel.textContent = `${String(state.index + 1).padStart(2, "0")} / ${QUESTIONS.length}`;
  refs.progressFill.style.width = `${((state.index + 1) / QUESTIONS.length) * 100}%`;
  refs.questionScene.textContent = question.scene;
  refs.questionPrompt.textContent = question.prompt;
  refs.questionContext.textContent = question.context;
  refs.optionsGrid.innerHTML = "";

  question.options.forEach((option, optionIndex) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-button";
    button.innerHTML = `
      <span class="option-index">${optionIndex + 1}</span>
      <span class="option-title">${option.title}</span>
      <span class="option-text">${option.text}</span>
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

function calculateResult() {
  const rawAxes = initializeVector();
  const affinity = initializeAffinity();

  state.answers.forEach((optionIndex, questionIndex) => {
    const option = QUESTIONS[questionIndex].options[optionIndex];
    Object.entries(option.axes).forEach(([key, value]) => {
      rawAxes[key] += value;
    });
    Object.entries(option.affinity || {}).forEach(([key, value]) => {
      affinity[key] = (affinity[key] || 0) + value;
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

  const ranked = SECTS.map((sect) => {
    const squaredDiff = AXES.reduce((sum, axis) => {
      const userValue = normalizedAxes[axis.key];
      const sectValue = sect.profile[axis.key];
      return sum + (userValue - sectValue) ** 2;
    }, 0);

    const distance = Math.sqrt(squaredDiff / AXES.length);
    const baseScore = 108 - distance * 13.8;

    const signatureBoost = dominantAxes.slice(0, 3).reduce((sum, axis) => {
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

    const totalScore = baseScore + affinity[sect.id] * 2.1 + signatureBoost;

    return { ...sect, score: totalScore };
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

  return {
    normalizedAxes,
    rawAxes,
    dominantAxes,
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
  const leads = result.dominantAxes.slice(0, 3);
  const pieces = leads.map((axis) => (axis.value >= 0 ? axis.positive : axis.negative));

  return `${pieces[0]} ${pieces[1]} ${pieces[2]} 你这组答案更像 ${result.top.name} 的路子：能在冲突里保持自洽，也愿意为自己的选择承担后果。`;
}

function buildShadowCopy(result) {
  const major = result.dominantAxes[0];
  const riskCopy = major.value >= 0 ? major.positiveRisk : major.negativeRisk;
  const tendency = major.value >= 0 ? major.label : major.opposite;
  return `你的最强轴是「${tendency}」。它是你最锋利的武器，也最可能成为你的反身代价：${riskCopy}`;
}

function applyTheme(sect) {
  document.documentElement.style.setProperty("--accent", sect.palette.accent);
  document.documentElement.style.setProperty("--accent-soft", sect.palette.accentSoft);
  document.documentElement.style.setProperty("--accent-strong", sect.palette.accentStrong);
}

function renderResult() {
  const result = state.result;
  const top = result.top;

  applyTheme(top);
  showResult();

  refs.resultNameplate.textContent = `${state.name || "少侠"} 的归属门派`;
  refs.resultSectName.textContent = top.name;
  refs.resultSectTitle.textContent = top.title;
  refs.resultSummary.textContent = top.summary;
  refs.resultVerse.textContent = top.verse;
  refs.resultCrest.textContent = top.crest;
  refs.resultPercent.textContent = `${top.percent}%`;
  refs.resultRole.textContent = top.role;
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
  state.index = 0;
  state.answers = Array(QUESTIONS.length).fill(null);
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

renderSectCloud();
