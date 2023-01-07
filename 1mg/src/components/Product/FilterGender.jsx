import styles from "../../styles/FilterAge.module.css";
import GenderList from "./GenderList";

const FilterGender = ({ title, elements }) => {
  return (
    <div className={styles.filterAge}>
      <div className={styles.header}>
        <p>{title.toUpperCase()}</p>
      </div>
      <div className={styles.list}>
        <GenderList data={elements} />
      </div>
    </div>
  );
};
export default FilterGender;
