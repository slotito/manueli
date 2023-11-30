// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore/lite';
import { seedData } from "../utils/firestore"; // importo la funcion seedData que me permite agregar datos a la base de datos de firestore de forma automatizada
import { arrayProducts } from "../datos/products"; // importo el array de objetos que quiero agregar a la base de datos de firestore


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDY8LhRzpVajBVvn4cm3y3JVoW7oz7qS4k",
  authDomain: "manueli-dd4d1.firebaseapp.com",
  projectId: "manueli-dd4d1",
  storageBucket: "manueli-dd4d1.appspot.com",
  messagingSenderId: "65479928321",
  appId: "1:65479928321:web:70e15d6e9a37140e292e00"
};

// Inicializo Firebase
const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase);

export { db, appFirebase }


// correr este bloque solo cuando quiera agregar datos a la base de datos de firestore de forma automatizada
const force = false;
if(force){
  
  setTimeout(()=>{
    seedData(arrayProducts, "products"); // ejecuto la funcion seedData con el array de objetos y el nombre de la coleccion
  }, 4000)

}