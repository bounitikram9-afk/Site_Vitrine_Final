
import React from 'react';
import '../Styles/Home.css'
const Hero = () => {
  return (
    <section className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row">

          <div className="col-8 col-md-6 text-white animate-fade-in">
            <h1 className="display-3 fw-bold mb-4">
              Bienvenue à l’ISAG Casablanca <br /> Institut Spécialisé des Arts Graphiques
            </h1>
            <p className="lead mb-5 opacity-90 description">
              Développez vos compétences en design graphique et en techniques d’impression
            </p>
            <div className="d-flex gap-3">
              <button className=" btn-lg px-5 rounded-pill hero-btn">
                Contacter
              </button>
            </div>
          </div>
            <div className='col-4 col-md-4'>
                <img src="images/ofppt.jpg" className='img1'/>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;