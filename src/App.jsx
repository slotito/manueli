//import './App.css'
import { products as inicialProducts } from './datos/Products.json'
import { Products } from './components/Products.jsx'
import { useState } from 'react'
import { Header } from './components/Header'
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
      <Header changeFilters={setFilters}/>
 
      <Products products={filteredProducts} />
    </>
  )
}

export default App
