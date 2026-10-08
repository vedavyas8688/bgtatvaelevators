export default function MetricsSection() {
  return (
    <section className="metrics-section" aria-label="BG Tatva at a glance">
      <header className="metrics-header">
        <p>Proven experience</p>
        <h2>
          Built on trust.
          <br />
          <em>Engineered for every journey.</em>
        </h2>
        <span>
          Three decades of lift experience, advanced safety systems and
          responsive support for residential and commercial mobility.
        </span>
      </header>
      <div className="metrics-grid">
        <div className="metric-column metric-column-tall-first">
          <figure className="metric-photo metric-photo-a">
            <img
              src="/images/unique/tatva-panoramic-7b6018c4.webp"
              alt="Panoramic glass elevator installation"
              loading="lazy"
            />
          </figure>
          <article className="metric-card dark">
            <strong>
              2,700<sup>+</sup>
            </strong>
            <span>Lifts Delivered</span>
          </article>
        </div>
        <div className="metric-column metric-column-short-first">
          <article className="metric-card light">
            <strong>
              31<sup>+</sup>
            </strong>
            <span>Years Of Experience</span>
          </article>
          <figure className="metric-photo metric-photo-c">
            <img
              src="/images/unique/tatva-residential-38090d78.webp"
              alt="BG Tatva residential elevator"
              loading="lazy"
            />
          </figure>
        </div>
        <div className="metric-column metric-column-tall-first">
          <figure className="metric-photo metric-photo-b">
            <img
              src="/images/unique/tatva-commercial-1afeab7b.webp"
              alt="Commercial elevator bank"
              loading="lazy"
            />
          </figure>
          <article className="metric-card dark">
            <strong>24/7</strong>
            <span>Customer Care</span>
          </article>
        </div>
        <div className="metric-column metric-column-short-first">
          <article className="metric-card light">
            <strong>
              5<sup>T</sup>
            </strong>
            <span>Payload Capability</span>
          </article>
          <figure className="metric-photo metric-photo-d">
            <img
              src="/images/unique/tatva-engineering-ad19a531.webp"
              alt="Elevator control and traction engineering"
              loading="lazy"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
