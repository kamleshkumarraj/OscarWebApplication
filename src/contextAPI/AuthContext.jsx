// context/AuthContext.js
import React, { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setEmail(decodedToken.email);
      } catch (error) {
        console.error("Invalid token", error);
      }
    }
  }, []);

  const login = (token) => {
    localStorage.setItem("jwtToken", token);
    const decodedToken = jwtDecode(token);
    setEmail(decodedToken.email);
  };

  const logout = () => {
    localStorage.removeItem("jwtToken");
    setEmail(null);
  };

  console.log(email);
  return (
    <AuthContext.Provider value={{ email, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
