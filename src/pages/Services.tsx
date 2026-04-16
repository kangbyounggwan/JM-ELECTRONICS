import { Layers, Zap, Shield, HeartPulse, Users, Sparkles, Target } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import SectionHeader from '../components/SectionHeader'
import SEO from '../components/SEO'
import { useLanguage } from '../i18n/LanguageContext'

export default function Services() {
  const { t, lang } = useLanguage()

  const businessAreas = [
    {
      icon: Layers,
      title: t.services.multilayer,
      subtitle: t.services.multilayerSub,
      desc: t.services.multilayerDesc,
      features: ['HDI', 'BGA/CSP', 'Rigid-Flex'],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
    },
    {
      icon: Zap,
      title: t.services.highFreq,
      subtitle: t.services.highFreqSub,
      desc: t.services.highFreqDesc,
      features: ['RF PCB', 'Antenna', 'Rogers/Teflon'],
      image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=600&q=80',
    },
    {
      icon: Shield,
      title: t.services.defense,
      subtitle: t.services.defenseSub,
      desc: t.services.defenseDesc,
      features: ['MIL-SPEC', 'High Reliability', 'Environmental'],
      image: 'https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=600&q=80',
    },
    {
      icon: HeartPulse,
      title: t.services.medical,
      subtitle: t.services.medicalSub,
      desc: t.services.medicalDesc,
      features: ['High Precision', 'Biocompatible', 'FDA'],
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&q=80',
    },
  ]

  const qualityCards = [
    {
      icon: Users,
      title: t.services.customerSatisfaction,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
      points: t.services.customerSatisfactionPoints,
    },
    {
      icon: Sparkles,
      title: t.services.qualityInnovation,
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80',
      points: t.services.qualityInnovationPoints,
    },
    {
      icon: Target,
      title: t.services.participation,
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80',
      points: t.services.participationPoints,
    },
  ]

  const qualityGoals = [
    { label: t.services.deliveryRate, value: '100%', desc: t.services.deliveryRateDesc },
    { label: t.services.customerComplaint, value: 'ZERO', desc: t.services.customerComplaintDesc },
    { label: t.services.qualityIncident, value: 'ZERO', desc: t.services.qualityIncidentDesc },
    { label: t.services.defectRate, value: '5,000 PPM', desc: t.services.defectRateDesc },
  ]

  return (
    <div>
      <SEO
        title={t.services.pageTitle}
        description={lang === 'ko'
          ? 'JM일렉트로닉스 품질관리 시스템과 사업영역. 다층PCB, 고주파기판, 방산/항공, 의료기기 PCB 전문.'
          : 'JM Electronics quality management and business areas. Multi-layer PCB, RF PCB, defense/aerospace, medical PCB specialist.'
        }
        path="/services"
        keywords={lang === 'ko' ? 'PCB 품질관리, 다층PCB, 고주파기판, 방산PCB, 의료기기PCB, AS9100' : 'PCB quality, multi-layer PCB, RF PCB, defense PCB, medical PCB, AS9100'}
      />
      {/* Hero */}
      <section
        className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-white"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-dark/70"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{t.services.pageTitle}</h1>
          <p className="text-light-gray text-lg">{t.services.pageSubtitle}</p>
        </div>
      </section>

      {/* Quality Management */}
      <section className="py-24 bg-white">
        <SectionHeader number="01" subtitle={t.services.qualitySubtitle} title={t.services.qualityTitle} variant="light" />

        {/* Content - Constrained width */}
        <div className="max-w-7xl mx-auto px-8">
          {/* Quality Policy Slogan */}
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="text-center mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-dark mb-4">{t.services.qualityPolicy}</h3>
              <p className="text-xl md:text-2xl text-dark leading-relaxed">
                {t.services.qualityPolicyDesc1}<br/>
                <span className="text-primary font-bold">{t.services.qualityPolicyDesc2}</span>
              </p>
              <div className="w-24 h-1 bg-primary mx-auto mt-8"></div>
            </div>
          </ScrollReveal>

          {/* Quality Cards */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {qualityCards.map((item, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={200 + i * 100}>
                <div className="group">
                  <div className="relative h-48 overflow-hidden rounded-xl mb-6">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-dark mb-4">{item.title}</h4>
                  <ul className="space-y-2">
                    {item.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-2 text-gray text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Goals */}
      <section className="py-24 bg-bg-light">
        <SectionHeader number="02" subtitle={t.services.goalsSubtitle} title={t.services.goalsTitle} variant="dark" />

        {/* Content - Constrained width */}
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {qualityGoals.map((item, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
                <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
                  <p className="text-gray text-sm mb-2">{item.label}</p>
                  <p className="text-4xl font-bold text-primary mb-2">{item.value}</p>
                  <p className="text-xs text-gray">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Business Areas - 03 */}
      <section className="py-24 bg-white">
        <SectionHeader number="03" subtitle={t.services.businessSubtitle} title={t.services.businessTitle} variant="light" />

        {/* Content - Constrained width */}
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {businessAreas.map((item, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
                <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-6">
                      <p className="text-white/70 text-sm">{item.subtitle}</p>
                      <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                    </div>
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray mb-4">{item.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.features.map((feature, j) => (
                        <span key={j} className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
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
