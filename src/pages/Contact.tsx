import { MapPin, Phone, Mail, Printer, Clock } from 'lucide-react'
import SEO from '../components/SEO'
import { useLanguage } from '../i18n/LanguageContext'

export default function Contact() {
  const { t, lang } = useLanguage()

  return (
    <div>
      <SEO
        title={t.contact.pageTitle}
        description={lang === 'ko'
          ? 'JM일렉트로닉스 문의하기. 경기도 안산시 단원구 첨단로133. 전화 031-495-3766. PCB 견적 및 기술 상담.'
          : 'Contact JM Electronics. 133 Cheomdan-ro, Ansan, Korea. Tel: 031-495-3766. PCB quotation and technical consultation.'
        }
        path="/contact"
        keywords={lang === 'ko' ? 'JM일렉트로닉스 연락처, PCB 문의, PCB 견적, 안산 PCB 업체' : 'JM Electronics contact, PCB inquiry, PCB quotation, Ansan PCB manufacturer'}
      />
      {/* Hero */}
      <section
        className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-white"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-dark/70"></div>
        <div className="relative z-10 text-center">
          <p className="text-primary font-medium tracking-widest mb-4">{t.contact.pageSubtitle}</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{t.contact.pageTitle}</h1>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Info */}
            <div>
              <h2 className="text-2xl font-bold text-dark mb-2">{t.contact.companyName}</h2>
              <p className="text-gray mb-8">{t.contact.companyNameEn}</p>

              <div className="space-y-5">
                {/* 주소 */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray mb-1">{t.contact.address}</p>
                    <p className="text-dark font-medium">{t.contact.addressLine1}</p>
                    <p className="text-dark">{t.contact.addressLine2}</p>
                  </div>
                </div>

                {/* 대표전화 */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray mb-1">{t.contact.phone}</p>
                    <p className="text-dark font-medium">031-493-5548</p>
                    <p className="text-sm text-gray">{t.contact.phoneGuide}</p>
                  </div>
                </div>

                {/* 담당자 */}
                <div className="bg-bg-light rounded-xl p-4 ml-14">
                  <p className="text-sm font-medium text-dark mb-2">{t.contact.manager}</p>
                  <div className="space-y-1 text-sm">
                    <p className="text-gray">{t.contact.managerInfo1} <span className="text-dark font-medium">010-3899-6840</span></p>
                    <p className="text-gray">{t.contact.managerInfo2} <span className="text-dark font-medium">070-7844-2644</span></p>
                  </div>
                </div>

                {/* FAX */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Printer className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray mb-1">{t.contact.fax}</p>
                    <p className="text-dark font-medium">031-493-5541</p>
                  </div>
                </div>

                {/* 이메일 */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray mb-1">{t.contact.email}</p>
                    <p className="text-dark font-medium">jm5537@jmelectronics.co.kr</p>
                  </div>
                </div>

                {/* 업무시간 */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray mb-1">{t.contact.workingHours}</p>
                    <p className="text-dark font-medium">{t.contact.workingHoursValue}</p>
                  </div>
                </div>
              </div>

              {/* 인증 */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray mb-4">{t.contact.certStatus}</p>
                <div className="flex flex-wrap gap-3">
                  {['AS9100', 'ISO 9001', 'UL', 'INNOBIZ', 'KAB', 'IAS'].map((cert, i) => (
                    <span key={i} className="px-3 py-1.5 bg-bg-light rounded-full text-xs font-medium text-dark">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-dark mb-2">{t.contact.formTitle}</h2>
                <p className="text-gray text-sm">{t.contact.formDesc}</p>
                <div className="w-16 h-1 bg-primary mt-4"></div>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-dark mb-2">
                      {t.contact.name} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder={t.contact.namePlaceholder}
                      className="w-full border border-gray-200 px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark mb-2">
                      {t.contact.company}
                    </label>
                    <input
                      type="text"
                      placeholder={t.contact.companyPlaceholder}
                      className="w-full border border-gray-200 px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark mb-2">
                    {t.contact.emailLabel} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder={t.contact.emailPlaceholder}
                    className="w-full border border-gray-200 px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark mb-2">
                    {t.contact.phoneLabel} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder={t.contact.phonePlaceholder}
                    className="w-full border border-gray-200 px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark mb-2">
                    {t.contact.message} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    placeholder={t.contact.messagePlaceholder}
                    rows={5}
                    className="w-full border border-gray-200 px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none"
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-4 font-semibold hover:bg-primary-dark transition-colors"
                  >
                    {t.contact.submit}
                  </button>
                  <p className="text-center text-xs text-gray mt-4">
                    {t.contact.required}
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 bg-bg-light">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-8">
            <p className="text-primary font-semibold tracking-wider mb-4">{t.contact.locationSubtitle}</p>
            <h2 className="text-2xl font-bold text-dark">{t.contact.locationTitle}</h2>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=경기도+안산시+단원구+첨단로133&output=embed&z=17"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="JM Electronics 위치"
            ></iframe>
          </div>
          <div className="mt-6 flex flex-wrap gap-4 justify-center text-sm text-gray">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              경기도 안산시 단원구 첨단로133 (시화공단 5바902호)
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}
