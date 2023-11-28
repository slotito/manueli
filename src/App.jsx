import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from './components/Header';
import { NavBar } from './components/NavBar';

import Home from "./pages/Home/Home";
import Products from './pages/Products/Products'
import ProductPage from './pages/Products/ProductPage'
import Categories from './pages/Categories/Categories';

import DataProvider from './context/DataContext';
import CartProvider from './context/CartContext';
import WishProvider from "./context/WishContext";

import SeccionNuevosProductos2 from './components/NuevosProductos2';
import WishContent from "./components/WishContent";
import Checkout from "./pages/Checkout/Checkout";

import Auth from "./pages/Auth/Auth";

// temporal
import { getAuth } from "firebase/auth";
import MisCompras from "./components/MisCompras";
const auth = getAuth();

function App() {

    return (
        <DataProvider>
        <CartProvider>
        <WishProvider>
        <BrowserRouter>
        <div>
            <Header />
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/nuevos2" element={<SeccionNuevosProductos2 xDefecto="all"/>} />
                <Route path=":category" element={<Products />}/>
                <Route path="/categorias" element={<Categories />} />
                <Route path="/categorias/:category" element={<Products />} />
                <Route path="/products" element={<Products location={location}/>} />
                <Route path="/products/:id" element={<ProductPage />} />
                <Route path="/cart" element={<Checkout />} />
                <Route path="/misDeseos" element={<WishContent />} />
                <Route path="/misCompras" element={<MisCompras />} />
                <Route path="/auth" element={<Auth />} />

            </Routes>
        </div>
        </BrowserRouter>
        </WishProvider>
        </CartProvider>
        </DataProvider>
    )
}
export default App;