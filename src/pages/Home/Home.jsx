import "./Home.css"

// import { useState } from 'react';
// import { products as inicialProducts } from '../../datos/products.json'
// import ProductsOld from "../Products/ProductsOld";
import SeccionNuevosDestacados from "../../components/NuevosDestacados";
import { Footer } from "../../components/Footer";


export function Home() {

    // const [products] = useState(inicialProducts) 

    return (
        <>

        <SeccionNuevosDestacados />
        {/* <ProductsOld products={products} /> */}
        <Footer />


        </>
    );
}

export default Home;