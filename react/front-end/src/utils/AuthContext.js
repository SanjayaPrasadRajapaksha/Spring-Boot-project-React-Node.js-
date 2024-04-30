import React, { createContext, useContext, useState } from 'react'
import { useEffect } from 'react';

const AuthContext = createContext({
  isAuthenticated: false,
  jwtToken: null,
  login: () => { },
  logout: () => { },
});

// 2. AuthProvider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [jwtToken, setJwtToken] = useState(null);

  // Functions for login and logout
  const login = (data) => {
    setIsAuthenticated(true);
    setJwtToken(data);
    localStorage.setItem("jwtToken", data);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setJwtToken(null);
    localStorage.removeItem("jwtToken");
  };

  // Check local storage on mount
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      setIsAuthenticated(true);
      setJwtToken(token);
    }
  }, []);


  // Provide context value
  return (
    <AuthContext.Provider
      value={{ isAuthenticated, jwtToken, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// 3. useAuth hook
export const useAuth = () => {
  return useContext(AuthContext);
};