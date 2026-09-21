import { useEffect, useState } from 'react'
import { LuArrowUpRight, LuBuilding2, LuMapPin, LuMoveUp } from 'react-icons/lu'

const signatureProjects = [
  {
    image: '/images/social-elevator-3.webp',
    imageAlt: 'Glass panoramic elevator integrated into a Bengaluru residence',
    label: 'Bengaluru residence',
    kicker: 'A project, considered completely',
    title: 'Designed around',
    accent: 'the architecture.',
    intro: 'A panoramic elevator planned as part of the home—not added after it. Every line, material and movement was coordinated to preserve light and openness.',
    facts: [
      { icon: LuMapPin, label: 'Location', value: 'North Bengaluru' },
      { icon: LuBuilding2, label: 'Setting', value: 'Private residence' },
      { icon: LuMoveUp, label: 'Journey', value: 'Four levels' },
    ],
    brief: 'Connect every floor without interrupting the double-height central space.',
    response: 'A transparent lift core with quiet motion and warm architectural detailing.',
  },
  {
    image: '/images/elevator-lobby-luxe.webp',
    imageAlt: 'Premium elevator arrival lobby in a contemporary Bengaluru workplace',
    label: 'Indiranagar workplace',
    kicker: 'Arrival, composed with purpose',
    title: 'Made for',
    accent: 'everyday momentum.',
    intro: 'A refined elevator arrival designed to guide movement naturally while complementing the calm material language of the workplace.',
    facts: [
      { icon: LuMapPin, label: 'Location', value: 'Indiranagar' },
      { icon: LuBuilding2, label: 'Setting', value: 'Creative workplace' },
      { icon: LuMoveUp, label: 'Journey', value: 'Eight levels' },
    ],
    brief: 'Create a clear and welcoming arrival for teams, clients and daily visitors.',
    response: 'Warm metal, precise lighting and dependable traffic planning brought clarity to every journey.',
  },
  {
    image: '/images/walnut-elevator-cabin.webp',
    imageAlt: 'Warm walnut elevator cabin designed for a private Bengaluru home',
    label: 'Jayanagar private home',
    kicker: 'Comfort, carried between floors',
    title: 'Warmth in',
    accent: 'every detail.',
    intro: 'A private lift cabin shaped as an extension of the residence, balancing tactile finishes, comfortable proportions and quiet operation.',
    facts: [
      { icon: LuMapPin, label: 'Location', value: 'Jayanagar' },
      { icon: LuBuilding2, label: 'Setting', value: 'Family home' },
      { icon: LuMoveUp, label: 'Journey', value: 'Three levels' },
    ],
    brief: 'Introduce effortless mobility without disturbing the character of an established home.',
    response: 'A compact cabin with walnut detailing, soft illumination and a composed, residential feel.',
  },
]

export default function SignatureProjectSection() {
  const [activeProject, setActiveProject] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveProject((current) => (current + 1) % signatureProjects.length)
    }, 4000)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <section className="home-signature" aria-label="Signature projects">
      <div className="home-signature__inner">
        <div className="home-signature__visual">
          <div className="home-signature__image-stack">
            {signatureProjects.map((project, index) => (
              <img
                className={index === activeProject ? 'is-active' : ''}
                src={project.image}
                alt={index === activeProject ? project.imageAlt : ''}
                aria-hidden={index !== activeProject}
                key={project.label}
              />
            ))}
          </div>
          <div className="home-signature__visual-label-stack">
            {signatureProjects.map((project, index) => (
              <div className={`home-signature__visual-label${index === activeProject ? ' is-active' : ''}`} key={project.label}>
                <span>Signature project</span>
                <strong>{project.label}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="home-signature__content-stack">
          {signatureProjects.map((project, index) => (
            <article
              className={`home-signature__content${index === activeProject ? ' is-active' : ''}`}
              aria-hidden={index !== activeProject}
              key={project.label}
            >
              <p className="home-addition-kicker">{project.kicker}</p>
              <h2>{project.title} <em>{project.accent}</em></h2>
              <p className="home-signature__intro">{project.intro}</p>
              <div className="home-signature__facts">
                {project.facts.map(({ icon: Icon, label, value }) => (
                  <div className="home-signature__fact" key={label}>
                    <Icon aria-hidden="true" />
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
              <div className="home-signature__brief">
                <div><span>The brief</span><p>{project.brief}</p></div>
                <div><span>The response</span><p>{project.response}</p></div>
              </div>
              <a className="home-addition-link" href="/projects" tabIndex={index === activeProject ? 0 : -1}>
                Explore our projects <LuArrowUpRight aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
