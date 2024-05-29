import { Book } from "../models/Book";

// Array de libros
const books: Book[] = [
    {
        book_id: 1,
        user_id: 1,
        title: 'To Kill a Mockingbird',
        photo: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1369587093i/455592.jpg',
        author: 'Harper Lee',
        type: 'Hard-Cover',
        price: 10.99
    },
    {
        book_id: 2,
        user_id: 1,
        title: '1984',
        photo: 'https://imagessl6.casadellibro.com/a/l/s5/16/9788408287216.webp',
        author: 'George Orwell',
        type: 'Soft-Cover',
        price: 9.99
    },
    {
        book_id: 3,
        user_id: 1,
        title: 'The Great Gatsby',
        photo: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1490528560i/4671.jpg',
        author: 'F. Scott Fitzgerald',
        type: 'Hard-Cover',
        price: 14.99
    },
    {
        book_id: 4,
        user_id: 2,
        title: 'Moby Dick',
        photo: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327940656i/153747.jpg',
        author: 'Herman Melville',
        type: 'Soft-Cover',
        price: 12.99
    }
];

export default books