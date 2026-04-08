import React, { useEffect } from 'react';
import { Toaster } from 'sonner';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Formations from './pages/formations';
import FormationDetails from './pages/formationDetails';
import Actualités from './pages/Actualites';
import './Styles/App.css';

const ScrollToSection = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const sectionId = pathname.substring(1); 
    
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname]);

  return null;
};

function App() {
  const MainPage = (
    <main>
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="formations"><Formations /></section>
      <section id="actualites"><Actualités /></section>
      <section id="contact"><Contact /></section>
    </main>
  );

  return (
    <div className="App">
      {/* Fusion : On garde le style personnalisé du Toaster ET le ScrollToSection */}
      <Toaster 
        position="top-right" 
        richColors 
        toastOptions={{
          style: { padding: '20px', borderRadius: '12px' },
        }}
      />
      <ScrollToSection /> 

      <Navbar /> 
      
      <Routes>
        <Route path="/" element={MainPage} />
        <Route path="/home" element={MainPage} />
        <Route path="/about" element={MainPage} />
        <Route path="/formations" element={MainPage} />
        <Route path="/actualites" element={MainPage} />
        <Route path="/contact" element={MainPage} />

        <Route path="/formations/:id" element={<FormationDetails />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;