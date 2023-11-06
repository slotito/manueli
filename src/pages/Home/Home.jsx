import "./Home.css"

// import { useState } from 'react';
// import { products as inicialProducts } from '../../datos/products.json'
// import ProductsOld from "../Products/ProductsOld";
import SeccionDestacados from "../../Secciones/SeccionDestacados";
import { Footer } from "../../components/Footer";
import { SeccionProductosNuevos } from "../../Secciones/SeccionProductosNuevos";


export function Home() {

    // const [products] = useState(inicialProducts) 

    return (
        <>

        <SeccionDestacados />
        {/* <ProductsOld products={products} /> */}
        <SeccionProductosNuevos />
        <Footer />

        </>
    );
}

export default Home;