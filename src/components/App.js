import React from 'react';
import styled from 'styled-components';

const App = () => {
  return (
  <>
    <h1 className="titulo" style={{color:'red'}}>Hola {nombre}</h1>
    <Parrafo>Que tengas un buen dia</Parrafo>
  </>
  )
};

const Parrafo = styled.p`
  margin: 10px;
`

export default App;
