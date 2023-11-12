
// import { useState } from 'react';
import SeccionDestacados from "../../Secciones/SeccionDestacados";
import { Footer } from "../../components/Footer";
import { SeccionProductosNuevos } from "../../Secciones/SeccionProductosNuevos";
import ProductSection from "./ProductSection";
import { useParams } from "react-router-dom";

export function ProductPage() {

    // const [products] = useState(inicialProducts)
    const { id }  = useParams() 
    //console.log(id)

    return (
        <>
        <ProductSection id={id}/>

        </>
    );
}

export default ProductPage;