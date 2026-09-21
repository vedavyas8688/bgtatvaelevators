import { useState } from 'react'

const principles = [
  ['Calm', 'Movement should feel effortless, intuitive and composed.'],
  ['Clarity', 'Every decision should be easy to understand and accountable.'],
  ['Craft', 'The experience is resolved through proportion, material and detail.'],
  ['Continuity', 'Our responsibility carries on from first plan to everyday care.'],
]

export default function AboutManifestoSection() {
  const [active, setActive] = useState(0)

  return (
    <section className="about-manifesto" aria-labelledby="about-manifesto-title">
      <header>
        <p className="about-new-kicker">What guides every decision</p>
        <h2 id="about-manifesto-title">Four words.<br />One standard.</h2>
      </header>
      <div className="about-manifesto__words">
        {principles.map(([word], index) => (
          <button key={word} type="button" className={active === index ? 'is-active' : ''} onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)} onClick={() => setActive(index)}>
            <span>{word}</span><small>0{index + 1}</small>
          </button>
        ))}
      </div>
      <p className="about-manifesto__definition" key={principles[active][0]}>{principles[active][1]}</p>
    </section>
  )
}
