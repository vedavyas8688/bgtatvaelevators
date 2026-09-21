import { useState } from 'react'

const materials = [
  {
    name: 'Warm walnut',
    note: 'Natural depth with a composed residential character.',
    image: '/images/walnut-elevator-cabin.png',
    color: '#6F452D',
  },
  {
    name: 'Soft ivory',
    note: 'Quiet, luminous surfaces that make compact cabins feel open.',
    image: '/images/cabin-ivory.png',
    color: '#DDD0B9',
  },
  {
    name: 'Brushed steel',
    note: 'A precise, durable expression for contemporary architecture.',
    image: '/images/cabin-steel.png',
    color: '#929392',
  },
  {
    name: 'Deep graphite',
    note: 'A confident backdrop shaped by warm, controlled light.',
    image: '/images/cabin-black.png',
    color: '#24282A',
  },
]

export default function AboutMaterialLibrarySection() {
  const [active, setActive] = useState(0)
  const material = materials[active]

  return (
    <section className="about-materials" aria-labelledby="about-materials-title">
      <header>
        <p className="about-new-kicker">Material intelligence</p>
        <h2 id="about-materials-title">Character you can feel.</h2>
        <p>Material is never decoration alone. It changes light, sound, scale and the way a cabin belongs to its surroundings.</p>
      </header>
      <figure className="about-materials__stage">
        <img key={material.image} src={material.image} alt={`${material.name} elevator cabin finish`} />
        <figcaption key={material.name}>
          <span>Selected expression</span>
          <strong>{material.name}</strong>
          <p>{material.note}</p>
        </figcaption>
      </figure>
      <div className="about-materials__selector" role="tablist" aria-label="Cabin material expressions">
        {materials.map((item, index) => (
          <button key={item.name} type="button" role="tab" aria-selected={active === index} onClick={() => setActive(index)}>
            <i style={{ background: item.color }} /><span>{item.name}</span><small>0{index + 1}</small>
          </button>
        ))}
      </div>
    </section>
  )
}
