import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Esquema de validación para el formulario
const bookSchema = z.object({
  book_id: z.number(),
  title: z.string().min(1, 'El título es requerido.'),
  author: z.string().min(1, 'El autor es requerido.'),
  photo: z.string().url('Debe ser una URL válida.'),
  type: z.string().min(1, 'El tipo es requerido.'),
  price: z.number().min(0, 'El precio es requerido.'),
});

// Tipo de datos para el formulario
type FormData = z.infer<typeof bookSchema>;

const EditBook: React.FC = () => {
  const navigate = useNavigate();
  const { book_id } = useParams<{ book_id: string }>();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(bookSchema),
  });

  useEffect(() => {
    if (book_id) {
      axios.get(`http://localhost:3000/books/${book_id}`)
        .then(response => {
          const bookData = response.data;
          Object.keys(bookData).forEach(key => {
            setValue(key as keyof FormData, bookData[key]);
          });
        })
        .catch(error => console.error('Error al cargar los datos del libro:', error));
    }
  }, [book_id, setValue]);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const updatedData = {
      ...data,
      price: parseFloat(data.price.toString()),
    };
    axios.put(`http://localhost:3000/books/${updatedData.book_id}`, updatedData)
      .then(() => {
        console.log('Libro actualizado con éxito');
        navigate('/');
      })
      .catch(error => console.error('Error al actualizar el libro:', error));
  };
  return (
    <div className="flex justify-center items-start pt-5 my-5 border-dashed h-1/3">
      <div className="w-2/3 h-2/3 shadow-md rounded px-8 pt-6 pb-8 mb-4 hover:bg-white">
        <h1 className="text-2xl font-bold m-1 text-slate-800 hover:text-lime-200">Editar Libro</h1>
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
              type="text"
              {...register('price', {
                setValueAs: (value) => parseFloat(value) || 0, // Convierte el valor del input a un número flotante
              })}
              placeholder="Introduce el precio"
            />
            {errors.price && <p className="text-red-500 text-xs italic">{errors.price.message}</p>}
            <button
  className="bg-slate-500 hover:bg-slate-800 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline float-right mt-5"
  type="submit"
  onClick={() => console.log('El botón fue clickeado')} // Agrega esto para probar
>
  Editar Libro
</button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBook;
