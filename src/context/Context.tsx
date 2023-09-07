// MeuContext.js
import React, { createContext, useContext, useState } from 'react';

// Crie o contexto
const MeuContext = createContext();

// Crie um componente de provedor para encapsular os componentes que precisam do contexto
export default function Context({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <MeuContext.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen,
        toggleMenu
      }}>
      {children}
    </MeuContext.Provider>
  );
}

// Crie um gancho personalizado para usar o contexto
export function useMeuContext() {
  const context = useContext(MeuContext);
  if (!context) {
    throw new Error('useMeuContext deve ser usado dentro de um MeuContextProvider');
  }
  return context;
}
