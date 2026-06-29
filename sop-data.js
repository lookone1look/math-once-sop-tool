window.SOP_TOOL_DATA = {
  title: "数学只错一次【新版】任务 SOP 工具",
  subtitle: "音画同步板书值班版",
  version: "2026-06-29 步骤0任务筛选版",
  source: "数学只错一次【新版】任务的操作SOP（音画同步板书）.docx",
  updateNote: "内容更新时优先改 sop-data.js；工具外壳不需要重做。",
  steps: [
    {
      id: "filter-own-task",
      no: "0",
      title: "筛选自己的任务",
      source: "任务列表筛选区",
      goal: "先把任务列表筛到自己当前要处理的范围，避免打开错任务。",
      action: "在任务列表筛选区，先设置【反馈时间】，再选择【学生学段】，然后点击【查询】。",
      pass: [
        "反馈时间已按当前值班要求设置。",
        "学生学段已选为自己负责的学段。",
        "点击【查询】后，只从筛选结果里进入任务。"
      ],
      exception: "如果查不到任务，先确认反馈时间和学生学段是否选对；仍查不到时，带上当前筛选条件找负责人确认。",
      media: [
        {
          title: "任务筛选参考图",
          src: "assets/step-0-filter-own-task.png",
          alt: "任务列表中反馈时间和学生学段筛选位置参考图"
        }
      ],
      fields: [],
      qa: [
        ["为什么要先筛选？", "任务列表里可能有其他老师或其他学段的任务，先筛选能减少打开错任务的风险。"],
        ["筛选后没有任务怎么办？", "先改小范围检查反馈时间和学生学段；仍没有时，把筛选条件截图给负责人确认。"]
      ],
      tags: ["任务筛选", "反馈时间", "学生学段", "查询", "自己的任务"]
    },
    {
      id: "enter-new",
      no: "1",
      title: "确认进入新版任务",
      source: "原 SOP：进入题目编辑",
      goal: "先判断这道题能不能按新版流程继续做。",
      entry: "任务列表勾选“新版”，点击【编辑】。",
      action: "进入编辑页后，先看页面内容结构是否与新版流程一致。",
      pass: [
        "先按“进入编辑界面参考图”找到新版任务并点击【编辑】。",
        "点击【编辑】按钮后，页面内容结构要与“页面结构核对参考图”一致。",
        "如果不一致，重新执行这一步或者刷新后再判断。",
        "后续可以继续检查题干、答案、questionAnalysis、questionMethod 和 directorGuide。"
      ],
      exception: "结构不一致时，先重新进入或刷新；仍不一致时点击“异常判断”，按三个条件确认是否标异常。",
      exceptionAction: {
        label: "异常判断",
        title: "异常任务判断",
        action: "刷新或重新进入一次，再检查三个条件是否同时满足。",
        pass: [
          "页面结构要与异常任务参考图一致或高度相似。",
          "是“新版”任务。",
          "questionMethod 中没有 steps、content 字段。",
          "directorGuide 仍为空。"
        ],
        result: "三项同时满足：标记异常，标签为“其他”。不是同时满足但仍无法修改：联系鑫宇或刘蒙确认。",
        media: [
          {
            title: "异常任务参考图",
            src: "assets/step-1-2-abnormal-task.png",
            alt: "异常任务页面结构参考图"
          }
        ],
        qa: [
          ["只满足其中两项能标异常吗？", "不能直接标。带上任务 id 和卡住的具体条件，找鑫宇或刘蒙确认。"],
          ["为什么要三项同时满足？", "因为这一步判断的是“新版任务但入参仍不是新流程”，单独一个现象不能证明。"]
        ]
      },
      media: [
        {
          title: "进入编辑界面参考图",
          src: "assets/step-1-1-new-entry.png",
          alt: "任务列表勾选新版并进入编辑页后的结构参考图"
        },
        {
          title: "页面结构核对参考图",
          src: "assets/step-1-1-check-page.png",
          alt: "正常待修改任务页面结构核对参考图"
        }
      ],
      fields: ["questionMethod", "directorGuide"],
      qa: [
        ["看起来不像新版怎么办？", "先刷新或重新进入一次。还不像时，不直接改字段，点击本步异常里的“异常判断”。"],
        ["只看到部分字段能继续吗？", "先看 questionMethod 是否有 steps/content，directorGuide 是否为空；不满足正常结构就不要继续猜。"]
      ],
      tags: ["新版", "入口", "编辑", "异常", "steps", "content", "directorGuide"]
    },
    {
      id: "stem-answer",
      no: "2",
      title: "检查题干与答案",
      source: "原 SOP：题干&答案字段检查",
      goal: "检查题干和答案两个字段是否正确无误。",
      action: "检查题干是否完整、答案是否正确。简单错误直接手动改。",
      pass: [
        "题干信息完整，无明显 OCR 错误。",
        "答案与题目条件和计算过程一致。"
      ],
      exception: "错误较大时，用清晰题目图片重跑老提示词；复杂题答案暂时无法确定，可以等所有字段确认后再回查。",
      media: [
        {
          title: "题干和答案字段参考图",
          src: "assets/step-2-1-stem-answer.png",
          alt: "题干和答案字段所在位置参考图"
        }
      ],
      fields: [],
      qa: [
        ["答案一时算不出来怎么办？", "先标记回查，不要让不确定答案继续污染后面的 questionMethod。"],
        ["题干错一点要不要修？", "要。题干是后续字段的源头，小错可能导致后面整套步骤都跟着错。"]
      ],
      tags: ["题干", "答案", "OCR", "老提示词", "图片"]
    },
    {
      id: "analysis",
      no: "3",
      title: "检查 questionAnalysis",
      source: "原 SOP：分析(questionAnalysis)字段的修改及检查",
      goal: "确认解题思路正确，给讲题模型一个可靠方向。",
      action: "确认思路是否正确、是否符合题目条件。简单错误手动改；改动大时先用老流程提示词产出较正确版本再修。",
      pass: [
        "不使用超纲方法。",
        "思路正确。",
        "与 questionMethod 的解题方法一致，不出现 analysis 是方法 A、method 是方法 B。",
        "内容足够支撑讲题模型理解解题方向。",
        "无固定格式要求。"
      ],
      exception: "若修改了 analysis，一定要确认它和 method 的解题思路一致，不要出现 analysis 是方法 A、method 是方法 B。",
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
      no: "4",
      title: "检查 questionMethod",
      source: "原 SOP：解答过程(questionMethod)字段的修改及检查",
      goal: "逐条检查板书素材，保证内容对、顺序对、标注对。",
      action: "逐条检查 content、label、priority、marks、keySegments。修改后用下方编译框预览，保存并刷新后确认效果。",
      pass: [
        "content 无事实和计算错误。",
        "顺序符合正常讲题逻辑。",
        "每条 content 最多只有一步推导。",
        "关键板书在 priority 字段标 key。",
        "关键结论、公式等有 marks 或 keySegments。",
        "label 标签挂载正确。"
      ],
      exception: "",
      media: [
        {
          title: "点击修改按钮后可在编辑框内编辑",
          src: "assets/step-3-2-edit-button.png",
          alt: "questionMethod 修改按钮参考图"
        },
        {
          title: "也可以在内容框内直接编辑",
          src: "assets/step-3-2-inline-edit.png",
          alt: "questionMethod 内容框直接编辑参考图"
        }
      ],
      evidence: "questionMethod 原文、修改后 JSON、编译预览、保存刷新后的效果。",
      fields: ["questionMethod", "steps", "content", "label", "priority", "marks", "keySegments"],
      qa: [
        ["为什么不能一句写多步？", "因为 content 会完整写到板书上，多步塞在一句里，讲题时很难定位和强调。"],
        ["marks 和 keySegments 怎么区分？", "marks 是写出来就持续高亮；keySegments 是模型讲到时可以临时强调。"]
      ],
      tags: ["questionMethod", "steps", "content", "label", "priority", "marks", "keySegments", "latex", "JSON", "板书", "高亮"]
    },
    {
      id: "director-guide",
      no: "5",
      title: "检查 directorGuide",
      source: "原 SOP：directorGuide字段的修改及检查",
      goal: "检查 directorGuide 的阶段数量是否合理，visibilityNote 是否指向具体内容；如果 questionMethod 大改过，要同步检查 directorGuide。",
      action: "一般不需要大幅修改；只有 questionMethod 做过大幅改动，或 visibilityNote 指向不明确时，才按 questionMethod 的修改方式进入内容框调整。",
      pass: [
        "按题目复杂度设置约 3-6 个阶段。",
        "visibilityNote 指向具体对象。",
        "阶段与 questionMethod 顺序一致。"
      ],
      exception: "写成“计算结果不该出现”这类泛泛表达时，改成具体内容；method 大改后阶段不匹配时同步调整。",
      media: [
        {
          title: "directorGuide 修改入口参考图",
          src: "assets/step-3-3-edit-entry.png",
          alt: "directorGuide 编辑入口参考图"
        }
      ],
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
      no: "6",
      title: "检测 questionMethod",
      source: "原 SOP：检测与提交 / Method检测提示词",
      goal: "用 Method 检测提示词做最后复核，再人工确认。",
      action: "点击右上方「提示词附录」，打开《Method检测提示词.md》，复制内容贴给豆包，选择专家模式后发送，等豆包回复后再粘贴待检查字段。豆包会输出硬错误和建议两类错误，以及修改硬错误之后的全量正确内容，将正确内容黏贴到后台并检查硬错误是否正确修改，建议是否需要改。",
      pass: [
        "检测结果没有硬错误。",
        "风险项已人工确认或已修改。"
      ],
      exceptionItems: [
        {
          title: "情况一：错误内容太多，手动改写很费时间",
          body: "带清晰题目图片走老流程，用老流程输出放到结构化入参中，点击【解题】重新生成新流程内容，再点击【全部应用】。",
          media: [
            {
              title: "情况一处理参考图：入参结构化后重新生成并全部应用",
              src: "assets/qa-regenerate-method-warning.png",
              alt: "入参结构化、调用解题模型和全部应用的位置参考图"
            }
          ]
        },
        {
          title: "情况二：反复重新解题仍然无法得到正确结果，但能搜到正确解法",
          body: "把正确解法截图、题干图片和错误 method 给 Method 检测提示词，并说清楚要怎么改，让它输出符合要求的内容，再人工检查。"
        },
        {
          title: "情况三：反复重新解题仍然无法得到正确结果，也搜不到正确解法",
          body: "把完整 method、题目和你手动确认的正确解法给 Method 检测提示词，让它输出符合要求的内容，再人工检查。"
        }
      ],
      evidence: "检测提示词文件名、输入字段、豆包输出结论、最终修改记录。",
      fields: ["questionMethod", "steps", "label", "marks", "keySegments"],
      qa: [
        ["豆包输出能直接覆盖吗？", "不能直接全量覆盖。它是复核建议，仍要按题目事实人工确认。"]
      ],
      tags: ["Method检测", "豆包", "专家模式", "JSON", "LaTeX", "label", "marks", "keySegments"]
    },
    {
      id: "director-review",
      no: "7",
      title: "检测 directorGuide",
      source: "原 SOP：检测与提交 / directorGuide检测提示词",
      goal: "用 directorGuide 检测提示词复核阶段划分和提前暴露控制，再人工确认。",
      action: "点击右上方「提示词附录」，打开《directorGuide检测提示词.md》，复制内容贴给豆包，选择专家模式后发送，等豆包回复后再粘贴待检查字段。",
      pass: [
        "阶段数量合理。",
        "每条 visibilityNote 指向具体内容。",
        "与 questionMethod 顺序一致。"
      ],
      exception: "如果 method 大幅修改后 directorGuide 没有同步变化：将修正后的 method 贴给 directorGuide 检测提示词，让它根据 method 重新生成，并做人工检查确认。检测后如果阶段过粗、过细或 visibilityNote 对象不明确，回到第 5 步修改后重新检查。",
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
      no: "8",
      title: "正常提交",
      source: "原 SOP：检测与提交",
      goal: "确认字段、预览、复核都通过后再提交。",
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
      no: "9",
      title: "标异常",
      source: "原 SOP：Q&A以及待优化点 / 异常口径",
      goal: "无法按正常流程处理时，给出可回查的异常证据。",
      action: "按异常处理口径留证据，必要时联系鑫宇或刘蒙确认。",
      pass: [
        "异常原因能回指到字段或页面状态。",
        "不是只凭主观感觉。"
      ],
      exception: "同时满足异常判断三项条件时，标签选“其他”；其他无法判断情况先确认后处理。",
      evidence: "页面截图、字段截图、联系确认记录、异常标签。",
      fields: ["questionMethod", "directorGuide"],
      qa: [
        ["能自己修但很费时间，要标异常吗？", "先看是否能走重生成或检测提示词辅助修。标异常要有字段或页面证据。"],
        ["联系确认前要准备什么？", "带上任务 id 和卡住的具体条件。"]
      ],
      tags: ["标异常", "其他", "截图", "证据", "联系"]
    }
  ],
  promptAppendix: [
    {
      title: "Method检测提示词.md",
      file: "prompts/method-check.md",
      usage: "用于检查 questionMethod.steps 的结构、内容、LaTeX、label、marks、keySegments。"
    },
    {
      title: "directorGuide检测提示词.md",
      file: "prompts/director-guide-check.md",
      usage: "用于检查 directorGuide 的 stage 和 visibilityNote 是否合理。"
    },
    {
      title: "老流程提示词.md",
      file: "prompts/old-flow.md",
      usage: "用于用清晰题目图片重新生成老流程解题内容，再辅助新流程修正。"
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
    ["反复重新解题仍无法得到正确结果", "如果能搜到正确解法，截图转 LaTeX 或带截图让检测提示词辅助改；如果搜不到，就把完整 method、题目和你的正确解法说明给检测提示词，再人工检查。"],
    ["method 大幅修改后 directorGuide 没同步", "把修正后的 method 贴给 directorGuide 检测提示词，让它根据 method 重新生成，再人工检查确认。"]
  ]
};
