import BookItem from "../components/BookItem";

// Definición del tipo Book
type Book = {
  bookName: string;
  bookImage: string;
  author: string;
  genre: string;
  price: number;
};

// Array de libros
const books: Book[] = [
  {
    bookName: 'To Kill a Mockingbird',
    bookImage: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1369587093i/455592.jpg',
    author: 'Harper Lee',
    genre: 'Southern Gothic, Bildungsroman',
    price: 10.99
  },
  {
    bookName: '1984',
    bookImage: 'https://imagessl6.casadellibro.com/a/l/s5/16/9788408287216.webp',
    author: 'George Orwell',
    genre: 'Political fiction, science fiction',
    price: 9.99
  },
  {
    bookName: 'The Great Gatsby',
    bookImage: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1490528560i/4671.jpg',
    author: 'F. Scott Fitzgerald',
    genre: 'Tragedy',
    price: 14.99
  },
  {
    bookName: 'Moby Dick',
    bookImage: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327940656i/153747.jpg',
    author: 'Herman Melville',
    genre: 'Adventure fiction, Epic, Sailor\'s yarn',
    price: 12.99
  }
];

function BooksPage() {
  return (
    <div className="flex flex-wrap justify-center items-center h-full pt-20 rounded-lg">
      {books.map((book) => (
        <BookItem key={book.bookName} book={book} />
      ))}
    </div>
  );
}

export default BooksPage;
