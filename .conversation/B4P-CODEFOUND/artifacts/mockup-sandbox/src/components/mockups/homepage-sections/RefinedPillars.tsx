import { HeartHandshake, ShieldCheck, TrendingUp, Users, ArrowUpRight } from 'lucide-react';
import './RefinedHomepageSections.css';

const pillars = [
  {
    index: '01',
    kicker: 'Change in motion',
    title: 'Driving Social Change',
    subtitle: 'Global-local peacebuilding and economic development',
    icon: TrendingUp,
    tone: 'blue',
  },
  {
    index: '02',
    kicker: 'Stronger together',
    title: 'Capacity Building Support',
    subtitle: 'Capacity development & collective action',
    icon: Users,
    tone: 'teal',
  },
  {
    index: '03',
    kicker: 'Her voice, her future',
    title: 'Her — The Girl Child',
    subtitle: 'Women & girls leadership development',
    icon: HeartHandshake,
    tone: 'gold',
  },
  {
    index: '04',
    kicker: 'Care with agency',
    title: 'SRHR',
    subtitle: 'Health, rights & dignity',
    icon: ShieldCheck,
    tone: 'blue',
  },
] as const;

export function RefinedPillars() {
  return (
    <section className="refined-section refined-pillars" aria-labelledby="refined-pillars-title">
      <div className="refined-shell">
        <div className="pillars-intro">
          <div className="section-kicker">
            <span className="kicker-line" aria-hidden="true" />
            What moves us
          </div>
          <div className="pillars-heading-row">
            <h2 id="refined-pillars-title">
              Work that starts
              <span>with people.</span>
            </h2>
            <p>
              B4P CODEFOUND makes space for local knowledge, brave leadership, and
              practical pathways forward.
            </p>
          </div>
        </div>

        <div className="pillars-list">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article className={`pillar-row pillar-${pillar.tone}`} key={pillar.title}>
                <div className="pillar-index">{pillar.index}</div>
                <div className="pillar-icon" aria-hidden="true">
                  <Icon strokeWidth={1.8} />
                </div>
                <div className="pillar-copy">
                  <p className="pillar-kicker">{pillar.kicker}</p>
                  <h3>{pillar.title}</h3>
                  <p className="pillar-subtitle">{pillar.subtitle}</p>
                </div>
                <div className="pillar-arrow" aria-hidden="true">
                  <ArrowUpRight strokeWidth={1.7} />
                </div>
              </article>
            );
          })}
        </div>
        <div className="pillars-footer">
          <span>Four connected areas of action</span>
          <span className="footer-rule" aria-hidden="true" />
          <span>From Liberia to the wider world</span>
        </div>
      </div>
    </section>
  );
}