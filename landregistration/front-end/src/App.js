import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { WalletProvider } from './components/WalletContext';
import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';
import FeaturesPage from './components/FeaturesPage';
import ContactPage from './components/ContactPage';
import ManageLandPage from './components/ManageLandPage';
import AdminPanel from './components/AdminPanel';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <WalletProvider>
      <Router basename="/Final-Year-Project">
        <div className="app-container"> {/* Start Wrapper */}
          <Navbar /> {/* Keep Navbar outside main-content if you want it fixed at top */}

          <div className="main-content">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/features" element={<FeaturesPage />} />
              <Route path="/manage-land" element={<ManageLandPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/admin" element={<AdminPanel />} />
            </Routes>
          </div>

          <Footer />
        </div> {/* End Wrapper */}
      </Router>
    </WalletProvider>
  );
}

export default App;