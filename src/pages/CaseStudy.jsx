export default function CaseStudy() {
  return (
    <div className="min-h-screen bg-[#0B0F14] text-[#F5F7FA] px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-sm uppercase tracking-[0.2em] text-[#4F8CFF] mb-4">
          Case Study
        </div>

        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-10">
          Building a Multi-Channel SaaS Acquisition System
        </h1>

        <p className="text-xl text-[#94A3B8] leading-relaxed mb-16">
          A breakdown of how different acquisition channels were used
          strategically across a long-sales-cycle B2B SaaS environment.
        </p>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Context</h2>

          <p className="text-[#94A3B8] leading-relaxed text-lg">
            The business operated in a B2B SaaS environment with:
          </p>

          <ul className="mt-6 space-y-3 text-[#94A3B8] text-lg">
            <li>• Long sales cycle (~6 months)</li>
            <li>• High customer lifetime value</li>
            <li>• Low churn dynamics</li>
            <li>• Multiple acquisition channels with varying intent quality</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Challenge</h2>

          <p className="text-[#94A3B8] leading-relaxed text-lg">
            Different channels produced very different combinations of:
          </p>

          <ul className="mt-6 space-y-3 text-[#94A3B8] text-lg">
            <li>• Cost per lead</li>
            <li>• Buyer intent</li>
            <li>• Conversion quality</li>
            <li>• Sales velocity</li>
          </ul>

          <p className="mt-8 text-[#94A3B8] leading-relaxed text-lg">
            The core problem was that optimizing purely around CPL often
            produced weaker downstream pipeline quality.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Acquisition Strategy</h2>

          <div className="space-y-10">
            <div className="border border-white/10 rounded-2xl p-8 bg-white/[0.03]">
              <h3 className="text-xl font-medium mb-4">LinkedIn Ads</h3>

              <p className="text-[#94A3B8] leading-relaxed text-lg">
                Used primarily for scalable top and mid-funnel pipeline generation,
                especially for targeting specific ICP segments.
              </p>
            </div>

            <div className="border border-white/10 rounded-2xl p-8 bg-white/[0.03]">
              <h3 className="text-xl font-medium mb-4">Capterra</h3>

              <p className="text-[#94A3B8] leading-relaxed text-lg">
                Functioned as a high-intent acquisition layer where buyers were
                already actively evaluating solutions.
              </p>
            </div>

            <div className="border border-white/10 rounded-2xl p-8 bg-white/[0.03]">
              <h3 className="text-xl font-medium mb-4">Google Ads</h3>

              <p className="text-[#94A3B8] leading-relaxed text-lg">
                Used selectively for targeted acceleration and capturing
                bottom-funnel demand.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Key Insight</h2>

          <div className="border-l-2 border-[#4F8CFF] pl-6">
            <p className="text-3xl font-medium leading-relaxed">
              Lowest CPL ≠ Best Pipeline
            </p>
          </div>

          <p className="mt-8 text-[#94A3B8] leading-relaxed text-lg">
            Different channels served different strategic purposes. The most
            efficient growth system came not from optimizing a single metric,
            but from balancing intent, conversion quality, and long-term
            customer value.
          </p>
        </section>
      </div>
    </div>
  )
}