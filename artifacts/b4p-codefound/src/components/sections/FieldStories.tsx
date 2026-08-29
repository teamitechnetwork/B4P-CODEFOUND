import { ArrowUpRight, CalendarDays, Camera, MapPin } from 'lucide-react';

const fieldNotes = [
  {
    tag: 'Youth Leadership',
    title: 'Building Young Women, Driving Change (BWYDC)',
    description: 'Empowering the next generation with essential leadership skills and mentorship.',
  },
  {
    tag: 'Community Action',
    title: 'Community Women’s Circle In Action (CWC)',
    description: 'Creating safe spaces for dialogue, community healing, empowerment and collective decision-making.',
  },
  {
    tag: 'Global Advocacy',
    title: 'Voice At The Commission On Status Of Women (CSW)',
    description: 'Amplifying African women’s stories, advocating for inclusion and equality at the global stage.',
  },
  {
    tag: 'Peacebuilding',
    title: 'The Liberia Conference — A Movement',
    description: 'Delegates and youth leaders charting a unified path for peacebuilding and sustainable development.',
  },
];

export function FieldStories() {
  return (
    <section id="field-stories" className="refined-section refined-ed" aria-labelledby="field-stories-title">
      <div className="refined-shell">
        <div className="ed-header">
          <div>
            <div className="section-kicker">
              <span className="kicker-line" aria-hidden="true" />
              Our Impact
            </div>
            <h2 id="field-stories-title">Stories from the Field</h2>
          </div>
          <a className="ed-all-link" href="/about">
            View All Impact
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>

        <article className="ed-feature-card">
          <div className="ed-image-wrap">
            <img
              src="/images/uploaded/field-ed-visit.webp"
              alt="Women leaders gathered with B4P CODEFOUND during an event in Liberia"
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

        <div className="field-story-list" aria-label="More field stories">
          {fieldNotes.map((story) => (
            <article className="field-story-item" key={story.title}>
              <p>{story.tag}</p>
              <h3>{story.title}</h3>
              <span>{story.description}</span>
            </article>
          ))}
        </div>

        <div className="ed-footnote">
          <span>Field stories are a record of what communities make possible.</span>
          <span className="ed-footnote-line" aria-hidden="true" />
          <span>Featured story</span>
        </div>
      </div>
    </section>
  );
}