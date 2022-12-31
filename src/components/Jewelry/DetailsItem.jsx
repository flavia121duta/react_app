import styles from "./DetailsItem.module.css";
import Card from "../UI/Card";
import { useParams } from "react-router-dom";

const DetailsItem = () => {
    const params = useParams();

    const response = fetch(
      "https://react-app-9c2a2-default-rtdb.europe-west1.firebasedatabase.app/jewelry.json"
    );
    const responseData = response.json();
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

    const jewel = loadedData.find(item => item.id === params.jewelId);
  return (
    <Card className={styles.container}>
      <h1>Page with details</h1>
      <p>Id: {params.jewelId}</p>
    </Card>
  );
};

export default DetailsItem;
