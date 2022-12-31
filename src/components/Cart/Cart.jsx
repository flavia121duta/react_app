import { useSelector } from "react-redux";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);

  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const cartTotal = Math.abs(
    useSelector((state) => state.cart.totalAmount).toFixed(2)
  );

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
              src: item.src
            }}
          />
        ))}
      </ul>

      <span className={classes.badge}>{cartQuantity}</span>
      <span className={classes.badge}>${cartTotal}</span>

    </Card>
  );
};

export default Cart;
