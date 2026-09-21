import { LuArrowRight, LuRefreshCw, LuShieldCheck, LuSparkles, LuWrench } from 'react-icons/lu'

const services = [
  [LuSparkles, 'Design coordination', 'Cabin, landing and material decisions aligned with the architecture.'],
  [LuShieldCheck, 'Safety and clarity', 'Considered operation, interfaces and emergency provisions.'],
  [LuWrench, 'Installation', 'Clear site readiness, execution, testing and commissioning.'],
  [LuRefreshCw, 'Local ongoing care', 'Preventive maintenance and responsive support across Bengaluru.'],
]

export default function ElevatorSupportSection() {
  return (
    <>
      <section id="maintenance" className="scroll-mt-[104px] grid bg-[#F5F3EC] lg:grid-cols-2">
        <figure className="m-0 min-h-[720px] overflow-hidden max-lg:min-h-[560px]">
          <img src="/images/service-elevator-design.png" alt="Elevator design and planning detail" loading="lazy" className="size-full object-cover" />
        </figure>
        <div className="flex flex-col justify-center px-[clamp(28px,7vw,110px)] py-[clamp(75px,10vw,140px)]">
          <p className="m-0 text-[11px] font-semibold uppercase tracking-[.2em] text-[#0F2B45]">More than the cabin</p>
          <h2 className="mb-0 mt-4 text-[clamp(48px,5vw,76px)] font-medium leading-[.98] tracking-[-.045em]">A complete elevator experience.</h2>
          <p className="mb-0 mt-7 max-w-[600px] text-[16px] leading-[1.75] text-[#0F2B45]">From Bengaluru project coordination to long-term service, we manage the decisions that determine how well an elevator works for years.</p>
          <div className="mt-10 grid gap-7 sm:grid-cols-2">
            {services.map(([Icon, title, copy]) => (
              <article key={title}>
                <Icon className="size-6 text-[#0F2B45]" />
                <h3 className="mb-0 mt-4 text-[19px] font-medium">{title}</h3>
                <p className="mb-0 mt-2 text-[13px] leading-[1.65] text-[#0F2B45]">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="flex min-h-[540px] flex-col items-center justify-center bg-[#EB9B34] px-6 py-20 text-center">
        <p className="m-0 text-[11px] font-semibold uppercase tracking-[.2em]">Planning an elevator in Bengaluru?</p>
        <h2 className="mb-0 mt-5 text-[clamp(52px,6.5vw,96px)] font-medium leading-[.94] tracking-[-.05em]">Start with your space.<br />We&apos;ll shape the journey.</h2>
        <a href="/contact" className="editorial-cta editorial-cta--center mt-9">Talk to our team <span aria-hidden="true"><LuArrowRight /></span></a>
      </section>
    </>
  )
}
