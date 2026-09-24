import { LuArrowUpRight, LuMapPin } from 'react-icons/lu'

const serviceAreas = ['Whitefield', 'Indiranagar', 'Jayanagar', 'Hebbal', 'Sarjapur', 'Devanahalli']

export default function AboutBengaluruSection() {
  return (
    <section className="!p-0 bg-[#F5F3EC] text-[#0F2B45] xl:grid xl:grid-cols-2">
      <div className="relative flex items-center overflow-hidden px-5 py-16 sm:px-10 sm:py-20 lg:px-[clamp(48px,6vw,88px)] lg:py-24 xl:py-[clamp(72px,6vw,96px)]">
        <div className="absolute -left-24 top-12 size-64 rounded-full bg-[#EB9B34]/[.07] blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto w-full max-w-[620px] xl:mx-0">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#0F2B45]/10 bg-white/55 py-2 pl-2 pr-4 shadow-[0_8px_30px_rgba(15,43,69,.04)]">
            <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-[#0F2B45]">
              <LuMapPin className="size-4 text-[#EB9B34]" aria-hidden="true" />
            </span>
            <p className="m-0 text-[10px] font-semibold uppercase tracking-[.2em] sm:text-[11px]">Bengaluru based</p>
          </div>

          <h2 className="mb-0 mt-8 text-[clamp(40px,7vw,58px)] font-medium leading-[.98] tracking-[-.045em] xl:text-[clamp(48px,3.65vw,60px)]">
            <span className="block sm:whitespace-nowrap">Rooted in Bengaluru.</span>
            <em className="mt-1 block font-light text-[#EB9B34] sm:whitespace-nowrap">Present at every step.</em>
          </h2>
          <p className="mb-0 mt-6 max-w-[560px] border-l-2 border-[#EB9B34] py-0.5 pl-5 text-[15px] leading-[1.72] text-[#0F2B45]/70 sm:text-[16px] sm:leading-[1.75]">
            Our local presence keeps coordination practical and service responsive across Bengaluru—from early-stage residential planning to occupied commercial buildings.
          </p>

          <div className="mt-9 overflow-hidden rounded-[22px] border border-[#0F2B45]/10 bg-white/45 sm:mt-10">
            <div className="border-b border-[#0F2B45]/10 px-5 py-4 sm:px-6">
              <div>
                <span className="block text-[9px] font-semibold uppercase tracking-[.2em] text-[#EB9B34]">Where we work</span>
                <strong className="mt-1 block text-[16px] font-medium">Bengaluru neighbourhoods we serve</strong>
              </div>
            </div>
            <div className="grid grid-cols-1 min-[420px]:grid-cols-2">
              {serviceAreas.map((area, index) => (
                <div
                  key={area}
                  className={`flex min-h-12 items-center gap-3 px-5 text-[13px] font-medium sm:px-6 ${index < serviceAreas.length - 1 ? 'border-b border-[#0F2B45]/10' : ''} ${index >= serviceAreas.length - 2 ? 'min-[420px]:border-b-0' : ''} ${index % 2 === 1 ? 'min-[420px]:border-l min-[420px]:border-[#0F2B45]/10' : ''}`}
                >
                  <span className="size-1.5 rounded-full bg-[#EB9B34]" aria-hidden="true" />
                  {area}
                </div>
              ))}
            </div>
          </div>
          <a href="/contact" className="editorial-cta mt-8">
            Discuss a Bengaluru project <span aria-hidden="true"><LuArrowUpRight /></span>
          </a>
        </div>
      </div>

      <figure className="m-0 h-[380px] overflow-hidden sm:h-[500px] lg:h-[620px] xl:h-auto xl:min-h-[720px]">
        <img
          src="/images/glass-panoramic-elevator.webp"
          alt="Panoramic elevator supplied in Bengaluru"
          loading="lazy"
          className="size-full object-cover"
        />
      </figure>
    </section>
  )
}
