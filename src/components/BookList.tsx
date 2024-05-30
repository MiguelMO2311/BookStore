import BookItem from "./BookItem";

type Book = {
  book_id: number;
  user_id: number;
  title: string;
  photo: string;
  author: string;
  type: string;
  price: number;
};

function BooksList({ books }: { books: Book[] }) {
  return (
    <div className="flex flex-wrap justify-center items-center h-full pt-10 rounded-lg">
      {books.map((book) => (
        <BookItem key={book.book_id.toString()} book={book} />
      ))}
    </div>
  );
}

export default BooksList;
