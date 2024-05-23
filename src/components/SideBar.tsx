import React from 'react';

// Define los tipos de las props aquí
type SideBarProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SideBar: React.FC<SideBarProps> = ({ isOpen, setIsOpen }) => {
    if (!isOpen) return null;
  
    return (
      <div className="absolute top-20 right-0 mt-2 mr-2 bg-green-200 p-2 rounded shadow-md">
        <nav className="flex flex-col items-end">
          <a className="p-2 text-blue-700 hover:text-blue-400" href="/HomePage" onClick={() => setIsOpen(false)}>Home</a>
          <a className="p-2 text-red-700 hover:text-red-400" href="/BooksPage" onClick={() => setIsOpen(false)}>Books</a>
          <a className="p-2 text-white hover:text-black bg-green-200 border-2 border-green-100 rounded hover:bg-yellow-500"
              href="/Login" onClick={() => setIsOpen(false)}>Log In</a>
        </nav>
      </div>
    );
  };
  
 
export default SideBar;
