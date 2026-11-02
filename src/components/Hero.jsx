export default function Hero() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      className="hero-section relative flex items-center overflow-hidden"
    >
      <div className="relative z-10 grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 mx-auto lg:grid-cols-12 lg:gap-16">
        <div className="hero-copy lg:col-span-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-3 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
          Digital Solutions Developer
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 animate-fade-in animation-delay-100">
          <span>Aron John</span>
          <br />
          <span className="italic">Gutierrez</span>
        </h1>

        {/* Services */}
        <div className="hero-services flex flex-wrap items-center justify-start gap-2 mb-6 animate-fade-in animation-delay-200">
          <span className="px-3 py-1 rounded-full bg-white/90 text-slate-700 text-sm border border-violet-100 shadow-sm">Web Development</span>
          <span className="text-slate-400">·</span>
          <span className="px-3 py-1 rounded-full bg-white/90 text-slate-700 text-sm border border-violet-100 shadow-sm">Workflow Automation</span>
          <span className="text-slate-400">·</span>
          <span className="px-3 py-1 rounded-full bg-white/90 text-slate-700 text-sm border border-violet-100 shadow-sm">AI-Powered Solutions</span>
          <span className="text-slate-400">·</span>
          <span className="px-3 py-1 rounded-full bg-white/90 text-slate-700 text-sm border border-violet-100 shadow-sm">API &amp; System Integration</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-5 animate-fade-in animation-delay-200">
          Turning Ideas Into Digital Solutions.
        </h2>

        {/* Introduction */}
        <p className="text-slate-600 text-lg md:text-xl max-w-2xl leading-relaxed mb-5 animate-fade-in animation-delay-300">
          I build websites, automate workflows, and develop smart digital solutions that help businesses work better, faster, and smarter.
        </p>

        {/* CTAs  */}
        <div className="flex flex-wrap items-center justify-start gap-4 animate-fade-in animation-delay-400">
          <button
            onClick={() => scrollTo('#services')}
            className="btn-primary flex items-center gap-2"
          >
            Explore My Services
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <button
            onClick={() => scrollTo('#contact')}
            className="btn-outline flex items-center gap-2"
          >
            Discuss a Project
          </button>
        </div>
        </div>
        <div className="hero-window hidden lg:block lg:col-span-4" aria-hidden="true">
          <div className="hero-window-inner" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-violet-200 flex items-start justify-center pt-2">
          <div className="w-1 h-2.5 rounded-full bg-violet-500 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
