import { useState, useEffect, useRef } from 'react';
import { GiOpenBook } from 'react-icons/gi';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';

interface Book {
  id: string;
  volumeInfo: {
    title?: string;
    authors?: string[];
    imageLinks?: {
      thumbnail?: string;
    };
  };
}

function Home() {
  const [showTitle, setShowTitle] = useState(true);
  const colors = ['green', 'white', 'goldenrod'];
  const homeRef = useRef<HTMLDivElement>(null);
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowTitle((show) => !show);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const generateBooks = () => {
    const bookElements: JSX.Element[] = [];
    const offsetWidth = homeRef.current?.offsetWidth ?? 0;
    const offsetHeight = homeRef.current?.offsetHeight ?? 0;
    const headerHeight = 200;

    for (let i = 0; i < 75; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      const x = Math.random() * (offsetWidth - 70);
      const y = Math.random() * (offsetHeight - headerHeight) + headerHeight;
      bookElements.push(
        <span
          key={i}
          style={{
            position: 'absolute',
            left: x,
            top: y,
            color: color,
            fontSize: 'small',
            fontFamily: 'italic',
          }}
        >
          <GiOpenBook />
        </span>
      );
    }
    return bookElements;
  };

  const sliderSettingsTop = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  const sliderSettingsBottom = {
    ...sliderSettingsTop,
    rtl: true,
  };

  useEffect(() => {
    const fetchBooks = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          'https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=40'
        );
        setBooks(response.data.items || []);
      } catch (error) {
        console.error('Error al obtener los libros:', error);
      }
      setIsLoading(false);
    };

    fetchBooks();
  }, []);

  return (
    <div
      ref={homeRef}
      className="bg-cover bg-center h-screen transition-all duration-1000"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/foto-gratis/coleccion-biblioteca-antigua-naturaleza-muerta-sabiduria-generada-ia_24911-72372.jpg?size=626&ext=jpg')",
        backgroundSize: '95%',
        maxHeight: '550px',
      }}
    >
      {showTitle && (
        <h1
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-8xl opacity-0 animate-fadeInOut size-max"
        >
          ¡Book Store!
        </h1>
      )}
      {generateBooks()}
      {isLoading ? (
        <p>Cargando libros...</p>
      ) : (
        <>
          <Slider {...sliderSettingsTop} className='flex-4 pt-7'>
            {books.map((book) => (
              <div key={book.id} style={{ maxHeight: '125px' }}>
                <a href={`https://www.google.com/books/edition/_/${book.id}`} target="_blank" rel="noopener noreferrer">
                  <img className='max-h-10 bg-slate-600 text-white max-w-24 flex flex-wrap'
                    src={book.volumeInfo?.imageLinks?.thumbnail || ''}
                    alt={book.volumeInfo?.title || ''}
                    style={{ maxHeight: '100px' }}
                  />
                </a>
              </div>
            ))}
          </Slider>
          <Slider {...sliderSettingsBottom} className='flex-8 mt-72'>
            {books.map((book) => (
              <div key={book.id} style={{ maxHeight: '125px' }}>
                <a href={`https://www.google.com/books/edition/_/${book.id}`} target="_blank" rel="noopener noreferrer">
                  <img className='max-h-10 bg-slate-600 text-white max-w-24 flex flex-wrap'
                    src={book.volumeInfo?.imageLinks?.thumbnail || ''}
                    alt={book.volumeInfo?.title || ''}
                    style={{ maxHeight: '100px' }}
                  />
                </a>
              </div>
            ))}
          </Slider>
        </>
      )}
    </div>
  );
}

export default Home;
