import { useState } from 'react';
import axios from 'axios';

function AddPatientForm() {
  const [formData, setFormData] = useState({ nom: '', prenom: '', email: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/patients', formData);
      alert('Patient ajouté !');
    } catch (err) {
      console.error(err);
      alert('Erreur lors de l’ajout.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="nom" placeholder="Nom" onChange={handleChange} />
      <input name="prenom" placeholder="Prénom" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <button type="submit">Ajouter Patient</button>
    </form>
  );
}

export default AddPatientForm;
