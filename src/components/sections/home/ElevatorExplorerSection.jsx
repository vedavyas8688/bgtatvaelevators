import { useState } from 'react'
import { LuAccessibility, LuArrowRight, LuBuilding2, LuHouse, LuRefreshCw } from 'react-icons/lu'

const categories = [
  {
    id: 'home',
    label: 'Home Elevators',
    icon: LuHouse,
    eyebrow: 'Comfort made personal',
    title: 'An elevator that feels entirely at home.',
    description: 'Quiet, compact and considered around daily life. Our residential elevators bring effortless movement into the architecture without compromising the warmth of your interiors.',
    options: [
      ['Walnut warmth', '/images/walnut-elevator-cabin.png'],
      ['Ivory calm', '/images/cabin-ivory.png'],
      ['Modern steel', '/images/cabin-steel.png'],
      ['Midnight black', '/images/cabin-black.png'],
    ],
  },
  {
    id: 'panoramic',
    label: 'Panoramic',
    icon: LuAccessibility,
    eyebrow: 'Architecture in motion',
    title: 'Open the journey to light and space.',
    description: 'Panoramic glass elevators keep interiors visually connected while turning movement into an architectural experience. Ideal for atriums, villas and statement residences.',
    options: [
      ['Atrium glass', '/images/glass-panoramic-elevator.png'],
      ['Double height', '/images/social-elevator-3.png'],
      ['Penthouse view', '/images/social-elevator-5.png'],
      ['Sunlit living', '/images/social-elevator-1.png'],
    ],
  },
  {
    id: 'commercial',
    label: 'Commercial',
    icon: LuBuilding2,
    eyebrow: 'Made for every arrival',
    title: 'Performance with a memorable presence.',
    description: 'Refined systems for offices, hospitality and mixed-use spaces—planned for dependable movement, demanding usage and an arrival experience that reflects the building.',
    options: [
      ['Signature lobby', '/images/elevator-lobby-luxe.png'],
      ['Tailored design', '/images/service-elevator-design.png'],
      ['Cabin interiors', '/images/service-cabin-interiors.png'],
      ['Premium arrival', '/images/social-elevator-4.png'],
    ],
  },
  {
    id: 'modernisation',
    label: 'Modernisation',
    icon: LuRefreshCw,
    eyebrow: 'Renew what already moves you',
    title: 'A better experience, without starting over.',
    description: 'Upgrade performance, safety, controls, lighting and finishes with a carefully phased modernisation plan shaped around your existing elevator and building.',
    options: [
      ['Complete renewal', '/images/service-modernisation.png'],
      ['Cabin refresh', '/images/elevator-cabin-base.png'],
      ['Door upgrade', '/images/social-elevator-2.png'],
      ['Lighting upgrade', '/images/cabin-walnut.png'],
    ],
  },
]

export default function ElevatorExplorerSection() {
  const [categoryIndex, setCategoryIndex] = useState(0)
  const [optionIndex, setOptionIndex] = useState(0)
  const category = categories[categoryIndex]
  const [optionLabel, image] = category.options[optionIndex]

  const selectCategory = (index) => {
    setCategoryIndex(index)
    setOptionIndex(0)
  }

  return (
    <section className="bg-[#F5F3EC] px-[clamp(20px,5vw,76px)] py-[clamp(60px,6vw,90px)] text-[#0F2B45]" aria-labelledby="elevator-explorer-title">
      <header className="mx-auto max-w-[820px] text-center">
        <p className="m-0 text-[11px] font-semibold uppercase tracking-[.2em] text-[#0F2B45]">Designed around every journey</p>
        <h2 id="elevator-explorer-title" className="mb-0 mt-4 text-[clamp(48px,5.5vw,82px)] font-medium leading-[.98] tracking-[-.045em]">Find the elevator<br />that fits your life.</h2>
        <span className="mx-auto mt-5 block max-w-[620px] text-[16px] leading-[1.65] text-[#0F2B45]">Choose an elevator type, then explore the materials and expressions that can shape its character.</span>
      </header>

      <div className="mx-auto mt-8 flex w-fit max-w-full gap-1 overflow-x-auto rounded-full border border-[#EB9B34] bg-white/60 p-1.5" role="tablist" aria-label="Elevator types">
        {categories.map((item, index) => {
          const Icon = item.icon
          const active = index === categoryIndex
          return <button key={item.id} type="button" role="tab" aria-selected={active} onClick={() => selectCategory(index)} className={`inline-flex min-h-[42px] shrink-0 items-center gap-2 rounded-full px-4 text-[12px] font-medium transition-colors ${active ? 'bg-[#0F2B45] text-white' : 'bg-transparent text-[#0F2B45] hover:bg-white'}`}><Icon className="size-4" />{item.label}</button>
        })}
      </div>

      <div className="mx-auto mt-10 grid max-w-[1320px] items-center gap-[clamp(38px,5vw,76px)] lg:grid-cols-[1.03fr_.97fr] max-lg:max-w-[850px]">
        <figure className="relative m-0 min-h-[560px] overflow-hidden rounded-[34px] bg-[#F5F3EC] max-sm:min-h-[420px] max-sm:rounded-[24px]">
          <img key={image} src={image} alt={`${category.label} — ${optionLabel}`} className="absolute inset-0 size-full object-cover transition-transform duration-700 hover:scale-[1.025]" />
          <figcaption className="absolute left-5 top-5 rounded-full border border-white/50 bg-white/90 px-4 py-2 text-[11px] font-medium text-[#0F2B45] backdrop-blur-md">{optionLabel}</figcaption>
        </figure>

        <article>
          <p className="m-0 text-[10px] font-semibold uppercase tracking-[.2em] text-[#0F2B45]">{category.eyebrow}</p>
          <h3 className="mb-0 mt-4 text-[clamp(38px,4vw,60px)] font-medium leading-[1.02] tracking-[-.035em]">{category.title}</h3>
          <p className="mb-0 mt-7 max-w-[590px] text-[16px] leading-[1.75] text-[#0F2B45]">{category.description}</p>

          <div className="mt-9">
            <p className="m-0 text-[10px] font-semibold uppercase tracking-[.18em] text-[#0F2B45]">Choose an expression</p>
            <div className="mt-3 flex flex-wrap gap-2.5">
              {category.options.map(([label], index) => <button key={label} type="button" onClick={() => setOptionIndex(index)} aria-pressed={optionIndex === index} className={`rounded-full border px-4 py-2.5 text-[12px] transition-colors ${optionIndex === index ? 'border-[#EB9B34] bg-[#EB9B34] text-[#0F2B45]' : 'border-[#EB9B34] bg-transparent text-[#0F2B45] hover:border-[#0F2B45] hover:bg-white'}`}>{label}</button>)}
            </div>
          </div>

          <a href="/elevators" className="editorial-cta mt-9">Explore elevator solutions <span aria-hidden="true"><LuArrowRight /></span></a>
        </article>
      </div>
    </section>
  )
}
