import { ArrowRight, ArrowUpRight, Box, CreditCard, HeartHandshake, Leaf, Lock, Mail, Package, PackageCheck, ShoppingCart, User } from 'lucide-react';
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
      <section className="store-hero">
        <div className="page-container store-hero__inner">
          <div className="store-hero__copy">
            <span className="store-hero__status">Coming soon</span>
            <span className="page-kicker">{isListing ? 'Store listing' : 'The B4P store'}</span>
            <h1>{isListing ? 'A thoughtful collection is coming soon.' : 'Purpose-led enterprise, built with community.'}</h1>
            <p>
              We are shaping a future store where products, resources, and partnerships can help sustain African-led peacebuilding and community development.
            </p>
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
            <div className="store-hero__overlay">
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
              The B4P store is coming soon. We are building it carefully—with the right products, partners, and systems to create value for the people at the heart of our work.
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
        <p>Products are not available yet, but the future B4P store is being shaped with community, purpose, and sustainable opportunity in mind.</p>
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
        <p>There are no orders to display yet. This space will give supporters a clear view of their B4P store orders once the first collection is live.</p>
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
    <section className="store-section store-auth">
      <div className="page-container store-auth__layout">
        
        {/* Sign In */}
        <div className="store-auth__panel">
          <div className="store-auth__header">
            <h2>{vendor ? 'Vendor portal' : 'Welcome back'}</h2>
            <p>{vendor ? 'Future B4P vendors will manage their profile and offerings here.' : 'Sign in to manage your orders, subscriptions, and details.'}</p>
          </div>
          <form className="store-auth__form" onSubmit={(e) => e.preventDefault()}>
            <div className="store-auth__field">
              <label htmlFor="signin-email">Email address</label>
              <div className="store-auth__input-wrapper">
                <Mail size={16} aria-hidden="true" />
                <input
                  id="signin-email"
                  type="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  aria-describedby="store-account-note"
                  readOnly
                />
              </div>
            </div>
            <div className="store-auth__field">
              <label htmlFor="signin-password">Password</label>
              <div className="store-auth__input-wrapper">
                <Lock size={16} aria-hidden="true" />
                <input
                  id="signin-password"
                  type="password"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  aria-describedby="store-account-note"
                  readOnly
                />
              </div>
              <span className="store-auth__forgot" aria-disabled="true">Forgot password?</span>
            </div>
            <button type="button" className="store-button store-button--full" disabled>
              Sign In
            </button>
            <p className="store-auth__note" id="store-account-note">
              {vendor ? 'Vendor accounts are not active yet. Registration will open with the first collection.' : 'Store accounts will open when the first collection launches.'}
            </p>
          </form>
        </div>

        <div className="store-auth__divider">
          <span>or</span>
        </div>

        {/* Register */}
        <div className="store-auth__panel store-auth__panel--register">
          <div className="store-auth__header">
            <h2>{vendor ? 'Become a future vendor' : 'Create an account'}</h2>
            <p>{vendor ? 'This preview shows where approved makers and partners will register when onboarding opens.' : 'Join the B4P community to stay connected with our mission-led products.'}</p>
          </div>
          <form className="store-auth__form" onSubmit={(e) => e.preventDefault()}>
            <div className="store-auth__field">
              <label htmlFor="register-name">Full name</label>
              <div className="store-auth__input-wrapper">
                <User size={16} aria-hidden="true" />
                <input id="register-name" type="text" placeholder="Enter your full name" autoComplete="name" readOnly />
              </div>
            </div>
            <div className="store-auth__field">
              <label htmlFor="register-email">Email address</label>
              <div className="store-auth__input-wrapper">
                <Mail size={16} aria-hidden="true" />
                <input id="register-email" type="email" placeholder="Enter your email address" autoComplete="email" readOnly />
              </div>
            </div>
            <div className="store-auth__field">
              <label htmlFor="register-password">Password</label>
              <div className="store-auth__input-wrapper">
                <Lock size={16} aria-hidden="true" />
                <input id="register-password" type="password" placeholder="Create a password" autoComplete="new-password" readOnly />
              </div>
            </div>
            <button type="button" className="store-button store-button--full store-button--outline" disabled>
              {vendor ? 'Registration opening soon' : 'Create Account'}
            </button>
          </form>
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
