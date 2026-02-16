import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CoreEngine from './pages/CoreEngine';
import BookDemo from './pages/BookDemo';
import Platform from './pages/Platform';
import Feature from './pages/Feature';

// Create a layout wrapper to access location hooks
const AppContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isFeaturePage = location.pathname === '/feature';
  const isPricingPage = location.pathname === '/pricing';

  return (
    <div className="flex flex-col min-h-screen">
      {!isHomePage && !isFeaturePage && !isPricingPage && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/core-engine" element={<CoreEngine />} />
          <Route path="/book-demo" element={<BookDemo />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/feature" element={<Feature />} />
          {/* Fallback for other routes */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
