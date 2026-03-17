import { useState } from "react";
import "../Styles/Navbar.css"
import { Link } from "react-router-dom";
const Navbar = () => {

  const [open, setOpen] = useState(false);

  const openMenu = () => setOpen(true);
  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg " style={{background:"#053F5C"}}>
        <div className="container">

          {/* LOGO */}
           <Link className="navbar-brand text-white fw-bold d-flex" to="/">
            <h4 style={{color:"#F7AD19"}}>IS</h4>
            <h4 style={{color:"white"}}>AG</h4>
          </Link>

          {/* BUTTON MOBILE */}
          <button 
            className="navbar-toggler text-white border-0 fs-2"
            onClick={openMenu}
          >
            ☰
          </button>

          {/* MENU NORMAL */}
          <div className="collapse navbar-collapse d-none d-lg-block">
            <ul className="navbar-nav ms-auto">

             <li className="nav-item">
                <Link to="/" className="nav-link text-white">Accueil</Link>
              </li>

              <li className="nav-item">
                <Link to="/formations" className="nav-link text-white">Formations</Link>
              </li>

              <li className="nav-item">
                <Link to="/actualites" className="nav-link text-white">Actualités</Link>
              </li>

              <li className="nav-item">
                <Link to="/contact" className="nav-link text-white">Contact</Link>
              </li>


            </ul>
          </div>

        </div>
      </nav>

      {/* side bar */}
      <div className={`side-menu ${open ? "active" : ""}`}>

        <div className="text-end p-3">
          <button className="border-0 bg-transparent text-white fs-2"onClick={closeMenu}>
            ✕
          </button>
        </div>

        <ul className="list-unstyled p-4">

         <li className="mb-3">
          <Link to="/" className="menu-link">Accueil</Link>
        </li>

        <li className="mb-3">
          <Link to="/presentation" className="menu-link">Présentation</Link>
        </li>

        <li className="mb-3">
          <Link to="/formations" className="menu-link">Formations</Link>
        </li>

        <li className="mb-3">
          <Link to="/actualites" className="menu-link">Actualités</Link>
        </li>

        <li className="mb-3">
          <Link to="/contact" className="menu-link">Contact</Link>
        </li>

        </ul>

      </div>
    </>
  );
};

export default Navbar;