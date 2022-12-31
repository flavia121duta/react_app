import Products from "../components/Jewelry/Products";
import dummy_products from "../assets/dummy_products";
import Cart from "../components/Cart/Cart";

const JewelryPage = () => {
  return (
    <div>
      <Cart />
      <Products list={dummy_products} />
    </div>
  );
};

export default JewelryPage;
