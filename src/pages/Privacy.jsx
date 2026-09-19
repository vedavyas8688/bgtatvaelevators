import SiteNavbar from '../components/SiteNavbar'
import SiteFooter from '../components/SiteFooter'

export default function Privacy() {
  return (
    <main className="min-h-screen bg-[#F8F7F1] text-[#2D4F6E]">
      <SiteNavbar />
      <section className="mx-auto w-[calc(100%_-_40px)] max-w-[920px] pb-24 pt-[170px]">
        <p className="m-0 text-[11px] font-semibold uppercase tracking-[.2em] text-[#2D4F6E]">BG Tatva Elevators</p>
        <h1 className="mb-0 mt-5 text-[clamp(52px,7vw,90px)] font-medium leading-[.94] tracking-[-.05em]">Privacy Policy</h1>
        <p className="mb-0 mt-7 max-w-[720px] text-[17px] leading-[1.75] text-[#2D4F6E]">We respect your privacy and use the information you share with us only to respond to your enquiry, understand your elevator requirements and provide relevant project communication.</p>
        <div className="mt-16 grid gap-12 border-t border-[#2D4F6E]/15 pt-12 text-[15px] leading-[1.75] text-[#2D4F6E]">
          <article><h2 className="m-0 text-[28px] font-medium text-[#2D4F6E]">Information we collect</h2><p className="mb-0 mt-3">When you contact us, we may receive your name, phone number, email address, location and the project information you choose to provide.</p></article>
          <article><h2 className="m-0 text-[28px] font-medium text-[#2D4F6E]">How we use it</h2><p className="mb-0 mt-3">We use these details to respond, prepare consultations or proposals, coordinate project conversations and improve our service. We do not sell your personal information.</p></article>
          <article><h2 className="m-0 text-[28px] font-medium text-[#2D4F6E]">Questions</h2><p className="mb-0 mt-3">For privacy questions or requests, email <a className="text-[#2D4F6E] underline underline-offset-4" href="mailto:info@bgtatva.com">info@bgtatva.com</a>.</p></article>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
