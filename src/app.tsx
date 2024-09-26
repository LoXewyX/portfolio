import { LocationProvider, Router, Route } from 'preact-iso';
import Home from './pages/Home';
import NotFound from './pages/404';
import Secret from './pages/Secret';

export function App() {
  return (
    <LocationProvider>
      <Router>
        <Route path="/" component={Home} />
        <Route path="/secret" component={Secret} />
        <Route default component={NotFound} />
      </Router>
    </LocationProvider>
  );
}
