import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Importer le hook
import '../styles.css'; // Mets ton chemin correct si nécessaire

function RegisterPage() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    motDePasse: '',
  });

  const navigate = useNavigate(); // ✅ Initialisation de la navigation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ici tu pourrais vérifier que les champs sont valides ou envoyer à une API

    // ✅ Redirection vers le formulaire
    navigate('/form');
  };

  return (
    <div className="container">
      <h2>Inscription</h2>
      <form onSubmit={handleSubmit}>
        <label>Nom</label>
        <input
          type="text"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Mot de passe</label>
        <input
          type="password"
          name="motDePasse"
          value={formData.motDePasse}
          onChange={handleChange}
          required
        />

        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
}

export default RegisterPage;
