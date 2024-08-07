import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';
import { Book } from '../models/Book';

const BooksPage: React.FC = () => {
  const [userBooks, setUserBooks] = useState<Book[]>([]);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
    if (userInfo.user_id === undefined || isNaN(Number(userInfo.user_id))) {
      console.error('Error: user_id no válido:', userInfo.user_id);
      return;
    }
    const userId = Number(userInfo.user_id);

    axios.get(`http://localhost:3000/books/${userId}`)
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
      toast.success('Libro eliminado correctamente', { position: "top-center", autoClose: 2000 });
    } catch (error) {
      console.error(error);
      toast.error('Hubo un error al eliminar el libro', { position: "top-center", autoClose: 2000 });
    }
  };


  return (
    <div className="flex justify-center items-center flex-wrap "
      style={{ backgroundImage: `url('/imgs/img_fondo_addBook.jpg')`, backgroundSize: 'cover' }}>
      <ToastContainer />
      {userBooks.map(book => (
        <div key={book.book_id} className="m-8" style={{ width: '240px' }}>
          <BookCard book={book} handleDelete={handleDelete} />
        </div>
      ))}
    </div>
  );
}

const BookCard: React.FC<{ book: Book, handleDelete: (book_id: number) => void }> = ({ book, handleDelete }) => {
  return (
    <div className="flex flex-col bg-green-200 shadow-lg rounded-md overflow-hidden" style={{ height: '500px' }}>
      <div className="h-[400px] flex justify-center items-center bg-cover bg-center " style={{ backgroundImage: `url(${book.photo})` }}>
      </div>
      <div className="p-4 flex-grow h-24">
        <h2 className="text-xl text-violet-600 font-bold">{book.title}</h2>
        <p className="text-md text-indigo-600">{book.author}</p>
      </div>
      <div className="flex justify-between items-center p-4 border-t">
        <div className="text-lg font-bold">{book.price}€</div>
        <div>
          <FaPencilAlt className="inline-block text-lime-500 hover:text-yellow-500 cursor-pointer"
            onClick={() => window.location.href = `./edit-book/${book.book_id}`} />
          <FaTrash className="inline-block text-red-700 hover:text-red-400 cursor-pointer ml-2"
            onClick={() => handleDelete(book.book_id)} />
        </div>
      </div>
    </div>
  );
};

export default BooksPage;
