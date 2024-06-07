import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { User } from '../models/User'; // Importa el tipo User

type MenuProps = {
    className?: string;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Menu: React.FC<MenuProps> = ({ className, isOpen, setIsOpen }) => {
    const emptyUser: User = {
        user_id: 0,
        name: '',
        surname: '',
        email: '',
        password: '',
        photo: '',
    };

    const [user, setUser] = useState<User | null>(emptyUser);

    useEffect(() => {
        const userInfo = localStorage.getItem('userInfo');
        if (userInfo) {
            setUser(JSON.parse(userInfo));
        }
    }, []);

    return (
        <div className={className}>
            <nav className={`flex ${isOpen ? 'flex-col' : ''} justify-start items-center px-4 text-xl`}>
                <div className={`flex ${isOpen ? 'flex-col' : ''} justify-start`}>
                    {user ? (
                        <>
                            <NavLink className="ml-8 text-blue-700 hover:text-blue-400" to="/Home" onClick={() => setIsOpen(false)}>Home</NavLink>
                            <NavLink className="ml-8 text-red-700 hover:text-red-300" to="/BooksPage" onClick={() => setIsOpen(false)}>Books</NavLink>
                            <NavLink className="ml-8 text-purple-700 hover:text-purple-300" to="/Profile" onClick={() => setIsOpen(false)}>Profile</NavLink>
                            <NavLink className="ml-8 text-yellow-700 hover:text-yellow-300" to="/AddBook" onClick={() => setIsOpen(false)}>Add Book</NavLink>
                            <NavLink className="ml-8 text-green-700 hover:text-green-300" to="/EditBook" onClick={() => setIsOpen(false)}>Edit Book</NavLink>
                        </>
                    ) : (
                        <>
                            <NavLink className="ml-8 text-blue-700 hover:text-blue-400" to="/Home" onClick={() => setIsOpen(false)}>Home</NavLink>
                            <NavLink className="ml-8 text-lime-600 hover:text-lime-400" to="/Register" onClick={() => setIsOpen(false)}>Register</NavLink>
                            <NavLink className=" space-x-8 ml-10 text-white hover:text-black px-1 py-2 border-2 border-green-100 rounded hover:bg-yellow-500"
                                to="/Login" onClick={() => setIsOpen(false)}>Log In</NavLink>
                        </>
                    )}
                </div>
                <button style={{ fontSize: '8px', margin: '5%', width: '40px' }}>
                    {user && user.photo ? (
                        <>
                            <img src={user.photo} alt="User" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
                            <span style={{ color: 'red' }}>DEL User</span>
                        </>
                    ) : (
                        <>
                            <span style={{ color: 'white' }}>ADD User</span>
                        </>
                    )}
                </button>
            </nav>
        </div>
    );
};

export default Menu;

