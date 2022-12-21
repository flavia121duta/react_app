import style from "./Item.module.css";
import { useState } from "react";

const Item = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const removeFromFavorites = (event) => {
    setIsClicked(false);
    props.onRemoveFromFavorites(props.id);
  };

  const addToFavorites = (event) => {
    setIsClicked(true);
    props.onAddToFavorites(props.id);

    // let adi = localStorage.getItem("adi");
    // if (adi === undefined) {
    //   adi = [props.id];
    // } else {
    //   adi = adi + "," + props.id;
    // }

    // localStorage.set("adi", adi);
    // console.log(localStorage.getItem("adi"));
  };

  return (
    <div className={style.item}>
      <div className={`${style.details} ${isClicked && style.selected}`}>
        <button
          onClick={!isClicked ? addToFavorites : removeFromFavorites}
          value={isClicked}
        >
          {props.text}
        </button>
        <h2>{props.category}</h2>
      </div>
      <img src={props.src} alt="jewel" />
      <div>Pret: {props.price}</div>
    </div>
  );
};

export default Item;
