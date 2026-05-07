export default function Home() {
  return (
    <main className="min-h-screen bg-[#071226] text-white overflow-hidden">
      <section className="relative min-h-screen bg-gradient-to-b from-[#0B1833] via-[#081327] to-[#050B16]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(201,168,76,0.18),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(37,99,235,0.16),transparent_35%)]" />

        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-5">
          <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/8 px-7 py-4 backdrop-blur-xl shadow-2xl">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C9A84C]/50 bg-[#081327]">
                <span className="font-serif text-sm text-[#C9A84C]">FSA</span>
              </div>
              <div>
                <div className="font-serif text-xl tracking-wide">Future Skill Academy</div>
                <div className="text-xs uppercase tracking-[0.35em] text-white/45">Tokyo · Global</div>
              </div>
            </div>

            <nav className="hidden items-center gap-9 text-sm text-white/70 md:flex">
              <a className="hover:text-[#C9A84C]" href="#programs">Programs</a>
              <a className="hover:text-[#C9A84C]" href="#philosophy">Philosophy</a>
              <a className="hover:text-[#C9A84C]" href="#parents">For Parents</a>
              <a className="hover:text-[#C9A84C]" href="#contact">Contact</a>
            </nav>

            <button className="rounded-full bg-[#C9A84C] px-6 py-3 text-sm font-semibold text-[#06101F] transition hover:bg-[#E4C261]">
              Free Trial →
            </button>
          </div>
        </header>

        <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-14 px-6 pt-36 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-8 inline-flex rounded-full border border-[#C9A84C]/35 px-5 py-2 text-xs uppercase tracking-[0.28em] text-[#C9A84C]">
              Future Skill Academy · Est. Tokyo
            </div>

            <h1 className="max-w-5xl font-serif text-6xl leading-[0.92] tracking-tight md:text-8xl lg:text-9xl">
              Build <span className="text-[#C9A84C]">Future-Ready</span> Skills.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
              FSA helps students develop communication, AI literacy, presentation,
              research, and real-world project skills — through English-based,
              portfolio-driven learning.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-full bg-white px-8 py-4 font-semibold text-[#071226] transition hover:scale-[1.02]">
                Book a Free Trial →
              </button>
              <button className="rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition hover:border-[#C9A84C] hover:text-[#C9A84C]">
                Explore Programs
              </button>
            </div>

            <div className="mt-16 grid max-w-2xl grid-cols-3 gap-8 border-t border-white/10 pt-8">
              <div>
                <div className="font-serif text-4xl text-white">10–18</div>
                <div className="mt-2 text-xs uppercase tracking-[0.24em] text-white/45">Student Ages</div>
              </div>
              <div>
                <div className="font-serif text-4xl text-white">100%</div>
                <div className="mt-2 text-xs uppercase tracking-[0.24em] text-white/45">English</div>
              </div>
              <div>
                <div className="font-serif text-4xl text-white">Tokyo</div>
                <div className="mt-2 text-xs uppercase tracking-[0.24em] text-white/45">Global Cohorts</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative overflow-hidden rounded-[42px] border border-white/10 bg-white/6 p-8 shadow-2xl backdrop-blur-xl">
              <div className="aspect-[4/5] rounded-[32px] bg-gradient-to-br from-[#133263] via-[#0C1B36] to-[#050B16] p-10">
                <div className="flex h-full flex-col justify-between">
                  <div className="flex justify-end">
                    <div className="rounded-full border border-[#C9A84C]/30 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#C9A84C]">
                      Portfolio Learning
                    </div>
                  </div>

                  <div>
                    <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-[#C9A84C]/40 bg-[#071226]/80">
                      <span className="font-serif text-3xl text-[#C9A84C]">FSA</span>
                    </div>
                    <h2 className="font-serif text-4xl leading-tight">
                      A different kind of academy — built for the next decade.
                    </h2>
                    <p className="mt-5 text-white/60">
                      Confidence, creativity, communication, and AI fluency built through real projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="bg-[#F4F7FA] px-6 py-28 text-[#071226]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 grid gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C9A84C]">01 — Why FSA</div>
              <h2 className="font-serif text-5xl leading-tight md:text-7xl">
                A different kind of academy — built for the next decade.
              </h2>
            </div>
            <p className="self-end text-xl leading-relaxed text-slate-600">
              FSA is designed for families who want their children to do more than memorize.
              We teach the skills traditional schools struggle to deliver — practiced in English,
              proven in projects, and built into portfolios.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["English-Based Learning", "Every class taught in English — from inquiry to presentation."],
              ["Real-World Projects", "Students create portfolio-grade outputs: research, decks, videos, and pitches."],
              ["AI Literacy", "Responsible, fluent AI usage — learning to think with machines."],
              ["Presentation & Voice", "Structured speaking, storytelling, and confident public presentation."],
              ["Small-Group Coaching", "Students are seen, heard, challenged, and supported."],
              ["International Mindset", "Curriculum framed by global standards and global ambition."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-[#071226] text-[#C9A84C]">
                  ◆
                </div>
                <h3 className="font-serif text-2xl">{title}</h3>
                <p className="mt-4 leading-relaxed text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="philosophy" className="bg-white px-6 py-28 text-[#071226]">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
          <div className="rounded-[36px] bg-gradient-to-br from-[#DDE8F5] to-[#F7FAFC] p-10">
            <div className="h-[520px] rounded-[30px] bg-gradient-to-br from-[#9CB6C9] via-[#DCE7EF] to-[#0B4E8A]" />
          </div>

          <div className="self-center">
            <div className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C9A84C]">02 — Learning Philosophy</div>
            <h2 className="font-serif text-5xl leading-tight md:text-7xl">
              Education designed for the world students will actually live in.
            </h2>
            <p className="mt-8 text-xl leading-relaxed text-slate-600">
              The next decade rewards communicators, creators, and critical thinkers —
              people who can frame a problem, work with AI, and present a clear point of view.
              FSA is built around that reality.
            </p>

            <div className="mt-10 grid grid-cols-2 overflow-hidden rounded-[28px] border border-slate-200">
              {["Project-Based", "English as a Tool", "Confidence Through Reps", "Creativity + Structure"].map((item) => (
                <div key={item} className="border border-slate-200 p-7">
                  <h3 className="font-serif text-xl">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#071226] px-6 py-28 text-white">
        <div className="mx-auto max-w-5xl rounded-[42px] border border-white/10 bg-white/6 p-12 text-center backdrop-blur-xl">
          <div className="mb-4 text-sm uppercase tracking-[0.35em] text-[#C9A84C]">Start Here</div>
          <h2 className="font-serif text-5xl leading-tight md:text-7xl">
            Build skills students can actually use.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
            Book a free trial or consultation to see whether FSA is the right fit for your child.
          </p>
          <button className="mt-10 rounded-full bg-[#C9A84C] px-9 py-4 font-semibold text-[#071226]">
            Book a Free Trial →
          </button>
        </div>
      </section>
    </main>
  );
}
