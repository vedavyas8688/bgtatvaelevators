import { LuArrowRight, LuInstagram } from 'react-icons/lu'

const gallery = [
  ['/images/unique/social-elevator-1-2264c75a.webp', 'Bronze home elevator beside a sunlit living room'], ['/images/unique/social-elevator-2-4302cd3a.webp', 'Open residential elevator beside a reading corner'], ['/images/unique/social-elevator-3-87b43968.webp', 'Panoramic glass elevator in a double-height home'], ['/images/unique/social-elevator-4-a05874ec.webp', 'Open bronze elevator beside a luxury lounge'], ['/images/unique/social-elevator-5-255f97fb.webp', 'Glass home elevator in a bright penthouse atrium'],
]
const Arrow = () => <span aria-hidden="true"><LuArrowRight /></span>

export default function InstagramSection() {
  return <section className="social-section" aria-labelledby="social-title"><header><h2 id="social-title">Follow Us On Instagram</h2><a href="https://www.instagram.com/bgtatvaelevators/" target="_blank" rel="noreferrer"><LuInstagram className="instagram-mark" aria-hidden="true" /><span className="instagram-name">@bgtatvaelevators</span><Arrow /></a></header><div className="social-marquee"><div className="social-collage">{[0, 1].map((setIndex) => <div className="social-set" key={setIndex} aria-hidden={setIndex === 1}>{gallery.map(([src, alt]) => <a key={`${src}-${setIndex}`} href="https://www.instagram.com/bgtatvaelevators/" target="_blank" rel="noreferrer" tabIndex={setIndex === 1 ? -1 : 0}><img src={src} alt={setIndex === 0 ? alt : ''} loading="lazy" /></a>)}</div>)}</div></div></section>
}
