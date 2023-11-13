import "./Home.css"

import SeccionDestacados from "../../Secciones/SeccionDestacados";
import { Footer } from "../../components/Footer";
import { SeccionProductosNuevos } from "../../Secciones/SeccionProductosNuevos";


export function Home() {

    return (
        <>

        <SeccionDestacados />
        <SeccionProductosNuevos />
        <Footer />
 
        </>
    );
}

export default Home;