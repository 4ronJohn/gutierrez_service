import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function About() {
  const ref = useScrollAnimation()

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className="animate-on-scroll">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-violet-600 text-sm font-semibold tracking-widest uppercase">01 / About</span>
            <div className="flex-1 h-px bg-gradient-to-r from-violet-400/40 to-transparent" />
          </div>
          <div className="grid md:grid-cols-5 gap-8 md:gap-10 items-stretch">
            <div className="md:col-span-3">
              <h2 className="section-title text-3xl md:text-4xl leading-tight mb-5">
                Building Digital Solutions That Make Work Simpler.
              </h2>
              <p className="text-slate-700 text-lg leading-relaxed mb-4">
                I'm a developer focused on building practical digital solutions that help businesses improve the way they work.
              </p>
              <p className="text-slate-600 leading-relaxed">
                From developing websites and applications to automating repetitive workflows and connecting different systems, I turn ideas into functional solutions designed around real business needs.
              </p>
            </div>

            <aside className="md:col-span-2 glass-card p-6 md:p-7 flex flex-col justify-between gap-6">
              <div>
                <h3 className="text-sm font-semibold text-violet-700 uppercase tracking-widest mb-4">
                  Areas of Focus
                </h3>
                <ul className="space-y-3">
                  {['Websites & applications', 'Workflow automation', 'System integration'].map((focus) => (
                    <li key={focus} className="flex items-center gap-3 text-slate-700">
                      <span className="w-2 h-2 rounded-full bg-violet-500 flex-shrink-0" />
                      {focus}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://mail.google.com/mail/?view=cm&to=gutierrezjohn409@gmail.com"
                  className="btn-primary text-sm py-2.5"
                >
                  Get In Touch
                </a>
                <a
                  href="https://www.linkedin.com/in/aron-john-gutierrez-34b499273/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-sm py-2.5 flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  )
}
