import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function RegisterPage() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    motDePasse: '',
  });

  const navigate = useNavigate(); // Hook pour la redirection

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Tu peux ajouter ici une vérification ou un envoi à un backend

    // Redirection vers le formulaire
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
