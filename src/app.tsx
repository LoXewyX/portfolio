import { LocationProvider, Router, Route } from 'preact-iso';

import Home from './pages/Home';
import NotFound from './pages/404';

export function App() {
  return (
    <LocationProvider>
      <main>
        <Router>
          <Route path="/" component={Home} />
          <Route default component={NotFound} />
        </Router>
      </main>
    </LocationProvider>
  );
}
