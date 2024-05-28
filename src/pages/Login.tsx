import { useState } from "react";

function LogIn() {
  // Paso 1: Crear el estado para los inputs
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // Aquí puedes manejar la lógica de inicio de sesión
    console.log('Usuario:', name);
    console.log('Contraseña:', password);
  };

  return (
    <div>
      <h1>Page LogIn</h1>
      <form onSubmit={handleSubmit}>
        {/* Paso 2 y 3 para el input de nombre */}
        <label>
          Nombre:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        {/* Paso 2 y 3 para el input de contraseña */}
        <label>
          Contraseña:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LogIn;
