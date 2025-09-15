import { useState } from 'react';

export default function FormPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    age: '',
    bio: '',
    image: null,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData(prev => ({ ...prev, image: files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  }

  function validate() {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Le nom complet est requis';
    if (!formData.email) newErrors.email = 'Email requis';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email invalide';
    if (!formData.age || isNaN(formData.age)) newErrors.age = 'Âge valide requis';
    if (!formData.bio) newErrors.bio = 'Veuillez écrire une bio';
    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      // Ici tu pourrais envoyer les données au backend
      console.log('Form data:', formData);
    }
  }

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 20 }}>
      <h2>Formulaire d'inscription</h2>

      {submitted ? (
        <div style={{ padding: 10, backgroundColor: '#d4edda', color: '#155724' }}>
          Merci pour votre inscription, {formData.fullName} !
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div>
            <label>Nom complet :</label><br />
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && <div style={{ color: 'red' }}>{errors.fullName}</div>}
          </div>

          <div>
            <label>Email :</label><br />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
          </div>

          <div>
            <label>Âge :</label><br />
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              min="0"
            />
            {errors.age && <div style={{ color: 'red' }}>{errors.age}</div>}
          </div>

          <div>
            <label>Bio :</label><br />
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows={4}
            />
            {errors.bio && <div style={{ color: 'red' }}>{errors.bio}</div>}
          </div>

          <div>
            <label>Photo de profil :</label><br />
            <input type="file" name="image" onChange={handleChange} accept="image/*" />
            {formData.image && (
              <div style={{ marginTop: 10 }}>
                <strong>Image sélectionnée :</strong> {formData.image.name}
                <br />
                <img
                  src={URL.createObjectURL(formData.image)}
                  alt="Preview"
                  style={{ maxWidth: 200, marginTop: 10 }}
                />
              </div>
            )}
          </div>

          <button type="submit" style={{ marginTop: 20 }}>Envoyer</button>
        </form>
      )}
    </div>
  );
}
