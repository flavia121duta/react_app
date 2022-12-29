import style from "../components/Jewelry/Favorites.module.css";
import Card from "../components/UI/Card";

const Favorites = (props) => {

  return (
    <Card className={style.container}>
      <p>List withh all jewelry added to favorites</p>
    </Card>
  );
};

export default Favorites;
