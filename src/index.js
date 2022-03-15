import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Usuario from './components/Usuario';
import FormularioInicioSesion from './components/FormularioInicioSesion';
import Contador from './components/Contador';
import './index.css';
import Boton from './elementos/Boton';


const App = () => {

  const [sesion, cambiarEstadoSesion] = useState(true);
  return (
    <div className='contenedor'>
    {sesion ? 
      <>
        <Usuario />
        <Boton onClick={() => {cambiarEstadoSesion(false)}}>Cerrar Sesion</Boton>
        <Contador incrementar={1} disminuir={1}/>
      </>
    :
      <>
        <FormularioInicioSesion cambiarEstadoSesion={cambiarEstadoSesion}/>
        {/* <button onClick={() => {cambiarEstadoSesion(true)}}>Iniciar Sesion</button> */}
      </>
    }
  </div>
  )
}

// const verificarSesion = (session) => {
//   if(session) {
//     return JSX;
//   } else {
//     return <h1>No has iniciado sesion</h1>
//   }

// }

// ReactDOM.render(verificarSesion(session),document.getElementById('root');
ReactDOM.render(<App />,document.getElementById('root'));
