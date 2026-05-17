"use client";

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Marquee } from '@/components/ui/3d-testimonials';
import { useLanguage } from '@/hooks/useLanguage';
import { type Locale } from '@/lib/i18n';

// Static per-person data that never changes across locales
const people = [
  { name: 'Haruto T.', img: 'https://randomuser.me/api/portraits/men/32.jpg', flag: '🇯🇵' },
  { name: 'Yuki S.',   img: 'https://randomuser.me/api/portraits/women/44.jpg', flag: '🇯🇵' },
  { name: 'Mei-Lin C.',img: 'https://randomuser.me/api/portraits/women/68.jpg', flag: '🇹🇼' },
  { name: 'James M.',  img: 'https://randomuser.me/api/portraits/men/51.jpg',   flag: '🇬🇧' },
  { name: 'Rin N.',    img: 'https://randomuser.me/api/portraits/women/53.jpg', flag: '🇯🇵' },
  { name: 'Akira W.',  img: 'https://randomuser.me/api/portraits/men/33.jpg',   flag: '🇯🇵' },
  { name: 'Sophie K.', img: 'https://randomuser.me/api/portraits/women/45.jpg', flag: '🇰🇷' },
  { name: 'Daiki Y.',  img: 'https://randomuser.me/api/portraits/men/22.jpg',   flag: '🇯🇵' },
  { name: 'Yuna K.',   img: 'https://randomuser.me/api/portraits/women/85.jpg', flag: '🇯🇵' },
];

type T = {
  eyebrow: string;
  heading: string;
  subtext: string;
  reviews: { role: string; body: string }[];
};

const t: Record<Locale, T> = {
  en: {
    eyebrow: 'Student Stories',
    heading: 'Real results, real students.',
    subtext: 'From Tokyo to global stages — hear from the families and students who made the leap.',
    reviews: [
      { role: 'Parent, Tokyo',       body: 'My son went from refusing to speak English to presenting confidently at an international student competition.' },
      { role: 'Student, Tokyo',      body: 'The AI coaching module helped me build a portfolio that made my university application stand out globally.' },
      { role: 'Parent, Taipei',      body: "FSA's structured approach to communication completely transformed my daughter's confidence in English." },
      { role: 'University Advisor',  body: 'FSA graduates consistently demonstrate the fluency and AI literacy that top universities actively seek.' },
      { role: 'Student, Osaka',      body: 'I learned more real English communication in 3 months at FSA than in 6 years of school classes.' },
      { role: 'Parent, Tokyo',       body: 'Our daughter is heading to a UK university next year. That path opened entirely because of FSA.' },
      { role: 'Student',             body: 'The coaches treat you like a real professional, not just a student. That changes how you carry yourself.' },
      { role: 'Student, Tokyo',      body: 'I built an AI project from scratch and presented it in English. I never thought that was possible for me.' },
      { role: 'Student, Kobe',       body: "FSA didn't just teach me English — they taught me how to think and communicate as a global professional." },
    ],
  },
  ja: {
    eyebrow: '生徒の声',
    heading: '本物の結果、本物の生徒たち。',
    subtext: '東京からグローバルな舞台へ — 飛躍した家族と生徒たちの声をお届けします。',
    reviews: [
      { role: '保護者・東京',       body: '息子は英語を話すことを拒んでいたのに、今では国際学生大会で自信を持ってプレゼンしています。' },
      { role: '生徒・東京',         body: 'AIコーチングのおかげで、大学出願をグローバルに際立たせるポートフォリオを作ることができました。' },
      { role: '保護者・台北',       body: 'FSAのコミュニケーション指導が、娘の英語への自信を根本から変えてくれました。' },
      { role: '大学アドバイザー',   body: 'FSAの卒業生は、トップ大学が求める英語力とAIリテラシーを一貫して示しています。' },
      { role: '生徒・大阪',         body: '学校6年分の英語より、FSAの3ヶ月で本物のコミュニケーション英語をたくさん学べました。' },
      { role: '保護者・東京',       body: '娘は来年イギリスの大学に進学します。その道はFSAのおかげで開けました。' },
      { role: '生徒',               body: 'コーチは学生としてではなく、本物のプロとして接してくれます。それが自分の姿勢を変えます。' },
      { role: '生徒・東京',         body: 'AIプロジェクトをゼロから作り、英語でプレゼンしました。自分にできるとは思っていませんでした。' },
      { role: '生徒・神戸',         body: 'FSAは英語だけでなく、グローバルなプロとして考え、伝える方法を教えてくれました。' },
    ],
  },
  'zh-TW': {
    eyebrow: '學生心聲',
    heading: '真實的成果，真實的學生。',
    subtext: '從東京到全球舞台——聆聽那些勇敢跨越的家庭與學生的故事。',
    reviews: [
      { role: '家長・東京',   body: '我的兒子從拒絕開口說英文，到在國際學生比賽中自信地上台發表。' },
      { role: '學生・東京',   body: 'AI輔導模組幫助我建立了一份讓大學申請在全球脫穎而出的作品集。' },
      { role: '家長・台北',   body: 'FSA的溝通訓練完全改變了我女兒對英語的自信。' },
      { role: '大學顧問',     body: 'FSA的畢業生一貫展現出頂尖大學所積極尋求的流利英語和AI素養。' },
      { role: '學生・大阪',   body: '在FSA學習三個月所獲得的真實英語溝通能力，勝過學校六年的英語課。' },
      { role: '家長・東京',   body: '我們的女兒明年即將前往英國的大學就讀。這條路因FSA而開啟。' },
      { role: '學生',         body: '教練把你當作真正的專業人士，而不只是學生。這改變了你面對自己的方式。' },
      { role: '學生・東京',   body: '我從零開始建立了一個AI專案，並用英語發表。我從沒想過自己能做到。' },
      { role: '學生・神戶',   body: 'FSA不只教我英語，更教會我如何以全球專業人士的思維思考和溝通。' },
    ],
  },
  'zh-CN': {
    eyebrow: '学生心声',
    heading: '真实的成果，真实的学生。',
    subtext: '从东京到全球舞台——聆听那些勇敢跨越的家庭与学生的故事。',
    reviews: [
      { role: '家长・东京',   body: '我的儿子从拒绝开口说英语，到在国际学生比赛中自信发表。' },
      { role: '学生・东京',   body: 'AI辅导模块帮我建立了一份让大学申请在全球脱颖而出的作品集。' },
      { role: '家长・台北',   body: 'FSA的沟通训练完全改变了我女儿对英语的自信。' },
      { role: '大学顾问',     body: 'FSA的毕业生一贯展现出顶尖大学所积极寻求的流利英语和AI素养。' },
      { role: '学生・大阪',   body: '在FSA学习三个月所获得的真实英语沟通能力，胜过学校六年的英语课。' },
      { role: '家长・东京',   body: '我们的女儿明年即将前往英国的大学就读。这条路因FSA而开启。' },
      { role: '学生',         body: '教练把你当作真正的专业人士，而不只是学生。这改变了你看待自己的方式。' },
      { role: '学生・东京',   body: '我从零开始建立了一个AI项目，并用英语发表。我从没想过自己能做到。' },
      { role: '学生・神户',   body: 'FSA不只教我英语，更教会我如何以全球专业人士的思维思考和沟通。' },
    ],
  },
};

