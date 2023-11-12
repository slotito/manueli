//import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { products as inicialProducts } from '../datos/products.json'

import { useState } from 'react'
import { Header } from '../components/HeaderOld.jsx'

import Home from "../pages/Home/Home.jsx";
import { Products } from './components/Products.jsx'



//import DetailProducts from "./pages/Products/Products";

//import { Filters } from './components/Filters'
//import { products } from './datos/products.json'


function App() {

  
  const [products] = useState(inicialProducts)  // necesario para usar el filtro de productos, solo lo leo
  // estoy trayendo todos los productos, poco eficiente si son muchos ?
  // pero no se me ocurre otra forma de hacerlo, por ahora

  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
  })

  // desuso 
  //const filteredProducts = setProducts(products.filter(product => product.price >= filters.minPrice && (filters.category === 'all' || product.category === filters.category)))

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
      )
    })
  }
  

  const filteredProducts = filterProducts(products); 

  return (
    <>
      <BrowserRouter>
        <Header changeFilters={setFilters}/> 
        <Products products={filteredProducts} />
        
        <Routes>
          <Route path="/" element={ <Home /> }  />
          <Route path="/productos" element={ <Products /> }>
             <Route path=":category" element={ <Products /> } />
         </Route>

          {/* <Route path="/detail/:id" element={ <DetailProducts /> } /> */}


        </Routes>
        </BrowserRouter>
  
    </>
  )
}

export default App
