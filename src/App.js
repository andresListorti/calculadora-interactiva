import './App.css';
import freeCodelogo from './imagenes/fcclogo.jpg';
import Boton from './componentes/Boton';

function App() {
  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
        src={freeCodelogo}
        className='freecodecamp-logo'
        alt='logo de freecodecamp' />
      </div>
    <div className='contenedor-calculadora'>
      <div className='fila'>
        <Boton>1</Boton> 
        <Boton>+</Boton> 
      </div>
      <div className='fila'></div>
      <div className='fila'></div>
      <div className='fila'></div>
      <div className='fila'></div>
    </div>
      
    </div>
  );
}

export default App;
