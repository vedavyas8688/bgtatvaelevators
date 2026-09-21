import { useState } from 'react'
import SiteNavbar from '../components/SiteNavbar'
import SiteFooter from '../components/SiteFooter'
import { faqs } from '../data/faqData'
import { FaqCtaSection, FaqHeroSection, FaqQuestionsSection } from '../components/sections/faq'

export default function Faq() {
  const [visibleCount, setVisibleCount] = useState(15)
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <main className="faq-page min-h-screen bg-[#F8F7F1] text-[#0F2B45]">
      <SiteNavbar />
      <FaqHeroSection />
      <FaqQuestionsSection
        faqs={faqs}
        visibleCount={visibleCount}
        openIndex={openIndex}
        onToggle={(index) => setOpenIndex(openIndex === index ? -1 : index)}
        onLoadMore={() => setVisibleCount(faqs.length)}
      />
      <FaqCtaSection />
      <SiteFooter />
    </main>
  )
}
