import { ArrowRight, ArrowUpRight, Box, CreditCard, HeartHandshake, Leaf, Package, PackageCheck, ShoppingCart, Sparkles } from 'lucide-react';
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

type StoreView = 'shop' | 'store-listing' | 'cart' | 'checkout' | 'my-account' | 'vendor-register' | 'my-orders' | 'product-subscription';

function StoreHomeView({ isListing = false }: { isListing?: boolean }) {
  return (
    <>
      <section className="store-hero image-led-hero" data-hero-route="store">
        <div className="page-container store-hero__inner">
          <div className="store-hero__copy">
            <span className="store-hero__status">Coming soon</span>
            <span className="page-kicker">{isListing ? 'Store listing' : 'The B4P CODEFOUND store'}</span>
            <h1>{isListing ? 'A thoughtful collection is coming soon.' : 'Purpose-led enterprise, built with community.'}</h1>
            <p>
              We are shaping a future store where products, resources, and partnerships can help sustain African-led peacebuilding and community development.
            </p>
            <a className="store-button" href="#store-plan">
              See what we are building <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
          <div className="image-led-hero__visual store-hero__visual" data-testid="hero-store-visual">
            <img
              src="/images/cwc/community-photo.png"
              alt="Women gathered together in a community space"
              data-testid="img-store-hero"
            />
              <div className="store-hero__overlay" data-hero-overlay="caption">
                <span>Our approach</span>
                <strong>Commerce with a conscience.</strong>
              </div>
          </div>
        </div>
      </section>

      <section id="store-plan" className="store-section store-section--intro">
        <div className="page-container store-intro">
          <div>
            <span className="section-heading__eyebrow">A store with a reason</span>
            <h2>Every purchase should help move the mission forward.</h2>
          </div>
          <div>
            <p>
               The B4P CODEFOUND store is coming soon. We are building it carefully—with the right products, partners, and systems to create value for the people at the heart of our work.
            </p>
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
           <div className="store-callout-page__mark">B4P CODEFOUND</div>
          <div>
            <span className="section-heading__eyebrow">Help us shape it</span>
             <h2>Have an idea for the B4P CODEFOUND store?</h2>
            <p>Start a conversation about products, partnerships, or practical support for bringing the store to life.</p>
            <div className="store-callout-page__links">
              <a href="mailto:management@b4pcodefound.org?subject=Conversation%20about%20the%20B4P%20CODEFOUND%20store">
                Contact the team <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <a href="/what-we-do">
                Explore our work <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function CartView() {
  return (
    <section className="store-section store-empty-state">
      <div className="page-container store-empty-state__inner">
        <div className="store-empty-state__icon">
          <ShoppingCart size={42} aria-hidden="true" />
        </div>
        <span className="page-kicker">Your cart</span>
        <h1>Waiting for the first collection</h1>
               <p>Products are not available yet, but the future B4P CODEFOUND store is being shaped with community, purpose, and sustainable opportunity in mind.</p>
        <a className="store-button store-button--outline" href="/shop">
          Return to the store <ArrowRight size={17} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

function CheckoutView() {
  return (
    <section className="store-section store-empty-state">
      <div className="page-container store-empty-state__inner">
        <div className="store-empty-state__icon">
          <CreditCard size={42} aria-hidden="true" />
        </div>
        <span className="page-kicker">Checkout</span>
        <h1>Checkout is currently closed</h1>
        <p>We are getting the foundations right before inviting the first customers in. When products are available, checkout will be a straightforward, secure step between discovering something special and supporting the work behind it.</p>
        <a className="store-button store-button--outline" href="/shop">
          Return to the store <ArrowRight size={17} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

function OrdersView() {
  return (
    <section className="store-section store-empty-state">
      <div className="page-container store-empty-state__inner">
        <div className="store-empty-state__icon">
          <Package size={42} aria-hidden="true" />
        </div>
        <span className="page-kicker">My orders</span>
        <h1>Simple records for purposeful purchases.</h1>
               <p>There are no orders to display yet. This space will give supporters a clear view of their B4P CODEFOUND store orders once the first collection is live.</p>
        <a className="store-button store-button--outline" href="/shop">
          Return to the store <ArrowRight size={17} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

function SubscriptionView() {
  return (
    <section className="store-section store-empty-state">
      <div className="page-container store-empty-state__inner">
        <div className="store-empty-state__icon">
          <Box size={42} aria-hidden="true" />
        </div>
        <span className="page-kicker">Product subscription</span>
        <h1>A longer-term way to stay connected.</h1>
        <p>We are exploring thoughtful ways for supporters to receive products and resources while creating more sustainable support for the work. Subscription options will be introduced when the store has a strong first collection.</p>
        <a className="store-button store-button--outline" href="/shop">
          Return to the store <ArrowRight size={17} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

function AuthView({ vendor = false }: { vendor?: boolean }) {
  return (
    <section className="store-section store-account-preview">
      <div className="page-container store-account-preview__inner">
        <div className="store-account-preview__icon" aria-hidden="true"><Sparkles size={28} /></div>
        <span className="page-kicker">{vendor ? 'Partner preview' : 'My account'}</span>
        <h1>{vendor ? 'A home for future makers and partners.' : 'Your store account is coming soon.'}</h1>
        <p>
          {vendor
            ? 'We are designing a considered onboarding experience for community-made offerings and mission-aligned partners.'
            : 'Accounts will make it easier to follow orders, save details, and stay connected to the B4P CODEFOUND store once the first collection launches.'}
        </p>
        <div className="store-account-preview__cards">
          <article>
            <strong>Simple by design</strong>
            <span>Clear account tools when there is something purposeful to purchase.</span>
          </article>
          <article>
            <strong>Built around trust</strong>
            <span>No sign-in or payment details are collected while the store is still in preparation.</span>
          </article>
        </div>
        <div className="store-account-preview__links">
          <a className="store-button" href="/shop">Return to the store <ArrowRight size={17} aria-hidden="true" /></a>
          <a className="store-text-link" href="/contact">Contact the team <ArrowUpRight size={17} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}

export default function StorePage({ view = 'shop' }: { view?: StoreView }) {
  return (
    <div className="store-page flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 store-main">
        {view === 'shop' && <StoreHomeView />}
        {view === 'store-listing' && <StoreHomeView isListing={true} />}
        {view === 'cart' && <CartView />}
        {view === 'checkout' && <CheckoutView />}
        {view === 'my-account' && <AuthView />}
        {view === 'vendor-register' && <AuthView vendor />}
        {view === 'my-orders' && <OrdersView />}
        {view === 'product-subscription' && <SubscriptionView />}
      </main>
      <Footer />
    </div>
  );
}
