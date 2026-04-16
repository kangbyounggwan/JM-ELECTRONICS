import { useState } from 'react'
import { ChevronRight, ChevronDown, Layers, Zap, Shield, HeartPulse, X } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import SectionHeader from '../components/SectionHeader'
import { useLanguage } from '../i18n/LanguageContext'

const processSteps = [
  {
    step: '01',
    name: '설계/CAM',
    desc: '회로 설계 및 데이터 검증',
    detail: 'CAM 소프트웨어를 활용하여 고객 데이터를 검증하고 제조에 최적화된 설계로 변환합니다. DFM 검토를 통해 생산성과 품질을 사전에 확보합니다.',
    equipment: ['Frontline Genesis', 'Valor NPI', 'CAM350'],
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
  },
  {
    step: '02',
    name: '내층',
    desc: '내층 회로 형성',
    detail: '동박적층판(CCL)에 드라이필름을 라미네이팅하고 노광, 현상, 에칭 공정을 통해 내층 회로 패턴을 형성합니다.',
    equipment: ['LDI 노광기', '자동 현상라인', '에칭라인'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
  },
  {
    step: '03',
    name: '적층',
    desc: '다층 기판 압착',
    detail: '내층 코어와 프리프레그, 동박을 순서대로 적층하여 고온고압 환경에서 압착합니다. 층간 정합도와 두께 균일성을 확보합니다.',
    equipment: ['진공 적층 프레스', '레이업 룸', '두께 측정기'],
    image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=800&q=80',
  },
  {
    step: '04',
    name: '드릴링',
    desc: '홀 가공',
    detail: 'CNC 드릴링 머신으로 스루홀, 블라인드/베리드 비아를 가공합니다. 레이저 드릴로 마이크로 비아를 정밀 가공합니다.',
    equipment: ['CNC 드릴머신', 'CO2 레이저', 'UV 레이저'],
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80',
  },
  {
    step: '05',
    name: '도금',
    desc: '동도금 처리',
    detail: '무전해 동도금으로 홀 내벽을 전도성 있게 만든 후, 전기 동도금으로 필요한 두께까지 도금합니다.',
    equipment: ['무전해 도금라인', '전해 동도금라인', '두께 측정기'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    step: '06',
    name: '외층',
    desc: '외층 회로 형성',
    detail: '외층에 드라이필름을 라미네이팅하고 LDI 노광, 현상, 에칭 공정을 통해 정밀한 외층 회로를 형성합니다.',
    equipment: ['LDI 노광기', '자동 에칭라인', 'AOI 검사기'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
  },
  {
    step: '07',
    name: '솔더마스크',
    desc: '절연층 도포',
    detail: '회로 보호와 솔더링 영역 정의를 위해 솔더마스크 잉크를 도포하고 노광, 현상하여 패턴을 형성합니다.',
    equipment: ['스크린 프린터', 'LDI 노광기', '자동 현상라인'],
    image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=800&q=80',
  },
  {
    step: '08',
    name: '실크인쇄',
    desc: '부품 마킹',
    detail: '부품 위치, 극성, 제품 정보 등을 인쇄하여 조립 및 유지보수를 용이하게 합니다.',
    equipment: ['잉크젯 프린터', '스크린 프린터', 'UV 경화기'],
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
  },
  {
    step: '09',
    name: '표면처리',
    desc: 'HASL/ENIG 등',
    detail: '납땜성 확보와 산화 방지를 위해 HASL, ENIG, OSP 등 다양한 표면처리를 적용합니다.',
    equipment: ['HASL 라인', 'ENIG 도금라인', 'OSP 라인'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    step: '10',
    name: '검사/출하',
    desc: '품질 검사 및 출하',
    detail: 'AOI, 전기검사, 외관검사를 통해 품질을 확인하고, 포장 및 출하합니다.',
    equipment: ['Flying Probe', 'AOI', '외관 검사대'],
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80',
  },
]

const productCategories = [
  {
    number: '02',
    subtitle: 'Multi-Layer PCB',
    title: '다층 PCB',
    icon: Layers,
    desc: '4층~20층 이상의 고밀도 다층 기판 제작',
    features: ['HDI 기판', 'BGA/CSP', 'Rigid-Flex', 'Any Layer'],
    specs: [
      { label: '층수', value: '4~20층+' },
      { label: '최소 선폭', value: '75μm' },
      { label: '최소 홀', value: '0.15mm' },
    ],
    products: [
      { name: '서버/네트워크 장비', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80' },
      { name: '산업용 제어기', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80' },
      { name: '통신 모듈', image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=400&q=80' },
    ],
  },
  {
    number: '03',
    subtitle: 'High Frequency PCB',
    title: '고주파 기판',
    icon: Zap,
    desc: '5G/통신장비용 고주파 특수 기판',
    features: ['RF 기판', 'Antenna PCB', 'Rogers', 'Teflon'],
    specs: [
      { label: '주파수', value: '~77GHz' },
      { label: '유전율', value: '2.2~10.2' },
      { label: '손실률', value: '0.001~' },
    ],
    products: [
      { name: '5G 안테나', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80' },
      { name: 'RF 모듈', image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=400&q=80' },
      { name: '레이더 시스템', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&q=80' },
    ],
  },
  {
    number: '04',
    subtitle: 'Defense & Aerospace',
    title: '방산/항공',
    icon: Shield,
    desc: 'AS9100 인증 기반 항공우주 품질',
    features: ['MIL-SPEC', '고신뢰성', '내환경성', 'IPC Class 3'],
    specs: [
      { label: '인증', value: 'AS9100D' },
      { label: '규격', value: 'MIL-PRF-31032' },
      { label: '신뢰성', value: 'Class 3' },
    ],
    products: [
      { name: '항공전자장비', image: 'https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=400&q=80' },
      { name: '위성통신장비', image: 'https://images.unsplash.com/photo-1516849677043-ef67c9557e16?w=400&q=80' },
      { name: '방산전자장비', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&q=80' },
    ],
  },
  {
    number: '05',
    subtitle: 'Medical Device',
    title: '의료기기',
    icon: HeartPulse,
    desc: '의료기기용 고정밀 PCB 솔루션',
    features: ['고정밀도', '생체적합', 'FDA 대응', 'ISO 13485'],
    specs: [
      { label: '인증', value: 'ISO 13485' },
      { label: '규격', value: 'IPC-A-610' },
      { label: '청정도', value: 'Class 10K' },
    ],
    products: [
      { name: '진단장비', image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&q=80' },
      { name: '환자 모니터링', image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=400&q=80' },
      { name: '의료 영상장비', image: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=400&q=80' },
    ],
  },
]

export default function Products() {
  const [openProcess, setOpenProcess] = useState<number | null>(null)
  const { t } = useLanguage()

  return (
    <div>
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
                    <p className="text-sm font-semibold text-dark mb-3">주요 설비</p>
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
            프로젝트에 맞는 PCB 솔루션이 필요하시면 언제든 연락주세요.
          </p>
          <a href="/contact" className="text-primary font-medium hover:underline flex items-center gap-1">
            문의하기 →
          </a>
        </div>
      </section>
    </div>
  )
}
