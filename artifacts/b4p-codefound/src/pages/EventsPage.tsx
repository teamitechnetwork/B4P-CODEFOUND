import {
  ArrowDownRight,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Download,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { useMemo, useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

type EventImage = {
  src: string;
  alt: string;
  label?: string;
};

type EventStory = {
  label: string;
  category: 'Celebrations' | 'Conferences' | 'Forums & dialogue';
  title: string;
  description: string;
  date: string;
  time?: string;
  location: string;
  images: EventImage[];
};

const eventStories: EventStory[] = [
  {
    label: '10th anniversary gala',
    category: 'Celebrations',
    title: 'Rooted & Rising',
    description: 'B4P CODEFOUND’s 10th Anniversary Gala, presented with Columbus Women Connect.',
    date: 'September 13, 2025',
    time: '6–9 PM',
    location: '1200 Waggoner Road · Reynoldsburg, Ohio',
    images: [
      {
        src: '/images/events/rooted-rising-gala.jpg',
        alt: 'Rooted and Rising B4P CODEFOUND 10th Anniversary Gala event artwork',
      },
    ],
  },
  {
    label: 'Conference 2025',
    category: 'Conferences',
    title: 'Liberia Conference ’25',
    description: 'Sustaining women and youth empowerment through agriculture, health, and educational investments.',
    date: 'December 11–13, 2025',
    location: 'Administrative Building · Gbarnga, Bong County',
    images: [
      {
        src: '/images/events/liberia-conference-2025-poster.jpg',
        alt: 'Liberia Conference 2025 event poster for women and youth empowerment',
      },
      {
        src: '/images/events/liberia-conference-2025-banner.jpg',
        alt: 'Liberia Conference 2025 partner banner featuring B4P CODEFOUND and collaborators',
        label: 'Partner banner',
      },
    ],
  },
  {
    label: 'CSW70 side event · 2026',
    category: 'Forums & dialogue',
    title: 'LDDWYF 2026',
    description: 'Liberia Diaspora Dialogue Women & Youth Forum focused on equal access to justice for all women and girls globally.',
    date: 'March 12, 2026',
    time: '3–5 PM GMT · 10 AM–12 PM EDT',
    location: 'Hybrid · In-person Liberia & virtual',
    images: [
      {
        src: '/images/events/lddwyf-csw-side-event-2026.jpg',
        alt: 'Liberia-Diaspora Dialogue Women and Youth Forum 2026 banner with event partners',
        label: 'Partner banner',
      },
      {
        src: '/images/events/csw70-side-event-2026.jpg',
        alt: 'CSW70 side event flyer featuring the Liberia Diaspora Dialogue Women and Youth Forum 2026',
        label: 'Event flyer',
      },
    ],
  },
];

const eventCategories = ['All stories', 'Celebrations', 'Conferences', 'Forums & dialogue'] as const;

function EventMeta({ event }: { event: EventStory }) {
  return (
    <dl className="event-card__meta">
      <div>
        <dt><CalendarDays size={15} aria-hidden="true" /> Date</dt>
        <dd>{event.date}</dd>
      </div>
      {event.time && (
        <div>
          <dt><Clock3 size={15} aria-hidden="true" /> Time</dt>
          <dd>{event.time}</dd>
        </div>
      )}
      <div className="event-card__meta-location">
        <dt><MapPin size={15} aria-hidden="true" /> Place</dt>
        <dd>{event.location}</dd>
      </div>
    </dl>
  );
}

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState<(typeof eventCategories)[number]>('All stories');
  const filteredStories = useMemo(
    () => eventStories.filter((event) => activeCategory === 'All stories' || event.category === activeCategory),
    [activeCategory],
  );

  return (
    <div className="events-page flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="events-hero">
          <div className="page-container events-hero__inner">
            <div className="events-hero__copy">
              <span className="events-kicker">
                <Sparkles size={15} aria-hidden="true" />
                Events &amp; gatherings
              </span>
              <h1>
                Where community <em>comes alive.</em>
              </h1>
              <p>
                From future invitations to past stories, B4P CODEFOUND creates
                space for dialogue, celebration, and ideas that become action.
                Find a way to gather, or revisit the moments that carry the work forward.
              </p>
              <div className="events-hero__actions">
                <a className="events-hero__link" href="#featured-event">
                  Explore the feature story <ArrowDownRight size={18} aria-hidden="true" />
                </a>
                <a className="events-hero__archive-link" href="#event-stories">
                  Browse all gatherings <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </div>
              <div className="events-hero__status" aria-label="This page includes future invitations and past stories">
                <span><strong>Next</strong> Make a plan</span>
                <span><strong>Archive</strong> See what happened</span>
              </div>
            </div>

            <div className="events-hero__visual">
              <img
                src="/images/events/diaspora-farewell-program-2026.jpg"
                alt="Diaspora Farewell Program event artwork for the Diaspora Annual 2025 Return"
              />
              <div className="events-hero__visual-shade" aria-hidden="true" />
              <div className="events-hero__visual-topline">
                <span>01 / Featured gathering</span>
                <span>Past story</span>
              </div>
              <div className="events-hero__visual-caption">
                  <span>Diaspora Annual ’25 · Return · Past story</span>
                <strong>Diaspora <em>Farewell</em></strong>
                <small>January 9, 2026 · Executive Mansion</small>
              </div>
              <div className="events-hero__visual-count" aria-label="Four event stories across six flyers">
                <strong>04</strong>
                <span>event stories<br />across six flyers</span>
              </div>
            </div>
          </div>
        </section>

        <section id="featured-event" className="events-feature-section">
          <div className="page-container">
            <div className="events-section-heading">
              <div>
                <span className="events-section-kicker">Feature event</span>
                <h2>Across borders,<br /><em>still connected.</em></h2>
              </div>
              <p>
                The Diaspora Farewell Program is the lead story in this collection:
                a visual invitation to gather, return, and keep community in motion.
              </p>
            </div>

            <article className="events-feature-card">
              <div className="events-feature-card__image">
                <img
                  src="/images/events/diaspora-farewell-program-2026.jpg"
                  alt="Diaspora Farewell Program event artwork for the Diaspora Annual 2025 Return"
                />
                <span className="events-feature-card__stamp">01 · Feature event</span>
              </div>
              <div className="events-feature-card__content">
                <div className="events-feature-card__topline">
                  <span>Diaspora Annual ’25 · Return</span>
                  <ArrowUpRight size={21} aria-hidden="true" />
                </div>
                <h3>Diaspora <em>Farewell</em> Program</h3>
                <p className="events-feature-card__intro">
                  A featured Diaspora Annual return gathering, captured in the
                  program artwork and presented here as part of B4P CODEFOUND’s
                  growing event archive.
                </p>
                <dl className="events-feature-card__details">
                  <div>
                    <dt><CalendarDays size={17} aria-hidden="true" /> Date</dt>
                    <dd>Friday · January 9, 2026</dd>
                  </div>
                  <div>
                    <dt><Clock3 size={17} aria-hidden="true" /> Time</dt>
                    <dd>3:00 PM</dd>
                  </div>
                  <div>
                    <dt><MapPin size={17} aria-hidden="true" /> Venue</dt>
                    <dd>Executive Mansion</dd>
                  </div>
                </dl>
                <div className="events-feature-card__footer">
                  <span>Community, culture, and connection</span>
                  <div className="events-feature-card__actions">
                    <a
                      className="events-feature-card__download"
                      href="/images/events/diaspora-farewell-program-2026.jpg"
                      download="diaspora-farewell-program-2026.jpg"
                    >
                      <Download size={14} aria-hidden="true" /> Download flyer
                    </a>
                    <a href="#event-stories">
                      Explore all stories <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="events-invitation-section">
          <div className="page-container events-invitation-section__inner">
            <div>
              <span className="events-section-kicker">The next invitation</span>
              <h2>Gather around<br /><em>what matters next.</em></h2>
            </div>
            <div className="events-invitation-section__copy">
              <p>
                Events are not only records of what happened. They are openings
                for the next conversation, classroom, campaign, and community
                connection.
              </p>
              <div className="events-invitation-section__links">
                <a href="/international-days">
                  Plan around an International Day <ArrowUpRight size={16} aria-hidden="true" />
                </a>
                <a href="/partner-with-us">
                  Bring B4P into your next gathering <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="event-stories" className="events-archive-section">
          <div className="page-container">
            <div className="events-section-heading events-section-heading--archive">
              <div>
                <span className="events-section-kicker">Event stories &amp; archive</span>
                <h2>A record of<br /><em>showing up.</em></h2>
              </div>
              <p>
                Each gathering appears once. Browse by the kind of connection it
                created, then keep an eye out for the next invitation to show up.
              </p>
            </div>

            <div className="events-category-toolbar">
              <div>
                <span>Browse by focus</span>
                <p>{filteredStories.length} {filteredStories.length === 1 ? 'story' : 'stories'} in view</p>
              </div>
              <div className="events-category-filters" role="group" aria-label="Filter event stories by category">
                {eventCategories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    className={activeCategory === category ? 'is-active' : ''}
                    onClick={() => setActiveCategory(category)}
                    aria-pressed={activeCategory === category}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="events-grid">
              {filteredStories.map((event, index) => (
                <article className="event-card" key={event.title}>
                  <div className={`event-card__image ${event.images.length > 1 ? 'event-card__image--multiple' : ''}`}>
                    {event.images.map((image, imageIndex) => (
                      <img
                        key={image.src}
                        className={event.images.length > 1 ? `event-card__image-item event-card__image-item--${imageIndex + 1}` : undefined}
                        src={image.src}
                        alt={image.alt}
                      />
                    ))}
                    <span>{String(index + 2).padStart(2, '0')}</span>
                  </div>
                  <div className="event-card__body">
                    <div className="event-card__labels">
                      <span className="event-card__label">{event.category}</span>
                      <span className="event-card__type">{event.label}</span>
                    </div>
                    <h3>{event.title}</h3>
                    <p>{event.description}</p>
                    <EventMeta event={event} />
                    <div className="event-card__downloads" aria-label={`Download ${event.title} artwork`}>
                      {event.images.map((image, imageIndex) => (
                        <a
                          href={image.src}
                          download={image.src.split('/').pop()}
                          key={`download-${image.src}`}
                        >
                          <Download size={14} aria-hidden="true" />
                          <span>
                            Download {event.images.length > 1
                              ? (image.label ?? `flyer ${imageIndex + 1}`).toLowerCase()
                              : 'flyer'}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}