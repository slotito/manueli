import PropTypes from "prop-types";

function ButtonAddCart(props) {
  return (
    <button onClick={props.onClick} className="add-to-cart-btn">
      <i className={props.className}></i>
      {props.title}
    </button>
  );
}

export default ButtonAddCart;

/* handleClick.PropTypes = {
  title: PropTypes.string.isRequired,
};
 */
/* title.PropTypes = {
  title: PropTypes.string.isRequired,
}; */

