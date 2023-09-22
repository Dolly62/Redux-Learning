import { useDispatch } from "react-redux";
import classes from "./CartButton.module.css";
import { cartAction } from "../Store/cartReducer";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const cartShownHandler = () => {
    dispatch(cartAction.cartShown());
  };

  return (
    <button className={classes.button} onClick={cartShownHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
