import './_group.css';

import { Compass, Sprout, Target } from 'lucide-react';

const mission =
  'B4P CODEFOUND seeks to increase and sustain the voice and agency of women and girls by building their capacities to access resources for social justice and financial independence.';

const vision =
  'We envisage a world where women and girls lead by creating and promoting entrepreneurial models to foster economic freedom, sustainable peace, and development beyond borders.';

const goal =
  'Facilitate, accompany, and support community cooperation; enhance local community capacities for promoting and sustaining local peace initiatives, collective and co-created enterprises for poverty reduction, as well as development and shared prosperity.';

export function Refined() {
  return (
    <div className="purpose-preview">
      <section className="purpose-refresh" aria-labelledby="purpose-refresh-title">
        <div className="purpose-refresh__inner">
          <header className="purpose-refresh__heading">
            <p className="purpose-refresh__eyebrow">What guides us</p>
            <h2 id="purpose-refresh-title">Our Purpose</h2>
            <p>
              Two commitments shape how B4P CODEFOUND works with communities and partners around
              the world.
            </p>
          </header>

          <div className="purpose-refresh__cards">
            <article className="purpose-refresh__card purpose-refresh__card--mission">
              <div className="purpose-refresh__card-top">
                <span className="purpose-refresh__icon" aria-hidden="true">
                  <Target />
                </span>
                <span className="purpose-refresh__index">01 / MISSION</span>
              </div>
              <h3>Our Mission</h3>
              <p className="purpose-refresh__statement">{mission}</p>
            </article>

            <article className="purpose-refresh__card purpose-refresh__card--vision">
              <div className="purpose-refresh__card-top">
                <span className="purpose-refresh__icon" aria-hidden="true">
                  <Compass />
                </span>
                <span className="purpose-refresh__index">02 / VISION</span>
              </div>
              <h3>Our Vision</h3>
              <p className="purpose-refresh__statement">{vision}</p>
            </article>
          </div>

          <aside className="purpose-refresh__goal" aria-label="Our goal">
            <div className="purpose-refresh__goal-heading">
              <span className="purpose-refresh__goal-icon" aria-hidden="true">
                <Sprout />
              </span>
              <div>
                <p className="purpose-refresh__goal-label">The Goal</p>
                <h3>From shared purpose to shared prosperity.</h3>
              </div>
            </div>
            <p className="purpose-refresh__goal-copy">{goal}</p>
          </aside>
        </div>
      </section>
    </div>
  );
}
