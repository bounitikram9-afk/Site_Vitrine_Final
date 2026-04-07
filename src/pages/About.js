import React from 'react';
import '../Styles/presentation.css';

const About = () => {
  return (
    <div>
      <div className='page' id='about'>
      <section className='ofppt' >
        <div className="">
          <div className="hero-content">
            <div className="hero-text">      
                  <h2 className="institut-title">
                <i className="bi bi-palette-fill"></i> Institut Spécialisé des <span>Arts Graphiques</span>
              </h2>      
                <div className='location-badge '>
                     <i className="bi bi-geo-alt-fill text-yellow me-2"></i>
                  <span className="fw-semibold">Casablanca, Maroc</span>
                </div> 
              <p className="hero-description">
               L’Institut Spécialisé des Arts Graphiques de Casablanca (ISAG) est un établissement public relevant 
              <br></br> de l’Office de la Formation Professionnelle et de la Promotion du Travail (OFPPT). Situé à Casablanca,
                l’institut est spécialisé dans la formation aux métiers des arts graphiques, de l’infographie et de l’impression.
              </p>
            </div>
                  <img   src="/images/isagc-principal.jpg"  alt="isag"  className="main-image" />  
          </div>
        </div>
      </section>

      <section >
        <div className="">
          <div className="institut-content">
            <div className="institut-text">                 
              <p className="institut-description">
                 ISAG Casablanca propose des formations de niveau Technicien Spécialisé d’une durée de deux ans, destinées aux 
                 titulaires du baccalauréat souhaitant développer des compétences professionnelles dans le domaine de la création graphique et des techniques d’impression.
                L’établissement offre un environnement de formation pratique et moderne permettant aux étudiants d’acquérir des compétences techniques et créatives adaptées aux besoins du marché du travail.
              </p>
               </div>
              
                </div>
                </div>
                </section>
              <div className="image-gallery ">
                <div className="feature-item">
                    <img  src="/images/img1.jpg"  alt="img1" />
                </div>
                <div className="feature-item">
                  <img  src="/images/img2.jpg" alt="img2" />
                </div>
                <div className="feature-item">
                  <img src="/images/img3.jpg" alt="img3" />
                </div>
                <div className="feature-item">
                  <img  src="/images/img4.jpg"  alt="img4"  />
                </div>     
            </div>
              </div>
    </div>
  );
};

export default About;