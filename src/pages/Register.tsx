import React, { useState, FormEvent } from 'react';

type FormData = {
  name: string;
  surname: string;
  email: string;
  photo: string;
  password: string;
  passwordRepeat: string;
};

const Register: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    surname: '',
    email: '',
    photo: '../assets/No_User.jpg', // Ruta a la imagen por defecto
    password: '',
    passwordRepeat: ''
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log('Datos del formulario:', formData);
  };

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData(prevState => ({ ...prevState, photo: (e.target as FileReader).result as string }));
      };
      reader.readAsDataURL(target.files[0]);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="flex justify-center items-start border-dashed pt-3">
      <div className="w-2/3 shadow-md rounded px-8 pt-4 pb-4 mb-4 hover:bg-white"> {/* Ajuste de padding-top y padding-bottom */}
        <h1 className="text-2xl font-bold mb-2 text-slate-800 hover:text-lime-500">Regístrate</h1> {/* Ajuste de margin-bottom */}
        <div className="flex">
          <div className="flex-grow">
            <form onSubmit={handleSubmit} className="space-y-4"> {/* Ajuste de espacio entre elementos del formulario */}
              {/* Campos del formulario */}
              {Object.entries(formData).map(([key, value]) => (
                <div key={key} className="mb-3"> {/* Ajuste de margin-bottom */}
                  <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor={key}> {/* Ajuste de margin-bottom */}
                    {key.charAt(0).toUpperCase() + key.slice(1)}:
                  </label>
                  <input
  className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none bg-green-100 hover:bg-white"
  // Ajuste de padding-y
  id={key}
  type={key.includes('password') || key === 'email' ? key : 'text'}
  name={key}
  placeholder={`Introduce tu ${key}`}
  value={value}
  onChange={handleChange}
/>

                </div>
              ))}
              <div className="flex items-center justify-between">
                <button className="bg-slate-500 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-[105%]" type="submit">
                  Regístrate
                </button>
              </div>
            </form>
          </div>
          <div className="w-1/4 ml-4">
            {/* Campo de photo */}
            <div className="mb-4 mt-24"> {/* Ajuste de margin-top */}
              <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="photo"> {/* Ajuste de margin-bottom */}
                Foto:
              </label>
              <input
                type="file"
                id="photo"
                name="photo"
                className="text-sm text-transparent file:m-2 file:py-2 file:px-4 file:rounded-sm file:border-0 file:text-sm file:font-semibold file:bg-slate-500 file:text-white hover:file:bg-slate-800"
                onChange={handlePhotoChange}
              />
            </div>
            {/* Contenedor de la imagen */}
            <div className="flex flex-col justify-center items-center w-40 h-40 bg-cover bg-center rounded p-2"> {/* Ajuste de altura */}
              {/* Aquí se mostrará la imagen */}
              <img src={formData.photo} alt="Foto del usuario" className="h-full w-full object-cover rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
