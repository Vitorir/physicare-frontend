import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// Crie o contexto de autenticação
const AuthContext = createContext();

// Componente de provedor de autenticação
export function AuthProvider({ children }) {
  const [accessToken, setAccessToken] = useState(null);

  // Função para fazer login e obter o accessToken
  const login = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:3000/public/login", {
        email,
        password,
      });

      if (response.status === 200) {
        const token = response.data.accessToken;
        setAccessToken(token);
        localStorage.setItem("accessToken", token); // Salvar o token no localStorage
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  // Função para fazer logout
  const logout = () => {
    setAccessToken(null);
    localStorage.removeItem("accessToken"); // Remover o token do localStorage
  };

  // Verificar se há um token no localStorage ao carregar o componente
  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken");
    if (storedToken) {
      setAccessToken(storedToken);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ accessToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook personalizado para usar o contexto de autenticação
export function useAuth() {
  return useContext(AuthContext);
}
