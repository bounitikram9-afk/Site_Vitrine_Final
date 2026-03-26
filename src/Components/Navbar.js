import { useState } from "react";
import "../Styles/Navbar.css"
import { Link } from "react-router-dom";
const Navbar = () => {

  const [open, setOpen] = useState(false);

  const openMenu = () => setOpen(true);
  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top " style={{background:"#053F5C"}}>
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
  {/* Scroll داخلي */}
  <li className="nav-item">
    <a href="#home" className="nav-link text-white">Accueil</a>
  </li>
  <li className="nav-item">
    <a href="#about" className="nav-link text-white">About</a>
  </li>
  <li className="nav-item">
    <a href="#contact" className="nav-link text-white">Contact</a>
  </li>

  {/* صفحات مستقلة */}
  <li className="nav-item">
    <a href="#formations" className="nav-link text-white">Formations</a>
  </li>
  <li className="nav-item">
    <a href="#actualites" className="nav-link text-white">Actualités</a>
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
    <a href="#home" className="menu-link">Accueil</a>
  </li>
  <li className="mb-3">
    <a href="#about" className="menu-link">Présentation</a>
  </li>
  <li className="mb-3">
    <a href="#contact" className="menu-link">Contact</a>
  </li>
  <li className="mb-3">
    <a to="#formations" className="menu-link">Formations</a>
  </li>
  <li className="mb-3">
    <Link to="/actualites" className="menu-link">Actualités</Link>
  </li>
</ul>

      </div>
    </>
  );
};

export default Navbar;