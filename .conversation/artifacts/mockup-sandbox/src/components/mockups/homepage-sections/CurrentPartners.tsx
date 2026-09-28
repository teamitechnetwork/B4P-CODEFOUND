import { ExternalLink } from 'lucide-react';
import './_group.css';

const partnerGroups = [
  { title: 'International frameworks', eyebrow: 'International', links: [
    { title: 'UN Women: Latest Global Updates on Gender Equality', href: 'https://www.unwomen.org/en/news' },
    { title: 'Ending Violence Against Women — UN Women Programs', href: 'https://www.unwomen.org/en/what-we-do/ending-violence-against-women' },
    { title: 'Women and the Sustainable Development Goals (SDGs)', href: 'https://www.unwomen.org/en/news/in-focus/women-and-the-sdgs' },
  ] },
  { title: 'Diaspora networks', eyebrow: 'Diaspora', links: [
    { title: 'ULAA Press — Union of Liberian Associations in the Americas', href: 'https://ulaalib.org/blog' },
    { title: 'Liberian Women Advocacy to End Violence in Liberia', href: 'https://www.facebook.com/lwatevl' },
    { title: 'Liberians in Columbus Incorporated, Inc.', href: 'https://www.facebook.com/liberiansincolumbusinc.lici' },
  ] },
  { title: 'Local impact & policy', eyebrow: 'Local impact', links: [
    { title: 'CSW 2022: WONGOSOL, B4P CODEFOUND hosts its 2nd CSW Side-Event', href: 'https://womenvoicesnewspaper.org/wongosol-b4p-codefound-hosts-its-2nd-csw-side-event/' },
    { title: 'ED’s Visit: B4P CODEFOUND to ensure women’s participation', href: 'https://smartnewsliberia.com/b4p-codefound-to-ensure-womens-participation-in-liberias-social-economic-and-political-space/' },
    { title: 'Passage of Dual Citizenship in Liberia', href: 'https://www.liberianobserver.com/liberia-dual-citizenship-becomes-legal' },
  ] },
];

export function CurrentPartners() {
  return (
    <section id="partner" className="min-h-screen py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1"><div className="sticky top-32">
            <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-[0.15em] text-xs mb-4"><span className="w-8 h-[2px] bg-primary" />Partners &amp; Donors</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-[1.05] tracking-tight text-balance">Connected work <br />across borders</h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-8 text-balance">We are grateful for the international frameworks, diaspora networks, and local advocacy connections that help keep this work grounded and moving.</p>
          </div></div>
          <div className="lg:col-span-2"><div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {partnerGroups.map((group) => <div key={group.title} className="rounded-2xl border border-border/60 bg-white p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300">
              <p className="mb-3 text-[0.65rem] font-extrabold uppercase tracking-[0.2em] text-secondary">{group.eyebrow}</p>
              <h3 className="mb-6 border-b border-border/60 pb-4 text-xl font-extrabold text-primary leading-tight">{group.title}</h3>
              <ul className="space-y-4">{group.links.map((link) => <li key={link.href}><a href={link.href} target="_blank" rel="noreferrer" className="group flex items-start gap-3 text-sm font-semibold leading-relaxed text-muted-foreground transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"><ExternalLink className="mt-[0.15rem] h-4 w-4 shrink-0 text-secondary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" /><span>{link.title}</span></a></li>)}</ul>
            </div>)}
          </div></div>
        </div>
      </div>
    </section>
  );
}