import classes from "../Jewelry/Products.module.css";
import ProductItem from "./ProductItem";
import { useState } from "react";
import ItemsFilter from "./ItemsFilter/ItemsFilter";

const Jewlry = (props) => {
  const [category, setCategory] = useState("All");
  const [sorting, setSorting] = useState("Ascending");

  const handleFilterChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  const handleSortingChange = (selectedSorting) => {
    setSorting(selectedSorting);
  };

  let filteredItems = props.list.filter((item) => item.category === category);

  if (category === "All") {
    filteredItems = props.list;
  }

  if (sorting === "Ascending") {
    filteredItems.sort((p1, p2) =>
      p1.price < p2.price ? -1 : p1.price > p2.price ? 1 : 0
    );
  } else {
    filteredItems.sort((p1, p2) =>
      p1.price < p2.price ? 1 : p1.price > p2.price ? -1 : 0
    );
  }
  

  return (
    <section className={classes.products}>
    <h2>Buy your favorite products</h2>

      <ItemsFilter
        onCategoryChange={handleFilterChange}
        onSortingChange={handleSortingChange}
        selected={category}
        sorting={sorting}
      />

      <ul>
        {filteredItems.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            category={product.category}
            description={product.description}
            src={product.src}
            price={product.price}
          />
        ))}
      </ul>

    </section>
  );
};

export default Jewlry;
