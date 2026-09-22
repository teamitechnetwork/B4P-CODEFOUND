import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  MapPin,
} from 'lucide-react';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';

const story = {
  slug: 'cerue-liyean-mcgill-women-peace-security',
  title: 'Madam Cerue Liyean McGill Highlights Liberia’s Women, Peace and Security Agenda at High-Level Event in New York',
  date: 'September 21, 2026',
  location: 'New York, United States',
  category: 'Women, Peace & Security',
  image: '/images/news/cerue-liyean-mcgill-women-peace-security.webp',
  imageAlt:
    'Madam Cerue M. Liyean speaking at a high-level side event on Women, Peace and Security',
  deck:
    'At a high-level event in New York, Madam Cerue Liyean McGill highlighted Liberia’s Third National Action Plan on Women, Peace and Security and traced the women-led peacebuilding movement that helped carry Liberia from conflict toward peace.',
  intro: [
    'Liberia’s longstanding commitment to advancing women’s participation in peacebuilding and national development is receiving renewed international attention as stakeholders gather in New York for a high-level event focused on Women, Peace and Security.',
    'Among those highlighting Liberia’s continued work in this area is Madam Cerue Liyean McGill, a Liberian peacebuilding and women’s rights advocate whose work has been connected to community-based peacebuilding and women’s participation in peace and security processes.',
    'The high-level gathering, taking place at the United Nations Headquarters in New York, provides an opportunity to reflect on Liberia’s experience in advancing the Women, Peace and Security agenda and to discuss the country’s continuing commitments toward ensuring that women are meaningfully represented in peacebuilding, conflict prevention, decision-making and recovery processes.',
  ],
  sections: [
    {
      heading: 'Liberia’s Women, Peace and Security Journey',
      paragraphs: [
        'Liberia has been internationally recognized for the role women played in the country’s peacebuilding process and the subsequent development of national mechanisms supporting women’s participation in peace and security.',
        'The country has developed successive National Action Plans on Women, Peace and Security, guided by United Nations Security Council Resolution 1325 and subsequent resolutions addressing women, peace and security.',
        'Liberia is now advancing its Third National Action Plan on Women, Peace and Security (NAP III), covering the 2026–2031 period.',
        'The plan is intended to provide a national framework for strengthening women’s participation, protection and leadership in peace and security while supporting prevention, relief and recovery and stronger coordination and accountability.',
      ],
    },
    {
      heading: 'The Third National Action Plan',
      paragraphs: [
        'Liberia’s NAP III was developed through consultations involving government institutions, civil society organizations, women peacebuilders and development partners.',
        'The plan was nationally validated in July 2026, marking an important step toward its implementation and national ownership.',
        'The framework focuses on five broad areas:',
      ],
      bullets: [
        'Prevention of conflict and violence',
        'Protection of women and girls',
        'Participation of women in peace and security decision-making',
        'Relief and Recovery',
        'Coordination and Accountability',
      ],
      closing:
        'The plan is expected to provide a framework for coordinated action by government, civil society, development partners and other stakeholders over the 2026–2031 implementation period.',
    },
    {
      heading: 'From the Event: WIPNET’s Peacebuilding Legacy',
      paragraphs: [
        'In her remarks, Madam Cerue expressed profound appreciation to His Excellency Joseph Nyuma Boakai, Sr., President of the Republic of Liberia, for his continued leadership in sustaining Liberia’s hard-won peace and advancing national development.',
        'She also recognized Hon. Gbeme Horace-Kollie, Minister of Gender, Children and Social Protection, for her leadership in promoting women’s empowerment, gender equality and women’s meaningful participation in peace and security processes. She acknowledged the contributions of civil society organizations, development partners, faith-based and traditional leaders, youth and communities.',
        'Madam Cerue traced the roots of Liberia’s women-led peace movement to WIPNET, established in Liberia in 2002 under the West Africa Network for Peacebuilding (WANEP-Liberia) to strengthen women’s participation in conflict prevention, peacebuilding, dialogue and social cohesion.',
        'In 2003, WIPNET led the Liberian Women Mass Action for Peace, bringing together more than 45,000 women and girls from Christian and Muslim communities. United at the Fish Market in Monrovia and in other locations across Liberia, the women demanded an immediate end to the civil war.',
        'The movement used non-violent sit-ins, prayer, advocacy, public demonstrations and dialogue. Christian and Muslim women prayed together, showing how faith could become a bridge for peaceful coexistence rather than a source of division. The women’s call — “Enough is Enough” and “No Peace, No Sex” — became part of a powerful national demand for peace.',
        'Women from Bong and other counties travelled to Monrovia to understand and join the national movement. They returned home and mobilized women for disarmament-related activities in Totota, Bong County, where women worked with conflict-affected communities, ex-combatants and other stakeholders between 2004 and 2006.',
        'Madam Cerue also highlighted support from UN Women, which strengthened WIPNET’s ability to reach communities, promote peace and encourage citizens to participate in Liberia’s transition from war to peace. WIPNET’s Voices of Women Radio Program further extended peace messaging, public education and dialogue to communities across Liberia.',
        'She connected women’s calls for dialogue with Liberia’s Truth and Reconciliation Commission and with continuing transitional-justice initiatives, including work with communities and organizations around the country.',
      ],
    },
    {
      heading: 'Recommendations Shared in New York',
      paragraphs: [
        'The recommendations shared during the event emphasized the need to connect national commitments with the women and community-based structures that make peacebuilding possible:',
      ],
      bullets: [
        'Mobilize sustainable funding for the full implementation of NAP III.',
        'Strengthen grassroots women’s participation and leadership by resourcing Peace Hut women, women peacebuilders and community-based structures at national, county and community levels.',
        'Strengthen government ownership and coordination among government institutions, civil society organizations, grassroots women’s movements, women’s organizations and peacebuilding actors.',
      ],
    },
    {
      heading: 'Recognizing Women Peacebuilders',
      paragraphs: [
        'The participation and visibility of women such as Madam Cerue Liyean McGill reflects the broader contribution of Liberian women and civil society actors to peacebuilding at the community and national levels.',
        'Her involvement provides an opportunity to highlight the important role of women peacebuilders whose work contributes to strengthening community resilience, promoting dialogue and supporting women’s meaningful participation in peace and security processes.',
        'The Women, Peace and Security agenda is not limited to international discussions. Its implementation depends heavily on the work carried out within communities, where women and local organizations often contribute to conflict prevention, reconciliation, social cohesion and community development.',
      ],
    },
    {
      heading: 'Looking Ahead',
      paragraphs: [
        'As Liberia moves forward with the implementation of its Third National Action Plan, continued collaboration among government institutions, women-led organizations, civil society, development partners and communities will remain important.',
        'The high-level event in New York provides an international platform for Liberia to reflect on its peacebuilding journey while drawing attention to the continuing importance of women’s leadership in sustaining peace.',
        'For Liberia, the Women, Peace and Security agenda represents not only a commitment under the United Nations framework but also an opportunity to strengthen the voices, participation and leadership of women across the country.',
        'Madam Cerue Liyean McGill’s participation in this important moment contributes to the visibility of Liberian women working to advance peace, security and inclusive development.',
      ],
    },
  ],
};

