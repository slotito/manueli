import "./Products.css";
import { AddToCartIcon } from "../components/Icons.jsx";
import PropTypes from 'prop-types'  // tengo que traerlo porque ESLint me pide que valide los tipos de datos ('products' es un array de objetos)

export function ProductsOld({ products }) {
  return (
    <>
    <div className="section">
			<div className="container">
      <main className="products">
        <ul>
          {products.slice(0, 100).map((product) => (

            <div key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button>
                  <AddToCartIcon />
                </button>
              </div>

            </div>
          ))}
        </ul>
      </main>
    </div>
    </div>
    </>
  );
}

// Valido que 'products' sea un array de objetos, lo pide ESLint
ProductsOld.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default ProductsOld;
