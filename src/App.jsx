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
import CartContent from "./components/Cart/CartContent";
import WishContent from "./components/WishContent";
import Checkout from "./pages/Checkout/Checkout";

function App() {

    // por ahora en desuso
    //const [ dataMongoDB, setDataMongoDB ] = useState([]);
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
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductPage />} />
                <Route path="/cart" element={<Checkout />} />
                <Route path="/misDeseos" element={<WishContent />} />
            </Routes>
        </div>
        </BrowserRouter>
        </WishProvider>
        </CartProvider>
        </DataProvider>
    )
}
export default App;