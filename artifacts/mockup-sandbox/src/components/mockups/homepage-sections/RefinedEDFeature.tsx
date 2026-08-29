import { ArrowUpRight, CalendarDays, Camera, MapPin } from 'lucide-react';
import './RefinedHomepageSections.css';

export function RefinedEDFeature() {
  return (
    <section className="refined-section refined-ed" aria-labelledby="refined-ed-title">
      <div className="refined-shell">
        <div className="ed-header">
          <div>
            <div className="section-kicker">
              <span className="kicker-line" aria-hidden="true" />
              Our Impact
            </div>
            <h2 id="refined-ed-title">Stories from the Field</h2>
          </div>
          <a className="ed-all-link" href="/about">
            View All Impact
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>

        <article className="ed-feature-card">
          <div className="ed-image-wrap">
            <img
              src="/__mockup/images/stories/day-three-0114.jpg"
              alt="Women gathered during B4P CODEFOUND's field work in Liberia"
            />
            <div className="ed-image-wash" aria-hidden="true" />
            <div className="ed-image-meta">
              <span><Camera size={14} aria-hidden="true" /> Field note 03</span>
              <span>© B4P CODEFOUND</span>
            </div>
          </div>

          <div className="ed-story">
            <div className="ed-story-topline">
              <span className="ed-tag">Local Impact</span>
              <span className="ed-story-date"><CalendarDays size={14} aria-hidden="true" /> On the ground</span>
            </div>
            <p className="ed-story-kicker">Women’s participation · Liberia</p>
            <h3>ED’s Visit: B4P CODEFOUND to ensure women’s participation</h3>
            <p className="ed-description">
              Advocating for women’s participation in Liberia’s social, economic, and
              political space.
            </p>
            <div className="ed-divider" aria-hidden="true" />
            <div className="ed-story-bottom">
              <span className="ed-place"><MapPin size={15} aria-hidden="true" /> Liberia</span>
              <a
                className="ed-read-link"
                href="https://smartnewsliberia.com/b4p-codefound-to-ensure-womens-participation-in-liberias-social-economic-and-political-space/"
                target="_blank"
                rel="noreferrer"
              >
                Read the story <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </article>

        <div className="ed-footnote">
          <span>Field stories are a record of what communities make possible.</span>
          <span className="ed-footnote-line" aria-hidden="true" />
          <span>01 / 01</span>
        </div>
      </div>
    </section>
  );
}