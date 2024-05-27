import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home'; 
import Register from './pages/Register';
import Profile from './pages/Profile';
import AddBook from './pages/AddBook';
import EditBook from './pages/EditBook';
import { Route, Routes } from 'react-router-dom';
import BooksPage from './pages/BooksPage';
import LogIn from './pages/LogIn';


function App() {
  return (
    <div className="flex flex-col min-h-svh min-w-full bg-slate-100">
      <Header />
      <div style={{ flexGrow: 1 }}>
      <Routes>

  <Route path="/home" element={<Home />} />
  <Route path="/login" element={<LogIn />} />
  <Route path="/register" element={<Register />} />
  <Route path="/profile" element={<Profile />} />
  <Route path="/BooksPage" element={<BooksPage />} /> 
  <Route path="/addBook" element={<AddBook />} />
  <Route path="/editBook" element={<EditBook />} />
 
</Routes>

      </div>
      <Footer />
    </div>
  );
}

export default App;
