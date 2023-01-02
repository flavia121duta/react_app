import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { Link } from "react-router-dom";

import classes from "./ProductItem.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const ProductItem = (props) => {
  const { category, price, description, src, id } = props;

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        category,
        price,
        src,
        description,
      })
    );
  };

  return (
    <li>
      <Card>
        <div className={classes.card}>
          <img src={src} alt="jewel" className={classes.jewelImg} />
          <div className={classes.price}>${price.toFixed(2)}</div>
          <div className={classes.actions}>
            <Button onClick={addToCartHandler} className={classes.btn}>Add to Cart</Button>
            <Link className={classes.btn} to={`/jewelry/${id}`}>
              <Button>View Details</Button>
            </Link>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
