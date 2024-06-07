import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import defaultBookImage from '../assets/No_Book.jpg'; // Importa la imagen por defecto

// Define el esquema de Zod para la validación
const bookSchema = z.object({
  title: z.string().min(1, 'El título es requerido.'),
  author: z.string().min(1, 'El autor es requerido.'),
  photo: z.string().url('Debe ser una URL válida.'),
  type: z.string().min(1, 'El tipo es requerido.'),
  price: z.string().min(1, 'El precio es requerido.').regex(/^\d+(\.\d{1,2})?$/, 'Formato de precio no válido.'),
});

type FormData = z.infer<typeof bookSchema>;

const AddBook: React.FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(bookSchema),
  });
  const [bookImage, setBookImage] = useState(defaultBookImage); // Usa la imagen por defecto como valor inicial

  const onSubmit: SubmitHandler<FormData> = (data) => {
    // Obtén el userInfo del almacenamiento local
    const userInfoString = localStorage.getItem('userInfo');
     // Convierte el precio a un número
     const priceAsNumber = Number(data.price);
    
    if (userInfoString !== null) {
      const userInfo = JSON.parse(userInfoString);
      
      // Asegúrate de que userInfo y userInfo.user_id existen
      if (userInfo && userInfo.user_id) {
        // Añade el user_id al objeto data
        const dataWithUserId = { ...data, user_id: Number(userInfo.user_id), price: priceAsNumber };
        console.log(dataWithUserId)
        axios.post('http://localhost:3000/add', dataWithUserId)
        .then(response => {
          // Aquí puedes manejar la respuesta del servidor
          console.log(response.data);
          toast.success('¡Libro añadido con éxito!');
          navigate('/booksPage');
        })
        .catch(error => {
          toast.error('Error al añadir el libro: ' + error.message);
        });
      } else {
        console.error('userInfo o userInfo.user_id no existen');
      }
    }
  };

  return (
    <div className="flex justify-center items-start pt-5 my-5 border-dashed h-1/3">
      <ToastContainer />
      <div className="w-2/3 h-2/3 shadow-md rounded px-8 pt-6 pb-8 mb-4 hover:bg-white">
        <h1 className="text-2xl font-bold m-1 text-slate-800 hover:text-green-400">Añadir Libro</h1>
        <div className="flex justify-between">
          <div className="w-3/4">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                  Título:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none bg-green-100 hover:bg-white"
                  id="title"
                  type="text"
                  {...register('title')}
                  placeholder="Introduce el título"
                />
                {errors.title && <p className="text-red-500 text-xs italic">{errors.title.message}</p>}
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="author">
                  Autor:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none bg-green-100 hover:bg-white"
                  id="author"
                  type="text"
                  {...register('author')}
                  placeholder="Introduce el autor"
                />
                {errors.author && <p className="text-red-500 text-xs italic">{errors.author.message}</p>}
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
                  Tipo:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none bg-green-100 hover:bg-white"
                  id="type"
                  type="text"
                  {...register('type')}
                  placeholder="Introduce el tipo"
                />
                {errors.type && <p className="text-red-500 text-xs italic">{errors.type.message}</p>}
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photo">
                  URL de la Foto:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none bg-green-100 hover:bg-white"
                  id="photo"
                  type="text"
                  {...register('photo')}
                  placeholder="Introduce la URL de la foto"
                  onChange={(e) => setBookImage(e.target.value)}
                />
                {errors.photo && <p className="text-red-500 text-xs italic">{errors.photo.message}</p>}
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                  Precio:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none bg-green-100 hover:bg-white"
                  id="price"
                  type="number"
                  step="0.01"
                  {...register('price')}
                  placeholder="Introduce el precio"
                />
                {errors.price && <p className="text-red-500 text-xs italic">{errors.price.message}</p>}
              </div>
              <button
                className="bg-slate-500 hover:bg-slate-800 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline float-right mt-5"
                type="submit"
              >
                Añadir Libro
              </button>
            </form>
          </div>
          <div className="w-1/4 flex flex-col items-center justify-between mt-8 ml-6">
            <img src={bookImage} alt="Book" style={{width: '180px', height: '360px', borderRadius: '10%'}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
