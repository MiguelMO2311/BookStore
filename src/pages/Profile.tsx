import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

type FormData = {
  name: string;
  surname: string;
  email: string;
  photo: FileList;
};

const Profile: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('surname', data.surname);
      formData.append('email', data.email);
      if (data.photo.length > 0) {
        formData.append('photo', data.photo[0]);
      }

      // Reemplaza 'tu-endpoint-de-actualización' con la URL de tu endpoint
      const response = await axios.post('tu-endpoint-de-actualización', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('Perfil actualizado con éxito:', response.data);
      // Aquí puedes manejar la navegación o la actualización de la UI según sea necesario
    } catch (error) {
      console.error('Error al actualizar el perfil:', error);
      // Maneja el error en la UI si es necesario
    }
  };

  return (
    <div className="flex justify-center items-start pt-10 border-dashed ">
      <div className="w-2/3 shadow-md rounded px-8 pt-6 pb-8 mb-4 hover:bg-white">
        <h1 className="text-2xl font-bold mb-3 text-slate-800 hover:text-indigo-300">Perfil</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Nombre:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none bg-green-100 hover:bg-white"
              id="name"
              type="text"
              {...register('name', { required: 'El nombre es requerido.' })}
            />
            {errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="surname">
              Apellido:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none bg-green-100 hover:bg-white"
              id="surname"
              type="text"
              {...register('surname', { required: 'El apellido es requerido.' })}
            />
            {errors.surname && <p className="text-red-500 text-xs italic">{errors.surname.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none bg-green-100 hover:bg-white"
              id="email"
              type="email"
              {...register('email', {
                required: 'El email es requerido.',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'El formato del email no es válido.'
                }
              })}
            />
            {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photo">
              Foto:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none bg-green-100 hover:bg-white"
              id="photo"
              type="file"
              {...register('photo', { required: 'La foto es requerida.' })}
            />
            {errors.photo && <p className="text-red-500 text-xs italic">La foto es requerida.</p>}
          </div>
          <button type="submit" className="bg-slate-500 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Actualizar Perfil
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
