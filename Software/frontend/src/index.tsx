import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';

import { Header } from './components/Header.jsx';
import { Home } from './pages/Home/index.jsx';
import { Events } from './pages/Events/index.jsx';
import { Settings } from './pages/Settings/index.jsx';
import { NotFound } from './pages/_404.jsx';

import './pico.css';
//import './style.css';

export function App() {
  return (
    <LocationProvider>
      <main class="container">
        <Header />
        <Router>
          <Route path="/new" component={Home} />
          <Route path="/events" component={Events} />
          <Route path="/settings" component={Settings} />
          <Route default component={NotFound} />
        </Router>
      </main>
    </LocationProvider>
  );
}

render(<App />, document.getElementById('app'));