function StoryMeta() {
  return (
    <div className="news-story-meta" aria-label="Story details">
      <span>
        <CalendarDays size={16} aria-hidden="true" />
        {story.date}
      </span>
      <span>
        <MapPin size={16} aria-hidden="true" />
        {story.location}
      </span>
    </div>
  );
}

export default function NewsPage() {
  return (
    <div className="news-page flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="news-hero">
          <div className="page-container news-hero__inner">
            <div className="news-hero__copy">
              <span className="news-kicker">News &amp; updates</span>
              <h1>
                Stories from the work.
                <em>Momentum for what’s next.</em>
              </h1>
              <p>
                Read the people, partnerships, and public moments shaping
                peacebuilding and inclusive development across Liberia and beyond.
              </p>
            </div>
            <div className="news-hero__mark" aria-hidden="true">
              <span>01</span>
              <strong>Field<br />notes</strong>
              <i />
            </div>
          </div>
        </section>

        <section className="news-feature-section" aria-labelledby="featured-story-title">
          <div className="page-container">
            <div className="news-section-heading">
              <div>
                <span className="news-section-kicker">Featured story</span>
                <h2>Women’s leadership<br /><em>in the room.</em></h2>
              </div>
              <p>
                A closer look at Liberia’s continuing commitment to the Women,
                Peace and Security agenda, and the women helping carry it forward.
              </p>
            </div>

            <article className="news-feature-card">
              <div className="news-feature-card__image">
                <img src={story.image} alt={story.imageAlt} />
                <span>01 · News &amp; updates</span>
              </div>
              <div className="news-feature-card__body">
                <div className="news-feature-card__category">{story.category}</div>
                <h2 id="featured-story-title">{story.title}</h2>
                <StoryMeta />
                <p>{story.deck}</p>
                <a className="news-read-more" href={`/news-blogs/${story.slug}`}>
                  Read more
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="news-note-section">
          <div className="page-container news-note-section__inner">
            <span className="news-section-kicker">Stay close to the work</span>
            <p>
              B4P CODEFOUND shares stories that connect international commitments
              to the community-led work that makes them real.
            </p>
            <a href="/events">
              Explore events &amp; gatherings <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export function NewsArticlePage() {
  return (
    <div className="news-article-page flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="news-article-hero">
          <div className="page-container news-article-hero__inner">
            <div className="news-article-hero__copy">
              <a className="news-back-link" href="/news-blogs">
                <ArrowLeft size={16} aria-hidden="true" />
                Back to news
              </a>
              <span className="news-kicker">{story.category}</span>
              <h1>{story.title}</h1>
              <StoryMeta />
            </div>
            <figure className="news-article-hero__image">
              <img src={story.image} alt={story.imageAlt} />
              <figcaption>Madam Cerue M. Liyean · Legacy speaker</figcaption>
            </figure>
          </div>
        </section>

        <section className="news-article-content">
          <div className="page-container news-article-content__layout">
            <article className="news-article">
              <p className="news-article__standfirst">{story.deck}</p>
              {story.intro.slice(1).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {story.sections.map((section) => (
                <section key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets && (
                    <ul>
                      {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                    </ul>
                  )}
                  {section.closing && <p>{section.closing}</p>}
                </section>
              ))}
            </article>

            <aside className="news-article-aside">
              <span className="news-section-kicker">The story in focus</span>
              <strong>Women, Peace<br />&amp; Security</strong>
              <p>
                Liberia’s NAP III creates a national framework for women’s
                participation, protection, leadership, prevention, relief and recovery.
              </p>
              <a className="news-read-more news-read-more--dark" href="/news-blogs">
                Back to news
                <ArrowLeft size={16} aria-hidden="true" />
              </a>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}