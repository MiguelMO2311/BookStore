
import Footer from './components/footer';
import Header from './components/header';
import BooksPage from './pages/BooksPage';


function App() {


  return (

    <div className="flex flex-col min-h-svh min-w-full bg-slate-100">
      <Header />

      <div style={{ flexGrow: 1 }}>
        <BooksPage />
      </div>

      <Footer />
    </div>

  )
}

export default App;
