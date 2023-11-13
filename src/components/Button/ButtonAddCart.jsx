import PropTypes from "prop-types";

function ButtonAddCart(props) {

  console.log(props.handleClick);
  return (
    <button onClick={props.handleClick} className="add-to-cart-btn">
      <i className="fa fa-shopping-cart"></i>
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

