import { useState } from 'react'
import { ChevronRight, ChevronDown, Layers, Zap, Shield, HeartPulse, X } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import SectionHeader from '../components/SectionHeader'
import SEO from '../components/SEO'
import { useLanguage } from '../i18n/LanguageContext'

const processImages = [
  'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
  'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=800&q=80',
  'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
  'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=800&q=80',
  'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80',
]

const processEquipment = [
  ['Frontline Genesis', 'Valor NPI', 'CAM350'],
  ['LDI', 'Dev Line', 'Etch Line'],
  ['Vacuum Press', 'Lay-up Room', 'Gauge'],
  ['CNC Drill', 'CO2 Laser', 'UV Laser'],
  ['Electroless Line', 'Electrolytic Line', 'Gauge'],
  ['LDI', 'Etch Line', 'AOI'],
  ['Screen Printer', 'LDI', 'Dev Line'],
  ['Inkjet', 'Screen Printer', 'UV Cure'],
  ['HASL Line', 'ENIG Line', 'OSP Line'],
  ['Flying Probe', 'AOI', 'Visual Inspect'],
]

export default function Products() {
  const [openProcess, setOpenProcess] = useState<number | null>(null)
  const { t, lang } = useLanguage()

  const processSteps = t.products.processSteps.map((step, i) => ({
    step: String(i + 1).padStart(2, '0'),
    name: step.name,
    desc: step.desc,
    detail: step.detail,
    equipment: processEquipment[i],
    image: processImages[i],
  }))

  const productCategories = [
    {
      number: '02',
      subtitle: t.products.categories.multilayer.subtitle,
      title: t.products.categories.multilayer.title,
      icon: Layers,
      desc: t.products.categories.multilayer.desc,
      features: ['HDI', 'BGA/CSP', 'Rigid-Flex', 'Any Layer'],
      specs: [
        { label: t.products.specs.layers, value: '4~20+' },
        { label: t.products.specs.minWidth, value: '75μm' },
        { label: t.products.specs.minHole, value: '0.15mm' },
      ],
      products: [
        { name: t.products.productNames.server, image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80' },
        { name: t.products.productNames.industrial, image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80' },
        { name: t.products.productNames.comm, image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=400&q=80' },
      ],
    },
    {
      number: '03',
      subtitle: t.products.categories.highFreq.subtitle,
      title: t.products.categories.highFreq.title,
      icon: Zap,
      desc: t.products.categories.highFreq.desc,
      features: ['RF PCB', 'Antenna PCB', 'Rogers', 'Teflon'],
      specs: [
        { label: t.products.specs.frequency, value: '~77GHz' },
        { label: t.products.specs.dielectric, value: '2.2~10.2' },
        { label: t.products.specs.lossRate, value: '0.001~' },
      ],
      products: [
        { name: t.products.productNames.antenna5g, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80' },
        { name: t.products.productNames.rfModule, image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=400&q=80' },
        { name: t.products.productNames.radar, image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&q=80' },
      ],
    },
    {
      number: '04',
      subtitle: t.products.categories.defense.subtitle,
      title: t.products.categories.defense.title,
      icon: Shield,
      desc: t.products.categories.defense.desc,
      features: ['MIL-SPEC', lang === 'ko' ? '고신뢰성' : 'High Reliability', lang === 'ko' ? '내환경성' : 'Environmental', 'IPC Class 3'],
      specs: [
        { label: t.products.specs.certification, value: 'AS9100D' },
        { label: t.products.specs.standard, value: 'MIL-PRF-31032' },
        { label: t.products.specs.reliability, value: 'Class 3' },
      ],
      products: [
        { name: t.products.productNames.avionics, image: 'https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=400&q=80' },
        { name: t.products.productNames.satellite, image: 'https://images.unsplash.com/photo-1516849677043-ef67c9557e16?w=400&q=80' },
        { name: t.products.productNames.defenseElec, image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&q=80' },
      ],
    },
    {
      number: '05',
      subtitle: t.products.categories.medical.subtitle,
      title: t.products.categories.medical.title,
      icon: HeartPulse,
      desc: t.products.categories.medical.desc,
      features: [lang === 'ko' ? '고정밀도' : 'High Precision', lang === 'ko' ? '생체적합' : 'Biocompatible', 'FDA', 'ISO 13485'],
      specs: [
        { label: t.products.specs.certification, value: 'ISO 13485' },
        { label: t.products.specs.standard, value: 'IPC-A-610' },
        { label: t.products.specs.cleanroom, value: 'Class 10K' },
      ],
      products: [
        { name: t.products.productNames.diagnostic, image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&q=80' },
        { name: t.products.productNames.patientMonitor, image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=400&q=80' },
        { name: t.products.productNames.medicalImaging, image: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=400&q=80' },
      ],
    },
  ]

  return (
    <div>
      <SEO
        title={t.products.pageTitle}
        description={lang === 'ko'
          ? 'JM일렉트로닉스 PCB 제조공정과 생산품. 설계/CAM부터 검사/출하까지 10단계 공정. 다층PCB, 고주파기판, 방산/항공, 의료기기 PCB.'
          : 'JM Electronics PCB manufacturing process and products. 10-step process from design to shipping. Multi-layer, RF, defense, medical PCB.'
        }
        path="/products"
        keywords={lang === 'ko' ? 'PCB제조공정, PCB생산품, 다층PCB, 고주파기판, HDI기판, 드릴링, 도금, 솔더마스크' : 'PCB manufacturing, PCB products, multi-layer PCB, RF PCB, HDI, drilling, plating, solder mask'}
      />
      {/* Hero */}
      <section
        className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-white"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-dark/70"></div>
        <div className="relative z-10 text-center">
          <p className="text-primary font-medium tracking-widest mb-4">{t.products.pageSubtitle.toUpperCase()}</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{t.products.pageTitle}</h1>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-24 bg-white">
        <SectionHeader number="01" subtitle={t.products.processSubtitle} title={t.products.processTitle} variant="light" />
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {processSteps.map((item, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 50}>
                <div className="relative">
                  <button
                    onClick={() => setOpenProcess(openProcess === i ? null : i)}
                    className={`w-full bg-bg-light rounded-xl p-4 text-center h-full transition-all duration-300 hover:shadow-md cursor-pointer ${
                      openProcess === i ? 'ring-2 ring-primary bg-primary/5' : ''
                    }`}
                  >
                    <div className={`w-10 h-10 mx-auto mb-3 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                      openProcess === i ? 'bg-primary text-white' : 'bg-primary text-white'
                    }`}>
                      {item.step}
                    </div>
                    <h4 className="font-bold text-dark mb-1">{item.name}</h4>
                    <p className="text-xs text-gray">{item.desc}</p>
                    <div className={`w-6 h-6 mx-auto mt-2 rounded-full flex items-center justify-center transition-all ${
                      openProcess === i ? 'bg-gray-600' : 'bg-gray-200'
                    }`}>
                      <ChevronDown className={`w-3 h-3 transition-transform ${
                        openProcess === i ? 'rotate-180 text-white' : 'text-gray-500'
                      }`} />
                    </div>
                  </button>
                  {i < processSteps.length - 1 && i % 5 !== 4 && (
                    <ChevronRight className="hidden md:block absolute top-1/2 -right-5 -translate-y-1/2 w-4 h-8 text-primary z-10" />
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Accordion Detail */}
          {openProcess !== null && (
            <div className="mt-8 bg-bg-light rounded-2xl overflow-hidden animate-in slide-in-from-top duration-300">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 md:h-auto">
                  <img
                    src={processSteps[openProcess].image}
                    alt={processSteps[openProcess].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-dark/20"></div>
                </div>
                {/* Content */}
                <div className="p-8 relative">
                  <button
                    onClick={() => setOpenProcess(null)}
                    className="absolute top-4 right-4 w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
                  >
                    <X className="w-4 h-4 text-gray" />
                  </button>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                      {processSteps[openProcess].step}
                    </span>
                    <div>
                      <h3 className="text-2xl font-bold text-dark">{processSteps[openProcess].name}</h3>
                      <p className="text-sm text-gray">{processSteps[openProcess].desc}</p>
                    </div>
                  </div>
                  <p className="text-gray leading-relaxed mb-6">
                    {processSteps[openProcess].detail}
                  </p>
                  <div>
                    <p className="text-sm font-semibold text-dark mb-3">{t.products.mainEquipment}</p>
                    <div className="flex flex-wrap gap-2">
                      {processSteps[openProcess].equipment.map((eq, j) => (
                        <span key={j} className="px-3 py-1.5 bg-white rounded-lg text-sm text-dark shadow-sm">
                          {eq}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Product Categories */}
      {productCategories.map((category, idx) => (
        <section
          key={category.number}
          className={`py-24 ${idx % 2 === 0 ? 'bg-bg-light' : 'bg-white'}`}
        >
          <SectionHeader
            number={category.number}
            subtitle={category.subtitle}
            title={category.title}
            variant={idx % 2 === 0 ? 'dark' : 'light'}
          />
          <div className="max-w-7xl mx-auto px-8">
            {/* Category Info */}
            <ScrollReveal animation="fade-up">
              <div className="flex flex-col md:flex-row gap-8 mb-12">
                {/* Left - Description & Features */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                      <category.icon className="w-7 h-7 text-primary" />
                    </div>
                    <p className="text-lg text-gray">{category.desc}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {category.features.map((feature, j) => (
                      <span key={j} className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Right - Specs */}
                <div className="flex gap-4">
                  {category.specs.map((spec, j) => (
                    <div key={j} className="bg-white rounded-xl p-4 text-center shadow-sm min-w-[100px]">
                      <p className="text-xs text-gray mb-1">{spec.label}</p>
                      <p className="text-lg font-bold text-primary">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Products Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {category.products.map((product, j) => (
                <ScrollReveal key={j} animation="fade-up" delay={j * 100}>
                  <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <h4 className="text-white font-semibold">{product.name}</h4>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Contact Banner */}
      <section className="py-12 bg-bg-light border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray">
            {t.products.contactBanner}
          </p>
          <a href="/contact" className="text-primary font-medium hover:underline flex items-center gap-1">
            {t.products.contactLink} →
          </a>
        </div>
      </section>
    </div>
  )
}
