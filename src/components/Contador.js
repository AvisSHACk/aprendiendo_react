import React, { useState, useEffect } from 'react';
import Boton from './../elementos/Boton';

const Contador = ({incrementar, disminuir}) => {
    const [contador, cambiarContador] = useState(0);

    //Se ejecuta cuando el componente carga por primera vez y se actualiza
    // useEffect(() => {
    //     console.log("El componente se renderizo");
    // })

    // // Se ejecuta cuando el componente se reenderiza por primera vez
    // useEffect(() => {
    //     console.log("El componente se renderizo por primera vez");
    // }, [])

    //Se ejecuta cuando el estado del componente se actualiza
    // useEffect(() => {
    //     console.log("El estado del componente se actualizo");
    // }, [contador])

    //Cuando el componente se quita de pantalla

    useEffect(() => {
        return (() => {
            console.log("EL componente se quito de la pantalla");
        })
    }, [])

    return(
        <div>
            <h1>Contador: {contador}</h1>
            {/* <button className={styles.boton} onClick={() => cambiarContador(contador + incrementar)}>Incrementar</button>
            <button className={styles.boton} onClick={() => cambiarContador(contador - disminuir)}>Disminuir</button> */}
            <Boton onClick={() => cambiarContador(contador + incrementar)}>Incrementar</Boton>
            <Boton onClick={() => cambiarContador(contador - disminuir)}>Disminuir</Boton>
        </div>
    )
}

export default Contador;