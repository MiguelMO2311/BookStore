import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { User } from '../models/User';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Profile: React.FC = () => {
    const navigate = useNavigate();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<User>();
  const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
  const user_id = Number(userInfo.user_id || '0');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/users/${user_id}`);
        const { name, surname, email, photo } = response.data;
        setValue('name', name);
        setValue('surname', surname);
        setValue('email', email);
        setValue('photo', photo);
             
      } catch (error) {
        console.error('Error al cargar los datos del usuario:', error);
        toast.error('Error al cargar los datos del usuario.');
      }
    };

    fetchUserData();
  }, [setValue, user_id]);

  const onSubmit = async (data: User) => {
    try {
      const response = await axios.put(`http://localhost:3000/users/${user_id}`, data);
      console.log('Perfil actualizado con éxito:', response.data);
      toast.success('Perfil actualizado con éxito!');
    } catch (error) {
      console.error('Error al actualizar el perfil:', error);
      toast.error('Error al actualizar el perfil.');
      navigate('/BooksPage');
    }
  };
  

  return (
    <div className="flex justify-center items-start pt-10 border-dashed ">
      <div className="w-2/3 shadow-md rounded px-8 pt-6 pb-8 mb-4 hover:bg-white">
        <h1 className="text-2xl font-bold mb-3 text-slate-800 hover:text-slate-400">Perfil</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 flex justify-between">
          <div className="w-3/4">
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
                type="text"
                {...register('photo', { required: 'La foto es requerida.' })}
              />
              {errors.photo && <p className="text-red-500 text-xs italic">La foto es requerida.</p>}
            </div>
          </div>
          <div className="w-1/4 flex flex-col items-center justify-between mt-7 ml-4">
            <img src={userInfo.photo} alt="User" style={{width: '150px', height: '200px', borderRadius: '10%'}} />
            <button type="submit" className="bg-slate-500 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Actualizar Perfil
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
