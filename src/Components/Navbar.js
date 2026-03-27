import { useState } from "react";
import "../Styles/Navbar.css"
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link'
const Navbar = () => {

  const [open, setOpen] = useState(false);

  const openMenu = () => setOpen(true);
  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top " style={{background:"#053F5C"}}>
        <div className="container  ">

        
          <Link className="navbar-brand d-flex align-items-center" to="/">
           <img className="logo" src="/images/image.png" />
          </Link>

          
          <button 
            className="navbar-toggler text-white border-0 fs-2"
            onClick={openMenu}
          >
            ☰
          </button>

          {/* navbar normal */}
          <div className="collapse navbar-collapse d-none d-lg-block mt-3">
        <ul className="navbar-nav ms-auto d-flex align-items-center gap-4 ">
  <li className="mb-3 ">
    <HashLink smooth to="/#home" className="menu-link">Accueil</HashLink>
  </li>
  <li className="mb-3">
    <HashLink smooth to="/#about" className="menu-link">About</HashLink>
  </li>
  <li className="mb-3">
    <HashLink smooth to="/#contact" className="menu-link">Contact</HashLink>
  </li>
  <li className="mb-3">
    <HashLink smooth to="/#formations" className="menu-link">Formations</HashLink>
  </li>
  <li className="mb-3">
    <HashLink to="/actualites" className="menu-link">Actualités</HashLink>
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
         <li className="mb-3 ">
    <HashLink smooth to="/#home" className="menu-link">Accueil</HashLink>
  </li>
  <li className="mb-3">
    <HashLink smooth to="/#about" className="menu-link">About</HashLink>
  </li>
  <li className="mb-3">
    <HashLink smooth to="/#contact" className="menu-link">Contact</HashLink>
  </li>
  <li className="mb-3">
    <HashLink smooth to="/#formations" className="menu-link">Formations</HashLink>
  </li>
  <li className="mb-3">
    <HashLink to="/actualites" className="menu-link">Actualités</HashLink>
  </li>
        </ul>

      </div>
    </>
  );
};

export default Navbar;