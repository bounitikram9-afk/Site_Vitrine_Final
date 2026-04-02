import React from 'react';
import { Toaster } from 'sonner';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Formations from './pages/formations';
import FormationDetails from './pages/formationDetails';
import './Styles/App.css';
import Actualités from './pages/Actualites';

function App() {
  return (
    <div className="App">
      <Toaster position="top-right" richColors />
      <Navbar /> 
      
      <Routes>
       
        <Route 
          path="/" 
          element={
            <main>
              <section id="home" ><Home /></section>
              <section id="about"><About /></section>
              <section id="formations"><Formations /></section>
              <section id="actualites"><Actualités /></section>
              <section id="contact"><Contact /></section>
            </main>
          } 
        />

       
        <Route path="/formations/:id" element={<FormationDetails />} />
        
      
      </Routes>

      <Footer />
    </div>
  );
}

export default App;



// json-server --watch formations.json --port 5000