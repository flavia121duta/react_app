import styles from "./DetailsItem.module.css";
import Card from "../UI/Card";
import { useParams } from "react-router-dom";

const DetailsItem = () => {
    const params = useParams();
  return (
    <Card className={styles.container}>
      <h1>Page with details</h1>
      <p>Id: {params.jewelId}</p>
    </Card>
  );
};

export default DetailsItem;
