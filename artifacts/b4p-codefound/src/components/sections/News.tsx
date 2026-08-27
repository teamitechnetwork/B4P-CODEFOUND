import { ExternalLink } from 'lucide-react';

const newsLinks = [
  {
    title: 'UN Women: Latest Global Updates on Gender Equality',
    href: 'https://www.unwomen.org/en/news',
  },
  {
    title: 'Ending Violence Against Women — UN Women Programs',
    href: 'https://www.unwomen.org/en/what-we-do/ending-violence-against-women',
  },
  {
    title: 'Women and the Sustainable Development Goals (SDGs)',
    href: 'https://www.unwomen.org/en/news/in-focus/women-and-the-sdgs',
  },
  {
    title: 'ULAA Press — Union of Liberian Associations in the Americas',
    href: 'https://ulaalib.org/blog',
  },
  {
    title: 'Liberian Women Advocacy to End Violence in Liberia',
    href: 'https://www.facebook.com/lwatevl',
  },
  {
    title: 'Liberians in Columbus Incorporated, Inc.',
    href: 'https://www.facebook.com/liberiansincolumbusinc.lici',
  },
  {
    title: 'CSW 2022: WONGOSOL, B4P CODEFOUND hosts its 2nd CSW Side-Event',
    href: 'https://womenvoicesnewspaper.org/wongosol-b4p-codefound-hosts-its-2nd-csw-side-event/',
  },
  {
    title: 'ED\'s Visit: B4P CODEFOUND to ensure women\'s participation',
    href: 'https://smartnewsliberia.com/b4p-codefound-to-ensure-womens-participation-in-liberias-social-economic-and-political-space/',
  },
  {
    title: 'Passage of Dual Citizenship in Liberia',
    href: 'https://www.liberianobserver.com/liberia-dual-citizenship-becomes-legal',
  },
];

export function News() {
  return (
    <section id="news" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-sm mb-4">
                <span className="w-8 h-[2px] bg-primary"></span>
                In the Media
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6">
                Latest Updates <br/>& References
              </h2>
              <p className="text-xl text-muted-foreground font-medium mb-8">
                Follow our advocacy efforts, policy achievements, and key partnerships driving change globally and locally.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {newsLinks.map((news) => (
                <a 
                  key={news.href}
                  href={news.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group block bg-white p-6 rounded-xl border border-border/50 shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                      {news.title}
                    </h4>
                    <ExternalLink className="w-5 h-5 text-muted-foreground shrink-0 group-hover:text-secondary transition-colors" />
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
