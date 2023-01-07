import styles from "../../styles/FilterAge.module.css";
import AgeList from "./AgeList";

const FilterAge = ({ title, elements }) => {
  return (
    <div className={styles.filterAge}>
      <div className={styles.header}>
        <p>{title.toUpperCase()}</p>
      </div>
      <div className={styles.list}>
        <AgeList data={elements} />
      </div>
    </div>
  );
};

export default FilterAge;
