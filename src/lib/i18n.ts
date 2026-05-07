export type Locale = "en" | "ja" | "zh-TW" | "zh-CN";

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  ja: "日本語",
  "zh-TW": "繁體中文",
  "zh-CN": "简体中文",
};

export const localeNames: Record<Locale, string> = {
  en: "English",
  ja: "日本語",
  "zh-TW": "繁體中文",
  "zh-CN": "简体中文",
};

// ─── Translation dictionary ────────────────────────────────────────────────
export const translations = {
  en: {
    // Navbar
    nav_programs: "Programs",
    nav_philosophy: "Philosophy",
    nav_parents: "For Parents",
    nav_contact: "Contact",
    nav_cta: "Free Trial →",
    nav_tagline: "Tokyo · Global",

    // Hero
    hero_badge: "Future Skill Academy · Est. Tokyo",
    hero_h1_line1: "Build",
    hero_h1_highlight: "Future-Ready",
    hero_h1_line2: "Skills.",
    hero_desc:
      "FSA helps students develop communication, AI literacy, presentation, research, and real-world project skills — through English-based, portfolio-driven learning.",
    hero_cta_primary: "Book a Free Trial →",
    hero_cta_secondary: "Explore Programs",
    hero_stat1_val: "10–18",
    hero_stat1_label: "Student Ages",
    hero_stat2_val: "100%",
    hero_stat2_label: "English",
    hero_stat3_val: "Tokyo",
    hero_stat3_label: "Global Cohorts",
    hero_card_badge: "Portfolio Learning",
    hero_card_h2: "A different kind of academy — built for the next decade.",
    hero_card_desc:
      "Confidence, creativity, communication, and AI fluency built through real projects.",

    // Programs section
    section01_eyebrow: "01 — Why FSA",
    section01_h2: "A different kind of academy — built for the next decade.",
    section01_desc:
      "FSA is designed for families who want their children to do more than memorize. We teach the skills traditional schools struggle to deliver — practiced in English, proven in projects, and built into portfolios.",
    feature1_title: "English-Based Learning",
    feature1_desc: "Every class taught in English — from inquiry to presentation.",
    feature2_title: "Real-World Projects",
    feature2_desc:
      "Students create portfolio-grade outputs: research, decks, videos, and pitches.",
    feature3_title: "AI Literacy",
    feature3_desc: "Responsible, fluent AI usage — learning to think with machines.",
    feature4_title: "Presentation & Voice",
    feature4_desc:
      "Structured speaking, storytelling, and confident public presentation.",
    feature5_title: "Small-Group Coaching",
    feature5_desc: "Students are seen, heard, challenged, and supported.",
    feature6_title: "International Mindset",
    feature6_desc: "Curriculum framed by global standards and global ambition.",

    // Philosophy section
    section02_eyebrow: "02 — Learning Philosophy",
    section02_h2:
      "Education designed for the world students will actually live in.",
    section02_desc:
      "The next decade rewards communicators, creators, and critical thinkers — people who can frame a problem, work with AI, and present a clear point of view. FSA is built around that reality.",
    pillar1: "Project-Based",
    pillar2: "English as a Tool",
    pillar3: "Confidence Through Reps",
    pillar4: "Creativity + Structure",

    // Contact section
    contact_eyebrow: "Start Here",
    contact_h2: "Build skills students can actually use.",
    contact_desc:
      "Book a free trial or consultation to see whether FSA is the right fit for your child.",
    contact_cta: "Book a Free Trial →",
  },

  ja: {
    // Navbar
    nav_programs: "プログラム",
    nav_philosophy: "教育方針",
    nav_parents: "保護者の方へ",
    nav_contact: "お問い合わせ",
    nav_cta: "無料体験 →",
    nav_tagline: "東京 · グローバル",

    // Hero
    hero_badge: "Future Skill Academy · 東京発",
    hero_h1_line1: "培おう、",
    hero_h1_highlight: "未来に通用する",
    hero_h1_line2: "スキルを。",
    hero_desc:
      "FSAは、コミュニケーション・AIリテラシー・プレゼンテーション・調査・実践的プロジェクト制作を英語ベースで学ぶ、ポートフォリオ重視のアカデミーです。",
    hero_cta_primary: "無料体験を予約する →",
    hero_cta_secondary: "プログラムを見る",
    hero_stat1_val: "10〜18",
    hero_stat1_label: "対象年齢",
    hero_stat2_val: "100%",
    hero_stat2_label: "英語",
    hero_stat3_val: "東京",
    hero_stat3_label: "グローバルコホート",
    hero_card_badge: "ポートフォリオ学習",
    hero_card_h2: "次の10年のために設計された、新しいアカデミー。",
    hero_card_desc:
      "自信・創造力・コミュニケーション・AI活用力を実践的なプロジェクトで身につけます。",

    // Programs section
    section01_eyebrow: "01 — なぜFSAなのか",
    section01_h2: "次の10年のために設計された、新しいアカデミー。",
    section01_desc:
      "FSAは、暗記よりも深い学びを求める家族のためにデザインされました。従来の学校では教えにくいスキルを、英語で実践し、プロジェクトで証明し、ポートフォリオに残します。",
    feature1_title: "英語ベースの学習",
    feature1_desc: "探究からプレゼンまで、すべての授業を英語で行います。",
    feature2_title: "実社会に活きるプロジェクト",
    feature2_desc:
      "リサーチ・スライド・動画・ピッチなど、ポートフォリオ品質の成果物を作成します。",
    feature3_title: "AIリテラシー",
    feature3_desc: "AIを責任ある形で活用し、機械と共に考える力を培います。",
    feature4_title: "プレゼンと表現力",
    feature4_desc:
      "構造化されたスピーキング・ストーリーテリング・自信あるパブリックプレゼンテーション。",
    feature5_title: "少人数コーチング",
    feature5_desc: "一人ひとりが見られ、聴かれ、挑戦し、支えられる環境。",
    feature6_title: "国際的な視野",
    feature6_desc: "グローバルスタンダードと野心を軸にしたカリキュラム。",

    // Philosophy section
    section02_eyebrow: "02 — 教育方針",
    section02_h2: "学生が実際に生きる世界のために設計された教育。",
    section02_desc:
      "これからの10年は、コミュニケーター・クリエイター・クリティカルシンカーが活躍します。問題を整理し、AIと協働し、明確な視点を伝えられる人材。FSAはその現実に基づいています。",
    pillar1: "プロジェクト型学習",
    pillar2: "ツールとしての英語",
    pillar3: "反復による自信",
    pillar4: "創造力＋構造",

    // Contact section
    contact_eyebrow: "まずはここから",
    contact_h2: "実際に使えるスキルを身につけよう。",
    contact_desc:
      "無料体験や相談会を予約して、FSAがお子さまに合っているかを確かめてください。",
    contact_cta: "無料体験を予約する →",
  },

  "zh-TW": {
    // Navbar
    nav_programs: "課程",
    nav_philosophy: "教育理念",
    nav_parents: "給家長",
    nav_contact: "聯絡我們",
    nav_cta: "免費體驗 →",
    nav_tagline: "東京 · 全球",

    // Hero
    hero_badge: "Future Skill Academy · 創立於東京",
    hero_h1_line1: "培養",
    hero_h1_highlight: "面向未來",
    hero_h1_line2: "的技能。",
    hero_desc:
      "FSA 幫助學生以英語為媒介，透過作品集導向的學習，建立溝通、AI素養、簡報、研究及實際專案能力。",
    hero_cta_primary: "預約免費體驗 →",
    hero_cta_secondary: "探索課程",
    hero_stat1_val: "10–18",
    hero_stat1_label: "學生年齡",
    hero_stat2_val: "100%",
    hero_stat2_label: "英語授課",
    hero_stat3_val: "東京",
    hero_stat3_label: "全球學習小組",
    hero_card_badge: "作品集學習",
    hero_card_h2: "為下一個十年而生的學院。",
    hero_card_desc:
      "透過真實專案，培養自信、創造力、溝通能力與AI應用力。",

    // Programs section
    section01_eyebrow: "01 — 為什麼選擇FSA",
    section01_h2: "為下一個十年而生的學院。",
    section01_desc:
      "FSA 專為希望孩子不只是死記硬背的家庭設計。我們教導傳統學校難以傳授的技能——以英語實踐，以專案驗證，以作品集留存。",
    feature1_title: "英語教學",
    feature1_desc: "從探究到簡報，每堂課皆以英語進行。",
    feature2_title: "真實世界專案",
    feature2_desc:
      "學生創作達到作品集水準的成果：研究、簡報、影片與提案。",
    feature3_title: "AI 素養",
    feature3_desc: "負責任地使用AI，學會與機器共同思考。",
    feature4_title: "簡報與表達",
    feature4_desc: "結構化的口語表達、說故事，以及自信的公開演講。",
    feature5_title: "小班制輔導",
    feature5_desc: "每位學生都被看見、聆聽、挑戰與支持。",
    feature6_title: "國際視野",
    feature6_desc: "以全球標準與志向為框架設計的課程。",

    // Philosophy section
    section02_eyebrow: "02 — 學習理念",
    section02_h2: "為學生真正將要生活的世界設計的教育。",
    section02_desc:
      "未來十年屬於溝通者、創造者與批判思考者——能夠界定問題、與AI協作、清晰表達觀點的人。FSA的設計正是以此為核心。",
    pillar1: "專案導向",
    pillar2: "英語作為工具",
    pillar3: "反覆練習建立自信",
    pillar4: "創意＋結構",

    // Contact section
    contact_eyebrow: "從這裡開始",
    contact_h2: "培養學生真正能用的技能。",
    contact_desc:
      "預約免費體驗或諮詢，了解FSA是否適合您的孩子。",
    contact_cta: "預約免費體驗 →",
  },

  "zh-CN": {
    // Navbar
    nav_programs: "课程",
    nav_philosophy: "教育理念",
    nav_parents: "给家长",
    nav_contact: "联系我们",
    nav_cta: "免费体验 →",
    nav_tagline: "东京 · 全球",

    // Hero
    hero_badge: "Future Skill Academy · 创立于东京",
    hero_h1_line1: "培养",
    hero_h1_highlight: "面向未来",
    hero_h1_line2: "的技能。",
    hero_desc:
      "FSA 帮助学生以英语为媒介，通过作品集导向的学习，建立沟通、AI素养、演示、研究及实际项目能力。",
    hero_cta_primary: "预约免费体验 →",
    hero_cta_secondary: "探索课程",
    hero_stat1_val: "10–18",
    hero_stat1_label: "学生年龄",
    hero_stat2_val: "100%",
    hero_stat2_label: "英语授课",
    hero_stat3_val: "东京",
    hero_stat3_label: "全球学习小组",
    hero_card_badge: "作品集学习",
    hero_card_h2: "为下一个十年而生的学院。",
    hero_card_desc:
      "通过真实项目，培养自信、创造力、沟通能力与AI应用力。",

    // Programs section
    section01_eyebrow: "01 — 为什么选择FSA",
    section01_h2: "为下一个十年而生的学院。",
    section01_desc:
      "FSA 专为希望孩子不只是死记硬背的家庭设计。我们教导传统学校难以传授的技能——以英语实践，以项目验证，以作品集留存。",
    feature1_title: "英语教学",
    feature1_desc: "从探究到演示，每堂课皆以英语进行。",
    feature2_title: "真实世界项目",
    feature2_desc:
      "学生创作达到作品集水准的成果：研究、演示、视频与提案。",
    feature3_title: "AI 素养",
    feature3_desc: "负责任地使用AI，学会与机器共同思考。",
    feature4_title: "演示与表达",
    feature4_desc: "结构化的口语表达、讲故事，以及自信的公开演讲。",
    feature5_title: "小班制辅导",
    feature5_desc: "每位学生都被看见、聆听、挑战与支持。",
    feature6_title: "国际视野",
    feature6_desc: "以全球标准与志向为框架设计的课程。",

    // Philosophy section
    section02_eyebrow: "02 — 学习理念",
    section02_h2: "为学生真正将要生活的世界设计的教育。",
    section02_desc:
      "未来十年属于沟通者、创造者与批判思考者——能够界定问题、与AI协作、清晰表达观点的人。FSA的设计正是以此为核心。",
    pillar1: "项目导向",
    pillar2: "英语作为工具",
    pillar3: "反复练习建立自信",
    pillar4: "创意＋结构",

    // Contact section
    contact_eyebrow: "从这里开始",
    contact_h2: "培养学生真正能用的技能。",
    contact_desc: "预约免费体验或咨询，了解FSA是否适合您的孩子。",
    contact_cta: "预约免费体验 →",
  },
} as const;

export type TranslationKey = keyof typeof translations.en;
export type Translations = typeof translations.en;
