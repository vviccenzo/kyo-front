import React, { createContext, useContext, useState } from 'react';

const MeuContext = createContext();

export default function Context({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({
    isLogged: false
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <MeuContext.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen,
        toggleMenu,
        userInfo,
        setUserInfo
      }}>
      {children}
    </MeuContext.Provider>
  );
}

export function useMeuContext() {
  const context = useContext(MeuContext);
  if (!context) {
    throw new Error('useMeuContext deve ser usado dentro de um MeuContextProvider');
  }
  return context;
}
