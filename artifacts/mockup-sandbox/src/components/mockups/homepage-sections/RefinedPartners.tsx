import { ArrowUpRight, Globe2, ExternalLink, MapPin } from 'lucide-react';
import './RefinedHomepageSections.css';

const partnerGroups = [
  {
    title: 'International frameworks',
    eyebrow: 'International',
    number: '01',
    icon: Globe2,
    links: [
      { title: 'UN Women: Latest Global Updates on Gender Equality', href: 'https://www.unwomen.org/en/news' },
      { title: 'Ending Violence Against Women — UN Women Programs', href: 'https://www.unwomen.org/en/what-we-do/ending-violence-against-women' },
      { title: 'Women and the Sustainable Development Goals (SDGs)', href: 'https://www.unwomen.org/en/news/in-focus/women-and-the-sdgs' },
    ],
  },
  {
    title: 'Diaspora networks',
    eyebrow: 'Diaspora',
    number: '02',
    icon: Globe2,
    links: [
      { title: 'ULAA Press — Union of Liberian Associations in the Americas', href: 'https://ulaalib.org/blog' },
      { title: 'Liberian Women Advocacy to End Violence in Liberia', href: 'https://www.facebook.com/lwatevl' },
      { title: 'Liberians in Columbus Incorporated, Inc.', href: 'https://www.facebook.com/liberiansincolumbusinc.lici' },
    ],
  },
  {
    title: 'Local impact & policy',
    eyebrow: 'Local impact',
    number: '03',
    icon: MapPin,
    links: [
      { title: 'CSW 2022: WONGOSOL, B4P CODEFOUND hosts its 2nd CSW Side-Event', href: 'https://womenvoicesnewspaper.org/wongosol-b4p-codefound-hosts-its-2nd-csw-side-event/' },
      { title: 'ED’s Visit: B4P CODEFOUND to ensure women’s participation', href: 'https://smartnewsliberia.com/b4p-codefound-to-ensure-womens-participation-in-liberias-social-economic-and-political-space/' },
      { title: 'Passage of Dual Citizenship in Liberia', href: 'https://www.liberianobserver.com/liberia-dual-citizenship-becomes-legal' },
    ],
  },
];

export function RefinedPartners() {
  return (
    <section id="partner" className="refined-section refined-partners" aria-labelledby="refined-partners-title">
      <div className="refined-shell">
        <div className="partners-topline">
          <div className="section-kicker section-kicker-light">
            <span className="kicker-line" aria-hidden="true" />
            Partners &amp; Donors
          </div>
          <span className="partners-location"><MapPin size={14} aria-hidden="true" /> Monrovia · Liberia</span>
        </div>

        <div className="partners-grid">
          <div className="partners-statement">
            <p className="statement-mark" aria-hidden="true">↗</p>
            <h2 id="refined-partners-title">
              Connected work
              <em>across borders.</em>
            </h2>
            <p className="partners-lede">
              We are grateful for the international frameworks, diaspora networks, and
              local advocacy connections that help keep this work grounded and moving.
            </p>
            <div className="partners-note">
              <span className="note-dot" aria-hidden="true" />
              <span>Shared work. Local leadership.</span>
            </div>
          </div>

          <div className="partner-groups" aria-label="Partner and donor resources">
            {partnerGroups.map((group) => {
              const GroupIcon = group.icon;
              return (
                <article className="partner-group" key={group.title}>
                  <div className="partner-group-head">
                    <div className="partner-group-symbol"><GroupIcon size={19} strokeWidth={1.7} aria-hidden="true" /></div>
                    <span className="partner-number">{group.number}</span>
                  </div>
                  <p className="partner-eyebrow">{group.eyebrow}</p>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <a href={link.href} target="_blank" rel="noreferrer">
                          <span>{link.title}</span>
                          <ExternalLink className="partner-link-icon" size={15} aria-hidden="true" />
                        </a>
                      </li>
                    ))}
                  </ul>
                  <a className="partner-visit" href={group.links[0].href} target="_blank" rel="noreferrer">
                    Explore connection <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}