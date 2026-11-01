import { useScrollAnimation } from '../hooks/useScrollAnimation'

const steps = [
  {
    number: '01',
    title: 'Discovery & Understanding',
    description: 'We discuss your business needs, challenges, and project goals to understand what solution would work best.',
  },
  {
    number: '02',
    title: 'Planning & Strategy',
    description: 'Define the project scope, features, technologies, and workflow before development begins.',
  },
  {
    number: '03',
    title: 'Development & Implementation',
    description: 'Build the website, application, or automation system based on the agreed requirements.',
  },
  {
    number: '04',
    title: 'Testing & Delivery',
    description: 'Test the solution, make necessary refinements, and deliver the completed project.',
  },
]

export default function Process() {
  const ref = useScrollAnimation()

  return (
    <section id="process" className="py-24 px-6 bg-white/70">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="animate-on-scroll">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-violet-600 text-sm font-semibold tracking-widest uppercase">Process</span>
            <div className="flex-1 h-px bg-gradient-to-r from-violet-400/40 to-transparent" />
          </div>
          <h2 className="section-title">
            From Idea to <span className="gradient-text">Implementation.</span>
          </h2>
          <p className="section-subtitle">
            A straightforward process focused on understanding your needs and delivering solutions that work.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {steps.map((step) => (
              <article
                key={step.number}
                className="glass-card p-6 hover:border-violet-200 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <span className="w-10 h-10 flex-shrink-0 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center font-semibold">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
