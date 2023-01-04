import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartTotal = Math.abs((useSelector((state) => state.cart.totalAmount)).toFixed(2));

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
    <i className="fa fa-shopping-cart"></i>
      <span className={classes.badge}>
        ${cartTotal}
      </span>
    </button>
  );
};

export default CartButton;
