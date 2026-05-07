"use client";

export default function HeroSection() {
    return (
        <main className="min-h-screen bg-[#071226] text-white overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0b1830] via-[#071226] to-[#050d1a]" />

            {/* Glow */}
            <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] bg-[#c9a84c]/20 blur-3xl rounded-full" />
            <div className="absolute bottom-[-250px] right-[-150px] w-[500px] h-[500px] bg-[#1d4ed8]/20 blur-3xl rounded-full" />

            {/* Navbar */}
            <header className="fixed top-0 left-0 w-full z-50 px-6 py-5">
                <div className="max-w-7xl mx-auto flex items-center justify-between backdrop-blur-xl bg-white/5 border border-white/10 rounded-full px-8 py-4 shadow-2xl">
                    {/* Logo */}
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#0d1b34] border border-[#c9a84c]/40 flex items-center justify-center">
                            <span className="text-[#c9a84c] font-serif text-lg">
                                FSA
                            </span>
                        </div>

                        <div>
                            <h1 className="font-serif text-xl tracking-wide">
                                Future Skill Academy
                            </h1>
                            <p className="text-xs tracking-[0.3em] text-white/50 uppercase">
                                Tokyo • Global
                            </p>
                        </div>
                    </div>

                    {/* Nav */}
                    <nav className="hidden md:flex items-center gap-10 text-sm tracking-wide text-white/70">
                        <a href="#" className="hover:text-[#c9a84c] transition">
                            Programs
                        </a>

                        <a href="#" className="hover:text-[#c9a84c] transition">
                            Philosophy
                        </a>

                        <a href="#" className="hover:text-[#c9a84c] transition">
                            For Parents
                        </a>

                        <a href="#" className="hover:text-[#c9a84c] transition">
                            Faculty
                        </a>

                        <a href="#" className="hover:text-[#c9a84c] transition">
                            About
                        </a>
                    </nav>

                    {/* CTA */}
                    <button className="bg-[#c9a84c] text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-[#e3bf5a] transition">
                        Free Trial
                    </button>
                </div>
            </header>

            {/* Hero */}
            <section className="relative min-h-screen flex items-center px-6 pt-40">
                <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-20 items-center">
                    {/* Left */}
                    <div>
                        <div className="mb-8 inline-flex items-center gap-3 border border-[#c9a84c]/30 rounded-full px-5 py-2 text-sm tracking-[0.25em] uppercase text-[#c9a84c]">
                            Future Skill Academy • Est. Tokyo
                        </div>

                        <h1 className="font-serif text-6xl md:text-8xl leading-[0.95] tracking-tight mb-8">
                            Build{" "}
                            <span className="text-[#c9a84c]">
                                Future-Ready
                            </span>{" "}
                            Skills.
                        </h1>

                        <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mb-12">
                            FSA helps students develop communication, AI literacy,
                            presentation, research, and real-world project skills through
                            English-based portfolio learning.
                        </p>

                        <div className="flex flex-wrap gap-5">
                            <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-[#f3f3f3] transition">
                                Book a Free Trial
                            </button>

                            <button className="border border-white/20 px-8 py-4 rounded-full font-medium hover:border-[#c9a84c] hover:text-[#c9a84c] transition">
                                Explore Programs
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-10 mt-20 border-t border-white/10 pt-10">
                            <div>
                                <h2 className="font-serif text-4xl text-[#c9a84c]">
                                    10–18
                                </h2>
                                <p className="text-white/50 uppercase tracking-[0.2em] text-xs mt-2">
                                    Student Ages
                                </p>
                            </div>

                            <div>
                                <h2 className="font-serif text-4xl text-[#c9a84c]">
                                    100%
                                </h2>
                                <p className="text-white/50 uppercase tracking-[0.2em] text-xs mt-2">
                                    English Instruction
                                </p>
                            </div>

                            <div>
                                <h2 className="font-serif text-4xl text-[#c9a84c]">
                                    Tokyo
                                </h2>
                                <p className="text-white/50 uppercase tracking-[0.2em] text-xs mt-2">
                                    Global Cohorts
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right visual */}
                    <div className="relative hidden lg:block">
                        <div className="absolute inset-0 bg-[#c9a84c]/10 blur-3xl rounded-full" />

                        <div className="relative rounded-[40px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
                            <div className="aspect-[4/5] bg-gradient-to-br from-[#11203d] via-[#0b1730] to-[#09111f] flex items-center justify-center">
                                <div className="text-center px-10">
                                    <div className="w-28 h-28 rounded-full border border-[#c9a84c]/30 flex items-center justify-center mx-auto mb-8">
                                        <span className="font-serif text-4xl text-[#c9a84c]">
                                            FSA
                                        </span>
                                    </div>

                                    <h3 className="font-serif text-3xl mb-6">
                                        A New Generation of Learning
                                    </h3>

                                    <p className="text-white/60 leading-relaxed">
                                        Portfolio-driven education for globally minded students.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}