type CardProps = { name: string; img: string; flag: string; role: string; body: string };

function TestimonialCard({ img, name, flag, role, body }: CardProps) {
  return (
    <div className="w-full rounded-2xl border border-white/10 bg-[#0B1833] p-5">
      <div className="flex items-center gap-3">
        <Avatar className="h-9 w-9 ring-1 ring-[#C9A84C]/30">
          <AvatarImage src={img} alt={name} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <div className="flex items-center gap-1.5 text-sm font-medium text-white/90">
            {name} <span className="text-xs">{flag}</span>
          </div>
          <div className="text-xs text-[#C9A84C]/80">{role}</div>
        </div>
      </div>
      <p className="mt-3.5 text-sm leading-relaxed text-white/60">{body}</p>
    </div>
  );
}

export default function TestimonialsSection() {
  const { locale } = useLanguage();
  const copy = t[locale];

  const testimonials = people.map((p, i) => ({ ...p, ...copy.reviews[i] }));

  return (
    <section className="relative overflow-hidden bg-[#040A14] py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,rgba(201,168,76,0.07),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center mb-14">
        <div className="mb-4 inline-flex rounded-full border border-[#C9A84C]/30 px-5 py-2 text-xs uppercase tracking-[0.28em] text-[#C9A84C]">
          {copy.eyebrow}
        </div>
        <h2 className="font-serif text-4xl font-medium leading-tight tracking-tight text-white md:text-5xl">
          {copy.heading}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/55">
          {copy.subtext}
        </p>
      </div>

      {/* Mobile: two flat horizontal rows */}
      <div className="sm:hidden flex flex-col gap-4 overflow-hidden">
        <Marquee pauseOnHover repeat={4} className="[--duration:40s] [--gap:1rem]">
          {testimonials.map((r) => (
            <div key={r.name + 'mA'} className="w-64 shrink-0">
              <TestimonialCard {...r} />
            </div>
          ))}
        </Marquee>
        <Marquee pauseOnHover reverse repeat={4} className="[--duration:48s] [--gap:1rem]">
          {testimonials.map((r) => (
            <div key={r.name + 'mB'} className="w-64 shrink-0">
              <TestimonialCard {...r} />
            </div>
          ))}
        </Marquee>
      </div>

      {/* Desktop: 3D angled vertical columns */}
      <div className="hidden sm:flex relative h-[520px] w-full flex-row items-center justify-center overflow-hidden gap-1.5 [perspective:500px]">
        <div
          className="flex flex-row items-center gap-6"
          style={{
            transform:
              'translateX(-120px) translateY(0px) translateZ(-50px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)',
            width: '140%',
          }}
        >
          <Marquee vertical pauseOnHover repeat={3} className="[--duration:36s] [--gap:1.5rem] flex-1">
            {testimonials.map((r) => <TestimonialCard key={r.name + '1'} {...r} />)}
          </Marquee>
          <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:42s] [--gap:1.5rem] flex-1">
            {testimonials.map((r) => <TestimonialCard key={r.name + '2'} {...r} />)}
          </Marquee>
          <Marquee vertical pauseOnHover repeat={3} className="[--duration:38s] [--gap:1.5rem] flex-1">
            {testimonials.map((r) => <TestimonialCard key={r.name + '3'} {...r} />)}
          </Marquee>
          <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:44s] [--gap:1.5rem] flex-1">
            {testimonials.map((r) => <TestimonialCard key={r.name + '4'} {...r} />)}
          </Marquee>
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-[#040A14]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#040A14]" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#040A14]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#040A14]" />
      </div>
    </section>
  );
}
