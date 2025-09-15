import { Link } from 'react-router-dom';
import { FaHeartbeat } from 'react-icons/fa';  // exemple d’icône santé

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <FaHeartbeat size={28} color="#0d9488" style={{ marginRight: '8px' }} />
        <Link to="/" className="brand-name">Sentrack</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/inscription">Inscription</Link></li>
        <li><Link to="/connexion">Connexion</Link></li>
        <li><Link to="/formulaire">Formulaire</Link></li>
        <li><Link to="/rdv">Prendre RDV</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
