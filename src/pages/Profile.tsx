import React from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  surname: string;
  email: string;
  photo: string;
};

const Profile: React.FC = () => {
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<FormData>();
  const photoValue = watch('photo'); // Observa el valor actual del campo 'photo'

  const onSubmit = (data: FormData) => {
    console.log('Datos del perfil actualizados:', data);
  };

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setValue('photo', (e.target as FileReader).result as string);
      };
      reader.readAsDataURL(target.files[0]);
    }
  };

  return (
    <div className="flex justify-center items-start pt-10 border-dashed ">
      <div className="w-2/3 shadow-md rounded px-8 pt-6 pb-8 mb-4 hover:bg-white">
        <h1 className="text-2xl font-bold mb-3 text-slate-800 hover:text-indigo-300">Perfil</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex">
            <div className="flex-grow">
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
            </div>
            <div className="w-1/4 ml-4">
              <div className="">
                <label className="block text-gray-700 text-sm font-bold mt-1" htmlFor="photo">
                  Foto:
                </label>
                <input
                  type="file"
                  id="photo"
                  {...register('photo')}
                  className="text-sm text-transparent file:m-2 file:py-2 file:px-4 file:rounded-sm file:border-0 file:text-sm file:font-semibold file:bg-slate-500 file:text-white hover:file:bg-slate-800"
                  onChange={handlePhotoChange}
                />
                <div className="flex flex-col justify-center items-center w-36 h-36 bg-cover bg-center rounded p-2">
                  <img src={photoValue} alt="Foto del usuario" className="h-full w-full object-cover rounded" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-slate-500 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-[55%] sm:py-2 sm:px-4" type="submit">
              Actualizar Perfil
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
