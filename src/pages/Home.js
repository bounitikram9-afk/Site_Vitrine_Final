import React from 'react';
import '../Styles/Home.css';

const Home = () => {
  
  const sectionStyle = {
    backgroundImage: "url('/images/home.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center'
  };

  return (
    <section style={sectionStyle} className="hero-section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 animate-fade-in">
            <h1 className="display-3 fw-bold mb-4">
              Bienvenue à l’ISAG Casablanca <br /> 
              <span className="isag-subtext">Institut Spécialisé des Arts Graphiques</span>
            </h1>
            <p className="lead mb-5 description">
              Développez vos compétences en design graphique et en techniques d’impression
            </p>
            <div className="d-flex gap-3">
              <button className="btn-lg rounded-pill hero-btn">
                Contacter
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;