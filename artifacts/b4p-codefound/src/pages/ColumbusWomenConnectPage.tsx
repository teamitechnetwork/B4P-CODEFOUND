import { ArrowUpRight, CalendarDays, Check, Instagram, Mail, MapPin, Phone, UsersRound, X as XIcon } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const cwcPrograms = [
  { title: 'Community Dialogues', description: 'Safe spaces for shared experiences.' },
  { title: 'Networking & Professional Development', description: 'Connections that open doors.' },
  { title: 'Mentorship & Leadership', description: 'Developing the next women leaders.' },
  { title: 'Events & Programming', description: 'Workshops and cultural celebrations.' },
  { title: 'Business Development Services', description: 'Launch and grow your business.' },
  { title: 'Mental Health & Financial Well-Being', description: 'Wellness and financial empowerment.' },
];

const visionPoints = [
  { title: 'Inclusive Spaces', description: 'Foster environments where women uplift one another' },
  { title: 'Purpose-Driven Network', description: 'Build connections among women who inspire change' },
  { title: 'Equitable Futures', description: 'Advocate for pathways that ensure every woman can lead' },
];

export default function ColumbusWomenConnectPage() {
  return (
    <div className="cwc-page flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="cwc-hero">
          <div className="container mx-auto px-6">
            <div className="cwc-hero__copy">
              <span className="cwc-kicker">A B4P CODEFOUND subsidiary · Columbus, Ohio</span>
              <h1>Columbus<br /><em>Women</em><br />Connect.</h1>
              <p>Empowering women through leadership, advocacy &amp; community — across cultures, across generations.</p>
              <a href="#join">Join the movement <ArrowUpRight size={17} aria-hidden="true" /></a>
            </div>
            <div className="cwc-hero__art">
              <img src="/images/cwc/community-photo.png" alt="Women leaders gathered at a Columbus Women Connect event" />
              <div className="cwc-hero__badge"><span>CWC</span><small>Women leading together</small></div>
            </div>
          </div>
        </section>

        <section className="cwc-section cwc-section--intro">
          <div className="container mx-auto px-6">
            <div className="cwc-intro-grid">
              <div className="cwc-section-heading"><span className="cwc-label">Who we are</span><h2>A multicultural network united by solidarity, civic engagement, and shared prosperity.</h2></div>
              <div>
                <p className="cwc-lead">Columbus Women Connect is a community where every woman has the confidence, resources, and opportunities to lead, advocate, and thrive.</p>
                <div className="cwc-stat-grid">
                  <div className="cwc-stat"><CalendarDays size={19} aria-hidden="true" /><strong>November 2024</strong><span>Founded</span></div>
                  <div className="cwc-stat"><UsersRound size={19} aria-hidden="true" /><strong>60+</strong><span>Women leaders connected</span></div>
                  <div className="cwc-stat"><HeartIcon /><strong>20+ nationalities</strong><span>Represented at our inaugural conference</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cwc-section cwc-section--vision">
          <div className="container mx-auto px-6">
            <div className="cwc-vision-grid">
              <div><span className="cwc-label">Our vision</span><blockquote>“We envision a future where every woman has the confidence, resources, and opportunities to lead, advocate, and thrive.”</blockquote></div>
              <div className="cwc-vision-list">
                {visionPoints.map((point) => <div className="cwc-vision-item" key={point.title}><Check size={18} aria-hidden="true" /><div><h3>{point.title}</h3><p>{point.description}</p></div></div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="cwc-section cwc-section--programs">
          <div className="container mx-auto px-6">
            <div className="cwc-section-heading cwc-section-heading--center"><span className="cwc-label">What we do</span><h2>Connection becomes momentum.</h2><p>From safe spaces to professional growth, CWC creates opportunities for women to connect, lead, and build what comes next.</p></div>
            <div className="cwc-program-grid">
              {cwcPrograms.map((program, index) => <article className="cwc-program-card" key={program.title}><span>0{index + 1}</span><h3>{program.title}</h3><p>{program.description}</p></article>)}
            </div>
          </div>
        </section>

        <section id="join" className="cwc-section cwc-section--join">
          <div className="container mx-auto px-6">
            <div className="cwc-join-grid">
              <div><span className="cwc-label">Join the movement</span><h2>Become part of something bigger than yourself.</h2></div>
              <div><p>CWC is building a future where every woman has a voice, a network, and a path to lead.</p><ul><li>All women and their daughters are welcome</li><li>Connect with a vibrant multicultural community</li><li>Access mentorship and leadership development</li><li>Add your voice to drive real change</li></ul><a href="mailto:management@b4pcodefound.org?subject=Join%20Columbus%20Women%20Connect">Ready to connect? Reach out today <ArrowUpRight size={17} aria-hidden="true" /></a></div>
            </div>
          </div>
        </section>

        <section className="cwc-section cwc-section--contact">
          <div className="container mx-auto px-6">
            <div className="cwc-contact-grid">
              <div><span className="cwc-label">Stay connected</span><h2>Questions? Contact our Chair.</h2><p className="cwc-contact-name">Fatima Kane</p><a href="mailto:fatimahane@hotmail.com">fatimahane@hotmail.com</a><p className="cwc-contact-phone"><Phone size={16} aria-hidden="true" /> 614-424-2938</p></div>
              <div className="cwc-contact-details"><p><MapPin size={16} aria-hidden="true" /><span>Columbus Women Connect<br />Columbus, Ohio</span></p><p><Mail size={16} aria-hidden="true" /><a href="mailto:management@b4pcodefound.org">management@b4pcodefound.org</a></p><div className="cwc-socials"><a href="https://www.facebook.com/b4pcodefound.cause" target="_blank" rel="noreferrer" aria-label="CWC on Facebook">f</a><a href="https://www.instagram.com/b4pcodefound" target="_blank" rel="noreferrer" aria-label="CWC on Instagram"><Instagram size={16} aria-hidden="true" /></a><a href="https://x.com/b4pcodefound" target="_blank" rel="noreferrer" aria-label="CWC on X"><XIcon size={15} aria-hidden="true" /></a></div></div>
            </div>
          </div>
        </section>

        <section className="cwc-brochure">
          <div className="container mx-auto px-6">
            <div className="cwc-brochure__heading"><span className="cwc-label">From the brochure</span><h2>See the story in full.</h2><p>The original CWC brochure is part of the B4P CODEFOUND story and remains available as a visual reference.</p></div>
            <div className="cwc-brochure__images"><img src="/images/cwc/brochure-page-1.png" alt="Columbus Women Connect brochure cover and invitation page" /><img src="/images/cwc/brochure-page-2.png" alt="Columbus Women Connect brochure overview and programs page" /></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function HeartIcon() {
  return <span className="cwc-stat__heart" aria-hidden="true">♥</span>;
}