import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { useEffect, useState } from "react";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const dispatch = useDispatch();
  const cartTotal = Math.abs(
    useSelector((state) => state.cart.totalAmount).toFixed(2)
  );

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  const items = useSelector((state) => state.cart.items);
  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ""}`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    }
  }, [items]);

  return (
    <button className={btnClasses} onClick={toggleCartHandler}>
      <i className="fa fa-shopping-cart"></i>
      <span className={classes.badge}>{cartTotal} €</span>
    </button>
  );
};

export default CartButton;
