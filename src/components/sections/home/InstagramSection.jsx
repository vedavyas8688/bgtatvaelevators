import { LuArrowRight, LuInstagram } from 'react-icons/lu'

const gallery = [
  ['/images/social-elevator-1.png', 'Bronze home elevator beside a sunlit living room'], ['/images/social-elevator-2.png', 'Open residential elevator beside a reading corner'], ['/images/social-elevator-3.png', 'Panoramic glass elevator in a double-height home'], ['/images/social-elevator-4.png', 'Open bronze elevator beside a luxury lounge'], ['/images/social-elevator-5.png', 'Glass home elevator in a bright penthouse atrium'],
]
const Arrow = () => <span aria-hidden="true"><LuArrowRight /></span>

export default function InstagramSection() {
  return <section className="social-section" aria-labelledby="social-title"><header><h2 id="social-title">Follow Us On Instagram</h2><a href="https://www.instagram.com/bgtatvaelevators/" target="_blank" rel="noreferrer"><LuInstagram className="instagram-mark" aria-hidden="true" /><span className="instagram-name">@bgtatvaelevators</span><Arrow /></a></header><div className="social-marquee"><div className="social-collage">{[0, 1].map((setIndex) => <div className="social-set" key={setIndex} aria-hidden={setIndex === 1}>{gallery.map(([src, alt]) => <a key={`${src}-${setIndex}`} href="https://www.instagram.com/bgtatvaelevators/" target="_blank" rel="noreferrer" tabIndex={setIndex === 1 ? -1 : 0}><img src={src} alt={setIndex === 0 ? alt : ''} loading="lazy" /></a>)}</div>)}</div></div></section>
}
