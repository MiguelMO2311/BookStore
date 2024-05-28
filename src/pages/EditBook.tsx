import React, { useState, FormEvent } from 'react';

type FormData = {
  title: string;
  author: string;
  type: string;
  photo: string;
  price: string;
};

const EditBook: React.FC = () => {
  // Suponiendo que obtienes un libro existente para editar
  // Aquí deberías reemplazar los valores por defecto con los datos del libro a editar
  const [formData, setFormData] = useState<FormData>({
    title: 'Título existente',
    author: 'Autor existente',
    type: 'Tipo existente',
    photo: '../assets/Default_Book.jpg', // Ruta a la imagen por defecto
    price: 'Precio existente',
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Aquí deberías implementar la lógica para actualizar los datos del libro
    console.log('Datos del libro actualizados:', formData);
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
    <div className="flex justify-center items-start pt-5 border-dashed h-[80%]">
      <div className="w-2/3 shadow-md rounded px-8 pt-6 pb-8 mb-4 hover:bg-white">
        <h1 className="text-2xl font-bold m-3 text-slate-800 hover:text-green-300">Editar Libro</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex">
            <div className="w-1/4 mr-4">
              {/* Campo de photo */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold m-2" htmlFor="photo">
                  Foto:
                </label>
                <input
                  type="file"
                  id="photo"
                  name="photo"
                  className="text-sm text-transparent file:m-2 file:py-2 file:px-4 file:rounded-sm file:border-0 file:text-sm file:font-semibold file:bg-slate-500 file:text-white hover:file:bg-slate-800"
                  onChange={handlePhotoChange}
                />
                {/* Contenedor de la imagen */}
                <div className="flex flex-col justify-center items-center w-full h-56 bg-cover bg-center rounded p-2">
                  {/* Aquí se mostrará la imagen */}
                  <img src={formData.photo} alt="Portada del libro" className="h-full w-full object-cover rounded" />
                </div>
              </div>
            </div>
            <div className="flex-grow">
              {/* Campos del formulario excepto photo */}
              {Object.entries(formData).filter(([key]) => key !== 'photo').map(([key, value]) => (
                <div key={key} className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={key}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}:
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none bg-green-100 hover:bg-white"
                    id={key}
                    type="text"
                    name={key}
                    placeholder={`Introduce el ${key}`}
                    value={value}
                    onChange={handleChange}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-slate-500 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-[55%]" type="submit">
              Editar Libro
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBook;
