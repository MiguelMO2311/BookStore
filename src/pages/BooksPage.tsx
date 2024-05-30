
import { useEffect, useState } from "react";
import BooksList from "../components/BookList";

function BooksPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/books')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => setBooks(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="flex flex-row justify-center">
      <BooksList books={books} />
    </div>
  );
}

export default BooksPage;
