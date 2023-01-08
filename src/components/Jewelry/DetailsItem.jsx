import styles from "./DetailsItem.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const DetailsItem = () => {
  const params = useParams();

  const [jewelry, setJewelry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchJewelry = async () => {
      const response = await fetch(
        "https://react-app-9c2a2-default-rtdb.europe-west1.firebasedatabase.app/jewelry.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const responseData = await response.json();

      const loadedData = [];

      for (const key in responseData) {
        loadedData.push({
          id: key,
          category: responseData[key].category,
          price: responseData[key].price,
          description: responseData[key].description,
          src: responseData[key].src,
        });
      }

      setJewelry(loadedData);
      setIsLoading(false);
    };

    fetchJewelry()
      .then()
      .catch((error) => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <section style={{ textAlign: "center" }}>
        <p>Loading...</p>
      </section>
    );
  }

  // daca a trecut de toate if-urile de mai sus, atunci:
  const jewel = jewelry.find((item) => item.id === params.jewelId);

  if (!jewel) {
    return <p className={styles.notFound}>Jewel not found!</p>;
  }

  const id = jewel.id;
  const category = jewel.category;
  const price = jewel.price;
  const src = jewel.src;
  const description = jewel.description;

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
    <div className={styles.content}>
      <h1 className={styles.detailsPageTitle}>Details about this product</h1>

      <Card className={styles.container}>
        <div className={styles.photo}>
          <img src={jewel.src} alt="jewel" />
        </div>
        <div className={styles.details}>
          <p>Category: {jewel.category}</p>
          <p>Description: {jewel.description}</p>
          <p>Price: ${jewel.price}</p>
          <Button onClick={addToCartHandler} className={styles.btn}>
            Add to Cart
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default DetailsItem;
