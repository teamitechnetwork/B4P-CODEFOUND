import { ArrowLeft, ArrowUpRight, Globe2, type LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import { Link } from 'wouter';

export type ProgramHeroVariant = 'landing' | 'pillar' | 'regional' | 'detail';

export type ProgramHeroAction = {
  href: string;
  label: string;
  external?: boolean;
  quiet?: boolean;
};

export type ProgramHeroSignal = {
  label: string;
  value: string;
};

type ProgramHeroProps = {
  variant: ProgramHeroVariant;
  eyebrow: string;
  title: ReactNode;
  description: string;
  image: string;
  imageAlt: string;
  backHref?: string;
  backLabel?: string;
  icon?: LucideIcon;
  actions?: ProgramHeroAction[];
  signals?: ProgramHeroSignal[];
  visualLabel?: string;
  badgeLabel?: string;
};

function HeroAction({ action }: { action: ProgramHeroAction }) {
  const className = action.quiet ? 'program-hero__action--quiet' : 'program-hero__action';
  const content = (
    <>
      <span>{action.label}</span>
      <ArrowUpRight aria-hidden="true" size={17} strokeWidth={2.5} />
    </>
  );

  if (action.external || action.href.startsWith('#')) {
    return (
      <a className={className} href={action.href}>
        {content}
      </a>
    );
  }

  return (
    <Link className={className} href={action.href}>
      {content}
    </Link>
  );
}

export function ProgramHero({
  variant,
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  backHref,
  backLabel,
  icon: Icon = Globe2,
  actions = [],
  signals = [],
  visualLabel = 'Local knowledge, global connection',
  badgeLabel = 'In action',
}: ProgramHeroProps) {
  return (
    <section className={`program-hero program-hero--${variant}`} aria-label={`${eyebrow} hero`}>
      <div className="program-hero__backdrop" aria-hidden="true">
        <img src={image} alt="" />
      </div>

      <div className="program-hero__grid">
        <div className="program-hero__copy">
          {backHref && backLabel ? (
            <Link className="program-hero__back" href={backHref}>
              <ArrowLeft aria-hidden="true" size={16} strokeWidth={2.5} />
              <span>{backLabel}</span>
            </Link>
          ) : null}

          <div className="program-hero__context">
            <span>{eyebrow}</span>
          </div>
          <h1>{title}</h1>
          <p className="program-hero__description">{description}</p>

          {actions.length > 0 ? (
            <div className="program-hero__actions" aria-label="Next steps">
              {actions.map((action) => (
                <HeroAction key={`${action.label}-${action.href}`} action={action} />
              ))}
            </div>
          ) : null}

          {signals.length > 0 ? (
            <div className="program-hero__signal" aria-label="Program context">
              {signals.map((signal) => (
                <span key={signal.label}>
                  <strong>{signal.value}</strong>
                  {signal.label}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        <div className="program-hero__visual" aria-label={imageAlt}>
          <div className="program-hero__visual-frame" aria-hidden="true" />
          <div className="program-hero__visual-card">
            <img src={image} alt={imageAlt} />
            <div className="program-hero__visual-label">
              <span>{visualLabel}</span>
              <ArrowUpRight aria-hidden="true" size={23} strokeWidth={2} />
            </div>
          </div>
          <div className="program-hero__badge">
            <Icon aria-hidden="true" size={20} strokeWidth={1.8} />
            <span>{badgeLabel}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
