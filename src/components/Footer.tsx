import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-dark text-white py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <Link to="/">
            <img src="/logo.png" alt="JM Electronics" className="h-12 brightness-0 invert" />
          </Link>
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-light-gray">
            <Link to="/about" className="hover:text-white">{t.nav.about}</Link>
            <Link to="/services" className="hover:text-white">{t.nav.services}</Link>
            <Link to="/products" className="hover:text-white">{t.nav.products}</Link>
            <Link to="/history" className="hover:text-white">{t.nav.history}</Link>
            <Link to="/contact" className="hover:text-white">{t.nav.contact}</Link>
          </nav>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray">
            <p>
              {t.home.address} : {t.home.addressFull}
              　{t.footer.tel}: 031-493-5548　{t.footer.fax}: 031-493-5541
            </p>
            <p>{t.home.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
