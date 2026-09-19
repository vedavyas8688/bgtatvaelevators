import { useEffect, useState } from 'react'
import { galleryImages } from '../../data/galleryData'

export default function AutoGallerySection() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    galleryImages.forEach(({ src }) => {
      const image = new Image()
      image.src = src
    })

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const timer = window.setInterval(() => setActive((current) => (current + 1) % galleryImages.length), 5600)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="auto-gallery" aria-labelledby="gallery-title">
      <div className="gallery-grid" aria-hidden="true" />
      <header className="gallery-heading">
        <p>Elevated living</p>
        <h2 id="gallery-title">Crafted for<br /><em>every journey.</em></h2>
        <span>Refined materials, considered details, and timeless design come together in every BG Tatva elevator.</span>
      </header>

      <div className="gallery-stage" aria-live="polite">
        {galleryImages.map((image, index) => {
          const offset = (active - index + galleryImages.length) % galleryImages.length
          const slot = offset === 0 ? 'featured' : offset <= 3 ? `small-${offset}` : 'waiting'
          return (
          <button key={image.src} className={`gallery-card gallery-slot-${slot}`} onClick={() => setActive(index)} aria-label={`Show ${image.label}`} aria-current={offset === 0}>
            <img src={image.src} alt={image.alt} loading={index < 3 ? 'eager' : 'lazy'} decoding="async" />
            <span className="gallery-image-label"><b>{String(index + 1).padStart(2, '0')}</b><strong>{image.label}</strong></span>
          </button>
        )})}
      </div>

      <div className="gallery-progress" aria-label="Gallery navigation">
        {galleryImages.map((image, index) => <button key={image.src} aria-label={`Show image ${index + 1}`} aria-current={active === index} onClick={() => setActive(index)} />)}
      </div>
    </section>
  )
}
