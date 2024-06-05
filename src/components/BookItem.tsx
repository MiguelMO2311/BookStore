import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CiTrash } from "react-icons/ci";
import { BsPencilSquare } from "react-icons/bs";
import { Book } from "../models/Book";

const BookItem: React.FC<{ book: Book }> = ({ book }) => {
  const navigate = useNavigate();

  const handleEditBook = () => {
    navigate(`/edit-book/${book.book_id}`, { state: { book } });
  };
  
  const handleDeleteBook = () => {
    deleteBook(book.book_id).then(() => {
      console.log(`Libro con ID ${book.book_id} ha sido eliminado.`);
      // Aquí podrías actualizar el estado o redirigir al usuario
    }).catch((error) => {
      console.error('Hubo un error al eliminar el libro:', error);
    });
  };

  return (
    <div className="flex flex-col items-center m-4 bg-slate-200 rounded-lg">
      <div className="w-52 h-72 bg-gray-200 pt-3">
        <img className="max-h-full max-w-full mx-auto object-cover" src={book.photo} alt={book.title} />
      </div>
      <h2 className="text-lg font-bold text-blue-500">{book.title}</h2>
      <h3 className="text-sm font-semibold text-black">{book.author}</h3>
      <p className={`text-xs ${book.type === 'Soft-Cover' ? 'bg-yellow-200 text-orange-500' : 'bg-yellow-600'} p-1 rounded`}>
        {book.type}
      </p>
      <p className="text-lg font-semibold text-green-500">
        {book.price.toFixed(2)} <span className="text-lg font-normal text-black">€</span>
      </p>
      <div className="space-x-2">
        <button aria-label="Edit" className="text-blue-500" onClick={handleEditBook}><BsPencilSquare /></button>
        <button aria-label="Delete" className="text-red-500" onClick={handleDeleteBook}><CiTrash /></button>
      </div>
    </div>
  );
};

// Función para eliminar el libro, podría ser una acción de Redux o una llamada a una API
const deleteBook = async (book_id: number) => {
  try {
    // Aquí iría la llamada a la API para eliminar el libro
    // Por ejemplo: await api.delete(`/books/${bookId}`);
    console.log(`Libro con ID ${book_id} ha sido eliminado.`);
    // Actualizar el estado de la lista de libros si es necesario
  } catch (error) {
    console.error('Hubo un error al eliminar el libro:', error);
  }
};

export default BookItem;
