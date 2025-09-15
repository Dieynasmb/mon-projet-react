import React from "react";
import { FaHospitalSymbol, FaHandHoldingMedical, FaHeartbeat } from "react-icons/fa";


function Homepage() {
  return (
    <div className="homepage">
      <header className="hero">
        <h1>Bienvenue à <span className="brand">Sentrack</span></h1>
        <p className="slogan">La santé, notre priorité</p>
      </header>

      <section className="partners">
        <h2>Nos Partenaires</h2>
        <div className="partner-logos">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/UNICEF_Logo.png/800px-UNICEF_Logo.png" alt="UNICEF" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/WHO_Logo.svg/2560px-WHO_Logo.svg.png" alt="WHO" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Red_Cross_emblem.svg/1200px-Red_Cross_emblem.svg.png" alt="Red Cross" />
        </div>
      </section>

      <section className="features">
        <h2>Prévention & Services</h2>
        <div className="features-grid">
          <div className="feature-item">
            <FaHandHoldingMedical size={40} color="#0d9488" />
            <h3>Prévention</h3>
            <p>Conseils pratiques pour rester en bonne santé.</p>
          </div>
          <div className="feature-item">
            <FaHospitalSymbol size={40} color="#0d9488" />
            <h3>Structures médicales</h3>
            <p>Accès rapide aux centres de santé partenaires.</p>
          </div>
          <div className="feature-item">
            <FaHeartbeat size={40} color="#0d9488" />
            <h3>Urgences</h3>
            <p>Orientation en cas de besoin médical urgent.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
