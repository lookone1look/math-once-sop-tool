window.SOP_TOOL_DATA = {
  title: "数学只错一次【新版】任务 SOP 工具",
  subtitle: "音画同步板书值班版",
  version: "2026-06-26 独立工具初版",
  source: "数学只错一次【新版】任务的操作SOP（音画同步板书）.docx",
  updateNote: "内容更新时优先改 sop-data.js；工具外壳不需要重做。",
  steps: [
    {
      id: "enter-new",
      no: "1.1",
      title: "确认进入新版任务",
      source: "原 SOP：1.进入题目编辑 / 1.1进入任务",
      goal: "先判断这道题能不能按新版流程继续做。",
      entry: "任务列表勾选“新版”，点击【编辑】。",
      action: "进入编辑页后，先看页面内容结构是否与新版流程一致。",
      pass: [
        "能看到新版入参结构。",
        "后续可以继续检查题干、答案、questionAnalysis、questionMethod 和 directorGuide。"
      ],
      exception: "结构不一致时，重新进入或刷新；仍失败就去 1.3 做异常判断。",
      evidence: "编辑页截图；任务是否勾选“新版”；字段区是否出现新版结构。",
      fields: ["questionMethod", "directorGuide"],
      qa: [
        ["看起来不像新版怎么办？", "先刷新或重新进入一次。还不像时，不直接改字段，进入 1.3 判断是否标异常。"],
        ["只看到部分字段能继续吗？", "先看 questionMethod 是否有 steps/content，directorGuide 是否为空；不满足正常结构就不要继续猜。"]
      ],
      tags: ["新版", "入口", "编辑", "异常", "steps", "content", "directorGuide"]
    },
    {
      id: "normal-task",
      no: "1.2",
      title: "确认是正常待修改任务",
      source: "原 SOP：1.2正常待修改任务",
      goal: "确认当前页面可正常编辑，再开始改内容。",
      entry: "点击【编辑】后进入正常字段编辑页。",
      action: "按后续流程逐项检查并修改。",
      pass: [
        "题目字段可编辑。",
        "重点字段可查看或打开编辑框。",
        "预览区可用于查看编译效果。"
      ],
      exception: "无法编辑、字段缺失或页面结构明显不对时，转 1.3。",
      evidence: "页面结构截图、字段名、预览区状态。",
      fields: ["questionAnalysis", "questionMethod", "directorGuide"],
      qa: [
        ["能编辑一点点但不完整怎么办？", "按异常处理，不要只因为某个输入框能点就继续做。先把缺哪些字段截图。"]
      ],
      tags: ["正常任务", "字段缺失", "预览", "可编辑"]
    },
    {
      id: "abnormal-task",
      no: "1.3",
      title: "异常任务判断",
      source: "原 SOP：1.3异常任务",
      goal: "用三个硬条件判断是否标异常，不凭感觉。",
      entry: "点击【编辑】后页面结构不像正常新版任务。",
      action: "刷新或重新进入一次，再检查三个条件是否同时满足。",
      pass: [
        "是“新版”任务。",
        "questionMethod 中没有 steps、content 字段。",
        "directorGuide 仍为空。"
      ],
      exception: "三项同时满足：标记异常，标签为“其他”。不是同时满足但仍无法修改：联系鑫宇或刘蒙确认。",
      evidence: "任务新版状态截图、questionMethod 字段截图、directorGuide 空值截图。",
      fields: ["questionMethod", "steps", "content", "directorGuide"],
      qa: [
        ["只满足其中两项能标异常吗？", "不能直接标。整理截图后找鑫宇或刘蒙确认。"],
        ["为什么要三项同时满足？", "因为这一步判断的是“新版任务但入参仍不是新流程”，单独一个现象不能证明。"]
      ],
      tags: ["异常", "其他", "新版", "空值", "字段缺失"]
    },
    {
      id: "stem-answer",
      no: "2.1",
      title: "检查题干与答案",
      source: "原 SOP：2.【题干&答案】字段检查",
      goal: "先保证题目和答案没错，因为后面三个重点字段都依赖它们。",
      entry: "进入编辑页后，先看题干和答案字段。",
      action: "检查题干是否完整、答案是否正确。简单错误直接手动改。",
      pass: [
        "题干信息完整，无明显 OCR 错误。",
        "答案与题目条件和计算过程一致。"
      ],
      exception: "错误较大时，用清晰题目图片重跑老提示词；复杂题答案暂时无法确定，可以等所有字段确认后再回查。",
      evidence: "题目图片、题干字段、答案字段、老提示词输出。",
      fields: [],
      qa: [
        ["答案一时算不出来怎么办？", "先标记回查，不要让不确定答案继续污染后面的 questionMethod。"],
        ["题干错一点要不要修？", "要。题干是后续字段的源头，小错可能导致后面整套步骤都跟着错。"]
      ],
      tags: ["题干", "答案", "OCR", "老提示词", "图片"]
    },
    {
      id: "analysis",
      no: "3.1",
      title: "检查 questionAnalysis",
      source: "原 SOP：3.1分析(questionAnalysis)字段的修改及检查",
      goal: "确认解题思路正确，给讲题模型一个可靠方向。",
      entry: "查看 questionAnalysis 字段。",
      action: "确认思路是否正确、是否符合题目条件。简单错误手动改；改动大时先用老流程提示词产出较正确版本再修。",
      pass: [
        "不使用超纲方法。",
        "思路正确。",
        "内容足够支撑讲题模型理解解题方向。",
        "无固定格式要求。"
      ],
      exception: "题目本身信息不清或答案无法判断时，先回到题干/答案确认。",
      evidence: "questionAnalysis 文本、题目图片、必要时的老提示词输出。",
      fields: ["questionAnalysis"],
      qa: [
        ["analysis 要写得很细吗？", "不用写成板书细节。它只要让模型明白解题方向。"],
        ["发现思路和答案冲突怎么办？", "先回到题干和答案核对，别直接只改 analysis。"]
      ],
      tags: ["questionAnalysis", "分析", "思路", "超纲"]
    },
    {
      id: "method",
      no: "3.2",
      title: "检查 questionMethod",
      source: "原 SOP：3.2解答过程(questionMethod)字段的修改及检查",
      goal: "逐条检查板书素材，保证内容对、顺序对、标注对。",
      entry: "查看 questionMethod.steps，可点修改按钮打开编辑框，也可在内容框内直接编辑。",
      action: "逐条检查 content、label、priority、marks、keySegments。修改后用下方编译框预览，保存并刷新后确认效果。",
      pass: [
        "content 无事实和计算错误。",
        "顺序符合正常讲题逻辑。",
        "每条 content 最多只有一步推导。",
        "关键板书在 priority 字段标 key。",
        "关键结论、公式等有 marks 或 keySegments。",
        "label 标签挂载正确。"
      ],
      exception: "错误太多时，带清晰题目图片走老流程，把老流程输出放入结构化入参，再通过【解题】生成新流程内容；功能未上线则按当前团队口径确认。",
      evidence: "questionMethod 原文、修改后 JSON、编译预览、保存刷新后的效果。",
      fields: ["questionMethod", "steps", "content", "label", "priority", "marks", "keySegments"],
      qa: [
        ["为什么不能一句写多步？", "因为 content 会完整写到板书上，多步塞在一句里，讲题时很难定位和强调。"],
        ["marks 和 keySegments 怎么区分？", "marks 是写出来就持续高亮；keySegments 是模型讲到时可以临时强调。"],
        ["LaTeX 看不懂怎么办？", "让豆包渲染，或用图片转 LaTeX，再人工核对公式含义。"],
        ["新增 step 只能加到末尾怎么办？", "结构化编辑界面添加完成后，回主界面剪切并粘贴到正确位置；若后台已支持指定 step 下新增，优先用新功能。"]
      ],
      tags: ["questionMethod", "steps", "content", "label", "priority", "marks", "keySegments", "latex", "JSON", "板书", "高亮"]
    },
    {
      id: "director-guide",
      no: "3.3",
      title: "检查 directorGuide",
      source: "原 SOP：3.3directorGuide字段的修改及检查",
      goal: "防止后面的答案、结论或步骤提前出现在板书上。",
      entry: "查看 directorGuide 字段。",
      action: "确认每个 stage 和 visibilityNote 是否能说明当前阶段不该提前出现什么。questionMethod 大改后要同步检查。",
      pass: [
        "按题目复杂度设置约 3-6 个阶段。",
        "visibilityNote 指向具体对象。",
        "阶段与 questionMethod 顺序一致。"
      ],
      exception: "写成“计算结果不该出现”这类泛泛表达时，改成具体内容；method 大改后阶段不匹配时同步调整。",
      evidence: "directorGuide JSON、questionMethod 顺序、预览或讲题阶段判断。",
      fields: ["directorGuide", "stage", "visibilityNote", "questionMethod"],
      qa: [
        ["visibilityNote 写空可以吗？", "可以，但只适合这个阶段确实没有需要防提前暴露的内容。"],
        ["method 改了但 directorGuide 没改会怎样？", "可能阶段错位，导致答案提前出现，或该出现的内容被挡住。"]
      ],
      tags: ["directorGuide", "stage", "visibilityNote", "阶段", "提前出现"]
    },
    {
      id: "method-review",
      no: "4.1",
      title: "检测 questionMethod",
      source: "原 SOP：4.检测与提交 / Method检测提示词",
      goal: "用 Method 检测提示词做最后复核，再人工确认。",
      entry: "修改完成后的 questionMethod 或 steps JSON。",
      action: "打开《Method检测提示词.md》，贴给豆包，选择专家模式，再粘贴待检查字段。",
      pass: [
        "检测结果没有硬错误。",
        "风险项已人工确认或已修改。"
      ],
      exception: "检测指出 JSON 结构、LaTeX、计算、label、marks、keySegments 问题时，回到 3.2 修改后重新检查。",
      evidence: "检测提示词文件名、输入字段、豆包输出结论、最终修改记录。",
      fields: ["questionMethod", "steps", "label", "marks", "keySegments"],
      qa: [
        ["豆包输出能直接覆盖吗？", "不能直接全量覆盖。它是复核建议，仍要按题目事实人工确认。"],
        ["没有检测提示词文件怎么办？", "先去钉钉文档附件获取，不临时自编规则。"]
      ],
      tags: ["Method检测", "豆包", "专家模式", "JSON", "LaTeX", "label", "marks", "keySegments"]
    },
    {
      id: "director-review",
      no: "4.2",
      title: "检测 directorGuide",
      source: "原 SOP：4.检测与提交 / directorGuide检测提示词",
      goal: "检查阶段划分和提前暴露控制是否合理。",
      entry: "修改完成后的 directorGuide JSON。",
      action: "使用《directorGuide检测提示词.md》复核阶段和提前暴露控制。",
      pass: [
        "阶段数量合理。",
        "每条 visibilityNote 指向具体内容。",
        "与 questionMethod 顺序一致。"
      ],
      exception: "提示阶段过粗、过细或对象不明确时，回到 3.3 修改后重新检查。",
      evidence: "检测提示词文件名、输入字段、豆包输出结论、最终修改记录。",
      fields: ["directorGuide", "stage", "visibilityNote", "questionMethod"],
      qa: [
        ["检测说阶段太粗怎么办？", "把一个阶段拆成两个能对应解题推进的小阶段，再写清各自不能提前出现什么。"],
        ["检测说对象不明确怎么办？", "把“计算结果”改成具体对象，比如“最省钱方案结果”。"]
      ],
      tags: ["directorGuide检测", "阶段", "过粗", "过细", "visibilityNote"]
    },
    {
      id: "submit",
      no: "5.1",
      title: "正常提交",
      source: "原 SOP：4.检测与提交",
      goal: "确认字段、预览、复核都通过后再提交。",
      entry: "所有字段修改完成，预览正常，提示词复核完成。",
      action: "保存，刷新确认编译效果，再提交。",
      pass: [
        "字段内容与预览一致。",
        "无未处理硬错误。",
        "提交前检查表全部通过。"
      ],
      exception: "保存后预览不一致，先刷新再看；仍不一致，回查 JSON 格式或页面状态。",
      evidence: "保存后的字段内容、刷新后的预览、检测结果。",
      fields: ["questionMethod", "directorGuide"],
      qa: [
        ["为什么提交前还要刷新？", "因为编辑框正确不等于保存后的编译效果正确，刷新能看最终状态。"]
      ],
      tags: ["提交", "保存", "刷新", "预览", "编译"]
    },
    {
      id: "mark-exception",
      no: "5.2",
      title: "标异常",
      source: "原 SOP：5.Q&A以及待优化点 / 异常口径",
      goal: "无法按正常流程处理时，给出可回查的异常证据。",
      entry: "任务无法按正常流程修改，或同时满足异常任务判断条件。",
      action: "按异常处理口径留证据，必要时联系鑫宇或刘蒙确认。",
      pass: [
        "异常原因能回指到字段或页面状态。",
        "不是只凭主观感觉。"
      ],
      exception: "同时满足 1.3 三项条件时，标签选“其他”；其他无法判断情况先确认后处理。",
      evidence: "页面截图、字段截图、联系确认记录、异常标签。",
      fields: ["questionMethod", "directorGuide"],
      qa: [
        ["能自己修但很费时间，要标异常吗？", "先看是否能走重生成或检测提示词辅助修。标异常要有字段或页面证据。"],
        ["联系确认前要准备什么？", "准备页面截图、字段截图、你卡住的具体条件。"]
      ],
      tags: ["标异常", "其他", "截图", "证据", "联系"]
    }
  ],
  fields: {
    questionAnalysis: {
      title: "questionAnalysis",
      plain: "像给老师看的解题思路提纲：先让讲题模型知道这道题应该怎么想。",
      what: "它是分析字段，放题目的解题思路和方法框架。",
      affects: "影响讲题模型按什么思路展开讲解。",
      not: "不代表板书上会逐字写出来，也不要求放完整 JSON 格式。"
    },
    questionMethod: {
      title: "questionMethod",
      plain: "像提前准备的一叠板书卡片：模型讲到哪里，就从里面挑合适的卡片写出来。",
      what: "它是解答过程字段，核心内容是 steps，每个 step 准备一条板书素材。",
      affects: "影响板书写什么、顺序怎么走、哪些内容能被高亮或强调。",
      not: "不代表每条 step 都一定会在课堂上出现。"
    },
    steps: {
      title: "steps",
      plain: "像一排按顺序摆好的板书卡片。",
      what: "它是 questionMethod 里的数组，每一项是一小段可用板书。",
      affects: "影响解题顺序和讲题模型可选择的板书素材。",
      not: "不代表一整段讲题稿，也不代表模型必须全部使用。"
    },
    content: {
      title: "content",
      plain: "像真正写到白板上的那一句话。",
      what: "它是单条 step 中的板书正文，引号里的内容会完整呈现在板书上。",
      affects: "影响学生实际看到的文字、算式和结论。",
      not: "不代表解释备注，不能把多步推导都塞进一句。"
    },
    label: {
      title: "label",
      plain: "像给板书贴位置标签：这条放在推理区、计算区，还是结论区。",
      what: "它是单条 step 的分类值，可选推理、计算、结论、公式、方法、注意、总结。",
      affects: "影响这条板书写在板书区域的什么位置。",
      not: "不代表可以自创标签。"
    },
    priority: {
      title: "priority",
      plain: "像给核心板书打重点标记。",
      what: "它用 key 标出核心板书；非核心时不填这个字段。",
      affects: "影响模型识别哪些板书更关键。",
      not: "不代表所有 step 都要填 key。"
    },
    marks: {
      title: "marks",
      plain: "像板书刚写出来就自带荧光笔。",
      what: "它定义持续高亮的文字和高亮样式，text 必须来自 content。",
      affects: "影响哪些内容一出现就被持续突出显示。",
      not: "不代表临时强调；临时强调看 keySegments。"
    },
    keySegments: {
      title: "keySegments",
      plain: "像给模型准备的可点名位置：讲到关键数字或词时，可以临时强调。",
      what: "它列出 content 中可以被讲题模型临时强调的片段。",
      affects: "影响讲题时能否精确突出某个数字、词语或短句。",
      not: "不代表这些片段一定会被高亮。"
    },
    directorGuide: {
      title: "directorGuide",
      plain: "像舞台提示牌：告诉系统这一阶段哪些后面的内容先别露出来。",
      what: "它是阶段可见性字段，由 stage 和 visibilityNote 组成。",
      affects: "影响板书内容是否会提前暴露答案、结论或后续步骤。",
      not: "不代表讲题步骤，也不负责生成板书正文。"
    },
    stage: {
      title: "stage",
      plain: "像把整道题分成几个上课小阶段。",
      what: "它描述当前解题阶段。",
      affects: "影响 visibilityNote 的生效范围。",
      not: "不代表单条 step，也不需要和每条板书一一对应。"
    },
    visibilityNote: {
      title: "visibilityNote",
      plain: "像提醒“这个阶段先别把某个答案亮出来”。",
      what: "它写当前阶段不该提前出现的具体内容。",
      affects: "影响后续答案、结论或计算结果是否提前暴露。",
      not: "不代表泛泛写“计算结果不该出现”就合格，必须指向具体对象。"
    }
  },
  globalQa: [
    ["错误内容太多，手动改写很费时间", "带清晰题目图片走老流程，用老流程输出放到结构化入参中，点击【解题】重新生成新流程内容，再点击【全部应用】。"],
    ["LaTeX 格式不便观看和修改", "让豆包渲染；或点击图片转 LaTeX，把正确内容转成 LaTeX；也可以自然语言描述给豆包，让它输出 LaTeX 后人工检查。"],
    ["反复重新解题仍无法得到正确结果", "如果能搜到正确解法，截图转 LaTeX 或带截图让检测提示词辅助改；如果搜不到，就把完整 method、题目和你的正确解法说明给检测提示词，再人工检查。"],
    ["method 大幅修改后 directorGuide 没同步", "把修正后的 method 贴给 directorGuide 检测提示词，让它根据 method 重新生成，再人工检查确认。"]
  ]
};
