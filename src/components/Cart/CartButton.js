import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { cartAction } from "../Store/cartReducer";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector(state => state.cartItem.totalQuantity);

  const cartShownHandler = () => {
    dispatch(cartAction.cartShown());
  };

  return (
    <button className={classes.button} onClick={cartShownHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
