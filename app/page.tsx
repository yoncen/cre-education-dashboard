export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B1020] text-white flex">
      {/* Sidebar */}
      <aside className="w-72 border-r border-white/10 bg-black/20 p-6">
        <h1 className="text-2xl font-bold mb-10">
          CRE Academy
        </h1>

        <nav className="space-y-3">
          {[
            "Dashboard",
            "Foundations",
            "Underwriting",
            "Brokerage",
            "BOVs",
            "OMs",
            "Calculators",
            "Glossary",
            "Case Studies",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl px-4 py-3 hover:bg-white/10 cursor-pointer transition"
            >
              {item}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <section className="flex-1 p-10">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-white/50 mb-3">
            Commercial Real Estate Education
          </p>

          <h2 className="text-5xl font-bold mb-4">
            Learn CRE Like A Real Investment Sales Broker
          </h2>

          <p className="text-white/70 max-w-3xl text-lg">
            Interactive lessons, underwriting tools, deal analysis,
            brokerage education, BOVs, OMs, cap rates, NOI,
            pipelines, investor psychology, and more.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-6 mb-10">
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
              title: "Calculators",
              value: "9",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <p className="text-white/50 text-sm mb-2">
                {card.title}
              </p>

              <h3 className="text-4xl font-bold">
                {card.value}
              </h3>
            </div>
          ))}
        </div>

        {/* Learning Modules */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">
            Core Learning Modules
          </h3>

          <div className="grid grid-cols-3 gap-6">
            {[
              {
                title: "CRE Foundations",
                desc: "Cap rates, NOI, occupancy, concessions, and multifamily fundamentals.",
              },
              {
                title: "Underwriting",
                desc: "Analyze deals, debt, returns, IRR, DSCR, and risk scenarios.",
              },
              {
                title: "Brokerage",
                desc: "Learn pipelines, deal flow, negotiations, and investment sales.",
              },
              {
                title: "BOVs",
                desc: "Broker opinion of value strategy, pricing, and presentation.",
              },
              {
                title: "Offering Memorandums",
                desc: "OM structure, storytelling, and investment marketing.",
              },
              {
                title: "1031 Exchanges",
                desc: "Tax strategy, timelines, and buyer motivations.",
              },
            ].map((module) => (
              <div
                key={module.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition cursor-pointer"
              >
                <h4 className="text-xl font-semibold mb-3">
                  {module.title}
                </h4>

                <p className="text-white/60 leading-relaxed">
                  {module.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}