import { useEffect, useRef, useState } from 'react'
import { LuSparkles } from 'react-icons/lu'

export default function AboutDesignSection() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.14 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className={`about-design-section grid min-h-[760px] bg-[#F5F3EC] px-[clamp(20px,5vw,76px)] py-[clamp(60px,6vw,95px)] text-[#0F2B45] lg:grid-cols-[.72fr_1.28fr] lg:gap-[7vw] ${isVisible ? 'is-visible' : ''}`}>
      <header className="about-design__intro self-start lg:sticky lg:top-[116px]">
        <p className="m-0 text-[11px] font-semibold uppercase tracking-[.2em] text-[#EB9B34]">How we see design</p>
        <h2 className="mb-0 mt-4 text-[clamp(44px,4.4vw,68px)] font-medium leading-[.98] tracking-[-.04em]">Every detail changes the journey.</h2>
        <p className="mb-0 mt-7 max-w-[500px] text-[16px] leading-[1.75] text-[#0F2B45]">Inside a compact space, material, light, sound and proportion become especially powerful.</p>
      </header>

      <div className="about-design__gallery grid gap-5 sm:grid-cols-2">
        <figure className="about-design__visual about-design__visual--one m-0 h-[540px] overflow-hidden rounded-[28px] sm:mt-16">
          <img src="/images/walnut-elevator-cabin.webp" alt="Walnut elevator cabin detail" loading="lazy" className="size-full object-cover" />
        </figure>
        <figure className="about-design__visual about-design__visual--two m-0 h-[540px] overflow-hidden rounded-[28px]">
          <img src="/images/cabin-ivory.webp" alt="Ivory elevator cabin detail" loading="lazy" className="size-full object-cover" />
        </figure>
        <article className="about-design__statement rounded-[28px] bg-[#0F2B45] p-[clamp(28px,5vw,58px)] text-[#F8F7F1] sm:col-span-2">
          <LuSparkles className="size-7 text-[#EB9B34]" />
          <h3 className="mb-0 mt-7 text-[clamp(29px,2.7vw,42px)] font-medium leading-[1.08] text-[#F8F7F1]">We design for the moment the doors open—and every moment after.</h3>
          <p className="mb-0 mt-5 max-w-[820px] text-[15px] leading-[1.75] text-[#F5F3EC]">A cabin should feel calm on the first journey and remain durable through thousands more. That balance is where good design earns its value.</p>
        </article>
      </div>
    </section>
  )
}
