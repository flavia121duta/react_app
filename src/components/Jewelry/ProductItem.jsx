import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

import classes from "./ProductItem.module.css";
import Card from "../UI/Card";

const ProductItem = (props) => {
  const { category, price, description, src, id } = props;

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        category,
        price,
        src
      })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{category}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <img src={src} alt="jewel" />
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
