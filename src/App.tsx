import Footer from './components/Footer';
import Header from './components/Header';


function App() {
  const styles = {
    app: {
      display: 'flex',
      alignItems: 'start',
      flexDirection: 'column' as const, // Asegúrate de que el valor sea uno de los permitidos
      minHeight: '90vh',
      minWidth: '100vw'
    },
    header: {
      display:'flex',
      justifyContent: 'center',
      alignItems: 'start'
    },
    menu:{
      display:'flex',
      justifyContent: 'center',
      alignItems: 'start'
    },
    
    content: {
      flex: '1'
    },
    footer: {

      gap:'350px'

    },
  };

  return (
    
    <div className=" flex items-start flex-col bg-red-500 min-h-screen min-w-full">   
      <Header style={styles.header} />
      
      {/* Aquí irá el contenido principal de la aplicación */}
      <div className="flex-1">
        {/* Contenido */}
      </div>
      
      <Footer style={styles.footer}/>
    </div>    

  )
}

export default App;
