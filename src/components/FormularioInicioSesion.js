import React, { useState } from 'react';
import styles from './FormularioInicioSesion.module.css';
import Boton from './../elementos/Boton';

const FormularioInicioSesion = (props) => {
    const [usuario, cambiarUsuario] = useState("");
    const [password, cambiarPassword] = useState("");

    //Metodo Anthony Serquen

    const changeState = (e) => {

        if(e.target.id === 'usuario') {

            cambiarUsuario(e.target.value);

        } else if(e.target.id === 'password') {

            cambiarPassword(e.target.value);

        }
    }

    //Metodo falcon masters

    // const onChangeUsuario = (e) => {
    //     cambiarUsuario(e.target.value);
    // }
    
    // const onChangepassword = (e) => {
    //     cambiarPassword(e.target.value);
    // }

    const onSubmit = (e) => {
        e.preventDefault();

        if(usuario === 'Anthony' && password === "123") {
            props.cambiarEstadoSesion(true);
        } else {
            alert("Datos incorrectos");
            cambiarUsuario('');
            cambiarPassword('');
        }

    }


    return ( 
        <form action="" onSubmit={onSubmit} className={styles.formulario}>
            <h1>No has iniciado session</h1>
            <div>
                <label htmlFor="usuario" label={styles.label}>Usuario: </label>
                <input 
                    type="text" 
                    name="usuario" 
                    id="usuario" 
                    value={usuario}
                    onChange={changeState}
                    className={styles.input}
                />
            </div>
            <div>
                <label htmlFor="password" label={styles.label}>Contraseña: </label>
                <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    value={password}
                    onChange={changeState}
                    className={styles.input}
                />
            </div>
            {/* <button type="submit" className={styles.boton}>Iniciar Sesión</button> */}
            <Boton type="submit">Iniciar Sesion</Boton>
        </form>
     );
}
 
export default FormularioInicioSesion;