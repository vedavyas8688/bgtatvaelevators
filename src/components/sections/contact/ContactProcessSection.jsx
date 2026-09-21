import { useEffect, useRef, useState } from 'react'

const steps = [
  ['01', 'Discover', 'We learn about your building, priorities, design language and practical requirements.'],
  ['02', 'Define', 'Our team aligns the right elevator system, spatial needs, performance and finish direction.'],
  ['03', 'Design', 'We coordinate technical planning and cabin details with your architect and project team.'],
  ['04', 'Deliver', 'Installation, commissioning and ongoing care are managed with clarity and attention.'],
]

export default function ContactProcessSection() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section || !('IntersectionObserver' in window)) {
      setIsVisible(true)
      return undefined
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.18, rootMargin: '0px 0px -8% 0px' })

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className={`contact-process contact-process-reveal${isVisible ? ' is-visible' : ''}`}>
      <header>
        <p>What happens next</p>
        <h2>A considered process,<br />from first call to final detail.</h2>
      </header>
      <div>
        {steps.map(([number, title, copy]) => (
          <article key={number}>
            <b>{number}</b>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
