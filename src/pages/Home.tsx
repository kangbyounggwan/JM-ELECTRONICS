import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import SEO from '../components/SEO'

export default function Home() {
  const [current, setCurrent] = useState(0)
  const { t, lang } = useLanguage()

  const slides = [
    {
      title: 'JM Electronics',
      subtitle: t.home.heroSubtitle,
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80',
      link: '/about',
      linkText: t.home.aboutBtn,
    },
    {
      title: 'AEROSPACE',
      subtitle: t.home.aerospace,
      image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?w=1920&q=80',
      link: '/contact',
      linkText: t.home.inquiryBtn,
    },
    {
      title: 'DEFENSE',
      subtitle: t.home.defense,
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80',
      link: '/contact',
      linkText: t.home.inquiryBtn,
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCurrent((current - 1 + slides.length) % slides.length)
  const next = () => setCurrent((current + 1) % slides.length)

  return (
    <div>
      <SEO
        title={lang === 'ko' ? 'PCB 전문 제조기업' : 'Professional PCB Manufacturer'}
        description={lang === 'ko'
          ? 'JM일렉트로닉스는 AS9100 인증 PCB 전문 제조기업입니다. 항공우주, 국방, 의료기기용 고품질 PCB를 제작합니다.'
          : 'JM Electronics is an AS9100 certified PCB manufacturer for aerospace, defense, and medical devices.'
        }
        path="/"
      />
      {/* Hero Slider */}
      <section className="relative h-screen">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === current ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-dark/60"></div>
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-8 w-full">
                <div className="max-w-xl">
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 whitespace-nowrap">
                    {slide.title}
                  </h1>
                  <p className="text-xl text-white/80 mb-10">
                    {slide.subtitle}
                  </p>
                  <Link
                    to={slide.link}
                    className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 font-semibold hover:bg-white hover:text-dark transition"
                  >
                    {slide.linkText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prev}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center text-white/60 hover:text-white transition"
        >
          <ChevronLeft className="w-10 h-10" />
        </button>
        <button
          onClick={next}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center text-white/60 hover:text-white transition"
        >
          <ChevronRight className="w-10 h-10" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition ${
                i === current ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-bg-light overflow-hidden">
        {/* Title */}
        <div className="text-center mb-12 px-8">
          <h3 className="text-2xl md:text-3xl font-bold text-dark mb-4">{t.home.partners}</h3>
          <p className="text-xl md:text-2xl text-dark leading-relaxed">
            {t.home.partnersDesc} <span className="text-primary font-bold">{t.home.partnersCount}</span> {t.home.partnersTrust}
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-8"></div>
        </div>

        {/* Scrolling logos */}
        <div className="mt-10">
          <div className="relative">
            {/* Fade masks */}
            <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-linear-to-r from-bg-light to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-linear-to-l from-bg-light to-transparent z-10 pointer-events-none"></div>
            <div className="flex animate-scroll pl-4 md:pl-16">
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex items-center gap-10 md:gap-14 shrink-0 pr-10 md:pr-14">
                  {[
                    { name: '신흥정밀', logo: '/partners/shinheung.png' },
                    { name: 'RS Automation', logo: '/partners/rs-automation.png' },
                    { name: 'AC&T system', logo: '/partners/acot.png' },
                    { name: 'ATEC AP', logo: '/partners/atecap.png' },
                    { name: 'i3system', logo: '/partners/i3system.png' },
                    { name: 'Intellian', logo: '/partners/intellian.png' },
                    { name: 'KMDATA', logo: '/partners/kmdata.png' },
                  ].map((partner, i) => (
                    <img
                      key={i}
                      src={partner.logo}
                      alt={partner.name}
                      className="h-20 md:h-28 object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section
        className="relative bg-dark overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-dark/85"></div>

        {/* CTA Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 py-20 md:py-28">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                {t.home.ctaTitle1}<br />
                {t.home.ctaTitle2}
              </h2>
              <p className="text-light-gray">
                {t.home.ctaDesc}
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 hover:bg-white/10 transition shrink-0"
            >
              <span>{t.home.ctaBtn}</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-8 py-10">
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
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray">
              <p>
                {t.home.address} : {t.home.addressFull}　{t.footer.tel}: 031-493-5548　{t.footer.fax}: 031-493-5541
              </p>
              <p>{t.home.copyright}</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
