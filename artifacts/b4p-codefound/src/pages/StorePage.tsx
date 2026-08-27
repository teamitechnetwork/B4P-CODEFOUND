import { ArrowUpRight, HeartHandshake, Leaf, PackageCheck } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const storeIdeas = [
  {
    title: 'Community-made goods',
    description: 'A future home for products that celebrate the creativity, knowledge, and enterprise of the communities we serve.',
    icon: Leaf,
  },
  {
    title: 'Mission-led resources',
    description: 'Practical resources, stories, and materials that help people learn, connect, and participate in the work.',
    icon: PackageCheck,
  },
  {
    title: 'Shared opportunity',
    description: 'A platform designed to connect purpose-led makers, partners, and supporters across our wider network.',
    icon: HeartHandshake,
  },
];

type StoreView = 'shop' | 'store-listing' | 'cart' | 'checkout' | 'my-account' | 'my-orders' | 'product-subscription';

const storeViews: Record<StoreView, {
  eyebrow: string;
  title: string;
  description: string;
  heading: string;
  body: string;
}> = {
  shop: {
    eyebrow: 'The B4P store',
    title: 'Purpose-led enterprise, built with community.',
    description: 'We are shaping a future store where products, resources, and partnerships can help sustain African-led peacebuilding and community development.',
    heading: 'Every purchase should help move the mission forward.',
    body: 'The B4P store is coming soon. We are building it carefully—with the right products, partners, and systems to create value for the people at the heart of our work.',
  },
  'store-listing': {
    eyebrow: 'Store listing',
    title: 'A thoughtful collection is coming soon.',
    description: 'We are preparing a collection of community-made goods, mission-led resources, and purpose-driven offerings for our wider network.',
    heading: 'Good things take the right kind of preparation.',
    body: 'Our store listing will appear here when the first offerings are ready. In the meantime, explore the ideas guiding what we bring to the B4P community.',
  },
  cart: {
    eyebrow: 'Your cart',
    title: 'Your cart is waiting for the first collection.',
    description: 'Products are not available yet, but the future B4P store is being shaped with community, purpose, and sustainable opportunity in mind.',
    heading: 'A future cart with a meaningful destination.',
    body: 'When the store launches, this space will make it simple to review your selections and see how your purchase helps move the mission forward.',
  },
  checkout: {
    eyebrow: 'Checkout',
    title: 'Checkout will open when the store does.',
    description: 'We are getting the foundations right before inviting the first customers in. The B4P store is coming soon.',
    heading: 'Built for a clear and conscious purchase.',
    body: 'When products are available, checkout will be a straightforward, secure step between discovering something special and supporting the work behind it.',
  },
  'my-account': {
    eyebrow: 'My account',
    title: 'Your B4P account is coming soon.',
    description: 'Account tools will make it easier to keep track of orders, subscriptions, and the products you care about.',
    heading: 'One place for your B4P store relationship.',
    body: 'We will open account access alongside the store launch. For now, you can stay connected by contacting the team or exploring our programs.',
  },
  'my-orders': {
    eyebrow: 'My orders',
    title: 'Order history will be available soon.',
    description: 'This space will give supporters a clear view of their B4P store orders once the first collection is live.',
    heading: 'Simple records for purposeful purchases.',
    body: 'There are no orders to display yet. We are focused on creating a store experience that is useful, transparent, and connected to the mission.',
  },
  'product-subscription': {
    eyebrow: 'Product subscription',
    title: 'Subscriptions are coming soon.',
    description: 'We are exploring thoughtful ways for supporters to receive products and resources while creating more sustainable support for the work.',
    heading: 'A longer-term way to stay connected.',
    body: 'Subscription options will be introduced when the store has a strong first collection and a clear benefit for both community makers and supporters.',
  },
};

export default function StorePage({ view = 'shop' }: { view?: StoreView }) {
  const content = storeViews[view];

  return (
    <div className="store-page flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="store-hero">
          <div className="page-container store-hero__inner">
            <div className="store-hero__copy">
              <span className="store-hero__status">Coming soon</span>
              <span className="page-kicker">{content.eyebrow}</span>
              <h1>{content.title}</h1>
              <p>{content.description}</p>
              <a className="store-button" href="#store-plan">
                See what we are building <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
            <div className="store-hero__visual">
              <img
                src="/images/cwc/community-photo.png"
                alt="Women gathered together in a community space"
                data-testid="img-store-hero"
              />
              <span>Commerce with a conscience</span>
            </div>
          </div>
        </section>

        <section id="store-plan" className="store-section store-section--intro">
          <div className="page-container store-intro">
            <div>
              <span className="section-heading__eyebrow">A store with a reason</span>
              <h2>{content.heading}</h2>
            </div>
            <div>
              <p>{content.body}</p>
              <p>
                If you would like to help shape the store, support a community-made offering, or explore a partnership, we would like to hear from you.
              </p>
            </div>
          </div>
        </section>

        <section className="store-section store-section--cards">
          <div className="page-container">
            <div className="section-heading section-heading--left store-section__heading">
              <span className="section-heading__eyebrow">What it can make possible</span>
              <h2>A platform for people, stories, and sustainable opportunity.</h2>
            </div>
            <div className="store-ideas">
              {storeIdeas.map((idea, index) => {
                const Icon = idea.icon;
                return (
                  <article className="store-idea" key={idea.title} data-testid={`card-store-idea-${index + 1}`}>
                    <div className="store-idea__top">
                      <span>0{index + 1}</span>
                      <Icon size={26} aria-hidden="true" />
                    </div>
                    <h3>{idea.title}</h3>
                    <p>{idea.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="store-section store-section--dark">
          <div className="page-container store-callout-page">
            <div className="store-callout-page__mark">B4P</div>
            <div>
              <span className="section-heading__eyebrow">Help us shape it</span>
              <h2>Have an idea for the B4P store?</h2>
              <p>Start a conversation about products, partnerships, or practical support for bringing the store to life.</p>
              <div className="store-callout-page__links">
                <a href="mailto:management@b4pcodefound.org?subject=Conversation%20about%20the%20B4P%20store">
                  Contact the team <ArrowUpRight size={17} aria-hidden="true" />
                </a>
                <a href="/what-we-do">
                  Explore our work <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}