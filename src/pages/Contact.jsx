import SiteNavbar from '../components/SiteNavbar'
import SiteFooter from '../components/SiteFooter'
import {
  ContactDirectSection,
  ContactFaqSection,
  ContactFinalSection,
  ContactHeroSection,
  ContactInquirySection,
  ContactProcessSection,
  ContactVisitSection,
} from '../components/sections/contact'

export default function Contact() {
  return (
    <main className="contact-page">
      <SiteNavbar />
      <ContactHeroSection />
      <ContactInquirySection />
      <ContactDirectSection />
      <ContactProcessSection />
      <ContactVisitSection />
      <ContactFaqSection />
      <ContactFinalSection />
      <SiteFooter />
    </main>
  )
}
