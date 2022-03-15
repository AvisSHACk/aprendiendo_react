import React from 'react';
import {Titulo} from './Titulo';
import styled from 'styled-components';
const pais = "Perú";
const amigos = ["Anthony", "Pedro", "Miguel"];

const Usuario = () => {
  return (
    <>
      <Titulo usuario="Anthony" color="blue"/>
      <Titulo usuario="Katherine" color="green"/>
      <Parrafo>Que tengas un buen dia</Parrafo>
      {pais && <p>TU eres de : {pais}</p>}
      <ul>
        {amigos.map((amigo, index) => <li key={index}>{amigo}</li>)}
      </ul>
    </>
  )
}


const Parrafo = styled.p`
  margin:20px 0;
`

export default Usuario;