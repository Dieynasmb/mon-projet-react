import React, { useState } from 'react';

const AppointmentPage = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    email: '',
    doctor: '',
    date: '',
    time: '',
    reason: ''
  });

  // Liste des médecins avec spécialités
  const doctors = [
    { name: "Dr. Genyco", specialty: "Gynécologue" },
    { name: "Dr. Diop", specialty: "Pédiatrie" },
    { name: "Dr. Ndiaye", specialty: "Cardiologue" },
    { name: "Dr. Ba", specialty: "Dermatologue" },
    { name: "Dr. Sow", specialty: "Médecin généraliste" }
  ];

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Rendez-vous pris pour ${formData.patientName} avec ${formData.doctor} le ${formData.date} à ${formData.time}`);
    // Ici tu peux appeler une API pour enregistrer en base
  };

  return (
    <div className="appointment-container">
      <h2>Prendre un rendez-vous</h2>
      <form onSubmit={handleSubmit} className="appointment-form">
        <label>Nom complet :</label>
        <input
          type="text"
          name="patientName"
          value={formData.patientName}
          onChange={handleChange}
          required
        />

        <label>Téléphone :</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label>Email :</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Médecin :</label>
        <select
          name="doctor"
          value={formData.doctor}
          onChange={handleChange}
          required
        >
          <option value="">-- Choisir un médecin --</option>
          {doctors.map((doc) => (
            <option key={doc.name} value={`${doc.name} (${doc.specialty})`}>
              {doc.name} - {doc.specialty}
            </option>
          ))}
        </select>

        <label>Date :</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <label>Heure :</label>
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />

        <label>Motif du rendez-vous :</label>
        <textarea
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          rows="4"
          placeholder="Décrire brièvement"
        ></textarea>

        <button type="submit" className="btn-submit">Valider</button>
      </form>
    </div>
  );
};

export default AppointmentPage;
