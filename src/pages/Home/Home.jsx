import "./Home.css"

import SeccionDestacados from "../../Secciones/SeccionDestacados";
import { SeccionProductosNuevos } from "../../Secciones/SeccionProductosNuevos";


export function Home() {

    return (
        <>

        <SeccionDestacados />
        <SeccionProductosNuevos />
 
        </>
    );
}

export default Home;