import '../estilos/Products.css'
import { AddToCartIcon } from './Icons.jsx'
import PropTypes from 'prop-types'  // tengo que traerlo porque ESLint me pide que valide los tipos de datos ('products' es un array de objetos)

export function Products({ products }) {
    return (
        <>
        <main className='products'>
            <ul>
                {products.slice(0,10).map(product =>
                    <li key={product.id}>
                        <img src={product.thumbnail} alt={product.title} />
                        <div>
                            <strong>{product.title}</strong> - ${product.price}
                        </div>
                        <div>
                            <button>
                                <AddToCartIcon />
                            </button>
                        </div>
                    </li>
                )}
            </ul>
        </main>
        </>
    );
}

// Valido que 'products' sea un array de objetos, lo pide ESLint
Products.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Products;

/* Nota para recordar:

La forma tradicional sería así:

{products.map((product) => {
    return (
        <li key={product.id}>
            { product.title } - { product.price }
            </li>
            );
        })
    }

Pero como es una función de flecha que devuelve un solo elemento, puedo escribirlo así.
La idea detrás de esta sintaxis es que cuando una función flecha tiene solo una expresión de retorno, 
se puede omitir las llaves {} y la palabra clave return, 
y JavaScript asumirá automáticamente que el valor de la expresión es lo que deseo retornar. 
En este caso la expresión es el elemento <li>.

*/
