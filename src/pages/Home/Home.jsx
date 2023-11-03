import "./Home.css"

// import { useState } from 'react';
// import { products as inicialProducts } from '../../datos/products.json'
// import ProductsOld from "../Products/ProductsOld";
import SeccionDestacados from "../../components/SeccionDestacados";
import { Footer } from "../../components/Footer";
import { SeccionNuevos } from "../../components/SeccionNuevos";


export function Home() {

    // const [products] = useState(inicialProducts) 

    return (
        <>

        <SeccionDestacados />
        {/* <ProductsOld products={products} /> */}
        <SeccionNuevos />
        <Footer />



        </>
    );
}

export default Home;