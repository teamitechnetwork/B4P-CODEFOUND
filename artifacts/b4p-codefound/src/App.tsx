import { type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { SiteUtilities } from '@/components/layout/SiteUtilities';
import Home from '@/pages/Home';
import { TeamPage } from '@/pages/TeamPage';
import DirectorCornerPage from '@/pages/DirectorCornerPage';
import AboutPage from '@/pages/AboutPage';
import ImpactPage from '@/pages/ImpactPage';
import CoreValuesPage from '@/pages/CoreValuesPage';
import SiteDirectoryPage from '@/pages/SiteDirectoryPage';
import StorePage from '@/pages/StorePage';
import ContactPage from '@/pages/ContactPage';
import DonationPage from '@/pages/DonationPage';
import WhereWeWorkPage from '@/pages/WhereWeWorkPage';
import TheoryOfChangePage from '@/pages/TheoryOfChangePage';
import PolishedPage from '@/pages/PolishedPage';
import WhatWeDoPage from '@/pages/WhatWeDoPage';
import ProgramDirectoryPage from '@/pages/ProgramDirectoryPage';
import ProgramDetailPage from '@/pages/ProgramDetailPage';
import ColumbusWomenConnectPage from '@/pages/ColumbusWomenConnectPage';
import OpportunityPage from '@/pages/OpportunityPage';
import PeacebuildingProgramPage from '@/pages/PeacebuildingProgramPage';
import EconomicDevelopmentProgramPage from '@/pages/EconomicDevelopmentProgramPage';
import ServicesPage from '@/pages/ServicesPage';
import InformationPage from '@/pages/InformationPage';
import LegalPage from '@/pages/LegalPage';
import EventsPage from '@/pages/EventsPage';
import PartnershipPage from '@/pages/PartnershipPage';
import SiteMetadata from '@/components/seo/SiteMetadata';
import type { ProgramRegion } from '@/data/programs';
import {
  useLocation,
  Router as WouterRouter,
  Switch,
  Route
} from 'wouter';

const queryClient = new QueryClient();

function Router() {
  const [location] = useLocation();

  if (location === '/' || location === '') {
    return <Home />;
  }

  if (location === '/about-us') {
    return <AboutPage />;
  }

  if (location === '/the-directors-corner' || location === '/directors-corner' || location === '/director') {
    return <DirectorCornerPage />;
  }

  if (location === '/about' || location === '/our-impact') {
    return <ImpactPage />;
  }

  if (location === '/our-core-values' || location === '/core-values') {
    return <CoreValuesPage />;
  }

  if (location === '/site-directory') {
    return <SiteDirectoryPage />;
  }

  const storeViews: Record<string, Parameters<typeof StorePage>[0]['view']> = {
    '/shop': 'shop',
    '/store-listing': 'store-listing',
    '/cart': 'cart',
    '/checkout': 'checkout',
    '/checkout-2': 'checkout',
    '/my-account': 'my-account',
    '/my-account-2': 'my-account',
    '/vendor-register': 'vendor-register',
    '/my-orders': 'my-orders',
    '/cart-2': 'cart',
    '/dashboard/product-subscription': 'product-subscription',
  };

  if (storeViews[location]) {
    return <StorePage view={storeViews[location]} />;
  }

  if (location === '/contact') {
    return <ContactPage />;
  }

  if (location === '/where-we-work') {
    return <WhereWeWorkPage />;
  }

  if (location === '/theory-of-change') {
    return <TheoryOfChangePage />;
  }

  if (location === '/make-a-donation' || location === '/donate') {
    return <DonationPage />;
  }

  if (location === '/the-management-team' || location === '/management') {
    return <TeamPage type="management" />;
  }
  
  if (location === '/the-board' || location === '/board') {
    return <TeamPage type="board" />;
  }
  
  if (location === '/advisory-council' || location === '/advisory') {
    return <TeamPage type="advisory" />;
  }

  if (location === '/what-we-do' || location === '/programs') {
    return <WhatWeDoPage />;
  }

  if (location === '/peacebuilding-program') {
    return <PeacebuildingProgramPage />;
  }

  if (location === '/economic-development-program') {
    return <EconomicDevelopmentProgramPage />;
  }

  if (
    location === '/services' ||
    location === '/b4p-services' ||
    /^\/services\/(fiscal-sponsorship|nonprofit-capacity-building|business-development)$/.test(location)
  ) {
    return <ServicesPage />;
  }

  const programMatch = location.match(/^\/programs\/(global|usa|liberia)\/([^/]+)$/);
  if (programMatch) {
    return <ProgramDetailPage region={programMatch[1] as ProgramRegion} slug={programMatch[2]} />;
  }

  if (location === '/programs/global' || location === '/global-programs') {
    return <ProgramDirectoryPage kind="global" />;
  }

  if (location === '/programs/usa' || location === '/usa-programs') {
    return <ProgramDirectoryPage kind="usa" />;
  }

  if (location === '/programs/liberia' || location === '/liberia-programs' || location === '/programs-libera') {
    return <ProgramDirectoryPage kind="liberia" />;
  }

  if (location === '/columbus-women-connect' || location === '/cwc') {
    return <ColumbusWomenConnectPage />;
  }

  if (location === '/become-a-volunteer') {
    return <OpportunityPage kind="volunteer" />;
  }

  if (location === '/internship') {
    return <OpportunityPage kind="internship" />;
  }

  if (location === '/jobs') {
    return <OpportunityPage kind="jobs" />;
  }

  if (
    location === '/partner-with-us' ||
    location === '/become-a-partner' ||
    location === '/partnership'
  ) {
    return <PartnershipPage />;
  }

  if (location === '/news-blogs') {
    return <InformationPage kind="news" />;
  }

  if (location === '/events') {
    return <EventsPage />;
  }

  if (location === '/privacy-policy') {
    return <LegalPage kind="privacy" />;
  }

  if (location === '/cookie-policy') {
    return <LegalPage kind="cookies" />;
  }

  if (location === '/terms-and-conditions') {
    return <LegalPage kind="terms" />;
  }

  // All other routes fall back to the polished CMS/JSON renderer
  return <PolishedPage path={location} />;
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <SiteMetadata />
          <RoutedErrorBoundary>
            <Router />
          </RoutedErrorBoundary>
        </WouterRouter>
        <Toaster />
        <SiteUtilities />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
