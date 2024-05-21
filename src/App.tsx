import './App.css';
import Footer from './components/footer';
import Header from './components/header';

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
      flex: 'start',
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
    
    <div style={styles.app}>   
      <Header style={styles.header} />
      
      {/* Aquí irá el contenido principal de la aplicación */}
      <div style={styles.content}>
        {/* Contenido */}
      </div>
      
      <Footer style={styles.footer}/>
    </div>    

  )
}

export default App;
