import { useState } from 'react'
import '../estilos/Filters.css'
import PropTypes from 'prop-types'  // para validar tipos de datos y eslinter no me moleste


export function Filters({ onChange }) {   // desestructuración, sino tendría que llamar a props.onChange
    
    const [minPrice, setMinPrice] = useState(0) // para poder mostrar el valor del input range
    const [selectedCategory, setSelectedCategory] = useState('all');

    const handleMinPriceChange = (event) => {
        setMinPrice(event.target.value); // actualizo el estado de minPrice
        onChange(prevState => ({
            ...prevState,
            minPrice: event.target.value,
        }))
    }

    const handleCategoryChange = (event) => {
        const newCategory = event.target.value;
        setSelectedCategory(newCategory);
        onChange((prevState) => ({
            ...prevState,
            category: newCategory,
        }));
    }

    return (
        <section className='filters'>
            <div>
                <label htmlFor='price'>Precio a partir de:</label>
                <input 
                    type='range' 
                    id='price' 
                    name='price' 
                    min='0' 
                    max='1000' 
                    onChange={handleMinPriceChange}
                />
            </div>
            <span>${minPrice}</span>
            <div>
                <label htmlFor='category'>Categoría</label>
                <select name='category' id='category' onChange={handleCategoryChange} value={selectedCategory}>
                    <option value='all'>Todas</option>
                    <option value='laptops'>Laptops</option>
                    <option value='smartphones'>Celulares</option>
                    <option value='home-decoration'>Decoraciòn</option>
                    <option value='fragrances'>Fragancias</option>
                </select>
            </div>
        </section>
    );
}

// para que ESLint no me moleste
Filters.propTypes = {
    onChange: PropTypes.func.isRequired,
}