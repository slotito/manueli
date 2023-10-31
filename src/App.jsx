import { Header } from './components/Header';
import { NavBar } from './components/NavBar';

import Home from "./pages/Home/Home";
import Products from './pages/Products/Products'
import Category from './pages/Categories/Categories';
import SeccionNuevosProductos from './components/NuevosProductos';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

    return (
        <BrowserRouter>
        <div>
            <Header />
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/nuevos" element={<SeccionNuevosProductos />} />
                <Route path="/categorias" element={<Products />}>
                    <Route path=":category" element={<Category />} />
                </Route>
                
            </Routes>
        </div>
        </BrowserRouter>
    )
}
export default App;