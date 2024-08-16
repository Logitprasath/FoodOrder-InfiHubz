import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ userName: 'Guest', userId: null, role: null });

  const logout = () => {
    setUser({ userName: 'Guest', userId: null, role: null });
    // Optionally clear localStorage or sessionStorage
    localStorage.removeItem('userData');
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);