// src/context/UserContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

type UserType = {
  user_id: number;
  name: string;
  surname: string;
  email: string;
  photo: string;
  password: string;

}| null;

export const UserContext = createContext<{
  user: UserType;
  setUser: React.Dispatch<React.SetStateAction<UserType>>;
}>({
  user: {user_id:1, name: '', surname: '', email: '', photo:'', password:'' },
  setUser: () => {},
});

type UserProviderProps = {
  children: ReactNode;
};

// Crear el componente UserProvider con TypeScript
export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserType>({
    user_id: 1,
    name: 'Name Falso',
    surname: 'Surname falso',
    email: 'usuario@falso.com',
    photo: 'Falsa foto',
    password: 'Falso Password'
    // Añade aquí más campos según sea necesario
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
