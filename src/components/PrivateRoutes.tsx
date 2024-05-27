import { Navigate, useRoutes } from 'react-router-dom';
import { useState } from 'react';
import AddBook from '../pages/AddBook';
import BooksPage from '../pages/BooksPage';
import EditBook from '../pages/EditBook';
import Profile from '../pages/Profile';



const PrivateRoutes = () => {
  const [user] = useState({}); // Variable de usuario "fake"


  const routes = useRoutes([
    { path: './profile', element: user ? <Profile /> : <Navigate to="/login" replace /> },
    { path: '/books', element: user ? <BooksPage /> : <Navigate to="/login" replace /> },
    { path: '/addBook', element: user ? <AddBook /> : <Navigate to="/login" replace /> },
    { path: '/editBook', element: user ? <EditBook /> : <Navigate to="/login" replace /> },
  ]);

  return routes;
};


export default PrivateRoutes;