import React from 'react';

type MenuProps = {
    className?: string;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Menu: React.FC<MenuProps> = ({ className, isOpen, setIsOpen }) => {
    return (
        <div className={className}>
            <nav className={`flex ${isOpen ? 'flex-col' : ''} justify-start items-center px-4 text-xl`}>
                <div className={`flex ${isOpen ? 'flex-col' : ''} justify-start`}>
                    <a className="ml-8 text-blue-700 hover:text-blue-400" href="/Home" onClick={() => setIsOpen(false)}>Home</a>
                    <a className="ml-8 text-red-700 hover:text-red-300" href="/BooksPage" onClick={() => setIsOpen(false)}>Books</a>
                    <a className="ml-8 text-lime-600 hover:text-lime-400" href="/Register" onClick={() => setIsOpen(false)}>Register</a>
                </div>
                <a className=" space-x-8 ml-10 text-white hover:text-black px-1 py-2 border-2 border-green-100 rounded hover:bg-yellow-500"
                    href="/Login" onClick={() => setIsOpen(false)}>Log In</a>
            </nav>
        </div>
    );
};

export default Menu;
