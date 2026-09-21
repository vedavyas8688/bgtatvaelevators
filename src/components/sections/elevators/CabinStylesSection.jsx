import { cabinStyles } from './elevatorsData'

export default function CabinStylesSection() {
  return (
    <section className="bg-[#0F2B45] px-4 py-16 text-white sm:px-[clamp(20px,5vw,76px)] sm:py-[clamp(85px,9vw,140px)]">
      <header className="mx-auto max-w-[800px] text-center">
        <p className="m-0 text-[10px] font-semibold uppercase tracking-[.2em] text-[#EB9B34] sm:text-[11px]">
          Cabin design
        </p>
        <h2 className="mb-0 mt-4 text-[38px] font-medium leading-[.98] tracking-[-.045em] sm:text-[clamp(50px,5.5vw,82px)]">
          Make the inside
          <br />
          feel like it belongs.
        </h2>
        <p className="mx-auto mb-0 mt-5 max-w-[650px] text-[13px] leading-[1.65] text-white/70 sm:mt-6 sm:text-[16px] sm:leading-[1.7]">
          Materials, lighting, controls and proportions come together to create a cabin with its own quiet character.
        </p>
      </header>

      <div className="mx-auto mt-9 grid max-w-[1440px] grid-cols-2 gap-x-3 gap-y-8 sm:mt-16 sm:gap-5 xl:grid-cols-4">
        {cabinStyles.map(([title, copy, image]) => (
          <article key={title} className="group min-w-0">
            <figure className="m-0 h-[250px] overflow-hidden rounded-[16px] border border-white/10 bg-[#0F2B45] sm:h-[430px] sm:rounded-[24px] xl:h-[470px]">
              <img
                src={image}
                alt={title}
                loading="lazy"
                className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </figure>
            <h3 className="mb-0 mt-3 text-[16px] font-medium leading-tight sm:mt-5 sm:text-[23px]">{title}</h3>
            <p className="mb-0 mt-1.5 text-[11px] leading-[1.5] text-white/65 sm:mt-2 sm:text-[14px] sm:leading-[1.6]">{copy}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
