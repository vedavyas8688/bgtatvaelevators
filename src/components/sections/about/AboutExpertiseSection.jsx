import { LuDraftingCompass, LuShieldCheck, LuSparkles } from 'react-icons/lu'

const expertise = [
  [LuDraftingCompass, 'Architectural planning', 'Shaft, pit, overhead, landings and interfaces resolved with the project team.'],
  [LuSparkles, 'Cabin direction', 'Materials, light, controls and proportions composed as one visual language.'],
  [LuShieldCheck, 'Performance planning', 'The right system selected for usage, comfort, safety and serviceability.'],
]

export default function AboutExpertiseSection() {
  return <section className="bg-white px-[clamp(24px,7vw,110px)] py-[clamp(70px,7vw,110px)] text-[#2D4F6E]"><header className="mx-auto flex max-w-[1400px] items-end justify-between gap-8 max-lg:flex-col max-lg:items-start"><div><p className="m-0 text-[11px] font-semibold uppercase tracking-[.2em] text-[#2D4F6E]">Where we add value</p><h2 className="mb-0 mt-4 text-[clamp(44px,4.7vw,72px)] font-medium leading-[.98] tracking-[-.045em]">Three disciplines.<br />One complete decision.</h2></div><p className="m-0 max-w-[500px] text-[16px] leading-[1.72] text-[#2D4F6E]">Design, engineering and practical delivery are considered together rather than passed between separate conversations.</p></header><div className="mx-auto mt-11 grid max-w-[1400px] gap-5 lg:grid-cols-3">{expertise.map(([Icon, title, copy], index) => <article key={title} className={`min-h-[330px] rounded-[26px] p-[clamp(30px,4vw,50px)] ${index === 1 ? 'bg-[#D5B17A]' : index === 2 ? 'bg-[#F5F3EC]' : 'bg-[#2D4F6E] text-white'}`}><Icon className={`size-8 ${index === 0 ? 'text-[#D5B17A]' : 'text-[#2D4F6E]'}`} /><span className={`mt-14 block text-[10px] ${index === 0 ? 'text-white/40' : 'text-[#2D4F6E]'}`}>0{index + 1}</span><h3 className="mb-0 mt-4 text-[25px] font-medium">{title}</h3><p className={`mb-0 mt-4 text-[14px] leading-[1.7] ${index === 0 ? 'text-white/60' : 'text-[#2D4F6E]'}`}>{copy}</p></article>)}</div></section>
}
