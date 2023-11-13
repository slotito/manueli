import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from './components/Header';
import { NavBar } from './components/NavBar';

import Home from "./pages/Home/Home";
import Products from './pages/Products/Products'
import ProductPage from './pages/Products/ProductPage'
import Categories from './pages/Categories/Categories';

//import SeccionNuevosProductos from './components/NuevosProductos';
import SeccionNuevosProductos2 from './components/NuevosProductos2';

import DataProvider from './context/DataContext';
import { CartProvider } from './context/CartContext';
import ProductSection from './pages/Products/ProductSection';

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
            </Routes>
        </div>
        </BrowserRouter>
        </CartProvider>
        </DataProvider>
    )
}
export default App;