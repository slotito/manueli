import PropTypes from "prop-types";

function ButtonAddCart(props) {
  return (
    <button onClick={props.onClick} className={props.classNameButton}>
      <i className={props.classNameHeart}></i>
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

