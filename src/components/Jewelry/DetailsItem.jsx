import styles from "./DetailsItem.module.css";
import Card from "../UI/Card";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const DetailsItem = () => {
  const params = useParams();

  const [jewelry, setJewelry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
    });
    
  }, []);

  if (isLoading) {
    return <section style={{textAlign: "center"}}>
      <p>Loading...</p>
    </section>
  }


  // daca a trecut de toate if-urile de mai sus, atunci: 
  const jewel = jewelry.find((item) => item.id === params.jewelId);

  if (!jewel) {
    return <p>Jewel not found!</p>;
  }

  return (
    <Card className={styles.container}>
      <h1>Page with details</h1>
      <div>
        <p>{jewel.category}</p>
        <img src={jewel.src} alt="jewel" />
        <p>{jewel.description}</p>
        <p>{jewel.price}</p>
      </div>
    </Card>
  );
};

export default DetailsItem;