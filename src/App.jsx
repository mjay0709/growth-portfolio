export default function PortfolioHomepage() {
  const philosophyCards = [
    {
      title: 'Intent > Cheap Traffic',
      description:
        'Cheap leads are meaningless if they never convert. Pipeline quality matters more than surface-level CPL metrics.',
    },
    {
      title: 'Full-Funnel Thinking',
      description:
        'Acquisition works best when connected to nurture, messaging, and conversion systems.',
    },
    {
      title: 'Technical Products Need Better Narratives',
      description:
        'My background across content and computer science helps me translate technical complexity into demand.',
    },
    {
      title: 'Speed Is A Competitive Advantage',
      description:
        'AI-native workflows and lightweight automations compress execution cycles and accelerate experimentation.',
    },
  ];

  const writingCards = [
  {
    title: 'Best ZoomInfo Alternative',
    summary:
      'A detailed SaaS comparison piece focused on buyer pain points, positioning, and competitive differentiation.',
    link: 'https://salesintel.io/blog/best-zoominfo-alternative/',
  },
  {
    title: 'Beginner’s Guide to Blockchain',
    summary:
      'Long-form technical writing designed to simplify complex concepts into accessible narratives.',
    link: 'https://www.konstantinfo.com/blog/beginners-detailed-guide-blockchain/',
  },
  {
    title: 'Technical Writing Sample (PDF)',
    summary:
      'Technical and explanatory writing sample showcasing structured communication and narrative clarity.',
    link: 'https://drive.google.com/file/d/19FcWmntypztXstcKiYwBisaETZceLgYF/view?usp=sharing',
  },
]

  return (
    <div className="min-h-screen bg-[#0B0F14] text-[#F5F7FA] antialiased overflow-x-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />

      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md border-b border-white/5 bg-[#0B0F14]/70">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-semibold tracking-tight text-sm md:text-base">
            Mritunjay Kumar
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-[#94A3B8]">
            <a href="#case-studies" className="hover:text-white transition-colors">
              Case Studies
            </a>
            <a href="#writing" className="hover:text-white transition-colors">
              Writing
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative max-w-6xl mx-auto px-6 pt-28 pb-24 md:pt-36 md:pb-32">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 border border-white/10 rounded-full px-4 py-2 text-sm text-[#94A3B8] bg-white/5 mb-8">
            Growth • GTM • Pipeline • SaaS
          </div>

          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] mb-8 max-w-5xl">
            Growth & GTM operator for B2B SaaS
          </h1>

          <p className="text-lg md:text-xl text-[#94A3B8] leading-relaxed max-w-3xl mb-10">
            I build pipeline-focused acquisition systems across paid, content,
            lifecycle, and conversion — operating at the intersection of growth,
            technical storytelling, and experimentation.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#case-studies"
              className="bg-[#4F8CFF] hover:bg-[#6ba0ff] transition-all text-black font-medium px-6 py-3 rounded-xl"
            >
              View Case Studies
            </a>

            <a
              href="#writing"
              className="border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 transition-all px-6 py-3 rounded-xl text-[#F5F7FA]"
            >
              Writing & Insights
            </a>
          </div>
        </div>
      </section>

      {/* Credibility Strip */}
      <section className="border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-4 gap-6 text-sm text-[#94A3B8]">
          <div>$250K+ annual ad spend managed</div>
          <div>Built full-funnel SaaS acquisition systems</div>
          <div>Worked remotely with US teams in Eastern Time</div>
          <div>One-person marketing function across paid, content & lifecycle</div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="max-w-6xl mx-auto px-6 py-32">
        <div className="max-w-2xl mb-14">
          <div className="text-sm uppercase tracking-[0.2em] text-[#4F8CFF] mb-4">
            Philosophy
          </div>

          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
            How I Think About Growth
          </h2>

          <p className="text-[#94A3B8] text-lg leading-relaxed">
            Growth systems perform best when acquisition, messaging, nurture,
            and conversion are treated as interconnected layers — not isolated channels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {philosophyCards.map((card, index) => (
            <div
              key={index}
              className="group border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-2xl font-medium mb-4 group-hover:text-[#4F8CFF] transition-colors">
                {card.title}
              </h3>

              <p className="text-[#94A3B8] leading-relaxed text-base">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Case Study */}
      <section
        id="case-studies"
        className="max-w-6xl mx-auto px-6 pb-32"
      >
        <div className="border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] rounded-3xl p-8 md:p-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#4F8CFF]/10 blur-3xl rounded-full" />

          <div className="relative z-10 max-w-4xl">
            <div className="text-sm uppercase tracking-[0.2em] text-[#4F8CFF] mb-4">
              Featured Case Study
            </div>

            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-8 leading-tight">
              Building a Multi-Channel SaaS Acquisition System
            </h2>

            <div className="grid md:grid-cols-2 gap-10 mb-10">
              <div>
                <div className="text-sm text-[#4F8CFF] mb-3 uppercase tracking-[0.15em]">
                  Context
                </div>
                <p className="text-[#94A3B8] leading-relaxed">
                  Long sales cycle (~6 months), low churn B2B SaaS environment.
                </p>
              </div>

              <div>
                <div className="text-sm text-[#4F8CFF] mb-3 uppercase tracking-[0.15em]">
                  Challenge
                </div>
                <p className="text-[#94A3B8] leading-relaxed">
                  Different channels drove radically different combinations of cost,
                  intent, and conversion quality.
                </p>
              </div>
            </div>

            <div className="mb-10">
              <div className="text-sm text-[#4F8CFF] mb-3 uppercase tracking-[0.15em]">
                Strategy
              </div>

              <ul className="space-y-3 text-[#F5F7FA]">
                <li>• LinkedIn → scalable pipeline generation</li>
                <li>• Capterra → high-intent conversion</li>
                <li>• Google Ads → targeted acceleration layer</li>
              </ul>
            </div>

            <div className="border-l-2 border-[#4F8CFF] pl-6 mb-10">
              <div className="text-sm text-[#4F8CFF] uppercase tracking-[0.15em] mb-3">
                Key Insight
              </div>

              <p className="text-2xl font-medium leading-relaxed max-w-3xl">
                Lowest CPL ≠ best pipeline.
              </p>
            </div>

            <button className="border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 transition-all px-6 py-3 rounded-xl text-[#F5F7FA]">
              Read Full Case Study →
            </button>
          </div>
        </div>
      </section>

      {/* Writing Section */}
      <section id="writing" className="max-w-6xl mx-auto px-6 pb-32">
        <div className="max-w-2xl mb-14">
          <div className="text-sm uppercase tracking-[0.2em] text-[#4F8CFF] mb-4">
            Writing & Insights
          </div>

          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
            Technical Writing & Product Narratives
          </h2>

          <p className="text-[#94A3B8] text-lg leading-relaxed">
            Selected writing samples across SaaS, technical education, and product-focused content — focused on translating complex ideas into clear, user-friendly narratives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {writingCards.map((article, index) => (
            <div
              key={index}
              className="group border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-sm text-[#4F8CFF] mb-4 uppercase tracking-[0.15em]">
                Article
              </div>

              <h3 className="text-2xl font-medium mb-5 leading-snug group-hover:text-[#4F8CFF] transition-colors">
                {article.title}
              </h3>

              <p className="text-[#94A3B8] leading-relaxed mb-8">
                {article.summary}
              </p>

              <a
  href={article.link}
  target="_blank"
  rel="noopener noreferrer"
  className="text-sm text-white hover:text-[#4F8CFF] transition-colors"
>
  Read Article →
</a>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="max-w-4xl mx-auto px-6 pb-32 text-center"
      >
        <div className="text-sm uppercase tracking-[0.2em] text-[#4F8CFF] mb-4">
          About
        </div>

        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-10">
          Built in Lean SaaS Environments
        </h2>

        <p className="text-[#94A3B8] text-lg md:text-xl leading-relaxed">
          I’ve operated largely as a one-person marketing team across acquisition,
          content, lifecycle, conversion, and experimentation. My work sits at
          the intersection of pipeline generation, technical storytelling, and
          systems-oriented growth.
        </p>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-t border-white/5 bg-white/[0.02]"
      >
        <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div>
            <div className="text-sm uppercase tracking-[0.2em] text-[#4F8CFF] mb-4">
              Contact
            </div>

            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">
              Let’s Connect
            </h2>

            <p className="text-[#94A3B8] text-lg max-w-2xl">
              Open to remote Growth, Demand Generation, and GTM roles in B2B SaaS.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:mrityunjayaa@gmail.com"
              className="bg-[#4F8CFF] hover:bg-[#6ba0ff] transition-all text-black font-medium px-6 py-3 rounded-xl"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/mjay7/"
              className="border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 transition-all px-6 py-3 rounded-xl text-[#F5F7FA]"
            >
              LinkedIn
            </a>
            <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 transition-all px-6 py-3 rounded-xl text-[#F5F7FA]"
>
  Download Resume
</a>
          </div>
        </div>
      </section>
    </div>
  );
}
