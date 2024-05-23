// Header.js
import { useState } from 'react';
import Logo from "./logo";
import MobileMenu from "./MobileMenu"; // Asegúrate de importar MobileMenu

const Header = () => {
    const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);

    return (
        <>
            <header className="relative max-h-30 p-3 bg-green-200 font-semibold flex justify-between items-center w-full">
                <Logo />
                <button 
                    className="md:hidden" 
                    onClick={() => setIsOpenSidebar(!isOpenSidebar)}
                >
                    {isOpenSidebar ? 'Cerrar menú' : 'Abrir menú'}
                </button>
            </header>
            <MobileMenu isOpen={isOpenSidebar} setIsOpen={setIsOpenSidebar} />
        </>
    );
};

export default Header;
