import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Products from "../components/Jewelry/Products";
import Cart from "../components/Cart/Cart";

const JewelryPage = () => {
  const showcart = useSelector((state) => state.ui.cartIsVisible);

  const [jewelry, setJewelry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

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

    
    fetchJewelry().then().catch(error => {
      setIsLoading(false);
      setHttpError(error.message);
    });
    
  }, []);

  if (isLoading) {
    return <section style={{textAlign: "center"}}>
      <p>Loading...</p>
    </section>
  }

  if (httpError) {
    return <section style={{textAlign: "center", color: "red"}}>
      <p>{httpError}</p>
    </section>
  }

  return (
    <section>
      {showcart && <Cart />}
      <Products list={jewelry} />
    </section>
  );
};

export default JewelryPage;