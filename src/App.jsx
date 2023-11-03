import { Header } from './components/Header';
import { NavBar } from './components/NavBar';

import Home from "./pages/Home/Home";
import Products from './pages/Products/Products'
import Categories from './pages/Categories/Categories';
import SeccionNuevosProductos from './components/NuevosProductos';
import SeccionNuevosProductos2 from './components/NuevosProductos2';

import { BrowserRouter, Routes, Route } from "react-router-dom";

//import { queryCollection , result} from './datos/testMongoDB2.js';
import { useEffect, useState } from 'react';

import { ProductsProvider } from './context/ProductsContext';

function App() {

    // por ahora en desuso
    const [ dataMongoDB, setDataMongoDB ] = useState([]);
/* 
    useEffect(() => {
        queryCollection()
            .then(data => {
                setDataMongoDB(data); // Almacena los datos en el estado
            }).catch(err => {
                console.log(err);
            });
    }, []); */



    return (
        <ProductsProvider>
        <BrowserRouter>
        <div>
            <Header />
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/nuevos" element={<SeccionNuevosProductos />} />
                <Route path="/nuevos2" element={<SeccionNuevosProductos2 />} />
                <Route path="/categorias" element={<Products />} />
                <Route path=":category" element={<Categories />} />
            </Routes>
        </div>
        </BrowserRouter>
        </ProductsProvider>
    )
}
export default App;