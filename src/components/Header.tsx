import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Globe } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

export default function Header() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const { lang, setLang, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { path: '/about', label: t.nav.about },
    { path: '/services', label: t.nav.services },
    { path: '/products', label: t.nav.products },
    { path: '/history', label: t.nav.history },
    { path: '/contact', label: t.nav.contact },
  ]

  const headerBg = scrolled
    ? 'bg-dark/95 backdrop-blur'
    : 'bg-transparent'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="w-full px-12 h-20 flex items-center justify-between">
        <Link to="/" className="flex-shrink-0">
          <img src="/logo.png" alt="JM Electronics" className="h-14 brightness-0 invert" />
        </Link>
        <nav className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-base font-bold transition ${
                location.pathname === item.path
                  ? 'text-white border-b-2 border-white pb-1'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          onClick={() => setLang(lang === 'ko' ? 'en' : 'ko')}
          className="flex items-center gap-1.5 text-sm font-medium text-white/70 hover:text-white transition"
        >
          {lang.toUpperCase()}
          <Globe className="w-4 h-4" />
        </button>
      </div>
    </header>
  )
}
