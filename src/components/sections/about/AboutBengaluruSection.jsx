import { LuMapPin } from 'react-icons/lu'

const serviceAreas = ['Whitefield', 'Indiranagar', 'Jayanagar', 'Hebbal', 'Sarjapur', 'Devanahalli']

export default function AboutBengaluruSection() {
  return (
    <section className="grid bg-[#F5F3EC] text-[#0F2B45] lg:grid-cols-[.95fr_1.05fr]">
      <div className="flex flex-col justify-center px-[18px] pb-11 pt-8 sm:px-8 sm:py-14 lg:px-[clamp(28px,8vw,130px)] lg:py-[clamp(65px,7vw,110px)]">
        <div className="flex items-center gap-3 lg:block">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#0F2B45] lg:size-auto lg:bg-transparent">
            <LuMapPin className="size-4 text-[#EB9B34] lg:size-8 lg:text-[#0F2B45]" />
          </span>
          <p className="m-0 text-[10px] font-semibold uppercase tracking-[.2em] text-[#0F2B45] lg:mt-6 lg:text-[11px]">
            Bengaluru based
          </p>
        </div>

        <h2 className="mb-0 mt-5 max-w-[650px] text-[36px] font-medium leading-[.98] tracking-[-.04em] sm:text-[43px] lg:mt-4 lg:text-[clamp(43px,4.4vw,68px)]">
          Close enough to understand. Ready when needed.
        </h2>
        <p className="mb-0 mt-4 max-w-[590px] text-[14px] leading-[1.65] text-[#0F2B45] lg:mt-6 lg:text-[16px] lg:leading-[1.75]">
          Our local presence keeps coordination practical and service responsive across Bengaluru—from early-stage residential planning to occupied commercial buildings.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-x-5 lg:mt-8">
          {serviceAreas.map((area) => (
            <span key={area} className="border-b border-[#EB9B34] py-3 text-[12px] font-medium sm:text-[13px]">
              {area}
            </span>
          ))}
        </div>
      </div>

      <figure className="m-0 min-h-[390px] overflow-hidden sm:min-h-[480px] lg:min-h-[640px]">
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
