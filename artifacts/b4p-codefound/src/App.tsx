import { type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import Home from '@/pages/Home';
import { TeamPage } from '@/pages/TeamPage';
import PolishedPage from '@/pages/PolishedPage';
import WhatWeDoPage from '@/pages/WhatWeDoPage';
import ProgramDirectoryPage from '@/pages/ProgramDirectoryPage';
import ProgramDetailPage from '@/pages/ProgramDetailPage';
import ColumbusWomenConnectPage from '@/pages/ColumbusWomenConnectPage';
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

  if (location === '/programs/liberia' || location === '/liberia-programs') {
    return <ProgramDirectoryPage kind="liberia" />;
  }

  if (location === '/services' || location === '/b4p-services') {
    return <ProgramDirectoryPage kind="services" />;
  }

  if (location === '/columbus-women-connect' || location === '/cwc') {
    return <ColumbusWomenConnectPage />;
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
          <RoutedErrorBoundary>
            <Router />
          </RoutedErrorBoundary>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
