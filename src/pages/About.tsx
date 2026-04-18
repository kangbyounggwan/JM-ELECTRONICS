import { Lightbulb, Smile, Flame, Users, Target } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import SectionHeader from '../components/SectionHeader'
import SEO from '../components/SEO'
import { useLanguage } from '../i18n/LanguageContext'

const valueIcons = [Lightbulb, Smile, Flame, Users, Target]

const philosophyImages = [
  'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
  'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80',
]

export default function About() {
  const { t, lang } = useLanguage()

  const coreValues = t.about.coreValues.map((value, i) => ({
    ...value,
    icon: valueIcons[i],
  }))

  const philosophies = t.about.philosophies.map((phil, i) => ({
    ...phil,
    image: philosophyImages[i],
  }))

  return (
    <div>
      <SEO
        title={t.about.pageTitle}
        description={lang === 'ko'
          ? '24년 기술력의 JM일렉트로닉스. 경영이념, 핵심가치, 비전을 소개합니다.'
          : '24 years of expertise at JM Electronics. Our philosophy, core values, and vision.'
        }
        path="/about"
      />
      {/* Hero */}
      <section
        className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-white"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/60 to-dark/80"></div>
        <div className="relative z-10 text-center">
          <p className="text-primary font-medium tracking-widest mb-4 animate-fade-in">{t.about.pageSubtitle.toUpperCase()}</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{t.about.pageTitle}</h1>
          <p className="text-light-gray text-lg">Since 2000</p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-white">
        <div className="grid lg:grid-cols-2">
          {/* Left - Image */}
          <div
            className="min-h-[500px] lg:min-h-[600px] bg-cover bg-center relative"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=80)',
            }}
          >
            <div className="absolute inset-0 bg-primary/85"></div>
            <div className="absolute inset-0 flex flex-col justify-center px-[10%] md:px-16 lg:px-20 text-white">
              <p className="text-white/70 text-base tracking-widest mb-6">OUR MISSION</p>
              <h3 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
                "{t.about.missionQuote1}<br/>{t.about.missionQuote2}"
              </h3>
              <p className="text-white/80 text-lg leading-relaxed">
                {t.about.missionDesc1}<br/>
                {t.about.missionDesc2}
              </p>
            </div>
          </div>

          {/* Right - Content */}
          <div className="px-[10%] py-16 md:px-16 lg:px-20 lg:py-20 flex flex-col justify-center">
            <ScrollReveal animation="fade-up">
              <p className="text-primary font-semibold tracking-wider mb-6 text-base">ABOUT JM ELECTRONICS</p>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={100}>
              <h2 className="text-4xl md:text-5xl font-bold text-dark mb-8 leading-tight">
                {t.about.aboutTitle1}<br/>{t.about.aboutTitle2}
              </h2>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-gray text-lg leading-relaxed mb-12">
                {t.about.aboutDesc}
              </p>
            </ScrollReveal>

            {/* Stats Grid */}
            <ScrollReveal animation="fade-up" delay={300}>
            <div className="grid grid-cols-4 gap-6 border-t border-gray-200 pt-10">
              {[
                { value: '24', unit: t.about.stats.yearsUnit, label: t.about.stats.yearsLabel },
                { value: '16', unit: t.about.stats.staffUnit, label: t.about.stats.staffLabel },
                { value: '6', unit: t.about.stats.deptUnit, label: t.about.stats.deptLabel },
                { value: 'R&D', unit: '', label: t.about.stats.rdLabel },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl md:text-5xl font-bold text-dark">{stat.value}</span>
                    <span className="text-primary font-semibold text-lg ml-1">{stat.unit}</span>
                  </div>
                  <div className="text-gray text-sm mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Management Philosophy */}
      <section className="py-24 bg-bg-light">
        <SectionHeader number="01" subtitle="Philosophy" title={t.about.philosophyTitle} variant="dark" />
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-0">
            {philosophies.map((item, i) => (
              <div
                key={i}
                className="group relative h-[400px] overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-dark/60 group-hover:bg-primary/80 transition-colors duration-500"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8">
                  <div className="w-16 h-16 rounded-full border-2 border-white/50 flex items-center justify-center mb-6">
                    <span className="text-2xl font-bold text-white">0{i + 1}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-white/80 text-base leading-relaxed max-w-xs">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
        <SectionHeader number="02" subtitle="Core Values" title={t.about.coreValuesTitle} variant="light" />
        <div className="max-w-7xl mx-auto px-8">
          {/* Desktop: Featured Layout */}
          <div className="hidden md:grid md:grid-cols-5 gap-5">
            {coreValues.map((item, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
                <div className="group relative h-[320px] perspective-1000">
                  {/* Card */}
                  <div className="relative h-full bg-white rounded-3xl p-6 shadow-lg border border-gray-100
                    transition-all duration-500 ease-out
                    hover:shadow-2xl hover:-translate-y-3 hover:border-primary/30
                    overflow-hidden">

                    {/* Background Gradient on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0
                      group-hover:from-primary/5 group-hover:to-blue-500/10
                      transition-all duration-500 rounded-3xl" />

                    {/* Decorative Circle */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full
                      group-hover:scale-150 group-hover:bg-primary/10 transition-all duration-700" />

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col items-center text-center">
                      {/* Icon Container */}
                      <div className="relative mb-5">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-blue-500/10
                          flex items-center justify-center
                          group-hover:from-primary group-hover:to-blue-600
                          group-hover:scale-110 group-hover:rotate-3
                          transition-all duration-500 ease-out shadow-sm group-hover:shadow-lg">
                          <item.icon className="w-9 h-9 text-primary group-hover:text-white transition-colors duration-300" />
                        </div>
                        {/* Pulse Ring */}
                        <div className="absolute inset-0 rounded-2xl border-2 border-primary/20
                          group-hover:scale-125 group-hover:opacity-0 transition-all duration-700" />
                      </div>

                      {/* Text */}
                      <h3 className="text-xl font-bold text-dark mb-1 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-primary text-base font-semibold mb-4 tracking-wide">
                        {item.subtitle}
                      </p>

                      {/* Description */}
                      <div className="flex-1 flex items-center">
                        <p className="text-gray-600 text-base leading-relaxed
                          transform translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                          {item.desc}
                        </p>
                      </div>

                      {/* Bottom Accent Line */}
                      <div className="w-0 h-1 bg-gradient-to-r from-primary to-blue-500 rounded-full
                        group-hover:w-16 transition-all duration-500 mt-4" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Mobile: Swipe Cards */}
          <div className="md:hidden space-y-4">
            {coreValues.map((item, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 80}>
                <div className="group bg-white rounded-2xl p-5 shadow-md border border-gray-100
                  flex items-center gap-5 active:scale-[0.98] transition-transform">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-blue-600
                    flex items-center justify-center flex-shrink-0 shadow-lg">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-dark">{item.title}</h3>
                    <p className="text-primary text-sm font-medium">{item.subtitle}</p>
                    <p className="text-gray-600 text-sm mt-1 line-clamp-2">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
