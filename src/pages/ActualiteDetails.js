import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/formationDetails.css"; 

function ActualiteDetails() {
  const { id } = useParams();
  const [actualite, setActualite] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/actualites/${id}`)
      .then(res => {
        setActualite(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Erreur details actualité:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return (
    <div className="loading-container">
      <p className="loading-text">Chargement de l'actualité...</p>
    </div>
  );
  
  if (!actualite) return (
    <div className="not-found-container">
      <p className="not-found-text">Actualité non trouvée</p>
      <Link to="/" className="btn-link" style={{ marginTop: "20px", display: "inline-block" }}>
        ← Retour à l'accueil
      </Link>
    </div>
  );

  return (
    <div className="details-container" style={{ paddingBottom: "80px" }}>
      <div className="header-section text-center">
        {actualite.image && (
          <img 
            src={actualite.image.startsWith('http') ? actualite.image : `http://localhost:8000/storage/${actualite.image}`} 
            alt={actualite.titre}
            style={{ width: "100%", maxHeight: "400px", objectFit: "cover", borderRadius: "12px", marginBottom: "20px" }}
          />
        )}
        <h1 className="title display-4 fw-bold">{actualite.titre}</h1>
        {actualite.date && (
          <p className="text-muted" style={{ fontSize: "1rem" }}>
            Publié le : {new Date(actualite.date).toLocaleDateString('fr-FR')}
          </p>
        )}
      </div>

      <div className="content-grid" style={{ display: "block", maxWidth: "800px", margin: "0 auto" }}>
        <div className="info-card" style={{ padding: "30px" }}>
          <h2 className="section-title" style={{ borderBottom: "2px solid #004080", paddingBottom: "10px" }}>
            Détails de l'actualité
          </h2>
          <p className="description text-dark" style={{ fontSize: "1.1rem", lineHeight: "1.8", marginTop: "20px", whiteSpace: "pre-line" }}>
            {actualite.description}
          </p>
        </div>
      </div>

      <div className="text-center mt-5">
        <Link to="/" className="btn-link" style={{ textDecoration: "none", fontWeight: "bold" }}>
          ← Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}

export default ActualiteDetails;