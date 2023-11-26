import 'firebase/auth'
import { useForm } from 'react-hook-form'
import { useContext, useEffect, useState } from 'react'
//import { useFirebaseApp } from 'reactfire';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword  } from 'firebase/auth'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Auth = (props) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [auth, setAuth] = useState(false)

  const user = getAuth().currentUser;
  //console.log(user);
  //const firebase = useFirebaseApp();

  const submit = async () => {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
  })
  .catch((error) => {
    //const errorCode = error.code;
    const errorMessage = error.message;
    toast.error("Se produjo un error. " + errorMessage);
  });
  }

  return (
    <div>
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email"  onChange={(ev)=> setEmail(ev.target.value)}/>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={(ev)=> setPassword(ev.target.value)} />
            <button onClick={submit}>Iniciar sesión</button>
        </div>




    </div>
  )
}

export default Auth