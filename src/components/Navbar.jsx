import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('#hero')
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState(() => (
    localStorage.getItem('portfolio-theme') === 'dark' ? 'dark' : 'light'
  ))

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const activeLink = [...navLinks].reverse().find(({ href }) => {
        const section = document.querySelector(href)
        return section && section.getBoundingClientRect().top <= 120
      })
      setActiveSection(activeLink?.href ?? navLinks[0].href)
    }

    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const handleLink = (href) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-violet-100' : ''
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleLink('#hero') }}
          className="text-xl font-bold gradient-text tracking-tight"
        >
          AG.
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => handleLink(link.href)}
                className={`nav-link px-4 py-2 text-sm font-medium text-slate-600 hover:text-violet-700 rounded-lg hover:bg-violet-50 transition-all duration-200 ${activeSection === link.href ? 'is-active' : ''}`}
                aria-current={activeSection === link.href ? 'location' : undefined}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setTheme((current) => current === 'light' ? 'dark' : 'light')}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          >
            {theme === 'light' ? (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <circle cx="12" cy="12" r="4" strokeWidth="1.5" />
                <path strokeLinecap="round" strokeWidth="1.5" d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.2 15.1A8.5 8.5 0 0 1 8.9 3.8 8.5 8.5 0 1 0 20.2 15.1Z" />
              </svg>
            )}
          </button>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 text-slate-600 hover:text-violet-700 transition-all"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-80 border-b border-violet-100' : 'max-h-0'
        } bg-white/90 backdrop-blur-md`}
      >
        <ul className="px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => handleLink(link.href)}
                className={`nav-link w-full text-left px-4 py-3 text-sm font-medium text-slate-600 hover:text-violet-700 rounded-lg hover:bg-violet-50 transition-all ${activeSection === link.href ? 'is-active' : ''}`}
                aria-current={activeSection === link.href ? 'location' : undefined}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
