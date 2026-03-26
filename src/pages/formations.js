import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../Styles/Formations.css";

function Formations() {
  const [formations, setFormations] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/formations")
      .then(res => setFormations(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="formations-container" id="formations">
      <h1 className="title">Formations</h1>

      <div className="cards-grid">
        {formations.map(f => (
          <div className="card"key={f.id}>
             <img 
              src={f.image} 
              alt={f.filiere}
              className="card-image"
            />
            <div className="card-content">

            <h3 className="filiere">{f.filiere}</h3>
            <p className="diplome">{f.diplome}</p>
            <p className="duree">{f.duree}</p>
            <Link to={`/formations/${f.id}`} className="btn-link">
              Voir plus →
            </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Formations;