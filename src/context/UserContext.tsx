// src/context/UserContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../models/User'; // Importa User desde tu archivo models

export const UserContext = createContext<{
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  loading: boolean;
}>({
  user: null, // Inicializa el estado del usuario con null
  setUser: () => { },
  loading: true, // Inicializa el estado de carga con true
});

type UserProviderProps = {
  children: ReactNode;
};

// Crear el componente UserProvider con TypeScript
export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null); // Inicializa el estado del usuario con null
  const [loading, setLoading] = useState(true); // Inicializa el estado de carga con true

  // Cuando se carga la página, comprobamos si hay información del usuario en el localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('userInfo');

    if (storedUser) {
        try {
            setUser(JSON.parse(storedUser)); // Guarda el usuario si el JSON es válido
        } catch (error) {
            console.error("Error al parsear userInfo:", error);
            localStorage.removeItem('userInfo'); // Elimina el dato si está corrupto
        }
    }
    
    setLoading(false); // Finaliza la carga inicial

}, []); // ← Este array vacío asegura que solo se ejecute una vez

  // Cuando el estado del usuario cambia, actualizamos la información del usuario en el localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem('userInfo', JSON.stringify(user));
    } else {
      localStorage.removeItem('userInfo');
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
