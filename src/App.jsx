import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const HomePage = () => (
  <>
    <Home />
    <About />
    <Testimonials />
  </>
);

const ServicesPage = () => (
  <div style={{ paddingTop: '80px' }}>
    <Services />
  </div>
);

function App() {
  return (
    <BrowserRouter>
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
