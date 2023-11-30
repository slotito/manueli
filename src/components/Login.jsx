import { useState } from "react";
//import { useHistory } from 'react-router-dom';
import { appFirebase } from "../config/firebase.config"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(appFirebase);

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const [registrando, setRegistrando] = useState(false)

    const functAutenticacion = async(e) => {
        e.preventDefault(); // para que no se actualice la pagina
        const email = e.target.email.value;
        const password = document.getElementById("password").value;

        try {
            if (registrando) {
                await createUserWithEmailAndPassword(auth, email, password)
            } else {
                await signInWithEmailAndPassword(auth, email, password)
                toast.success("Bienvenido !!!");
                //history.push('/');
            }
        } catch (error) {
            toast.error("Error de logueo ", error);
        }
    }

  return (
    <>
        <div className="container">
            <form onSubmit={functAutenticacion}>
                <input type="text" placeholder="ingreses email" id="email"/>
                <input type="password" placeholder="ingrese contraseña" id="password"/>
                <button type="submit">{registrando ? "Registrarse" : "Inicia Sesión"}</button>
            </form>
            <h4>
                {registrando ? "Si ya tienes cuenta ..." : "No tienes cuenta ..."}
                <button onClick={()=>setRegistrando(!registrando)}>
                    {registrando ? "Iniciar Sesión" : "Registrate"}
                </button>
            </h4> 
        </div>
    </>
  )
}

export default Login