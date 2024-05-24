import { useState, useEffect } from 'react';
import Logo from "./logo";
import SideBar from "./SideBar";
import Menu from "./Menu"; // Asegúrate de importar el componente Menu
import { BiListPlus } from "react-icons/bi"; // Importa el icono para abrir
import { CgPlayListRemove } from "react-icons/cg"; // Importa el icono para cerrar

const Header = () => {
    const [isOpenSidebar, setIsOpenSidebar] = useState(false);
    const [showMenu, setShowMenu] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setShowMenu(true);
                setIsOpenSidebar(false); // Cierra la barra lateral cuando la ventana es de tamaño tableta o más grande
            } else {
                setShowMenu(false);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

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
                        setShowMenu(false);
                    }}
                    style={{ fontSize: '15px' }} // Establece el tamaño del texto a 15px
                >
                    {isOpenSidebar ? <CgPlayListRemove size={50} /> : <BiListPlus size={50} />} {/* Usa los iconos con tamaño de 50 */}
                    {isOpenSidebar ? 'Cerrar' : 'Abrir'}
                </button>
                <nav className={`md:flex ${showMenu ? 'block' : 'hidden'}`}>
                    <Menu /> {/* Añade el componente Menu aquí */}
                </nav>
            </header>
            <SideBar isOpen={isOpenSidebar} setIsOpen={setIsOpenSidebar} />
        </>
    );
};

export default Header;
