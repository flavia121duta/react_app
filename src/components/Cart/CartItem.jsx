import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

import Card from "../UI/Card";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const { title, quantity, total, price, src, id } = props.item;

  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        price,
        src,
        name: title,
      })
    );
  };

  return (
    <li>
      <Card className={classes.item}>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>
            {total.toFixed(2)}€{" "}
            <span className={classes.itemprice}>
              ({price.toFixed(2)}€/item)
            </span>
          </div>
        </header>
        
        <div className={classes.details}>
          <img src={src} alt="jewel" />
          <div className={classes.quantity}>
            x <span>{quantity}</span>
          </div>
          <div className={classes.actions}>
            <button onClick={removeItemHandler}>-</button>
            <button onClick={addItemHandler}>+</button>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default CartItem;
