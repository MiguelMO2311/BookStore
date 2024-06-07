import React, { useContext, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { AiOutlineUserAdd } from "react-icons/ai";

type MenuProps = {
    className?: string;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Menu: React.FC<MenuProps> = ({ className, isOpen, setIsOpen }) => {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate(); // Hook para navegar
    
    useEffect(() => {
        localStorage.removeItem('UserInfo');
      }, []);
      

    const logOut = () => {
        setUser(null); // Esto es válido si UserType incluye null
        localStorage.removeItem('userInfo');
        navigate('/Home'); // Navega a la página de LogIn
    };

    const handleLogin = () => {
        setIsOpen(false); // Cierra el menú
        navigate('/login'); // Navega a la página de LogIn
    };
    
    return (
        <div className={className}>
            <nav className={`flex ${isOpen ? 'flex-col' : ''} justify-start items-center px-4 text-xl`}>
                <div className={`flex ${isOpen ? 'flex-col' : ''} justify-start`}>
                    {user? (
                        <>
                            {/* Enlaces para usuario logueado */}
                            <NavLink className="ml-8 text-red-500 hover:text-red-400" to="/Home" onClick={() => setIsOpen(false)}>Home</NavLink>
                            <NavLink className="ml-8 text-blue-500 hover:text-blue-400" to="/booksPage" onClick={() => setIsOpen(false)}>Books</NavLink>
                            <NavLink className="ml-8 text-gray-800 hover:text-gray-500" to="/profile" onClick={() => setIsOpen(false)}>Profile</NavLink>
                            <NavLink className="ml-8 text-green-600 hover:text-green-400" to="/addBook" onClick={() => setIsOpen(false)}>AddBook</NavLink>
                            <button onClick={logOut} className="ml-8 flex items-center text-yellow-400 hover:bg-yellow-400
                             hover:text-black focus:outline-none border-2 border-green-700 rounded-lg p-1 transition-colors
                             duration-200"><img src={user.photo} alt="User" style={{ width: '30px', height: '30px', borderRadius: '50%' }} /><span className="text-xs ml-1">Log Out</span>
                            </button>
                        </>
                    ) : (
                        <>
                            {/* Enlaces para usuario no logueado */}
                            <NavLink className="ml-8 text-blue-700 hover:text-white" to="/Home" onClick={() => setIsOpen(false)}>Home</NavLink>
                            <NavLink className="ml-8 text-lime-600 hover:text-white" to="/Register" onClick={() => setIsOpen(false)}>Register</NavLink>
                            <button onClick={handleLogin} className="flex items-center ml-16 text-white hover:bg-yellow-400 hover:text-black focus:outline-none border-2 border-green-700 rounded-lg p-1 transition-colors duration-200 "> <AiOutlineUserAdd size={20} color="white" /> 
                            <span className="text-xs ml-1">Log In</span>
                            </button>

                        </>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Menu;
