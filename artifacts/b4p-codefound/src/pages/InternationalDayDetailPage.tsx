import {
  ArrowDownRight,
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Compass,
  Sparkles,
  Star,
  Users,
} from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { analyticsEvents, trackEvent } from '@/lib/analytics';
import {
  calendarObservances,
  calendarMonths,
  getCalendarCategory,
  getCalendarGuidance,
  getCalendarObservance,
  useSavedObservances,
  type CalendarCategory,
} from '@/pages/InternationalDaysPage';

function NotFoundPage() {
  return (
    <div className="international-day-detail-page flex min-h-screen flex-col">
      <Header />
      <main className="international-day-detail-not-found flex-1">
        <div className="page-container">
          <span className="international-days-section-kicker">Calendar moment</span>
          <h1>That page is<br /><em>not on our calendar.</em></h1>
          <p>Return to the full B4P community programming calendar to find another moment to make matter.</p>
          <a href="/international-days" className="international-day-detail-button">
            Browse the calendar <ArrowLeft size={17} aria-hidden="true" />
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function categoryClass(category: CalendarCategory) {
  return category.toLowerCase().replace(/[^a-z]+/g, '-');
}

export default function InternationalDayDetailPage({ slug }: { slug: string }) {
  const observance = getCalendarObservance(slug);
  const { savedTitles, toggleSaved } = useSavedObservances();

  if (!observance) return <NotFoundPage />;

  const observanceTitle = observance.title;
  const observanceSlug = observance.slug;
  const isSaved = savedTitles.includes(observance.title);
  const category = getCalendarCategory(observance.title);
  const guidance = getCalendarGuidance(observance.title, category);
  const monthIndex = calendarMonths.indexOf(observance.month);
  const day = observance.date.split(' ')[0];
  const related = calendarObservances
    .filter((item) => item.slug !== observance.slug && getCalendarCategory(item.title) === category)
    .slice(0, 3);

  function handleDetailToggle() {
    toggleSaved(observanceTitle);
    trackEvent(isSaved ? analyticsEvents.planningObservanceRemoved : analyticsEvents.planningObservanceSaved, {
      observance_slug: observanceSlug,
      source_surface: 'detail_page',
    });
  }

  return (
    <div className="international-day-detail-page flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className={`international-day-detail-hero international-day-detail-hero--${categoryClass(category)}`}>
          <div className="page-container">
            <a href="/international-days" className="international-day-detail-back">
              <ArrowLeft size={16} aria-hidden="true" />
              Back to the calendar
            </a>
            <div className="international-day-detail-hero__layout">
              <div className="international-day-detail-hero__copy">
                <div className="international-day-detail-meta">
                  <span><Sparkles size={14} aria-hidden="true" /> Community observance</span>
                  <i aria-hidden="true">·</i>
                  <span>{category}</span>
                </div>
                <h1>{observance.title}</h1>
                <p>{guidance.summary}</p>
                <div className="international-day-detail-actions">
                  <a href="#make-it-matter" className="international-day-detail-button">
                    Make the moment matter <ArrowDownRight size={17} aria-hidden="true" />
                  </a>
                  <button
                    type="button"
                    className={`international-day-detail-save ${isSaved ? 'is-saved' : ''}`}
                    onClick={handleDetailToggle}
                    aria-pressed={isSaved}
                  >
                    {isSaved ? <CheckCircle2 size={16} aria-hidden="true" /> : <Star size={16} aria-hidden="true" />}
                    {isSaved ? 'Saved to planning list' : 'Save for planning'}
                  </button>
                  <a href="/partner-with-us" className="international-day-detail-text-link">
                    Plan with B4P <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="international-day-detail-mark" aria-label={`${observance.title}, ${observance.date}`}>
                <div className="international-day-detail-mark__rings" aria-hidden="true" />
                <span className="international-day-detail-mark__index">{String(monthIndex + 1).padStart(2, '0')}</span>
                <div className="international-day-detail-mark__date">
                  <strong>{day}</strong>
                  <span>{observance.month}</span>
                </div>
                <div className="international-day-detail-mark__label">
                  <span>B4P</span>
                  <small>notice · invite · act</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="make-it-matter" className="international-day-detail-practice">
          <div className="page-container">
            <div className="international-day-detail-practice__intro">
              <div>
                <span className="international-days-section-kicker">From calendar to community</span>
                <h2>A date is only<br /><em>the beginning.</em></h2>
              </div>
              <p>
                B4P treats a public observance as an opening: a reason to listen
                more closely, invite people in, and choose one useful action that
                can continue after the date has passed.
              </p>
            </div>

            <div className="international-day-detail-practice__grid">
              <article>
                <span>01</span>
                <Users size={22} aria-hidden="true" />
                <h3>Start with people</h3>
                <p>Invite the people closest to the theme to shape what the moment should mean locally.</p>
              </article>
              <article>
                <span>02</span>
                <Compass size={22} aria-hidden="true" />
                <h3>Find the useful question</h3>
                <p>Move from a broad message to one question that makes room for lived experience and exchange.</p>
              </article>
              <article>
                <span>03</span>
                <CheckCircle2 size={22} aria-hidden="true" />
                <h3>Choose a next step</h3>
                <p>Leave the gathering with one practical action, an owner, and a reason to return to the work.</p>
              </article>
            </div>

            <aside className="international-day-detail-prompt">
              <div className="international-day-detail-prompt__icon"><CalendarDays size={22} aria-hidden="true" /></div>
              <div>
                <span>Try this · {guidance.nextStep}</span>
                <h3>{guidance.prompt}</h3>
              </div>
              <a href="/partner-with-us" aria-label={`Plan a ${observance.title} moment with B4P`}>
                Start a conversation <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </aside>
          </div>
        </section>

        <section className="international-day-detail-related">
          <div className="page-container">
            <div className="international-day-detail-related__heading">
              <div>
                <span className="international-days-section-kicker">Keep exploring</span>
                <h2>More moments for<br /><em>{category.toLowerCase()}.</em></h2>
              </div>
              <a href="/international-days">View the full calendar <ArrowUpRight size={16} aria-hidden="true" /></a>
            </div>
            <div className="international-day-detail-related__grid">
              {related.map((item, index) => (
                <a className="international-day-detail-related-card" href={`/international-days/${item.slug}`} key={item.slug}>
                  <span>{String(index + 1).padStart(2, '0')} · {item.date}</span>
                  <h3>{item.title}</h3>
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="international-day-detail-cta">
          <div className="page-container">
            <span className="international-days-section-kicker">Make room for the work</span>
            <h2>What could this day<br /><em>open in your community?</em></h2>
            <a href="/partner-with-us">Bring an idea to B4P <ArrowUpRight size={17} aria-hidden="true" /></a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}