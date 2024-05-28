
import books from "../config/books";
import BookItem from "./BookItem";

function BooksList() {
  return (
    <div className="flex flex-wrap justify-center items-center h-full pt-10 rounded-lg">
      {books.map((book) => (
        <BookItem key={book.title} book={book} />
      ))}
    </div>
  );
}

export default BooksList;