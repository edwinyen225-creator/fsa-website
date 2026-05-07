export default function Home() {
  return (
    <main className="min-h-screen bg-[#07111F] text-white overflow-hidden">
      {/* NAVBAR */}
      <nav className="w-full fixed top-0 left-0 z-50 bg-[#07111F]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide">
            FSA
          </h1>

          <div className="hidden md:flex gap-8 text-sm text-white/80">
            <a href="#" className="hover:text-[#D4AF37] transition">
              Programs
            </a>
            <a href="#" className="hover:text-[#D4AF37] transition">
              Philosophy
            </a>
            <a href="#" className="hover:text-[#D4AF37] transition">
              For Parents
            </a>
            <a href="#" className="hover:text-[#D4AF37] transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1730] to-[#07111F]" />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-[#D4AF37] text-sm mb-6">
            Tokyo • International Education
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            Build Future-Ready Skills
            <span className="block text-[#D4AF37] mt-2">
              Beyond Traditional Education
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/70 leading-relaxed mb-12">
            Future Skill Academy is a premium international learning academy
            designed to help students develop real-world communication,
            leadership, creativity, AI literacy, presentation, and critical
            thinking skills for the modern global world.
          </p>

          <div className="flex flex-col md:flex-row gap-5 justify-center">
            <button className="px-8 py-4 bg-[#D4AF37] text-black font-semibold rounded-full hover:scale-105 transition">
              Explore Programs
            </button>

            <button className="px-8 py-4 border border-white/20 rounded-full hover:bg-white/10 transition">
              Book Consultation
            </button>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-[#D4AF37] uppercase tracking-[0.2em] text-sm mb-4">
              Programs
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Future-Oriented Learning
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Public Speaking & Presentation",
              "AI & Digital Literacy",
              "Critical Thinking & Research",
              "Leadership & Communication",
              "Creative Problem Solving",
              "Global Perspective Development",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-[#D4AF37]/40 hover:-translate-y-1 transition"
              >
                <h3 className="text-2xl font-semibold mb-4">{item}</h3>

                <p className="text-white/65 leading-relaxed">
                  Premium project-based education designed to prepare students
                  for the modern international environment.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARENT TRUST */}
      <section className="py-28 px-6 bg-white/[0.03]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#D4AF37] uppercase tracking-[0.2em] text-sm mb-4">
              For Parents
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Designed For The Future,
              <span className="block text-[#D4AF37]">
                Not The Past
              </span>
            </h2>

            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Traditional education often focuses heavily on memorization and
              exams. FSA focuses on communication, adaptability, confidence,
              digital fluency, and global thinking.
            </p>

            <p className="text-white/70 text-lg leading-relaxed">
              Our mission is to help students build meaningful real-world skills
              that remain valuable in an AI-driven international future.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#D4AF37]/20 to-white/5 border border-white/10 rounded-[40px] p-10">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-2">International Focus</h3>
                <p className="text-white/70">
                  English-based global learning environment.
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold mb-2">Real-World Skills</h3>
                <p className="text-white/70">
                  Portfolio-driven project learning approach.
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold mb-2">Modern Learning</h3>
                <p className="text-white/70">
                  AI literacy, communication, and future readiness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#D4AF37] uppercase tracking-[0.2em] text-sm mb-4">
            About FSA
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-10">
            A New Type Of Academy
          </h2>

          <p className="text-xl text-white/70 leading-relaxed">
            Future Skill Academy combines premium international education with
            practical future-focused learning. Based in Tokyo, FSA is designed
            to bridge the gap between traditional education and the rapidly
            changing modern world.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#D4AF37]/20 to-white/5 border border-white/10 rounded-[40px] p-14 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Start Building The Future
          </h2>

          <p className="text-white/70 text-xl max-w-3xl mx-auto mb-10">
            Join a new generation of globally minded learners prepared for the
            future of communication, technology, leadership, and innovation.
          </p>

          <button className="px-10 py-5 bg-[#D4AF37] text-black font-bold rounded-full hover:scale-105 transition">
            Contact Future Skill Academy
          </button>
        </div>
      </section>
    </main>
  );
}