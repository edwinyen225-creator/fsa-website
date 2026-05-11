const fs = require('fs');
const files = [
  "src/app/page.tsx",
  "src/app/programs/page.tsx",
  "src/app/team/page.tsx",
  "src/app/signup/page.tsx",
  "src/app/payment/page.tsx",
  "src/app/parents/page.tsx",
  "src/app/contact/page.tsx",
  "src/components/HeroSection.jsx"
];

const oldNav1 = '<header className="fixed top-0 left-0 right-0 z-50 px-6 py-5">';
const newNav1 = '<header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">';
const oldNav2 = 'className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 px-7 py-4 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] ring-1 ring-white/5"';
const newNav2 = 'className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 px-6 py-3 backdrop-blur-xl shadow-[0_4px_20px_rgba(6,17,40,0.4)] ring-1 ring-white/5"';

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');

    // Navbar
    content = content.replace(oldNav1, newNav1).replace(oldNav2, newNav2);

    // Padding & Typography standardizations
    content = content.replaceAll("py-24 md:py-32", "py-20 md:py-24");
    content = content.replaceAll("py-28", "py-20 md:py-24");
    
    // Page.tsx specific Hero
    if (file === "src/app/page.tsx") {
        content = content.replace(
            `className="absolute -inset-8 z-0 bg-cover bg-center bg-no-repeat opacity-60 animate-float-slow"`,
            `className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"`
        );
        content = content.replace(
            `<div className="absolute inset-0 z-0 bg-[#040A14]/70 mix-blend-multiply" />\n        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0B1833]/60 via-[#071226]/80 to-[#050B16]" />`,
            `<div className="absolute inset-0 z-0 bg-[#071226]/60" />`
        );
        content = content.replace(
            `animate-glow-pulse bg-[radial-gradient(circle_at_70%_35%,rgba(201,168,76,0.12),transparent_40%),radial-gradient(circle_at_20%_80%,rgba(37,99,235,0.1),transparent_40%)]`,
            `animate-glow-pulse bg-[radial-gradient(circle_at_70%_35%,rgba(201,168,76,0.15),transparent_40%),radial-gradient(circle_at_20%_80%,rgba(37,99,235,0.15),transparent_40%)]`
        );
        content = content.replace(
            `mx-auto grid w-full max-w-7xl items-center gap-14 px-6 pt-32 pb-20 md:pt-40 md:pb-32 lg:grid-cols-[1fr_0.8fr]"`,
            `mx-auto grid w-full max-w-7xl items-center gap-10 px-6 pt-24 pb-16 md:pt-32 md:pb-24 lg:grid-cols-[1fr_0.7fr]"`
        );
        content = content.replace(
            `<div className="animate-float">`,
            `<div>`
        );
        content = content.replace(
            `max-w-4xl font-sans text-5xl font-light leading-[1.12] tracking-tight text-white/95 md:text-7xl lg:text-8xl`,
            `max-w-4xl font-sans text-4xl font-medium leading-[1.05] tracking-tight text-white/95 md:text-5xl lg:text-[4rem]`
        );
        content = content.replace(
            `text-[#C9A84C] font-serif italic pr-2 font-light`,
            `text-[#C9A84C] font-serif italic pr-2 font-medium`
        );
        content = content.replace(
            `max-w-xl text-lg leading-relaxed text-white/70 md:text-xl font-light`,
            `max-w-xl text-base leading-relaxed text-white/70 md:text-lg font-medium`
        );
        content = content.replace(
            `<div className="mt-10 flex flex-wrap gap-4">`,
            `<div className="mt-8 flex flex-wrap gap-4">`
        );
        content = content.replace(
            `relative w-full max-w-md overflow-hidden rounded-[32px] border border-[#C9A84C]/20 bg-[#0B1833]/80 p-10 shadow-2xl backdrop-blur-xl animate-float-slow`,
            `relative w-full max-w-sm overflow-hidden rounded-[24px] border border-[#C9A84C]/20 bg-[#0B1833]/80 p-8 shadow-2xl backdrop-blur-xl hover:-translate-y-1 transition-transform duration-500`
        );
    }
    
    // Sub-pages typography standardization
    content = content.replace(
        `<h1 className="font-serif text-5xl leading-tight tracking-tight md:text-7xl lg:text-8xl">`,
        `<h1 className="font-sans text-4xl font-medium leading-[1.05] tracking-tight text-white md:text-5xl lg:text-[4rem]">`
    );
    content = content.replace(
        `<h1 className="font-serif text-5xl leading-tight tracking-tight md:text-7xl">`,
        `<h1 className="font-sans text-4xl font-medium leading-[1.05] tracking-tight text-white md:text-5xl lg:text-[4rem]">`
    );
    content = content.replace(
        `<h1 className="font-serif text-5xl leading-tight md:text-7xl">`,
        `<h1 className="font-sans text-4xl font-medium leading-[1.05] tracking-tight text-white md:text-5xl lg:text-[4rem]">`
    );

    // Section headings scale
    content = content.replaceAll("mb-20 text-center font-sans text-5xl", "mb-16 text-center font-sans text-4xl");
    content = content.replaceAll("mb-20 font-serif text-5xl", "mb-16 font-serif text-4xl");
    content = content.replaceAll("mb-16 text-center font-serif text-5xl", "mb-12 text-center font-serif text-4xl");
    content = content.replaceAll("font-sans text-5xl font-light", "font-sans text-4xl font-medium");
    content = content.replaceAll("text-5xl md:text-6xl", "text-4xl md:text-5xl");

    fs.writeFileSync(file, content, 'utf8');
    console.log("Updated", file);
  }
});
