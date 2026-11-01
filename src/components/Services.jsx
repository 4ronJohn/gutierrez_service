import { useScrollAnimation } from '../hooks/useScrollAnimation'

const services = [
  {
    title: 'Web Development',
    description: 'Building responsive websites and web applications tailored to business needs, from business websites to custom digital platforms.',
  },
  {
    title: 'Workflow Automation',
    description: 'Automating repetitive tasks and connecting business tools to reduce manual work, minimize errors, and save valuable time.',
  },
  {
    title: 'AI-Powered Solutions',
    description: 'Integrating AI into applications and business workflows to simplify tasks, improve productivity, and support smarter operations.',
  },
  {
    title: 'API & System Integration',
    description: 'Connecting different applications, platforms, and databases so they can communicate and work together seamlessly.',
  },
]

export default function Services() {
  const ref = useScrollAnimation()

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="animate-on-scroll">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-violet-600 text-sm font-semibold tracking-widest uppercase">Services</span>
            <div className="flex-1 h-px bg-gradient-to-r from-violet-400/40 to-transparent" />
          </div>
          <h2 className="section-title">
            <span className="gradient-text">Services</span> &amp; Solutions
          </h2>
          <p className="section-subtitle">
            Practical digital solutions designed to help businesses streamline operations, improve efficiency, and grow through technology.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {services.map((service) => (
              <article
                key={service.title}
                className="glass-card p-6 hover:border-violet-200 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
