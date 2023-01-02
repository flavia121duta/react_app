import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { cartActions } from "../../store/cart-slice";

import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import Button from "../UI/Button";
import Wrapper from "../UI/Wrapper";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const cartTotal = Math.abs(
    useSelector((state) => state.cart.totalAmount).toFixed(2)
  );

  const [isCheckout, setIsCheckout] = useState(false);
  const orderHandler = () => {
    if (cartItems.length === 0) {
      console.log("Can't order from empty cart");
      return;
    }

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

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  let content;
  if (cartItems.length === 0) {
    content = <h2>Your cart is empty</h2>
  } else {
    content = <h2>Your Shopping Cart</h2>
  }

  const cartContent = (
    <>
      {content}
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

      {!isCheckout && <Button onClick={orderHandler}>Order</Button>}
      {!isCheckout && <Button onClick={toggleCartHandler}>Close</Button>}
    </>
  );

  const isSubmittingContent = <p>Sending order data...</p>;

  const didSubmitContent = (
    <>
      <p>Success!</p>
      <Button onClick={toggleCartHandler}>Close</Button>
    </>
  );

  return (
    <Wrapper className={classes.cart}>
      {!isSumbitting && !didSubmit && cartContent}
      {isSumbitting && isSubmittingContent}
      {!isSumbitting && didSubmit && didSubmitContent}
    </Wrapper>
  );
};

export default Cart;
