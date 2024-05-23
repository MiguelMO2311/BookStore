import { useState, useEffect } from 'react';
import Logo from "./logo";
import SideBar from "./SideBar"; 
import Menu from "./Menu"; // Agrega la importación del componente Menu

const Header = () => {
    const [isOpenSidebar, setIsOpenSidebar] = useState(false);
    const [showMenu, setShowMenu] = useState(true); // Cambio aquí: Inicialmente mostramos el menú

    // Actualiza la visibilidad del menú según el tamaño de la pantalla
    useEffect(() => {
        const handleResize = () => {
            setShowMenu(window.innerWidth >= 768); // 768px es el ancho para modo md
        };

        // Agrega un listener para el evento de cambio de tamaño de la ventana
        window.addEventListener('resize', handleResize);
        handleResize(); // Llama a la función al inicio para establecer el valor inicial

        // Limpia el listener cuando el componente se desmonta
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <header className="relative max-h-30 p-3 bg-green-200 font-semibold flex justify-between items-center w-full">
                <Logo />
                <button 
                    className="md:hidden" 
                    onClick={() => {
                        setIsOpenSidebar(!isOpenSidebar);
                        setShowMenu(false); // Ocultar el menú al abrir la barra lateral
                    }}
                >
                    {isOpenSidebar ? 'Cerrar menú' : 'Abrir menú'}
                </button>
                {/* Contenedor para los enlaces del menú */}
                <nav className={`md:flex ${showMenu ? 'block' : 'hidden'}`}>
                    {/* Aquí va el componente Menu */}
                    <Menu />
                </nav>
            </header>
            <SideBar isOpen={isOpenSidebar} setIsOpen={setIsOpenSidebar} />
        </>
    );
};

export default Header;
