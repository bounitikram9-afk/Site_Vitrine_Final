import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../Styles/Formations.css";

function Formations() {
  const [formations, setFormations] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    axios.get("http://localhost:5000/formations")
      .then(res => setFormations(res.data))
      .catch(err => console.log(err));
  }, []);

  const showMore = () => {
    setVisibleCount(prevCount => prevCount + 3);
  };

  return (
    <div className="formations-container" id="formations">
      <div className="text-center mb-5">

        <h1 className="title display-4 fw-bold mb-3">Nos Formations</h1>
      </div>

      <div className="cards-grid ">
        {formations.slice(0, visibleCount).map(f => (
          <div className="card" key={f.id}>
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

      {visibleCount < formations.length && (
        <div className="lien text-center mt-5">
          <a onClick={showMore} className="lien2 btn-link">
              Afficher plus de formations →
          </a>
        </div>
      )}
    </div>
  );
}

export default Formations;