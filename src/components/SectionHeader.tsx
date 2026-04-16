import ScrollReveal from './ScrollReveal'

interface SectionHeaderProps {
  number: string
  subtitle: string
  title: string
  variant?: 'light' | 'dark' // light = white bg, dark = gray bg
}

export default function SectionHeader({
  number,
  subtitle,
  title,
  variant = 'light',
}: SectionHeaderProps) {
  const numberColor = variant === 'light' ? 'text-gray-200' : 'text-gray-300'

  return (
    <div className="px-[20%] mb-12">
      <ScrollReveal animation="fade-up">
        <div className="flex items-center gap-4">
          <span className={`text-[80px] md:text-[100px] font-bold ${numberColor} leading-none`}>
            {number}
          </span>
          <div>
            <p className="text-primary font-semibold tracking-wider mb-1">{subtitle}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-dark">{title}</h2>
          </div>
        </div>
      </ScrollReveal>
    </div>
  )
}
