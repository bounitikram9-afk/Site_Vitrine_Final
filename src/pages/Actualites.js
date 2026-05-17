import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; 
import "../Styles/Formations.css"; 

function Actualités() {
  const [actualites, setActualites] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);
  
  
  const [showForm, setShowForm] = useState(false); 
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  
  const fetchActualites = () => {
    axios.get("http://localhost:8000/api/actualites")
      .then(res => {
        setActualites(res.data); 
      })
      .catch(err => {
        console.log("Erreur lors du chargement des actualités:", err);
      });
  };

  useEffect(() => {
    fetchActualites();
  }, []);

  const showMore = () => {
    setVisibleCount(prevCount => prevCount + 3);
  };

  
  const handlePost = (e) => {
    e.preventDefault();
    
    if (!titre || !description || !date || !image) {
      setMessage("Veuillez remplir tous les champs et choisir une image.");
      return;
    }

   
    const formData = new FormData();
    formData.append("titre", titre);
    formData.append("description", description);
    formData.append("date", date);
    formData.append("image", image); 

    axios.post("http://localhost:8000/api/actualites", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
    .then(res => {
      setMessage("Actualité ajoutée avec succès !");
      
      setTitre("");
      setDescription("");
      setDate("");
      setImage(null);
     
      fetchActualites();
      setShowForm(false);
    })
    .catch(err => {
      console.error(err);
      setMessage("Erreur lors de l'ajout. Vérifiez votre backend.");
    });
  };

  return (
    <div className="formations-container" id="actualites" style={{ paddingTop: "60px" }}>
      
      
      <div className="text-center mb-4">
        <button 
          onClick={() => setShowForm(!showForm)} 
          className="btn-link" 
          style={{ background: "#004080", color: "#fff", padding: "10px 20px", borderRadius: "8px", border: "none", cursor: "pointer", fontWeight: "bold" }}
        >
          {showForm ? "✕ Fermer le Panel Admin" : "⚙️ Ajouter une Actualité (Admin)"}
        </button>
      </div>

     
      {showForm && (
        <div style={{ maxWidth: "600px", margin: "0 auto 40px auto", padding: "25px", background: "#f8f9fa", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
          <h3 style={{ color: "#004080", marginBottom: "20px", fontWeight: "bold" }}>Nouvelle Actualité</h3>
          
          {message && <p style={{ color: message.includes("succès") ? "green" : "red", fontWeight: "bold" }}>{message}</p>}
          
          <form onSubmit={handlePost}>
            <div className="mb-3" style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}>Titre :</label>
              <input type="text" value={titre} onChange={(e) => setTitre(e.target.value)} style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }} />
            </div>

            <div className="mb-3" style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}>Date :</label>
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }} />
            </div>

            <div className="mb-3" style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}>Description :</label>
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows="4" style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}></textarea>
            </div>

            <div className="mb-3" style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}>Choisir une Image :</label>
              <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} style={{ width: "100%" }} />
            </div>

            <button type="submit" style={{ width: "100%", background: "green", color: "#fff", padding: "12px", borderRadius: "6px", border: "none", fontWeight: "bold", cursor: "pointer" }}>
              🚀 Poster l'Actualité
            </button>
          </form>
        </div>
      )}

      <div className="text-center mb-5">
        <h1 className="title display-4 fw-bold mb-3">Nos Actualités</h1>
      </div>

      <div className="cards-grid">
        {actualites.length === 0 ? (
          <p className="text-center text-muted col-12">Aucune actualité disponible pour le moment.</p>
        ) : (
          actualites.slice(0, visibleCount).map(act => (
            <div className="card" key={act.id}>
              {act.image && (
                <img 
                  src={act.image.startsWith('http') ? act.image : `http://localhost:8000/storage/${act.image}`} 
                  alt={act.titre}
                  className="card-image"
                />
              )}
              <div className="card-content">
                <h3 className="filiere" style={{ color: "#004080", fontSize: "1.5rem" }}>{act.titre}</h3>
                {act.date && (
                  <p className="duree" style={{ fontSize: "0.85rem", color: "#888" }}>
                    Publié le : {new Date(act.date).toLocaleDateString('fr-FR')}
                  </p>
                )}
                <p className="diplome text-dark" style={{ fontSize: "0.95rem", lineHeight: "1.5", marginTop: "10px" }}>
                  {act.description.length > 120 ? `${act.description.substring(0, 120)}...` : act.description}
                </p>

                <Link to={`/actualites/${act.id}`} className="btn-link" style={{ marginTop: "15px", display: "inline-block", textDecoration: "none" }}>
                  Voir plus →
                </Link>
              </div>
            </div>
          ))
        )}
      </div>

      {visibleCount < actualites.length && (
        <div className="lien text-center mt-5">
          <a onClick={showMore} className="lien2 btn-link" style={{ cursor: "pointer" }}>
            Afficher plus d'actualités →
          </a>
        </div>
      )}
    </div>
  );
}

export default Actualités;