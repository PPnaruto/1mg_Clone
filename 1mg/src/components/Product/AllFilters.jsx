import { useSelector } from "react-redux";
import styles from "../../styles/AllFilters.module.css";
import FilterAge from "./FilterAge";
import FilterGender from "./FilterGender";
import FilterSearch from "./FilterSearch";

const AllFilters = () => {
  const brands = useSelector((state) =>
    state.products.products.map((element) => element.brand)
  );

  const age = useSelector((state) =>
    state.products.products.map((element) => element.age)
  );

  const gender = useSelector((state) =>
    state.products.products.map((element) => element.gender)
  );

  return (
    <div className={styles.allFilters}>
      <div className={styles.header}>
        <p>FILTERS</p>
      </div>
      <div className={styles.brand}>
        <FilterSearch title="brand" elements={brands} />
      </div>
      <div className={styles.age}>
        <FilterAge title="age" elements={age} />
      </div>
      <div className={styles.gender}>
        <FilterGender title="gender" elements={gender} />
      </div>
    </div>
  );
};

export default AllFilters;
