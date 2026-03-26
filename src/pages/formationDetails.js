import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/formationDetails.css";

function FormationDetails() {
  const { id } = useParams();
  const [formation, setFormation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedYear, setSelectedYear] = useState(1);
  useEffect(() => {
    axios.get(`http://localhost:5000/formations/${id}`)
      .then(res => {
        setFormation(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return (
    <div className="loading-container">
      <p className="loading-text">Chargement...</p>
    </div>
  );
  
  if (!formation) return (
    <div className="not-found-container">
      <p className="not-found-text">Formation non trouvée</p>
    </div>
  );
  const currentYear = formation.annees.find(a => a.annee === selectedYear);
  return (
    <div className="details-container">
      <div className="header-section">
        <h1 className="title">{formation.filiere}</h1>
        <p className="description">{formation.description}</p>
      </div>

      <div className="content-grid">
        {/* Conditions */}
        <div className="info-card">
          <h2 className="section-title">Conditions d'admission</h2>
          <ul className="info-list">
            {Object.entries(formation.conditions).map(([key, value], i) => (
              <li key={i}>
                <span className="list-label">{key}:</span> {value}
              </li>
            ))}
          </ul>
        </div>

        {/* Débouchés */}
        <div className="info-card">
          <h2 className="section-title"> Débouchés</h2>
          <ul className="info-list">
            {formation.debouches.map((d, i) => <li key={i}>{d}</li>)}
          </ul>
        </div>

        {/* Compétences */}
        <div className="info-card">
          <h2 className="section-title"> Compétences acquises</h2>
          <ul className="info-list">
            {formation.competences.map((c, i) => <li key={i}>{c}</li>)}
          </ul>
        </div>

        {/* Logiciels */}
        <div className="info-card">
          <h2 className="section-title"> Logiciels utilisés</h2>
          <ul className="info-list">
            {formation.logiciels.map((l, i) => <li key={i}>{l}</li>)}
          </ul>
        </div>
        <div className="info-card">
          <h2 className="section-title"> Langues</h2>
          <ul className="info-list">
            {formation.langues.map((lang, i) => <li key={i}>{lang}</li>)}
          </ul>
        </div>
        <div className="info-card">
          <h2 className="section-title"> Durée</h2>
          <div className="duration-stats">
            <div className="duration-item">
              <span className="duration-label">Total:</span>
              <span className="duration-value">{formation.heures.total} heures</span>
            </div>
            <div className="duration-item">
              <span className="duration-label">Technique:</span>
              <span className="duration-value">{formation.heures.technique} heures</span>
            </div>
            <div className="duration-item">
              <span className="duration-label">Transversal:</span>
              <span className="duration-value">{formation.heures.transversal} heures</span>
            </div>
          </div>
        </div>
      </div>
        {/* Year Buttons */}
<div className="year-buttons-container">
  {formation.annees.map(a => (
    <button 
      key={a.annee} 
      onClick={() => setSelectedYear(a.annee)}
      className={`year-button ${selectedYear === a.annee ? 'active' : ''}`}
    >
      Année {a.annee}
    </button>
  ))}
</div>

{currentYear && (
  <div className="table-responsive">
    <h3 className="table-section-title">Programme de l'année {currentYear.annee}</h3>
    
    {currentYear.modules_techniques.length > 0 && (
      <>
        <h4 className="table-subtitle">Modules Techniques</h4>
        <table className="modules-table">
          <thead>
            <tr>
              <th>Code</th>
              <th>Nom du module</th>
              <th>Durée (h)</th>
            </tr>
          </thead>
          <tbody>
            {currentYear.modules_techniques.map(mod => (
              <tr key={mod.code}>
                <td>{mod.code}</td>
                <td>{mod.nom}</td>
                <td>{mod.duree || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    )}
    
    {currentYear.modules_generaux.length > 0 && (
      <>
        <h4 className="table-subtitle">Modules Transversaux</h4>
        <table className="modules-table">
          <thead>
            <tr>
              <th>Code</th>
              <th>Nom du module</th>
              <th>Durée (h)</th>
            </tr>
          </thead>
          <tbody>
            {currentYear.modules_generaux.map(mod => (
              <tr key={mod.code}>
                <td>{mod.code}</td>
                <td>{mod.nom}</td>
                <td>{mod.duree || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    )}
  </div>
)}
    </div>
   
  )};

export default FormationDetails;