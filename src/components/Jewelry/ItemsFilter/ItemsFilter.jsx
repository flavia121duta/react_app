import style from "./ItemsFilter.module.css";

const ItemsFilter = (props) => {

  const handleSelectedOption = (event) => {
    const selectedCategory = event.target.value;
    props.onCategoryChange(selectedCategory);
  };

  const handleSelectedSorting = (event) => {
    const selectedSorting = event.target.value;
    props.onSortingChange(selectedSorting);
  }

  return (
    <div className={style.expensesFilter}>
      <div className={style.expensesFilterControl}>
        <label>Filter by Category & Price</label>
        
        <select onChange={handleSelectedOption} value={props.selected}>
          <option value="All">All Items</option>
          <option value="Talisman">Talisman</option>
          <option value="Ring">Ring</option>
          <option value="Bracelet">Bracelet</option>
          <option value="Necklace">Necklace</option>
          <option value="Earring">Earring</option>
        </select>

        <select onChange={handleSelectedSorting} value={props.sorting}>
          <option value="Ascending">Low To Hight</option>
          <option value="Descending">Hight To Low</option>
        </select>
      </div>
    </div>
  );
};

export default ItemsFilter;
