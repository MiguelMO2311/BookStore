import { useState, useEffect } from 'react';
import Logo from "./logo";
import SideBar from "./SideBar";
import Menu from "./menu";
import { CgPlayListRemove } from "react-icons/cg";
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
    const [isOpenSidebar, setIsOpenSidebar] = useState(false);
    const [showMenu, setShowMenu] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setShowMenu(true);
                setIsOpenSidebar(false); // Cierra la barra lateral cuando la ventana es de tamaño tablet o más grande
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
            <header className="relative max-h-30 p-3 bg-green-800 font-semibold flex justify-between items-center w-full">
                <Logo />
                <button
                    className="md:hidden"
                    onClick={() => {
                        setIsOpenSidebar(!isOpenSidebar);
                        setShowMenu(false);
                    }}
                    style={{ fontSize: '15px' }}

                >
                    {isOpenSidebar ? <CgPlayListRemove size={50} /> : <GiHamburgerMenu size={50} />}
                    {isOpenSidebar ? 'Close' : 'Open'}
                </button>
                <nav className={`md:flex ${showMenu ? 'block' : 'hidden'}`}>
                    <Menu isOpen={isOpenSidebar} setIsOpen={setIsOpenSidebar} />
                </nav>
            </header>
            <SideBar isOpen={isOpenSidebar} setIsOpen={setIsOpenSidebar} />
        </>
    );
};

export default Header;

