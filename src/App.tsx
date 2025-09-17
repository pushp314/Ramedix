import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import About from './components/About';
import Blog from './components/Blog';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import AdvancedSearch from './components/AdvancedSearch';
import GDPRBanner from './components/GDPRBanner';
import PWAInstallPrompt from './components/PWAInstallPrompt';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Products />
                <FAQ />
                <Contact />
              </>
            } />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/search" element={<AdvancedSearch />} />
          </Routes>
        </main>
        <Footer />
        <GDPRBanner />
        <PWAInstallPrompt />
      </div>
    </Router>
  );
}

export default App;