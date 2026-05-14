import type { Locale } from "./i18n";

const pt = {
  en: {
    badge: "FSA Programs ◆ 1-on-1",
    h1a: "Personalised programs for", gold: "every learner.", h1b: "",
    sub: "Future Skill Academy offers premium 1-on-1 classes in English and future skills — personalised to your age, level, goals, and desired outputs.",
    btn1: "Explore Programs", btn2: "Book Consultation",
    sec_eyebrow: "Our Programs", sec_h2a: "Four personalised programs.", sec_h2b: "One future cohort.",
    focus_label: "What learners work on", outcome_label: "Typical Outputs", trial_btn: "Book a Consultation",

    p1_tagline: "Active 1-on-1 English or Chinese communication coaching.",
    p1_f1: "Natural conversation & listening", p1_f2: "Pronunciation & self-expression",
    p1_f3: "Culture & school life", p1_f4: "Work-life communication", p1_f5: "Useful phrases",
    p1_outcome: "Conversation confidence, phrase bank, pronunciation feedback, short speaking clip, monthly progress note.",


    p2_tagline: "Active 1-on-1 program with English or Chinese support for TOEIC preparation.",
    p2_f1: "TOEIC Listening & Reading", p2_f2: "Vocabulary & grammar",
    p2_f3: "Test strategy & timing", p2_f4: "Weak-point diagnosis", p2_f5: "Score improvement plan",
    p2_outcome: "TOEIC diagnostic profile, target score plan, part-by-part strategy, weak-point map, monthly progress check.",


    p3_tagline: "Active 1-on-1 program on how to use AI responsibly and practically.",
    p3_f1: "AI for research & writing", p3_f2: "Presentations & video creation",
    p3_f3: "Coding support", p3_f4: "Productivity workflows", p3_f5: "AI safety and ethics",
    p3_outcome: "AI prompt library, AI research workflow, presentation outline, video script, coding log, AI safety checklist.",


    p4_tagline: "Flagship premium 1-on-1 program combining language, AI, research, and portfolio-building.",
    p4_f1: "Language communication coaching", p4_f2: "AI & project coaching",
    p4_f3: "Research & writing", p4_f4: "Presentations & video", p4_f5: "CV/profile & portfolio building",
    p4_outcome: "Presentation deck, research brief, AI workflow sample, video script, CV material, speaking clip, final showcase artifact.",


    p5_tagline: "Future group class for matched learning, peer feedback, and public speaking.",
    p5_f1: "Matched group learning", p5_f2: "Collaboration & networking",
    p5_f3: "Peer feedback", p5_f4: "Public speaking", p5_f5: "Group projects & showcase",
    p5_outcome: "Team presentation, peer feedback report, showcase event participation.",
    out_eyebrow: "Student Outputs", out_h2: "What learners create.",
    out_desc: "FSA learners produce real, tangible outputs — things they can keep, share, and be proud of.",
    out1: "Presentation Deck", out2: "Research Brief", out3: "CV / Portfolio Material", out4: "AI Workflow Sample",
    fmt_eyebrow: "How It Works", fmt_h2: "Program format.",
    fmt_desc: "All FSA classes are 1-on-1, personalised, and subscription-based. No fixed textbook. Content is built around you.",
    fmt1_t: "1-on-1 Personalised", fmt1_d: "Every session is tailored to your level, goals, and interests — not a fixed group curriculum.",
    fmt2_t: "Online or In-Person", fmt2_d: "Available online anywhere, or in-person in Japan.",
    fmt3_t: "Monthly Subscription", fmt3_d: "Flexible monthly plans. Fees depend on class type, hours, and format — shared after consultation.",
    fmt4_t: "All Ages & Levels", fmt4_d: "For younger learners, students, and working adults. Adjusted to your starting point.",
    fmt5_t: "Visible Progress", fmt5_d: "Monthly progress reports, class notes, and portfolio outputs so you can see your growth.",
    cta_eyebrow: "Start Here", cta_h2a: "Not sure which", cta_h2b: "program fits?",
    cta_desc: "Book a consultation and we'll discuss your goals, run a diagnostic, and recommend the right class for you.",
    cta_btn1: "Book a Consultation", cta_btn2: "Back to Home",
    nav_why: "Why FSA", nav_programs: "Programs", nav_parents: "For Parents", nav_team: "About", nav_cta: "Book Trial",
    tagline: "Japan ◆ Online / In-Person",
  },
  ja: {
    badge: "FSAプログラム ◆ 1-on-1",
    h1a: "一人ひとりに合わせた", gold: "プレミアム学習。", h1b: "",
    sub: "Future Skill Academyは、英語・未来スキルのプレミアム1-on-1レッスンを提供しています。年齢・レベル・目標・成果物にあわせてカスタマイズ。",
    btn1: "プログラムを見る", btn2: "無料相談を予約",
    sec_eyebrow: "プログラム一覧", sec_h2a: "4つのパーソナライズされたプログラム。", sec_h2b: "1つの未来のコホート。",
    focus_label: "授業で取り組むこと", outcome_label: "典型的な成果物", trial_btn: "無料相談を予約",

    p1_tagline: "Active 1-on-1 English or Chinese communication coaching.",
    p1_f1: "Natural conversation & listening", p1_f2: "Pronunciation & self-expression",
    p1_f3: "Culture & school life", p1_f4: "Work-life communication", p1_f5: "Useful phrases",
    p1_outcome: "Conversation confidence, phrase bank, pronunciation feedback, short speaking clip, monthly progress note.",


    p2_tagline: "Active 1-on-1 program with English or Chinese support for TOEIC preparation.",
    p2_f1: "TOEIC Listening & Reading", p2_f2: "Vocabulary & grammar",
    p2_f3: "Test strategy & timing", p2_f4: "Weak-point diagnosis", p2_f5: "Score improvement plan",
    p2_outcome: "TOEIC diagnostic profile, target score plan, part-by-part strategy, weak-point map, monthly progress check.",


    p3_tagline: "Active 1-on-1 program on how to use AI responsibly and practically.",
    p3_f1: "AI for research & writing", p3_f2: "Presentations & video creation",
    p3_f3: "Coding support", p3_f4: "Productivity workflows", p3_f5: "AI safety and ethics",
    p3_outcome: "AI prompt library, AI research workflow, presentation outline, video script, coding log, AI safety checklist.",


    p4_tagline: "Flagship premium 1-on-1 program combining language, AI, research, and portfolio-building.",
    p4_f1: "Language communication coaching", p4_f2: "AI & project coaching",
    p4_f3: "Research & writing", p4_f4: "Presentations & video", p4_f5: "CV/profile & portfolio building",
    p4_outcome: "Presentation deck, research brief, AI workflow sample, video script, CV material, speaking clip, final showcase artifact.",


    p5_tagline: "Future group class for matched learning, peer feedback, and public speaking.",
    p5_f1: "Matched group learning", p5_f2: "Collaboration & networking",
    p5_f3: "Peer feedback", p5_f4: "Public speaking", p5_f5: "Group projects & showcase",
    p5_outcome: "Team presentation, peer feedback report, showcase event participation.",

    out_eyebrow: "生徒の成果物", out_h2: "生徒が制作するもの。",
    out_desc: "FSAの生徒は実際の成果物を制作します — 手元に残せて、共有でき、誇れるものを。",
    out1: "プレゼン資料", out2: "調査レポート", out3: "CV・ポートフォリオ素材", out4: "AIワークフローサンプル",
    fmt_eyebrow: "受講の流れ", fmt_h2: "プログラムの形式。",
    fmt_desc: "FSAのすべてのクラスは1-on-1、個別対応、サブスクリプション制。固定テキストなし。あなたに合わせたコンテンツ。",
    fmt1_t: "1-on-1 個別対応", fmt1_d: "毎回のセッションはあなたのレベル・目標・興味に合わせて設計。固定グループカリキュラムではありません。",
    fmt2_t: "オンラインまたは対面", fmt2_d: "オンラインはどこでも受講可、対面は日本国内で対応。",
    fmt3_t: "月額サブスクリプション", fmt3_d: "柔軟な月額プランです。料金はクラスの種類・時間・形式により異なります — 相談後にご案内。",
    fmt4_t: "全年齢・全レベル対応", fmt4_d: "年少者・学生・社会人に対応。あなたの出発点に合わせて調整します。",
    fmt5_t: "見える成長", fmt5_d: "毎月の進捗レポート・授業ノート・ポートフォリオ成果物で、成長を実感できます。",
    cta_eyebrow: "まずはここから", cta_h2a: "どのプログラムが", cta_h2b: "合うか迷ったら？",
    cta_desc: "相談を予約すれば、目標を伺い、診断を行い、最適なクラスをご提案します。",
    cta_btn1: "無料相談を予約", cta_btn2: "ホームへ戻る",
    nav_why: "FSAとは", nav_programs: "プログラム", nav_parents: "保護者の方へ", nav_team: "チーム紹介", nav_cta: "体験を予約",
    tagline: "東京 ◆ オンライン / 対面",
  },
  "zh-TW": {
    badge: "FSA課程 ◆ 一對一",
    h1a: "為每位學習者", gold: "量身打造。", h1b: "",
    sub: "Future Skill Academy 提供頂級一對一英語與未來技能課程，根據您的年齡、程度、目標與成果需求量身規劃。",
    btn1: "探索課程", btn2: "預約免費諮詢",
    sec_eyebrow: "我們的課程", sec_h2a: "四個個人化課程。", sec_h2b: "一個未來的群組課程。",
    focus_label: "學員的學習重點", outcome_label: "典型成果", trial_btn: "預約免費諮詢",

    p1_tagline: "Active 1-on-1 English or Chinese communication coaching.",
    p1_f1: "Natural conversation & listening", p1_f2: "Pronunciation & self-expression",
    p1_f3: "Culture & school life", p1_f4: "Work-life communication", p1_f5: "Useful phrases",
    p1_outcome: "Conversation confidence, phrase bank, pronunciation feedback, short speaking clip, monthly progress note.",


    p2_tagline: "Active 1-on-1 program with English or Chinese support for TOEIC preparation.",
    p2_f1: "TOEIC Listening & Reading", p2_f2: "Vocabulary & grammar",
    p2_f3: "Test strategy & timing", p2_f4: "Weak-point diagnosis", p2_f5: "Score improvement plan",
    p2_outcome: "TOEIC diagnostic profile, target score plan, part-by-part strategy, weak-point map, monthly progress check.",


    p3_tagline: "Active 1-on-1 program on how to use AI responsibly and practically.",
    p3_f1: "AI for research & writing", p3_f2: "Presentations & video creation",
    p3_f3: "Coding support", p3_f4: "Productivity workflows", p3_f5: "AI safety and ethics",
    p3_outcome: "AI prompt library, AI research workflow, presentation outline, video script, coding log, AI safety checklist.",


    p4_tagline: "Flagship premium 1-on-1 program combining language, AI, research, and portfolio-building.",
    p4_f1: "Language communication coaching", p4_f2: "AI & project coaching",
    p4_f3: "Research & writing", p4_f4: "Presentations & video", p4_f5: "CV/profile & portfolio building",
    p4_outcome: "Presentation deck, research brief, AI workflow sample, video script, CV material, speaking clip, final showcase artifact.",


    p5_tagline: "Future group class for matched learning, peer feedback, and public speaking.",
    p5_f1: "Matched group learning", p5_f2: "Collaboration & networking",
    p5_f3: "Peer feedback", p5_f4: "Public speaking", p5_f5: "Group projects & showcase",
    p5_outcome: "Team presentation, peer feedback report, showcase event participation.",

    out_eyebrow: "學員成果", out_h2: "學員所創作的作品。",
    out_desc: "FSA學員產出真實、具體的成果 — 可以保留、分享並引以為傲的作品。",
    out1: "簡報資料", out2: "研究摘要", out3: "履歷 / 作品集素材", out4: "AI工作流程範本",
    fmt_eyebrow: "課程運作方式", fmt_h2: "課程形式。",
    fmt_desc: "所有FSA課程均為一對一、個人化且訂閱制。沒有固定課本，內容圍繞您量身打造。",
    fmt1_t: "一對一個人化", fmt1_d: "每堂課均依您的程度、目標與興趣設計，而非固定的團體課程。",
    fmt2_t: "線上或面授", fmt2_d: "線上可從任何地方上課，面授於日本進行。",
    fmt3_t: "月度訂閱", fmt3_d: "靈活的月費方案。費用依課程類型、時數與形式而定，諮詢後說明。",
    fmt4_t: "全年齡與程度", fmt4_d: "適合年幼學習者、學生與在職成人，依您的起點調整。",
    fmt5_t: "看得見的進步", fmt5_d: "每月進度報告、課堂筆記與作品集成果，讓您清楚看到成長。",
    cta_eyebrow: "從這裡開始", cta_h2a: "不確定哪個", cta_h2b: "課程適合您？",
    cta_desc: "預約諮詢，我們將討論您的目標，進行診斷，並推薦適合的課程。",
    cta_btn1: "預約免費諮詢", cta_btn2: "返回首頁",
    nav_why: "為什麼選FSA", nav_programs: "課程", nav_parents: "家長專區", nav_team: "關於", nav_cta: "預約體驗",
    tagline: "東京 ◆ 線上 / 面授",
  },
  "zh-CN": {
    badge: "FSA课程 ◆ 一对一",
    h1a: "为每位学习者", gold: "量身定制。", h1b: "",
    sub: "Future Skill Academy 提供顶级一对一英语与未来技能课程，根据您的年龄、程度、目标与成果需求量身规划。",
    btn1: "探索课程", btn2: "预约免费咨询",
    sec_eyebrow: "我们的课程", sec_h2a: "四个个性化课程。", sec_h2b: "一个未来的群组课程。",
    focus_label: "学员的学习重点", outcome_label: "典型成果", trial_btn: "预约免费咨询",

    p1_tagline: "Active 1-on-1 English or Chinese communication coaching.",
    p1_f1: "Natural conversation & listening", p1_f2: "Pronunciation & self-expression",
    p1_f3: "Culture & school life", p1_f4: "Work-life communication", p1_f5: "Useful phrases",
    p1_outcome: "Conversation confidence, phrase bank, pronunciation feedback, short speaking clip, monthly progress note.",


    p2_tagline: "Active 1-on-1 program with English or Chinese support for TOEIC preparation.",
    p2_f1: "TOEIC Listening & Reading", p2_f2: "Vocabulary & grammar",
    p2_f3: "Test strategy & timing", p2_f4: "Weak-point diagnosis", p2_f5: "Score improvement plan",
    p2_outcome: "TOEIC diagnostic profile, target score plan, part-by-part strategy, weak-point map, monthly progress check.",


    p3_tagline: "Active 1-on-1 program on how to use AI responsibly and practically.",
    p3_f1: "AI for research & writing", p3_f2: "Presentations & video creation",
    p3_f3: "Coding support", p3_f4: "Productivity workflows", p3_f5: "AI safety and ethics",
    p3_outcome: "AI prompt library, AI research workflow, presentation outline, video script, coding log, AI safety checklist.",


    p4_tagline: "Flagship premium 1-on-1 program combining language, AI, research, and portfolio-building.",
    p4_f1: "Language communication coaching", p4_f2: "AI & project coaching",
    p4_f3: "Research & writing", p4_f4: "Presentations & video", p4_f5: "CV/profile & portfolio building",
    p4_outcome: "Presentation deck, research brief, AI workflow sample, video script, CV material, speaking clip, final showcase artifact.",


    p5_tagline: "Future group class for matched learning, peer feedback, and public speaking.",
    p5_f1: "Matched group learning", p5_f2: "Collaboration & networking",
    p5_f3: "Peer feedback", p5_f4: "Public speaking", p5_f5: "Group projects & showcase",
    p5_outcome: "Team presentation, peer feedback report, showcase event participation.",

    out_eyebrow: "学员成果", out_h2: "学员所创作的作品。",
    out_desc: "FSA学员产出真实、具体的成果 — 可以保留、分享并引以为傲的作品。",
    out1: "演示资料", out2: "研究摘要", out3: "简历 / 作品集素材", out4: "AI工作流程样本",
    fmt_eyebrow: "课程运作方式", fmt_h2: "课程形式。",
    fmt_desc: "所有FSA课程均为一对一、个性化且订阅制。没有固定课本，内容围绕您量身打造。",
    fmt1_t: "一对一个性化", fmt1_d: "每堂课均依您的程度、目标与兴趣设计，而非固定的团体课程。",
    fmt2_t: "线上或面授", fmt2_d: "线上可从任何地方上课，面授于日本进行。",
    fmt3_t: "月度订阅", fmt3_d: "灵活的月费方案。费用依课程类型、时数与形式而定，咨询后说明。",
    fmt4_t: "全年龄与程度", fmt4_d: "适合年幼学习者、学生与在职成人，依您的起点调整。",
    fmt5_t: "看得见的进步", fmt5_d: "每月进度报告、课堂笔记与作品集成果，让您清楚看到成长。",
    cta_eyebrow: "从这里开始", cta_h2a: "不确定哪个", cta_h2b: "课程适合您？",
    cta_desc: "预约咨询，我们将讨论您的目标，进行诊断，并推荐适合的课程。",
    cta_btn1: "预约免费咨询", cta_btn2: "返回首页",
    nav_why: "为什么选FSA", nav_programs: "课程", nav_parents: "家长专区", nav_team: "关于", nav_cta: "预约体验",
    tagline: "东京 ◆ 线上 / 面授",
  },
} as const;

export type ProgramsLocale = typeof pt.en;
export function usePT(locale: Locale): ProgramsLocale {
  return pt[locale] as ProgramsLocale;
}
