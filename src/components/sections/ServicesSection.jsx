import { useEffect, useRef, useState } from 'react'
import { services } from '../../data/servicesData'
import { LuArrowRight } from 'react-icons/lu'

const clamp = (value, minimum, maximum) => Math.min(Math.max(value, minimum), maximum)

export default function ServicesSection() {
  const sectionRef = useRef(null)
  const frameRef = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const section = sectionRef.current
    if (!section || window.matchMedia('(max-width: 760px)').matches) return undefined

    const update = () => {
      frameRef.current = null
      const rect = section.getBoundingClientRect()
      const distance = section.offsetHeight - window.innerHeight
      setProgress(clamp(-rect.top / distance, 0, 1) * (services.length - 1))
    }

    const onScroll = () => {
      if (!frameRef.current) frameRef.current = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current)
    }
  }, [])

  return (
    <section ref={sectionRef} id="services" className="services-scroll" aria-label="Our services">
      <div className="services-stage">
        <div className="services-copy-stage">
          {services.map((service) => {
            return (
              <article
                className="service-copy"
                key={service.title}
              >
                <span>Our service</span>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <a href="/elevators#elevator-types">Service detail <b aria-hidden="true"><LuArrowRight /></b></a>
              </article>
            )
          })}
        </div>

        <div className="services-image-stage" aria-hidden="true">
          {services.map((service, index) => {
            const relative = index - progress
            const entering = clamp(relative, 0, 1)
            const leaving = clamp(-relative, 0, 1)
            const left = relative >= 0 ? entering * 106 : -leaving * 19
            const width = relative >= 0 ? 100 : 100 - leaving * 82
            const top = relative >= 0 ? entering * 8 : 0
            const height = relative >= 0 ? 100 - entering * 48 : 100
            const opacity = relative > 1.05 || relative < -1.05 ? 0 : 1
            return (
              <figure
                key={service.image}
                className="service-image"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  width: `${width}%`,
                  height: `${height}%`,
                  opacity,
                  zIndex: services.length - index,
                }}
              >
                <img src={service.image} alt="" loading="lazy" />
              </figure>
            )
          })}
        </div>

      </div>

      <div className="services-mobile">
        {services.map((service, index) => (
          <article key={service.title}>
            <img src={service.image} alt={service.alt} loading="lazy" />
            <span>Our service · 0{index + 1}</span>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <a href="/elevators#elevator-types">Service detail <span aria-hidden="true"><LuArrowRight /></span></a>
          </article>
        ))}
      </div>
    </section>
  )
}
