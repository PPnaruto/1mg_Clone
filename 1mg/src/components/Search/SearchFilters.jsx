import styles from "../../styles/AllFilters.module.css";

import { useSelector } from "react-redux";
import FilterAgeList from "./FilterAgeList";
import FilterGenderList from "./FilterGenderList";

const SearchFilters = () => {
  const age_store = useSelector((state) =>
    state.products.search?.map((element) => element.age)
  );

  const gender_store = useSelector((state) =>
    state.products.search?.map((element) => element.gender)
  );

  return (
    <div className={styles.allFilters}>
      <div className={styles.header}>
        <p>FILTERS</p>
      </div>
      <div className={styles.age}>
        <div className={styles.header}>
          <p>AGE</p>
        </div>
        <FilterAgeList data={age_store} />
      </div>
      <div className={styles.gender}>
        <div className={styles.header}>
          <p>GENDER</p>
        </div>
        <FilterGenderList data={gender_store} />
      </div>
    </div>
  );
};

export default SearchFilters;
