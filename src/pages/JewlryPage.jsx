import { useSelector } from "react-redux";

import Products from "../components/Jewelry/Products";
import dummy_products from "../assets/dummy_products";
import Cart from "../components/Cart/Cart";

const JewelryPage = () => {
  const showcart = useSelector(state => state.ui.cartIsVisible);

  return (
    <div>
      {showcart && <Cart />}
      <Products list={dummy_products} />
    </div>
  );
};

export default JewelryPage;
