import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = {
    heroSection: {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/home.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundColor: '#053F5C',
      
      minHeight: isMobile ? '48vh' : '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
    contentContainer: {
      
      paddingTop: isMobile ? '80px' : '0', 
    },
    title: {
      fontSize: isMobile ? '1.5rem' : '3.5rem',
      fontWeight: 'bold',
      marginBottom: isMobile ? '1rem' : '1.5rem',
      color: '#ffffff',
      textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
    },
    paragraph: {
      maxWidth: '800px', 
      fontSize: isMobile ? '0.85rem' : '1.2rem', 
      lineHeight: '1.4',
      marginBottom: isMobile ? '1.5rem' : '3rem'
    },
    mainBtn: {
      backgroundColor: '#eea108',
      color: '#071f2f',
      padding: isMobile ? '8px 20px' : '12px 35px',
      borderRadius: '50px',
      fontWeight: '600',
      textDecoration: 'none',
      width: isMobile ? '80%' : 'auto',
      textAlign: 'center',
      fontSize: isMobile ? '0.8rem' : '1rem'
    },
    secondaryBtn: {
      backgroundColor: 'transparent',
      border: '2px solid #ffffff',
      color: '#ffffff',
      padding: isMobile ? '8px 20px' : '12px 35px',
      borderRadius: '50px',
      fontWeight: '600',
      textDecoration: 'none',
      width: isMobile ? '80%' : 'auto',
      textAlign: 'center',
      fontSize: isMobile ? '0.8rem' : '1rem'
    }
  };

  return (
    <section style={styles.heroSection}>
      
      <div className="container text-center text-white px-4" style={styles.contentContainer}>
        <h1 style={styles.title}>
          Bienvenue à <span style={{ color: '#eea108' }}>l'ISAG</span> Casablanca
        </h1>
        <p className="mx-auto" style={styles.paragraph}>
          Institut Spécialisé des Arts Graphiques. Développez vos compétences en design graphique, infographie et techniques d’impression de pointe.
        </p>
        <div className="d-flex gap-2 justify-content-center flex-column flex-sm-row align-items-center">
          <Link to="/formations" style={styles.mainBtn}>
            Découvrir nos filières
          </Link>
          <Link to="/contact" style={styles.secondaryBtn}>
            Contactez-nous
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;