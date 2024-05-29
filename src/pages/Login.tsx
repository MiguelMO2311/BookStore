import React, { useState, FormEvent } from 'react';

// Definición de tipos para los datos del formulario y los errores
type FormData = {
  name: string;
  password: string;
};

type FormErrors = {
  name?: string;
  password?: string;
};

const LogIn: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', password: '' });
  const [errors, setErrors] = useState<FormErrors>({});

  // Función para validar el formulario
  const validateForm = (): boolean => {
    const tempErrors: FormErrors = {};
    let formIsValid: boolean = true;

    // Validación del nombre
    if (!formData.name) {
      formIsValid = false;
      tempErrors.name = 'El nombre es requerido.';
    } else if (formData.name.length < 3) {
      formIsValid = false;
      tempErrors.name = 'El nombre debe tener al menos 3 caracteres.';
    }

    // Validación de la contraseña
    if (!formData.password) {
      formIsValid = false;
      tempErrors.password = 'La contraseña es requerida.';
    } else if (formData.password.length < 4) {
      formIsValid = false;
      tempErrors.password = 'La contraseña debe tener al menos 5 caracteres.';
    } else if (formData.password.length < 4 || formData.password.length > 12) {
      formIsValid = false;
      tempErrors.password = 'La contraseña debe tener entre 4 y 12 caracteres.';
    }

    setErrors(tempErrors);
    return formIsValid;
  };

  // Manejador del envío del formulario
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (validateForm()) {
      console.log('Usuario:', formData.name);
      console.log('Contraseña:', formData.password);
    }
  };

  // Manejador de cambios en los campos del formulario
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="flex justify-center items-center pt-24 border-dashed">
      <div className="w-1/3 shadow-md rounded px-8 pt-6 pb-8 mb-4 hover:bg-white">
        <h1 className="text-2xl font-bold mb-4 text-slate-800 hover:text-yellow-500">Logueate</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Nombre:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white hover:bg-white"
              id="name"
              type="text"
              name="name"
              placeholder="Tu nombre"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Contraseña:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white hover:bg-white"
              id="password"
              type="password"
              name="password"
              placeholder="Tu contraseña"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-slate-500 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-[45%]" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
