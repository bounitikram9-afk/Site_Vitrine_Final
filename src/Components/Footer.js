import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" text-light pt-4 pb-2" style={{background:"#053F5C"}}>
      <div className="container">

        <div className="row">

          {/* OFPPT */}
          <div className="col-md-4 mb-3">
            <h5>OFPPT</h5>
            <p>
              Office de la Formation Professionnelle et de la Promotion du Travail.
              Plateforme dédiée aux stagiaires pour accéder aux informations
              et aux ressources pédagogiques.
            </p>
          </div>

          {/* LIENS */}
          <div className="col-md-4 mb-3">
            <h5>Liens</h5>
            <ul className="list-unstyled">
             <li>
              <Link to="/" className="nav-link text-white">Accueil</Link>
            </li>
            <li>
              <Link to="/formation" className="nav-link text-white">Formations</Link>
            </li>
            <li>
              <Link to="/actualites" className="nav-link text-white">Actualités</Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link text-white">Contact</Link>
            </li>
            </ul>
          </div>

        
          <div className="col-md-4 mb-3">
            <h5>Contact</h5>
                    <p>
            <i className="bi bi-envelope" style={{ marginRight: "8px", color: "#F7AD19" }}></i>
            Email :{" "}
            <a href="mailto:contact@ofppt.ma" style={{ color: "#F7AD19" }}>
                contact@ofppt.ma
            </a>
            </p>

            <p>
            <i className="bi bi-telephone" style={{ marginRight: "8px", color: "#F7AD19" }}></i>
            Téléphone :{" "}
            <a href="tel:+212000000" style={{ color: "#F7AD19" }}>
                +212 000 000
            </a>
            </p>

            <p>
            <i className="bi bi-geo-alt" style={{ marginRight: "8px", color: "#F7AD19" }}></i>
            Localisation :{" "}
            <a
                href="https://www.google.com/maps?q=OFPPT+ISAG+Casablanca"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#F7AD19", textDecoration: "none" }}
            >
                OFPPT ISAG - Casablanca
            </a>
            </p>


           <div className="d-flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" >
                <i className="bi bi-facebook fs-4"></i>
              </a>

              <a href="https://twitter.com" target="_blank" rel="noreferrer" >
                <i className="bi bi-twitter fs-4"></i>
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noreferrer" >
                <i className="bi bi-linkedin fs-4"></i>
              </a>
            </div>

      
          </div>


        </div>

        <hr />

        <div className="text-center">
          © 2026 OFPPT - Tous droits réservés
        </div>

      </div>
    </footer>
  );
};

export default Footer;