import { CiTrash } from "react-icons/ci"; 
import { BsPencilSquare } from "react-icons/bs"; 
import { Book } from "../models/book";

const BookItem: React.FC<{ book: Book }> = ({ book }) => {
  const handleEditBook = () => {
    // Aquí se definirá lo que hará el evento hadleEditBook cuando se haga clic en el botón de editar
    console.log("Editar libro");
  };

  const handleDeleteBook = () => {
   // Aquí se definirá lo que hará el evento hadleDeleteBook cuando se haga clic en el botón de delete
    console.log("Eliminar libro");
  };

  return (
    <div className="flex flex-col items-center m-4 bg-slate-200 rounded-lg">
      <div className="w-52 h-72 bg-gray-200 pt-3">
        <img className="max-h-full max-w-full mx-auto object-cover" src={book.photo} alt={book.title} />
      </div>
      <h2 className="text-lg font-bold text-blue-500">{book.title}</h2>
      <h3 className="text-sm font-semibold text-black">{book.author}</h3>
      <p className="text-xs bg-yellow-600 text-white p-1 rounded">{book.type}</p>
      <div className="flex justify-between w-full px-4 items-center">
        <p className="text-lg font-semibold text-green-500">{book.price}<span className="text-lg font-normal text-black"> €</span></p>
        <div className="space-x-2">
          <button aria-label="Edit" className="text-blue-500" onClick={handleEditBook}><BsPencilSquare /></button>
          <button aria-label="Delete" className="text-red-500" onClick={handleDeleteBook}><CiTrash /></button>
        </div>
      </div>
    </div>
  );
};

export default BookItem;

