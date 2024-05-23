

// Definición del tipo Book
type Book = {
    bookName: string;
    bookImage: string;
    author: string;
    genre: string;
    price: number;
  };
  
  const BookItem: React.FC<{ book: Book }> = ({ book }) => {
    return (
      <div className="flex flex-col items-center m-4 bg-slate-200  rounded-lg">
        <div className="w-52 h-72 bg-gray-200 pt-3">
          <img className="max-h-full max-w-full mx-auto object-cover" src={book.bookImage} alt={book.bookName} />
        </div>
        <h2 className="text-lg font-bold text-blue-500">{book.bookName}</h2>
        <h3 className="text-sm font-semibold text-indigo-600">{book.author}</h3>
        <p className="text-xs">{book.genre}</p>
        <p className="text-lg font-bold text-red-500">{book.price}<span className="text-lg font-normal text-black"> €</span></p>

      </div>
    );
  };
  
  export default BookItem;