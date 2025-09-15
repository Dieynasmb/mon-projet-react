import React, { useState } from 'react';

export default function FormPage() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    age: '',
    sexe: '',
    groupeSanguin: '',
    allergies: '',
    maladiesChroniques: '',
    medicaments: '',
    antChirurgicaux: '',
    antFamiliaux: '',
    fume: '',
    alcool: '',
    activitePhysique: '',
    assurance: '',
    contactUrgence: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulaire santé soumis :', formData);
    // Ici, tu peux envoyer les données à un backend si besoin
  };

  return (
    <div className="container">
      <h2>Formulaire de Santé Complet</h2>
      <form onSubmit={handleSubmit}>
        <label>Nom :
          <input type="text" name="nom" value={formData.nom} onChange={handleChange} required />
        </label>

        <label>Prénom :
          <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} required />
        </label>

        <label>Âge :
          <input type="number" name="age" value={formData.age} onChange={handleChange} required />
        </label>

        <label>Sexe :
          <select name="sexe" value={formData.sexe} onChange={handleChange} required>
            <option value="">--Choisir--</option>
            <option value="Homme">Homme</option>
            <option value="Femme">Femme</option>
            <option value="Autre">Autre</option>
          </select>
        </label>

        <label>Groupe Sanguin :
          <select name="groupeSanguin" value={formData.groupeSanguin} onChange={handleChange}>
            <option value="">--Choisir--</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </label>

        <label>Allergies connues :
          <textarea name="allergies" value={formData.allergies} onChange={handleChange} />
        </label>

        <label>Maladies chroniques :
          <textarea name="maladiesChroniques" value={formData.maladiesChroniques} onChange={handleChange} />
        </label>

        <label>Médicaments actuels :
          <textarea name="medicaments" value={formData.medicaments} onChange={handleChange} />
        </label>

        <label>Antécédents chirurgicaux :
          <textarea name="antChirurgicaux" value={formData.antChirurgicaux} onChange={handleChange} />
        </label>

        <label>Antécédents familiaux (diabète, hypertension, cancer...) :
          <textarea name="antFamiliaux" value={formData.antFamiliaux} onChange={handleChange} />
        </label>

        <label>Fumez-vous ?
          <select name="fume" value={formData.fume} onChange={handleChange}>
            <option value="">--Choisir--</option>
            <option value="Non">Non</option>
            <option value="Oui">Oui</option>
            <option value="Occasionnellement">Occasionnellement</option>
          </select>
        </label>

        <label>Consommation d'alcool :
          <select name="alcool" value={formData.alcool} onChange={handleChange}>
            <option value="">--Choisir--</option>
            <option value="Non">Non</option>
            <option value="Oui">Oui</option>
            <option value="Modérée">Modérée</option>
          </select>
        </label>

        <label>Activité physique régulière :
          <select name="activitePhysique" value={formData.activitePhysique} onChange={handleChange}>
            <option value="">--Choisir--</option>
            <option value="Oui">Oui</option>
            <option value="Non">Non</option>
            <option value="Parfois">Parfois</option>
          </select>
        </label>

        <label>Nom de la mutuelle/assurance :
          <input type="text" name="assurance" value={formData.assurance} onChange={handleChange} />
        </label>

        <label>Contact d'urgence :
          <input type="text" name="contactUrgence" value={formData.contactUrgence} onChange={handleChange} />
        </label>

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}
