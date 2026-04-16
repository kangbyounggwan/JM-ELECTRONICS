import { Helmet } from 'react-helmet-async'
import { useLanguage } from '../i18n/LanguageContext'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  path?: string
  image?: string
}

const defaultKeywords = {
  ko: 'PCB, PCB제조, 인쇄회로기판, 다층PCB, 고주파기판, RF PCB, 항공우주PCB, 의료기기PCB, AS9100, 제이엠일렉트로닉스, JM Electronics',
  en: 'PCB, PCB Manufacturing, Printed Circuit Board, Multi-layer PCB, High Frequency PCB, RF PCB, Aerospace PCB, Medical PCB, AS9100, JM Electronics',
}

const baseUrl = 'https://www.jmelectronics.kr'
const defaultOgImage = 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=630&fit=crop&q=80'

export default function SEO({ title, description, keywords, path = '', image }: SEOProps) {
  const { lang, t } = useLanguage()

  const siteTitle = lang === 'ko' ? 'JM Electronics | 제이엠일렉트로닉스' : 'JM Electronics Co., Ltd.'
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle

  const defaultDescription = {
    ko: 'JM일렉트로닉스는 AS9100 인증 PCB 전문 제조기업입니다. 항공우주, 국방, 의료기기, 통신장비용 고품질 다층 PCB, 고주파 기판을 제작합니다.',
    en: 'JM Electronics is an AS9100 certified PCB manufacturer specializing in aerospace, defense, medical devices, and telecommunications equipment.',
  }

  const metaDescription = description || defaultDescription[lang]
  const metaKeywords = keywords || defaultKeywords[lang]
  const metaImage = image || defaultOgImage
  const canonicalUrl = `${baseUrl}${path}`

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <html lang={lang} />
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:locale" content={lang === 'ko' ? 'ko_KR' : 'en_US'} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:image" content={metaImage} />

      {/* Language Alternates */}
      <link rel="alternate" hrefLang="ko" href={`${baseUrl}${path}?lang=ko`} />
      <link rel="alternate" hrefLang="en" href={`${baseUrl}${path}?lang=en`} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
    </Helmet>
  )
}
