import SectionHeader from '../components/SectionHeader'
import ScrollReveal from '../components/ScrollReveal'
import SEO from '../components/SEO'
import { useLanguage } from '../i18n/LanguageContext'

export default function History() {
  const { t, lang } = useLanguage()

  const timelineDates = [
    { year: '2000', month: '03' },
    { year: '2003', month: '06' },
    { year: '2004', month: '01' },
    { year: '2011', month: '09' },
    { year: '2014', month: '03' },
    { year: '2018', month: '05' },
    { year: '2020', month: '07' },
    { year: '2024', month: '02' },
  ]

  const timeline = timelineDates.map((date, i) => ({
    ...date,
    title: t.history.timeline[i].title,
    desc: t.history.timeline[i].desc,
  }))

  const certImages = [
    '/certs/iso-quality.png',
    '/certs/iso-environment.png',
    '/certs/as9100.png',
    '/certs/ul.png',
    '/certs/innobiz.png',
    '/certs/research-center.png',
  ]

  const certs = t.history.certs.map((cert, i) => ({
    ...cert,
    image: certImages[i],
  }))

  return (
    <div>
      <SEO
        title={t.history.pageTitle}
        description={lang === 'ko'
          ? 'JM일렉트로닉스 회사 연혁. 2000년 창립부터 AS9100D 인증까지 24년 성장의 발자취. ISO 9001, UL, INNOBIZ 인증.'
          : 'JM Electronics company history. 24 years of growth from 2000 founding to AS9100D certification. ISO 9001, UL, INNOBIZ certified.'
        }
        path="/history"
        keywords={lang === 'ko' ? 'JM일렉트로닉스 연혁, PCB회사 역사, AS9100D, ISO9001, UL인증, INNOBIZ' : 'JM Electronics history, PCB company history, AS9100D, ISO9001, UL certification, INNOBIZ'}
      />
      {/* Hero */}
      <section
        className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-white"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-dark/70"></div>
        <div className="relative z-10 text-center">
          <p className="text-primary font-medium tracking-widest mb-4">{t.history.pageSubtitle.toUpperCase()}</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{t.history.pageTitle}</h1>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <SectionHeader number="01" subtitle="History" title={t.history.sectionTitle} variant="light" />
        <div className="max-w-5xl mx-auto px-8">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-dark mb-4">{t.history.growthTitle}</h3>
              <p className="text-xl md:text-2xl text-dark leading-relaxed">
                {t.history.growthDesc1}<br/>
                <span className="text-primary font-bold">{t.history.growthDesc2}</span>{t.history.growthDesc3}
              </p>
              <div className="w-24 h-1 bg-primary mx-auto mt-8"></div>
            </div>
          </ScrollReveal>

          {/* Vertical Alternating Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Center vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 -translate-x-1/2 hidden md:block"></div>

            {/* Mobile: left-aligned line */}
            <div className="absolute left-1.5 top-0 bottom-0 w-0.5 bg-primary/30 md:hidden"></div>

            <div className="space-y-8 md:space-y-0">
              {timeline.map((item, i) => (
                <ScrollReveal key={i} animation="fade-up" delay={i * 80}>
                  {/* Desktop: alternating layout */}
                  <div className={`hidden md:flex items-center ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    {/* Content */}
                    <div className={`w-[calc(50%-2rem)] ${i % 2 === 0 ? 'text-right pr-10' : 'text-left pl-10'}`}>
                      <span className="text-3xl font-bold text-primary">{item.year}. {item.month}</span>
                      <h3 className="text-2xl font-bold text-dark mt-2">{item.title}</h3>
                      <p className="text-lg text-gray mt-2">{item.desc}</p>
                    </div>

                    {/* Center dot */}
                    <div className="w-16 flex justify-center">
                      <div className="w-5 h-5 rounded-full bg-primary border-4 border-white shadow-lg relative z-10"></div>
                    </div>

                    {/* Empty space for other side */}
                    <div className="w-[calc(50%-2rem)]"></div>
                  </div>

                  {/* Mobile: left-aligned */}
                  <div className="md:hidden flex items-start gap-4">
                    <div className="w-4 h-4 rounded-full bg-primary mt-2 relative z-10"></div>
                    <div className="flex-1 pb-4">
                      <span className="text-2xl font-bold text-primary">{item.year}. {item.month}</span>
                      <h3 className="text-xl font-bold text-dark">{item.title}</h3>
                      <p className="text-lg text-gray">{item.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-white">
        <SectionHeader number="02" subtitle="Certification" title={t.history.certSectionTitle} variant="light" />
        <div className="max-w-6xl mx-auto px-8">
          <ScrollReveal animation="fade-up">
            <p className="text-lg text-gray mb-12">{t.history.certDesc}</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
            {certs.map((cert, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 80}>
                <div className="text-center">
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-6 hover:shadow-xl transition-shadow duration-300">
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-auto"
                    />
                  </div>
                  <h4 className="text-2xl font-bold text-dark">{cert.name}</h4>
                  <p className="text-lg text-gray mt-2">({cert.desc})</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
