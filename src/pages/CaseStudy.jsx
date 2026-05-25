import { Link } from 'react-router-dom'

export default function CaseStudy() {
  return (
    <div className="min-h-screen bg-[#0B0F14] text-[#F5F7FA] px-6 py-24">
      <div className="max-w-4xl mx-auto">

        <Link
          to="/"
          className="inline-block text-sm text-[#94A3B8] hover:text-white transition-colors mb-12"
        >
          ← Back to Homepage
        </Link>

        <div className="text-sm uppercase tracking-[0.2em] text-[#4F8CFF] mb-4">
          Case Study
        </div>

        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-8">
          Building a Multi-Channel Acquisition System for Bellwether Purchasing Software
        </h1>

        <p className="text-xl text-[#94A3B8] leading-relaxed mb-16">
          How different acquisition channels behaved across a long procurement-sales cycle — and why lowest CPL did not translate into the best downstream pipeline.
        </p>

        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-6">
            Context
          </h2>

          <div className="space-y-6 text-[#94A3B8] text-lg leading-relaxed">
            <p>
              Bellwether Purchasing Software operated in a B2B procurement environment serving SMBs and government institutions generating roughly 50–1000 purchase orders per month.
            </p>

            <p>
              The business initially relied heavily on inbound acquisition through content, ebooks, and educational marketing assets designed to create awareness around procurement digitization and purchasing workflow optimization.
            </p>

            <p>
              The sales process itself was multi-stage and relatively long-cycle:
            </p>

            <div className="border border-white/10 rounded-2xl p-8 bg-white/[0.03]">
              <div className="space-y-3 text-white">
                <p>Lead Form Submission</p>
                <p>↓</p>
                <p>SDR Qualification Call</p>
                <p>↓</p>
                <p>Sales Demo</p>
                <p>↓</p>
                <p>Quotation</p>
                <p>↓</p>
                <p>Closed Won</p>
              </div>
            </div>

            <p>
              Because of the length and friction involved in the funnel, acquisition quality mattered significantly more than top-level lead volume alone.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-6">
            The Challenge
          </h2>

          <div className="space-y-6 text-[#94A3B8] text-lg leading-relaxed">
            <p>
              Different acquisition channels generated fundamentally different buyer behaviors.
            </p>

            <p>
              While some channels produced scalable lead flow at a very low cost, others generated significantly stronger purchase intent despite substantially higher acquisition costs.
            </p>

            <p>
              This created an important operational problem:
            </p>

            <div className="border-l-2 border-[#4F8CFF] pl-6">
              <p className="text-3xl font-medium text-white leading-relaxed">
                Lowest CPL ≠ Best Pipeline
              </p>
            </div>

            <p>
              Optimizing purely around cost-per-lead metrics often introduced downstream inefficiencies for SDR qualification, sales conversations, and quotation-stage conversion.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-10">
            Channel Behavior Differences
          </h2>

          <div className="space-y-8">

            <div className="border border-white/10 rounded-2xl p-8 bg-white/[0.03]">
              <h3 className="text-2xl font-medium mb-4">
                LinkedIn Ads
              </h3>

              <div className="space-y-5 text-[#94A3B8] text-lg leading-relaxed">
                <p>
                  LinkedIn consistently produced the lowest CPL and the highest inbound lead volume.
                </p>

                <p>
                  However, downstream purchase intent was significantly weaker compared to other channels, creating higher SDR qualification friction and lower immediate buying urgency.
                </p>

                <p>
                  Instead of treating LinkedIn as a direct conversion channel, it was repositioned primarily as a pipeline-building and awareness-generation layer.
                </p>
              </div>
            </div>

            <div className="border border-white/10 rounded-2xl p-8 bg-white/[0.03]">
              <h3 className="text-2xl font-medium mb-4">
                Capterra
              </h3>

              <div className="space-y-5 text-[#94A3B8] text-lg leading-relaxed">
                <p>
                  Capterra generated far lower lead volume at a significantly higher acquisition cost.
                </p>

                <p>
                  However, these buyers typically entered the funnel with substantially stronger purchase intent since they were already actively evaluating procurement software solutions.
                </p>

                <p>
                  The downstream sales efficiency of these leads was considerably stronger despite the higher top-level CPL.
                </p>
              </div>
            </div>

            <div className="border border-white/10 rounded-2xl p-8 bg-white/[0.03]">
              <h3 className="text-2xl font-medium mb-4">
                Google Ads
              </h3>

              <div className="space-y-5 text-[#94A3B8] text-lg leading-relaxed">
                <p>
                  Google Ads behaved as a mixed-intent acquisition layer sitting between LinkedIn and Capterra.
                </p>

                <p>
                  Performance varied heavily based on keyword intent, campaign structure, and funnel positioning.
                </p>

                <p>
                  It ultimately served as a balancing layer between scalable demand capture and bottom-funnel conversion intent.
                </p>
              </div>
            </div>

          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-6">
            Strategic Response
          </h2>

          <div className="space-y-6 text-[#94A3B8] text-lg leading-relaxed">

            <p>
              Rather than optimizing all channels against the same objective, each acquisition source was assigned a distinct strategic role within the broader funnel.
            </p>

            <div className="border border-white/10 rounded-2xl p-8 bg-white/[0.03]">
              <ul className="space-y-5">
                <li>
                  • A smaller percentage of budget (~15%) continued to be allocated toward LinkedIn primarily for long-term pipeline generation and audience development.
                </li>

                <li>
                  • LinkedIn leads entered dedicated nurture sequences designed around education and longer consideration cycles.
                </li>

                <li>
                  • High-intent Capterra leads were prioritized for immediate SDR phone qualification and faster sales handling.
                </li>

                <li>
                  • Behavioral learnings from high-intent inbound leads later influenced qualification handling across broader inbound acquisition flows.
                </li>
              </ul>
            </div>

            <p>
              This shifted the acquisition system from simple lead generation toward intent-aware pipeline management.
            </p>

          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-6">
            Operational Ownership
          </h2>

          <div className="space-y-6 text-[#94A3B8] text-lg leading-relaxed">

            <p>
              I operated essentially as the sole marketing function across acquisition, messaging, lifecycle, and funnel operations.
            </p>

            <div className="border border-white/10 rounded-2xl p-8 bg-white/[0.03]">
              <ul className="space-y-5">
                <li>• Campaign management across acquisition channels</li>
                <li>• Ad and messaging development</li>
                <li>• Landing page and content coordination</li>
                <li>• HubSpot lifecycle and nurture management</li>
                <li>• SDR and sales coordination</li>
                <li>• Funnel analysis and optimization</li>
                <li>• Budget allocation and channel prioritization</li>
              </ul>
            </div>

            <p>
              The role required balancing execution speed with strategic funnel thinking across the full acquisition lifecycle.
            </p>

          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">
            Key Takeaway
          </h2>

          <div className="border-l-2 border-[#4F8CFF] pl-6 mb-10">
            <p className="text-3xl font-medium leading-relaxed">
              The most scalable acquisition channel was not necessarily the most commercially efficient one.
            </p>
          </div>

          <p className="text-[#94A3B8] text-lg leading-relaxed">
            The strongest growth outcomes emerged from aligning channels to different stages of buyer intent rather than forcing every acquisition source to optimize toward the same metric.
          </p>
        </section>

      </div>
    </div>
  )
}