import { LuArrowRight } from 'react-icons/lu'

export default function ProjectsCtaSection() {
  return <section className="flex min-h-[540px] flex-col items-center justify-center bg-[#EB9B34] px-6 py-20 text-center"><p className="m-0 text-[11px] font-semibold uppercase tracking-[.2em]">Planning a project in Bengaluru?</p><h2 className="mb-0 mt-5 text-[clamp(52px,6.5vw,96px)] font-medium leading-[.94] tracking-[-.05em]">Let&apos;s create a journey<br />worth remembering.</h2><a href="/contact" className="editorial-cta editorial-cta--center mt-9">Discuss your project <span aria-hidden="true"><LuArrowRight /></span></a></section>
}
