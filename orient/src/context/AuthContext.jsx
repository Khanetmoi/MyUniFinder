import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // {email, token}

  const login = async (email, password) => {
    // Ici plus tard: fetch vers Apps Script
    // Mock temporaire :
    if (email === "test@test.com" && password === "1234") {
      setUser({ email });
      return true;
    }
    return false;
  };

  const signup = async (email, password) => {
    // Mock : en vrai -> POST Google Sheets
    setUser({ email });
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
