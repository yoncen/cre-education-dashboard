export default function Home() {
  const modules = [
    {
      title: "CRE Foundations",
      lessons: "24 Lessons",
    },
    {
      title: "Underwriting",
      lessons: "18 Lessons",
    },
    {
      title: "Brokerage",
      lessons: "16 Lessons",
    },
    {
      title: "BOVs",
      lessons: "11 Lessons",
    },
    {
      title: "Offering Memorandums",
      lessons: "14 Lessons",
    },
    {
      title: "1031 Exchanges",
      lessons: "9 Lessons",
    },
  ];

  return (
    <main className="min-h-screen flex bg-[#F6F2EC] text-[#171717]">
      {/* Sidebar */}
      <aside className="w-[285px] border-r border-black/[0.05] px-6 py-8 flex flex-col">
        {/* Logo */}
        <div className="flex items-center gap-4 mb-14">
          <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center text-lg font-medium">
            C
          </div>

          <div>
            <p className="font-medium text-[15px]">
              CRE Academy
            </p>

            <p className="text-[13px] text-black/40">
              Education Dashboard
            </p>
          </div>
        </div>

        {/* Nav */}
        <div className="space-y-2">
          <div className="px-4 py-3 text-black/45 text-[15px]">
            Dashboard
          </div>

          {/* Learn Section */}
          <div className="rounded-[30px] border border-black/[0.05] bg-white/70 p-3 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
            <div className="flex items-center justify-between px-3 py-2 mb-2">
              <p className="font-medium">
                Learn
              </p>

              <span className="text-black/30">
                ˅
              </span>
            </div>

            <div className="space-y-1">
              {[
                "Overview",
                "Foundations",
                "Underwriting",
                "Brokerage",
              ].map((item, index) => (
                <div
                  key={item}
                  className={`rounded-2xl px-4 py-3 flex items-center justify-between transition cursor-pointer ${
                    index === 0
                      ? "bg-[#F4EEE7] shadow-sm"
                      : "hover:bg-black/[0.03]"
                  }`}
                >
                  <span className="text-[15px]">
                    {item}
                  </span>

                  {index === 2 && (
                    <div className="bg-[#D58B63] text-white text-xs px-2 py-1 rounded-full">
                      18
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Secondary Nav */}
          <div className="pt-4 space-y-1">
            {[
              "Glossary",
              "Case Studies",
              "Calculators",
              "Progress",
            ].map((item) => (
              <div
                key={item}
                className="px-4 py-3 rounded-2xl text-[15px] text-black/55 hover:bg-black/[0.03] transition cursor-pointer"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Card */}
        <div className="mt-auto">
          <div className="rounded-[34px] border border-black/[0.05] bg-gradient-to-br from-[#F4E5D9] to-[#F8F5F1] p-6">
            <p className="uppercase tracking-[0.22em] text-[12px] text-black/35 mb-4">
              Current Focus
            </p>

            <h3 className="font-serif text-[38px] leading-[0.95] tracking-[-0.04em] mb-5">
              Cap
              <br />
              Rates
            </h3>

            <div className="w-full h-[6px] rounded-full bg-black/[0.06] overflow-hidden">
              <div className="w-[62%] h-full bg-[#D58B63]" />
            </div>

            <p className="text-[14px] text-black/45 mt-3">
              62% Complete
            </p>
          </div>
        </div>
      </aside>

      {/* Main */}
      <section className="flex-1 overflow-y-auto">
        {/* Hero */}
        <div className="relative overflow-hidden border-b border-black/[0.05]">
          {/* Gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(213,139,99,0.18),transparent_32%)]" />

          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)",
              backgroundSize: "120px 120px",
            }}
          />

          <div className="relative z-10 px-14 py-14">
            {/* Top Nav */}
            <div className="flex items-center justify-between mb-24">
              <div className="flex items-center gap-10 text-[15px] text-black/45">
                <span className="text-black font-medium">
                  Dashboard
                </span>

                <span>Learn</span>
                <span>Glossary</span>
                <span>Case Studies</span>
              </div>

              <button className="rounded-full bg-black text-white px-6 py-3 text-[14px] font-medium hover:opacity-90 transition">
                Continue Learning
              </button>
            </div>

            {/* Hero Content */}
            <div className="max-w-5xl">
              <p className="uppercase tracking-[0.28em] text-[13px] text-black/35 mb-6">
                Institutional CRE Education
              </p>

              <h1 className="font-serif text-[108px] leading-[0.88] tracking-[-0.06em] mb-8">
                Learn
                <br />
                Commercial
                <br />
                Real Estate
              </h1>

              <p className="max-w-2xl text-[20px] leading-[1.7] text-black/55 mb-10">
                Understand underwriting, cap rates, brokerage,
                investor psychology, pipelines, BOVs, offering
                memorandums, and multifamily investment analysis
                through interactive lessons and real-world case studies.
              </p>

              <div className="flex gap-4">
                <button className="rounded-full bg-[#D58B63] text-white px-7 py-4 text-[15px] font-medium hover:opacity-90 transition">
                  Start Learning
                </button>

                <button className="rounded-full border border-black/[0.08] bg-white/70 px-7 py-4 text-[15px] font-medium hover:bg-white transition">
                  Explore Modules
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-10">
          {/* Stats */}
          <div className="grid grid-cols-4 gap-5 mb-8">
            {[
              {
                title: "Lessons",
                value: "124",
              },
              {
                title: "Glossary Terms",
                value: "312",
              },
              {
                title: "Case Studies",
                value: "18",
              },
              {
                title: "Interactive Tools",
                value: "9",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[32px] border border-black/[0.05] bg-white/70 p-8 shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
              >
                <p className="text-[14px] text-black/40 mb-4">
                  {item.title}
                </p>

                <h3 className="text-[58px] leading-none tracking-[-0.05em] font-medium">
                  {item.value}
                </h3>
              </div>
            ))}
          </div>

          {/* Modules */}
          <div className="rounded-[40px] border border-black/[0.05] bg-white/60 p-8 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="uppercase tracking-[0.2em] text-[12px] text-black/35 mb-3">
                  Curriculum
                </p>

                <h2 className="font-serif text-[58px] leading-none tracking-[-0.05em]">
                  Core Modules
                </h2>
              </div>

              <p className="text-[15px] text-black/45">
                Structured CRE learning
              </p>
            </div>

            <div className="grid grid-cols-3 gap-5">
              {modules.map((module) => (
                <div
                  key={module.title}
                  className="rounded-[30px] border border-black/[0.05] bg-[#FBF9F6] p-7 hover:translate-y-[-2px] transition"
                >
                  <div className="flex items-center justify-between mb-10">
                    <span className="uppercase tracking-[0.18em] text-[12px] text-black/35">
                      {module.lessons}
                    </span>

                    <span className="text-black/20">
                      →
                    </span>
                  </div>

                  <h3 className="font-serif text-[36px] leading-[1] tracking-[-0.05em]">
                    {module.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}