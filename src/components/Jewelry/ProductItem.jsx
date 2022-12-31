import classes from "./ProductItem.module.css";
import Card from "../UI/Card";

const ProductItem = (props) => {
  const { category, price, description, src } = props;

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
          <button>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
