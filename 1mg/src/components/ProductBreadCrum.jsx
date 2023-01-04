import { Link } from "react-router-dom";
import styles from "../styles/ProductBreadCrum.module.css";

const ProductBreadCrum = ({ category }) => {
  //   category = category ==
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

export default ProductBreadCrum;
