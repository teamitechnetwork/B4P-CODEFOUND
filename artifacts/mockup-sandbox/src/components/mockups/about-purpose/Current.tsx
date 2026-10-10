import './_group.css';

const mission =
  'B4P CODEFOUND seeks to increase and sustain the voice and agency of women and girls by building their capacities to access resources for social justice and financial independence.';

const vision =
  'We envisage a world where women and girls lead by creating and promoting entrepreneurial models to foster economic freedom, sustainable peace, and development beyond borders.';

const goal =
  'Facilitate, accompany, and support community cooperation; enhance local community capacities for promoting and sustaining local peace initiatives, collective and co-created enterprises for poverty reduction, as well as development and shared prosperity.';

export function Current() {
  return (
    <div className="purpose-preview purpose-preview--current">
      <section className="about-purpose-section bg-white" aria-labelledby="current-purpose-title">
        <div className="about-purpose-container">
          <div className="about-purpose-heading">
            <span className="about-purpose-heading__eyebrow">What guides us</span>
            <h2 id="current-purpose-title">Our Purpose</h2>
            <p>
              Two commitments shape how B4P CODEFOUND works with communities and partners around
              the world.
            </p>
          </div>

          <div className="about-purpose-grid">
            <article className="about-purpose-card">
              <div className="about-purpose-card__topline">
                <span className="about-purpose-card__number">01</span>
                <span className="about-purpose-card__label">The Mission</span>
              </div>
              <p className="about-purpose-card__statement">{mission}</p>
            </article>

            <article className="about-purpose-card about-purpose-card--vision">
              <div className="about-purpose-card__topline">
                <span className="about-purpose-card__number">02</span>
                <span className="about-purpose-card__label">The Vision</span>
              </div>
              <p className="about-purpose-card__statement">{vision}</p>
            </article>
          </div>

          <div className="about-purpose-goal">
            <div>
              <span className="about-purpose-card__label">The Goal</span>
              <h3>From shared purpose to shared prosperity.</h3>
            </div>
            <p>{goal}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
