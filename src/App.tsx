import { Routes, Route } from 'react-router-dom';
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



function App() {
  return (
    <div className="flex flex-col min-h-svh min-w-full bg-slate-100">
      <Header />
      <div style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/home" element={<Home />} />

          <Route element={<PublicRoutes />}>
            <Route path="/login" element={<LogIn />} />
            <Route path="/register" element={<Register />} />
          </Route>

          <Route element={<PrivateRoutes />}>
            <Route path="/BooksPage" element={<BooksPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/addBook" element={<AddBook />} />
            <Route path="/editBook" element={<EditBook />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
