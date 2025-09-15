import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext'; // si tu as un AuthContext
import AddPatientForm from '../components/AddPatientForm';
function Dashboard() {
  const { user } = useAuth(); // exemple : { name: 'Dr Diallo', role: 'medecin' }
  const [formData, setFormData] = useState({
    nom: '',
    analyse: '',
    resultat: '',
    medicament: '',
    date: new Date().toISOString().split('T')[0]
  });

  const [resultats, setResultats] = useState([]);

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResultats([...resultats, formData]);
    setFormData({
      nom: '',
      analyse: '',
      resultat: '',
      medicament: '',
      date: new Date().toISOString().split('T')[0]
    });
  };

  return (
    <div className="dashboard">
      <h2>Tableau de bord</h2>

      {/* 🎯 Le formulaire est visible seulement pour les médecins */}
      {user?.role === 'medecin' && (
        <>
          <h3>Ajouter un résultat médical</h3>
          <form onSubmit={handleSubmit} className="form">
            <input
              type="text"
              name="nom"
              placeholder="Nom du patient"
              value={formData.nom}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="analyse"
              placeholder="Type d’analyse"
              value={formData.analyse}
              onChange={handleChange}
              required
            />
            <textarea
              name="resultat"
              placeholder="Résultat"
              value={formData.resultat}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="medicament"
              placeholder="Médicaments prescrits"
              value={formData.medicament}
              onChange={handleChange}
              required
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
            <button type="submit">Ajouter</button>
          </form>
        </>
      )}

      {/* 🧾 Les résultats sont visibles pour tous */}
      <hr />
      <h3>Résultats enregistrés</h3>
      <ul>
        {resultats.map((item, index) => (
          <li key={index}>
            <strong>{item.nom}</strong> – {item.analyse} : {item.resultat}  
            <br />💊 {item.medicament} | 📅 {item.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
