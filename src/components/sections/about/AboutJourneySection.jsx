import { useState } from 'react'
import { LuArrowUpRight } from 'react-icons/lu'

const chapters = [
  {
    label: 'Listen',
    title: 'The right elevator begins with the life around it.',
    copy: 'We begin with people, movement patterns and the building itself—before discussing finishes or equipment.',
    image: '/images/social-elevator-3.png',
  },
  {
    label: 'Shape',
    title: 'Architecture and movement find one clear direction.',
    copy: 'Shaft planning, circulation, proportion and cabin character are developed as connected decisions.',
    image: '/images/glass-panoramic-elevator.png',
  },
  {
    label: 'Deliver',
    title: 'Precision becomes visible in the smallest details.',
    copy: 'Site coordination, installation and commissioning are handled with a calm, disciplined rhythm.',
    image: '/images/elevator-lobby-luxe.png',
  },
  {
    label: 'Stay',
    title: 'Care continues long after the first journey.',
    copy: 'Local support and preventive attention protect comfort, safety and confidence over time.',
    image: '/images/social-elevator-1.png',
  },
]

export default function AboutJourneySection() {
  const [active, setActive] = useState(0)
  const chapter = chapters[active]

  return (
    <section className="about-journey" aria-labelledby="about-journey-title">
      <div className="about-journey__backdrop" aria-hidden="true">
        {chapters.map((item, index) => <img key={item.label} className={index === active ? 'is-active' : ''} src={item.image} alt="" />)}
      </div>
      <div className="about-journey__shade" />
      <div className="about-journey__content">
        <p className="about-new-kicker">A relationship, not a transaction</p>
        <div className="about-journey__statement" key={chapter.label}>
          <span>{String(active + 1).padStart(2, '0')} / {String(chapters.length).padStart(2, '0')}</span>
          <h2 id="about-journey-title">{chapter.title}</h2>
          <p>{chapter.copy}</p>
          <a className="editorial-cta editorial-cta--light" href="/contact">Begin a conversation <LuArrowUpRight /></a>
        </div>
        <div className="about-journey__nav" role="tablist" aria-label="How we work">
          {chapters.map((item, index) => (
            <button key={item.label} type="button" role="tab" aria-selected={active === index} onClick={() => setActive(index)}>
              <small>0{index + 1}</small><span>{item.label}</span><i />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
