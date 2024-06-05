import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Greet: React.FC = () => {
  const { user } = useContext(UserContext);
  // Asegúrate de que 'user' no sea null antes de acceder a 'user.name'
  return <h1>Hola, {user ? user.name : 'Invitado'}!</h1>;
};

export default Greet;
