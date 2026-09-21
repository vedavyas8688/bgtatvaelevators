import { LuArrowRight, LuMessageCircle } from 'react-icons/lu'

export default function FaqCtaSection() {
  return <section className="flex min-h-[500px] flex-col items-center justify-center bg-[#EB9B34] px-6 py-20 text-center max-sm:min-h-[430px]"><LuMessageCircle className="size-[34px]" aria-hidden="true" /><p className="mb-[14px] mt-6 text-[11px] font-semibold uppercase tracking-[.18em]">Still have a question?</p><h2 className="m-0 text-[clamp(50px,6vw,86px)] font-medium leading-none max-sm:text-[46px]">Let&apos;s talk about your project.</h2><a className="editorial-cta editorial-cta--center mt-[34px]" href="mailto:info@bgtatva.com">Email our team <span aria-hidden="true"><LuArrowRight /></span></a></section>
}
