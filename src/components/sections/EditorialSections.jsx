import { LuArrowRight, LuInstagram } from 'react-icons/lu'
import { latestArticles } from '../../data/blogPosts'

const Arrow = ({ className = '' }) => <span className={className} aria-hidden="true"><LuArrowRight /></span>

const gallery = [
  ['/images/social-elevator-1.png', 'Bronze home elevator beside a sunlit living room'],
  ['/images/social-elevator-2.png', 'Open residential elevator beside a reading corner'],
  ['/images/social-elevator-3.png', 'Panoramic glass elevator in a double-height home'],
  ['/images/social-elevator-4.png', 'Open bronze elevator beside a luxury lounge'],
  ['/images/social-elevator-5.png', 'Glass home elevator in a bright penthouse atrium'],
]

export default function EditorialSections() {
  const [primaryArticle, imageArticle, secondaryArticle] = latestArticles.slice(0, 3)

  return (
    <>
      <section className="lifestyle-section" aria-labelledby="lifestyle-title">
        <header>
          <p>Made for the way you live</p>
          <h2 id="lifestyle-title">Elevating <em>your lifestyle.</em></h2>
          <span>Thoughtfully engineered elevators that bring effortless movement, comfort and distinction to every space.</span>
          <div><a href="/contact">Contact Us</a><a href="#about">Learn More</a></div>
        </header>
        <div className="lifestyle-images">
          <figure><img src="/images/glass-panoramic-elevator.png" alt="Panoramic glass elevator in a bright atrium" loading="lazy" /></figure>
          <figure><img src="/images/elevator-lobby-luxe.png" alt="Premium residential elevator lobby" loading="lazy" /></figure>
          <figure><img src="/images/walnut-elevator-cabin.png" alt="Warm walnut elevator cabin" loading="lazy" /></figure>
        </div>
      </section>

      <section className="metrics-section" aria-label="BG Tatva at a glance">
        <header className="metrics-header">
          <p>Our impact</p>
          <h2>Built on trust.<br /><em>Measured in journeys.</em></h2>
          <span>From considered design to dependable performance, every number reflects our commitment to creating better vertical experiences.</span>
        </header>
        <div className="metrics-grid">
          <div className="metric-column metric-column-tall-first">
            <figure className="metric-photo metric-photo-a"><img src="/images/glass-panoramic-elevator.png" alt="Glass elevator installation" loading="lazy" /></figure>
            <article className="metric-card dark"><strong>150<sup>+</sup></strong><span>Projects Completed</span></article>
          </div>
          <div className="metric-column metric-column-short-first">
            <article className="metric-card light"><strong>10<sup>+</sup></strong><span>Years Of Experience</span></article>
            <figure className="metric-photo metric-photo-c"><img src="/images/walnut-elevator-cabin.png" alt="Bespoke walnut elevator interior" loading="lazy" /></figure>
          </div>
          <div className="metric-column metric-column-tall-first">
            <figure className="metric-photo metric-photo-b"><img src="/images/elevator-lobby-luxe.png" alt="Luxury elevator lobby" loading="lazy" /></figure>
            <article className="metric-card dark"><strong>60<sup>+</sup></strong><span>Satisfied Clients</span></article>
          </div>
          <div className="metric-column metric-column-short-first">
            <article className="metric-card light"><strong>120<sup>+</sup></strong><span>Spaces Transformed</span></article>
            <figure className="metric-photo metric-photo-d"><img src="/images/cabin-ivory.png" alt="Ivory elevator cabin" loading="lazy" /></figure>
          </div>
        </div>
      </section>

      <section className="insights-section" aria-labelledby="insights-title">
        <header><h2 id="insights-title">Updated Insight</h2><span>Our latest articles provide useful insights, keeping you up to date on the ever-changing world of vertical mobility.</span></header>
        <div className="insights-grid">
          <a className="insight-card insight-main" href={primaryArticle.href} aria-label={`Read ${primaryArticle.title}`}>
            <div className="insight-meta"><i>{primaryArticle.initials}</i><span><b>{primaryArticle.author}</b><small>{primaryArticle.date}</small></span></div>
            <div className="insight-image-wrap"><img src={primaryArticle.image} alt={primaryArticle.title} loading="lazy" /><Arrow className="insight-arrow" /></div>
            <h3>{primaryArticle.title}</h3><p>{primaryArticle.excerpt}</p>
          </a>
          <a className="insight-wide" href={imageArticle.href} aria-label={`Read ${imageArticle.title}`}>
            <img src={imageArticle.image} alt={imageArticle.title} loading="lazy" />
            <Arrow className="insight-arrow" />
            <span className="insight-wide-caption"><small>{imageArticle.category} · {imageArticle.date}</small><b>{imageArticle.title}</b></span>
          </a>
          <a className="insight-card insight-secondary" href={secondaryArticle.href} aria-label={`Read ${secondaryArticle.title}`}>
            <div className="insight-meta"><i>{secondaryArticle.initials}</i><span><b>{secondaryArticle.author}</b><small>{secondaryArticle.date}</small></span></div><h3>{secondaryArticle.title}</h3><p>{secondaryArticle.excerpt}</p>
          </a>
          <a className="more-blogs" href="/blog"><span>More Blogs</span><Arrow /></a>
        </div>
      </section>

      <section className="social-section" aria-labelledby="social-title">
        <header><h2 id="social-title">Follow Us On Instagram</h2><a href="https://www.instagram.com/bgtatvaelevators/" target="_blank" rel="noreferrer"><LuInstagram className="instagram-mark" aria-hidden="true" /><span className="instagram-name">@bgtatvaelevators</span><Arrow /></a></header>
        <div className="social-marquee">
          <div className="social-collage">
            {[0, 1].map((setIndex) => (
              <div className="social-set" key={setIndex} aria-hidden={setIndex === 1}>
                {gallery.map(([src, alt], imageIndex) => (
                  <a key={`${src}-${setIndex}`} href="https://www.instagram.com/bgtatvaelevators/" target="_blank" rel="noreferrer" tabIndex={setIndex === 1 ? -1 : 0}>
                    <img src={src} alt={setIndex === 0 ? alt : ''} loading="lazy" />
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}
