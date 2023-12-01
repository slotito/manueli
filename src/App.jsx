import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from './components/Header';
import { NavBar } from './components/NavBar';
import { Footer } from "./components/Footer";

import Home from "./pages/Home/Home";
import Products from './pages/Products/Products'
import ProductPage from './pages/Products/ProductPage'
import Categories from './pages/Categories/Categories';

import DataProvider from './context/DataContext';
import CartProvider from './context/CartContext';
import WishProvider from "./context/WishContext";

import SeccionNuevosProductos2 from './components/NuevosProductos2';
import WishContent from "./components/WishContent";
import MisCompras from "./components/MisCompras";

import Checkout from "./pages/Checkout/Checkout";

import Auth from "./components/Logout";
import Login from "./components/Login";

import { appFirebase } from "./config/firebase.config";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(appFirebase);

function App() {

    const [user, setUser] = useState(null);

    onAuthStateChanged(auth, (userFirebase) => {
        if (userFirebase) {
            setUser(userFirebase);
        } else {
            setUser(null);
        }
    })


    return (
        <DataProvider>
        <CartProvider>
        <WishProvider>
        <BrowserRouter>
        <div>
            <Header userMail={user}/>
            <NavBar />

                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/nuevos2" element={<SeccionNuevosProductos2 xDefecto="all"/>} />
                <Route path=":category" element={<Products />}/>
                <Route path="/categorias" element={<Categories />} />
                <Route path="/categorias/:category" element={<Products />} />
                <Route path="/products" element={<Products location={location}/>} />
                <Route path="/products/:id" element={<ProductPage />} />
                <Route path="/cart" element={<Checkout userMail={user}/>} />
                <Route path="/misDeseos" element={<WishContent />} />
                <Route path="/misCompras" element={<MisCompras userMail={user}/>} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/login" element={<Login />} />

            </Routes>
            
            <Footer />
        </div>
        </BrowserRouter>
        </WishProvider>
        </CartProvider>
        </DataProvider>
    )
}
export default App;