import { LuDraftingCompass, LuShieldCheck, LuSparkles } from 'react-icons/lu'

const expertise = [
  [LuDraftingCompass, 'Architectural planning', 'Shaft, pit, overhead, landings and interfaces resolved with the project team.'],
  [LuSparkles, 'Cabin direction', 'Materials, light, controls and proportions composed as one visual language.'],
  [LuShieldCheck, 'Performance planning', 'The right system selected for usage, comfort, safety and serviceability.'],
]

const cardThemes = [
  {
    card: 'border-[#0F2B45] bg-[#0F2B45]',
    icon: 'text-[#EB9B34]',
    label: 'text-[#EB9B34]',
    title: 'text-[#F8F7F1]',
    copy: 'text-[#F5F3EC]',
  },
  {
    card: 'border-[#EB9B34] bg-[#EB9B34]',
    icon: 'text-[#0F2B45]',
    label: 'text-[#0F2B45]',
    title: 'text-[#0F2B45]',
    copy: 'text-[#0F2B45]',
  },
  {
    card: 'border-[#0F2B45]/20 bg-[#0F2B45]/10',
    icon: 'text-[#EB9B34]',
    label: 'text-[#EB9B34]',
    title: 'text-[#0F2B45]',
    copy: 'text-[#0F2B45]',
  },
]

export default function AboutExpertiseSection() {
  return (
    <section className="bg-[#F8F7F1] px-[clamp(24px,7vw,110px)] py-[clamp(70px,7vw,110px)] text-[#0F2B45]">
      <header className="mx-auto flex max-w-[1400px] items-end justify-between gap-8 max-lg:flex-col max-lg:items-start">
        <div>
          <p className="m-0 text-[11px] font-semibold uppercase tracking-[.2em] text-[#EB9B34]">
            Where we add value
          </p>
          <h2 className="mb-0 mt-4 text-[clamp(44px,4.7vw,72px)] font-medium leading-[.98] tracking-[-.045em]">
            Three disciplines.<br />One complete decision.
          </h2>
        </div>
        <p className="m-0 max-w-[500px] text-[16px] leading-[1.72] text-[#0F2B45]">
          Design, engineering and practical delivery are considered together rather than passed between separate conversations.
        </p>
      </header>

      <div className="mx-auto mt-11 grid max-w-[1400px] gap-5 lg:grid-cols-3">
        {expertise.map(([Icon, title, copy], index) => (
          <article
            key={title}
            className={`min-h-[330px] rounded-[26px] border p-[clamp(30px,4vw,50px)] ${cardThemes[index].card}`}
          >
            <Icon className={`size-8 ${cardThemes[index].icon}`} />
            <span className={`mt-14 block text-[10px] ${cardThemes[index].label}`}>0{index + 1}</span>
            <h3 className={`mb-0 mt-4 text-[25px] font-medium ${cardThemes[index].title}`}>{title}</h3>
            <p className={`mb-0 mt-4 text-[14px] leading-[1.7] ${cardThemes[index].copy}`}>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
