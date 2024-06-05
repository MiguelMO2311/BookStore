import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';

type Book = {
  book_id: number;
  user_id: number;
  title: string;
  photo: string;
  author: string;
  type: string;
  price: number;
};

const BooksPage: React.FC = () => {
  const [userBooks, setUserBooks] = useState<Book[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3000/books/1')
      .then(response => {
        const booksData = Array.isArray(response.data) ? response.data : [];
        console.log('Respuesta de la API:', booksData);
        setUserBooks(booksData);
      })
      .catch(error => {
        console.error('Error al obtener libros del usuario 1:', error);
      });
  }, []);

  return (
    <div className="flex justify-center items-center flex-wrap">
      {userBooks.map(book => (
        <div key={book.book_id} className="m-4" style={{ width: '240px' }}>
          <BookCard book={book} />
        </div>
      ))}
    </div>
  );
};

const BookCard: React.FC<{ book: Book }> = ({ book }) => {
  const handleDelete = (bookId: number) => {
    // Implementar la lógica de eliminación aquí
    console.log(`Eliminar libro con ID: ${bookId}`);
    // Aquí deberías agregar la llamada a la API para eliminar el libro
  };

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
