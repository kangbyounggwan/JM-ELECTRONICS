import { Lightbulb, Smile, Flame, Users, Target } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import SectionHeader from '../components/SectionHeader'
import { useLanguage } from '../i18n/LanguageContext'

const coreValues = [
  { icon: Lightbulb, title: 'Creativity', subtitle: '창의', desc: '혁신적 사고로 새로운 가치 창출' },
  { icon: Smile, title: 'Positiveness', subtitle: '긍정', desc: '긍정적 마인드로 도전' },
  { icon: Flame, title: 'Passion', subtitle: '열정', desc: '열정으로 최고를 추구' },
  { icon: Users, title: 'Harmony', subtitle: '화합', desc: '협력과 소통의 문화' },
  { icon: Target, title: 'Challenge', subtitle: '도전', desc: '끊임없는 도전과 성장' },
]

const philosophies = [
  {
    title: '기술과 품질',
    desc: '최고의 기술력과 품질로 고객에게 신뢰를 제공합니다',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
  },
  {
    title: '공동운명체',
    desc: '임직원과 함께 성장하는 상생의 가치를 실현합니다',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
  },
  {
    title: '고객지향',
    desc: '고객의 성공이 곧 우리의 성공이라는 신념으로',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80',
  },
]

export default function About() {
  const { t } = useLanguage()

  return (
    <div>
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
                "기술과 품질로<br/>고객의 신뢰를 만듭니다"
              </h3>
              <p className="text-white/80 text-lg leading-relaxed">
                인재와 기술을 바탕으로 최고의 PCB를 제작하여<br/>
                고객과 함께 성장하는 기업이 되겠습니다.
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
                24년의 기술력,<br/>신뢰로 이어갑니다
              </h2>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-gray text-lg leading-relaxed mb-12">
                2000년 설립 이래, JM일렉트로닉스는 IT장비, 항공우주, 의료기기, 통신장비 분야에
                고품질 PCB 솔루션을 공급해왔습니다. AS9100 인증을 보유한 품질경영시스템과
                부설연구소의 기술력으로 고객의 요구에 최적화된 제품을 제공합니다.
              </p>
            </ScrollReveal>

            {/* Stats Grid */}
            <ScrollReveal animation="fade-up" delay={300}>
            <div className="grid grid-cols-4 gap-6 border-t border-gray-200 pt-10">
              {[
                { value: '24', unit: '년+', label: '업력' },
                { value: '16', unit: '명+', label: '전문인력' },
                { value: '6', unit: '개', label: '전문부서' },
                { value: 'R&D', unit: '', label: '연구소' },
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
        <SectionHeader number="01" subtitle="Philosophy" title="경영이념" variant="dark" />
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
        <SectionHeader number="02" subtitle="Core Values" title="핵심 가치" variant="light" />
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
