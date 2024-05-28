import React, { useState, FormEvent } from 'react';

type FormData = {
  name: string;
  password: string;
};

const LogIn: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', password: '' });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log('Usuario:', formData.name);
    console.log('Contraseña:', formData.password);
  };

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
              className="bg-green-100 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white hover:bg-white"
              id="name"
              type="text"
              name="name"
              placeholder="Tu nombre"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Contraseña:
            </label>
            <input
              className="bg-green-100 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white hover:bg-white"
              id="password"
              type="password"
              name="password"
              placeholder="Tu contraseña"
              value={formData.password}
              onChange={handleChange}
            />
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
