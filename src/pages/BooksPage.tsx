import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';
import { Book } from '../models/Book'; // Importa el tipo Book


const BooksPage: React.FC = () => {
  const [userBooks, setUserBooks] = useState<Book[]>([]);

  useEffect(() => {
    // Obtén el objeto userInfo del localStorage y conviértelo a un objeto JavaScript
    const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');

    // Obtén el user_id del objeto userInfo y conviértelo a un número
    const userId = Number(userInfo.user_id);

    // Comprueba si el userId es un número válido
    if (isNaN(userId) || userId === 0) {
      console.error('Error: user_id no válido:', userId);
      return;
    }

    axios.get(`http://localhost:3000/books/${userId}`) // Usa el user_id en la solicitud a la API
      .then(response => {
        const booksData = Array.isArray(response.data) ? response.data : [];
        console.log('Respuesta de la API:', booksData);
        setUserBooks(booksData);
      })
      .catch(error => {
        console.error(`Error al obtener libros del usuario ${userId}:`, error);
      });
  }, []);

  const handleDelete = async (book_id: number) => {
    try {
      const response = await axios.delete(`http://localhost:3000/book/${book_id}`);
  
      if (response.status !== 200) {
        throw new Error('Error al eliminar el libro');
      }
  
      setUserBooks(prevBooks => prevBooks.filter(book => book.book_id !== book_id));
      toast.success('Libro eliminado correctamente');
    } catch (error) {
      console.error(error);
      toast.error('Hubo un error al eliminar el libro');
    }
  };
  
  return (
    <div className="flex justify-center items-center flex-wrap">
      {userBooks.map(book => (
        <div key={book.book_id} className="m-4" style={{ width: '240px' }}>
          <BookCard book={book} handleDelete={handleDelete} />
        </div>
      ))}
    </div>
  );
};

const BookCard: React.FC<{ book: Book, handleDelete: (book_id: number) => void }> = ({ book, handleDelete }) => {
  return (
    <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden" style={{ height: '500px' }}>
      <div className="h-80 flex justify-center items-center bg-cover bg-center " style={{ backgroundImage: `url(${book.photo})` }}>
        {/* La imagen del libro se ajustará al div contenedor */}
      </div>
      <div className="p-4 flex-grow">
        <h2 className="text-xl text-blue-700 font-bold">{book.title}</h2>
        <p className="text-md text-blue-500">{book.author}</p>
      </div>
      <div className="flex justify-between items-center p-4 border-t">
        <div className="text-lg font-bold">{book.price}€</div>
        <div>
          <FaPencilAlt className="inline-block text-gray-700 hover:text-gray-500 cursor-pointer"
            onClick={() => window.location.href = `./edit-book/${book.book_id}`} />
          <FaTrash className="inline-block text-red-700 hover:text-red-500 cursor-pointer ml-2"
            onClick={() => handleDelete(book.book_id)} />
        </div>
      </div>
    </div>
  );
};

export default BooksPage;
