import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { cartActions } from "../../store/cart-slice";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const cartTotal = Math.abs(
    useSelector((state) => state.cart.totalAmount).toFixed(2)
  );

  const [isCheckout, setIsCheckout] = useState(false);
  const orderHandler = () => {
    setIsCheckout(true);
  };

  const [isSumbitting, setIsSubmittign] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const sumbitOrderHandler = async (userData) => {
    setIsSubmittign(true);

    await fetch(
      "https://react-app-9c2a2-default-rtdb.europe-west1.firebasedatabase.app/order.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartItems,
        }),
      }
    );

    setIsSubmittign(false);
    setDidSubmit(true);

    dispatch(cartActions.clearCart());
    window.location = window.location + "#top";
  };

  const cartContent = (
    <>
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
              src: item.src,
            }}
          />
        ))}
      </ul>

      <span className={classes.badge}>{cartQuantity}</span>
      <span className={classes.badge}>${cartTotal}</span>

      {isCheckout && <Checkout onConfirm={sumbitOrderHandler} />}

      {!isCheckout && <button onClick={orderHandler}>Order</button>}
    </>
  );

  const isSubmittingContent = <p>Sending order data...</p>;

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };
  const didSubmitContent = (
    <>
      <p>Success!</p>
      <button onClick={toggleCartHandler}>Close</button>
    </>
  );

  return (
    <Card className={classes.cart}>
      {!isSumbitting && !didSubmit && cartContent}
      {isSumbitting && isSubmittingContent}
      {!isSumbitting && didSubmit && didSubmitContent}
    </Card>
  );
};

export default Cart;
