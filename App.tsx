import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Pages
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import FacilitiesPage from './pages/Facilities';
import MembershipPage from './pages/Membership';
import EventsPage from './pages/Events';
import ContactPage from './pages/Contact';
import LeaderboardsPage from './pages/Leaderboards';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="facilities" element={<FacilitiesPage />} />
          <Route path="membership" element={<MembershipPage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="leaderboards" element={<LeaderboardsPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
