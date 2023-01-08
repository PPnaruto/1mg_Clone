import { Link } from "react-router-dom";
import styles from "../../styles/BreadCrum.module.css";

const BreadCrum = ({ category }) => {
  return (
    <div className={styles.breadcrum}>
      <Link to="#">Home</Link>
      {">"}
      <Link to="#">OTC Categories</Link>
      {">"}
      <Link to="#" className={styles.black}>
        {category}
      </Link>
    </div>
  );
};

export default BreadCrum;
