import { GiOpenBook } from "react-icons/gi"; 
import { useEffect, useState, useRef } from "react";

function Home() {
  const [showTitle, setShowTitle] = useState(true);
  const colors = ['green', 'white', 'goldenrod'] ; // Array de colores para los iconos de book
  const homeRef = useRef<HTMLDivElement>(null); // Inicializa la referencia con null y especifica el tipo de elemento

  useEffect(() => {
    const interval = setInterval(() => {
      setShowTitle(show => !show);
    }, 1000); // Cambia el título cada 3 segundos
    return () => clearInterval(interval);
  }, []);

  // Función para generar múltiples elementos span con el icono "book" en diferentes colores
  const generateBooks = () => {
    const books = [];
    // Asegúrate de que homeRef.current no sea null antes de usar sus propiedades
    const offsetWidth = homeRef.current?.offsetWidth ?? 0;
    const offsetHeight = homeRef.current?.offsetHeight ?? 0;
    const headerHeight = 200; // Altura estimada del encabezado

    for (let i = 0; i < 75; i++) { // Genera 75iconos"book"
      const color = colors[Math.floor(Math.random() * colors.length)];
      const x = Math.random() * (offsetWidth - 70); // Asegura que 'x' esté dentro del ancho de Home
      const y = Math.random() * (offsetHeight - headerHeight) + headerHeight; // Asegura que 'y' esté por debajo del encabezado
      books.push(
        <span key={i} style={{ position: 'absolute', left: x, top: y, color: color, fontSize: 'small',fontFamily:'italic' }}>
        <GiOpenBook />
        </span>
      );
    }
    return books;
  };

  return (
    <div ref={homeRef} className="bg-cover bg-center h-screen transition-all duration-1000" style={{ backgroundImage: "url('https://img.freepik.com/foto-gratis/coleccion-biblioteca-antigua-naturaleza-muerta-sabiduria-generada-ia_24911-72372.jpg?size=626&ext=jpg')", backgroundSize:"cover", maxHeight:"550px"}}>
      {showTitle && (
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-8xl opacity-0 animate-fadeInOut size-max">
          ¡Book Store!
        </h1>
      )}
      {/* Renderiza los iconos "book" generados dentro de los límites de Home y por debajo del encabezado */}
      {generateBooks()}
    </div>
  );
}

export default Home;
