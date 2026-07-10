import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const ServiceDetail = lazy(() => import('./components/ServiceDetail'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact'));
import Footer from './components/Footer';
import MouseTrail from './components/MouseTrail';
import ScrollTopWidget from './components/ScrollTopWidget';
import Preloader from './components/Preloader';

const ScrollToTop = () => {
  const { pathname, hash, state } = useLocation();

  useEffect(() => {
    if (state && state.scrollTo) {
      // Find the element by ID
      const timer = setTimeout(() => {
        const element = document.getElementById(state.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else if (hash) {
      // Fallback for direct hash links
      const id = hash.substring(1);
      
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
  }, [pathname, hash, state]);

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

const ContactPage = () => (
  <div className="fade-in" style={{ paddingTop: '80px' }}>
    <Contact />
  </div>
);

function App() {
  const [loading, setLoading] = useState(true);
  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('merglowwVisited');
    if (!hasVisited) {
      setShowPreloader(true);
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem('merglowwVisited', 'true');
      }, 2500);
      return () => clearTimeout(timer);
    } else {
      setLoading(false);
      setShowPreloader(false);
    }
  }, []);

  if (loading && showPreloader) {
    return <Preloader />;
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <ForceHomeOnRefresh />
      <MouseTrail />
      <ScrollTopWidget />
      <div className="app-wrapper">
        <Header />
        <main>
          <Suspense fallback={<Preloader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:serviceId" element={<div className="fade-in"><ServiceDetail /></div>} />
              <Route path="/projects/:serviceId" element={<div className="fade-in"><ServiceDetail /></div>} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
