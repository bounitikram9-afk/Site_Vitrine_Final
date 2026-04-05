import React from 'react';
import '../Styles/Home.css';
import { Link } from 'react-router-dom';

const Hero = () => {
 
  const sectionStyle = {
    backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.85) 0%, rgba(3, 3, 3, 0.4) 100%), url('/images/home.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <section 
      className="hero-section d-flex align-items-center" 
      style={sectionStyle}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-8 text-white animate-fade-in">
            <div className="hero-content-wrapper">             
              <h1 className="display-3 fw-bold mb-4 mt-2">
                Bienvenue à <span className="text-highlight">l’ISAG</span> Casablanca
              </h1>
              <p className="lead mb-5 description">
                Institut Spécialisé des Arts Graphiques. Développez vos compétences en design graphique, infographie et techniques d’impression de pointe.
              </p>
              <div className="d-flex gap-3">
                <a href="#formations" className="btn-lg px-5 rounded-pill hero-btn main-btn text-decoration-none">
                  Découvrir nos filières
                </a>
                <a href="#contact" className="btn btn-lg px-5 rounded-pill hero-btn secondary-btn text-decoration-none d-inline-block text-white">
                  Contactez-nous
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;