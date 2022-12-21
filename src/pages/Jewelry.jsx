import style from "../components/Jewelry/Jewelry.module.css";
import Card from "../components/UI/Card";
import Item from "../components/Jewelry/Item";
import { useState } from "react";
import ItemsFilter from "../components/Jewelry/ItemsFilter/ItemsFilter";

const Jewlry = (props) => {
  const [favorites, setFavorites] = useState([]);
  const [category, setCategory] = useState("All");
  const [sorting, setSorting] = useState("Ascending");

  const handleFilterChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  const handleSortingChange = (selectedSorting) => {
    setSorting(selectedSorting);
  };

  const addToFavorites = (providedId) => {
    const newItem = props.list.find((item) => item.id === providedId);
    setFavorites((prevItems) => [...prevItems, newItem]);
  };

  const removeFromFavorites = (providedId) => {
    const newList = favorites.filter((item) => item.id !== providedId);
    setFavorites(newList);
  };

  // console.log(favorites);

  let filteredItems = props.list.filter((item) => item.category === category);

  if (category === "All") {
    filteredItems = props.list;
  }

  if (sorting === "Ascending") {
    filteredItems.sort((p1, p2) => (p1.price < p2.price) ? -1 : (p1.price > p2.price) ? 1 : 0);
  } else {
    filteredItems.sort((p1, p2) => (p1.price < p2.price) ? 1 : (p1.price > p2.price) ? -1 : 0);
  }

  // console.log(filteredItems);

  return (
    <div>
      <ItemsFilter 
      onCategoryChange={handleFilterChange} 
      onSortingChange={handleSortingChange}
      selected={category}
      sorting={sorting} />

      <Card className={style.jewelry}>
        {filteredItems.map((jewel) => (
          <Item
            key={jewel.id}
            id={jewel.id}
            category={jewel.category}
            src={jewel.src}
            text="Add"
            price={jewel.price}
            onAddToFavorites={addToFavorites}
            onRemoveFromFavorites={removeFromFavorites}
          />
        ))}
      </Card>
    </div>
  );
};

export default Jewlry;
