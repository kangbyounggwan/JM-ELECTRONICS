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

      {/* Core Values */}
      <section className="py-24 bg-white">
        <SectionHeader number="02" subtitle="Core Values" title={t.about.coreValuesTitle} variant="light" />
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {coreValues.map((item, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
                <div className="bg-bg-light rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-dark mb-1">{item.title}</h3>
                  <p className="text-primary text-sm font-medium mb-2">{item.subtitle}</p>
                  <p className="text-gray text-xs leading-relaxed hidden md:block">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
