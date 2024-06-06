import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Profile from './pages/Profile';
import AddBook from './pages/AddBook';
import EditBook from './pages/EditBook';
import PrivateRoutes from './components/PrivateRoutes';
import PublicRoutes from './components/PublicRoutes';
import BooksPage from './pages/BooksPage';
import Header from './components/Header';
import LogIn from './pages/LogIn';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import { UserProvider } from './context/UserContext';
import Pagina404 from './pages/ErrorPage404';

function App() {
  
  
  return (
    <UserProvider> {/* Envuelve tu aplicación con UserProvider */}
      <div className="flex flex-col min-h-svh min-w-full bg-slate-100">
      <ToastContainer />
        <Header />
        <div style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/edit-book/:book_id" Component={EditBook} />

            <Route path="*" element={<Pagina404 />} />

            <Route element={<PublicRoutes />}>
              <Route path="/login" element={<LogIn />} />
              <Route path="/register" element={<Register />} />
              <Route path="/home" element={<Home />} />
            </Route>

            <Route element={<PrivateRoutes />}>
              <Route path="/booksPage" element={<BooksPage />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/addBook" element={<AddBook />} />
              <Route path="/editBook" element={<EditBook />} />
             

            </Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </UserProvider>
  );
}

export default App;
