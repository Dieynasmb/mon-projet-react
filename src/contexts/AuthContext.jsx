import React, { createContext, useContext, useState } from 'react';

// Création du contexte
const AuthContext = createContext();

// Fournisseur du contexte avec gestion du user
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Simule la connexion
  const login = (userData) => {
    setUser(userData);
  };

  // Simule la déconnexion
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook pour accéder facilement au contexte
export function useAuth() {
  return useContext(AuthContext);
}
