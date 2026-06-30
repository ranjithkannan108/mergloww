import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import MouseTrail from './components/MouseTrail';
import ScrollTopWidget from './components/ScrollTopWidget';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Find the element by ID (removing the '#' prefix)
      const id = hash.substring(1);
      
      // Delay slightly to ensure React has mounted the components on the Home page
      const timer = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);

      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

let hasRunRefreshRedirect = false;

const ForceHomeOnRefresh = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!hasRunRefreshRedirect) {
      hasRunRefreshRedirect = true;
      // Check if the page was refreshed (reload)
      const navigationEntries = performance.getEntriesByType('navigation');
      if (navigationEntries.length > 0) {
        const navigationType = navigationEntries[0].type;
        if (navigationType === 'reload') {
          navigate('/', { replace: true });
          window.scrollTo(0, 0);
        }
      }
    }
  }, [navigate]);

  return null;
};

const HomePage = () => (
  <div className="fade-in">
    <Home />
    <About />
    <Testimonials />
  </div>
);

const ServicesPage = () => (
  <div className="fade-in" style={{ paddingTop: '80px' }}>
    <Services />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ForceHomeOnRefresh />
      <MouseTrail />
      <ScrollTopWidget />
      <div className="app-wrapper">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
