import { LuArrowRight } from 'react-icons/lu'

export default function ArticleContentSection() {
  return (
    <article className="article-content">
      <aside>
        <span>Written by</span>
        <strong>BG Tatva Elevators</strong>
        <a href="mailto:info@bgtatva.com">Share this article <span aria-hidden="true"><LuArrowRight /></span></a>
      </aside>

      <div className="article-body">
        <p className="article-lead">An elevator is no longer simply a mechanical system hidden behind a pair of doors. In considered architecture, it becomes part of the spatial story—guiding how people arrive, move and experience a building.</p>

        <h2>Movement can be part of the design</h2>
        <p>Every building has a rhythm. Corridors, staircases, thresholds and lifts determine how that rhythm is felt. When an elevator is planned early, architects can position it where movement feels natural rather than forcing circulation into leftover space.</p>
        <p>A well-located lift shortens travel paths, improves accessibility and creates a more intuitive relationship between floors. In a residence, it can connect private and social spaces quietly. In a commercial building, it can organise high traffic without interrupting the visual calm of the interior.</p>

        <figure>
          <img src="/images/social-elevator-3.png" alt="Glass panoramic elevator at the centre of a double-height residence" loading="lazy" />
          <figcaption>A panoramic elevator can become a transparent architectural centrepiece.</figcaption>
        </figure>

        <h2>Material continuity creates belonging</h2>
        <p>The most successful elevator installations feel as though they have always belonged to the building. Door surrounds can continue the stone, timber or metal language of the lobby. Inside the cabin, wall finishes, lighting temperature and hardware can echo adjacent rooms without copying them literally.</p>
        <blockquote>“The best elevator design does not ask for attention. It earns attention through proportion, material and detail.”</blockquote>
        <p>Material continuity is especially important in residential projects, where a standard commercial cabin can feel disconnected. A restrained palette of timber, softly brushed metal, warm light and durable stone creates a transition that feels composed and familiar.</p>

        <h2>Light changes the passenger experience</h2>
        <p>Lighting has an outsized influence inside a compact cabin. Indirect perimeter illumination can make the ceiling feel lighter, while vertical light reveals texture and makes wall panels appear taller. The goal is comfortable, even illumination without glare or harsh reflections.</p>
        <ul>
          <li>Use warm, indirect light for comfort and material depth.</li>
          <li>Keep controls clearly illuminated and easy to understand.</li>
          <li>Coordinate cabin and lobby colour temperatures.</li>
          <li>Use reflective surfaces carefully to avoid visual noise.</li>
        </ul>

        <figure>
          <img src="/images/social-elevator-4.png" alt="Open bronze elevator integrated beside a luxury lounge" loading="lazy" />
          <figcaption>Cabin light and surrounding architecture should read as one experience.</figcaption>
        </figure>

        <h2>Good architecture includes long-term performance</h2>
        <p>Beauty matters, but an elevator is also one of the hardest-working elements in a building. Durable finishes, accessible service points, efficient drive systems and a clear maintenance strategy protect the design over time. Early coordination between the architect, interior designer and elevator specialist prevents compromises later.</p>
        <p>When performance and aesthetics are developed together, vertical mobility becomes more than infrastructure. It becomes a reliable, quiet and memorable part of everyday life.</p>

        <div className="article-conclusion">
          <p>Planning an elevator-led project?</p>
          <h2>Design the journey from the beginning.</h2>
          <a className="editorial-cta" href="/contact">Talk to our team <span aria-hidden="true"><LuArrowRight /></span></a>
        </div>
      </div>
    </article>
  )
}
