import React, { createContext, useContext, useEffect, useState } from 'react';

const MeuContext = createContext();

export default function Context({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState({});
  const [isLogged, setIsLogged] = useState(localStorage.getItem('isLogged'));

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (localStorage.getItem('user')) {
      const userInfo = localStorage.getItem('user');
      const userObj = JSON.parse(userInfo);

      setUser(userObj);
    } else {
      setUser({});
    }
  }, []);

  return (
    <MeuContext.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen,
        toggleMenu,
        isLogged,
        setIsLogged,
        user,
        setUser
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
