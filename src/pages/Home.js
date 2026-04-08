// import React from 'react';
// import '../Styles/Home.css';
// import { Link } from 'react-router-dom';

// const Hero = () => {
 
//   const sectionStyle = {
//     backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.85) 0%, rgba(3, 3, 3, 0.4) 100%), url('/images/home.jpg')`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center'
//   };

//   return (
//     <section style={sectionStyle} className="hero-section">
//       <div className="container">
//         <div className="row">
//           <div className="col-12 col-md-8 animate-fade-in">
//             <h1 className="display-3 fw-bold mb-4">
//               Bienvenue à l’ISAG Casablanca <br /> 
//               <span className="isag-subtext">Institut Spécialisé des Arts Graphiques</span>
//             </h1>
//             <p className="lead mb-5 description">
//               Développez vos compétences en design graphique et en techniques d’impression
//             </p>
//             <div className="d-flex gap-3">
//               <button className="btn-lg rounded-pill hero-btn">
//                 Contacter
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>

//   );
// };

// export default Hero;









import React from 'react';
import '../Styles/Home.css';
import { Link } from 'react-router-dom';
const Hero = () => {

    const sectionStyle = {
      backgroundImage: "url('/images/home.jpg')", 
      backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.67), rgba(0, 0, 0, 0.2)), url('/images/home.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      position: 'relative'
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