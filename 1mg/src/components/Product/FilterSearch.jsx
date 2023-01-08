import { useEffect } from "react";
import { useState } from "react";

import styles from "../../styles/FilterSearch.module.css";
import BrandFilterList from "./BrandFilterList";

const FilterSearch = ({ title, elements }) => {
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    let array = elements.filter((element) =>
      element.toLowerCase().includes(search.toLowerCase())
    );
    setItems([...array]);
  }, [search, elements]);

  return (
    <div className={styles.filterSearch}>
      <div className={styles.header}>
        <p>{title.toUpperCase()}</p>
      </div>
      <div className={styles.search}>
        <input
          type="text"
          placeholder={`Search ${title}`}
          onInput={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className={styles.list}>
        <BrandFilterList data={items} />
      </div>
    </div>
  );
};

export default FilterSearch;
