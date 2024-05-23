import { useState } from 'react';
import Logo from "./logo";
import Menu from "./menu";

const Header = () => {
    const [isOpenSidebar, setIsOpenSidebar] = useState(false);

    return (
        <>
            <header className="max-h-30 p-3 bg-green-200 font-semibold flex justify-between items-center w-full">
                    <Logo />
                    <Menu isOpenSidebar={isOpenSidebar} className={`${isOpenSidebar ? 'block' : 'hidden'} md:flex`} />
                    <button 
                        className="md:hidden" 
                        onClick={() => setIsOpenSidebar(!isOpenSidebar)}
                    >
                        {isOpenSidebar ? 'Cerrar menú' : 'Abrir menú'}
                    </button>
            </header>
        </>
    );
};

export default Header;
