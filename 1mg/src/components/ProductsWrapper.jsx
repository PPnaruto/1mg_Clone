import ProductBreadCrum from "./ProductBreadCrum";
import styles from "../styles/ProductsWrapper.module.css";

const ProductsWrapper = ({ category }) => {
  return (
    <div className={styles.wrapper}>
      <ProductBreadCrum category={category} />
    </div>
  );
};

export default ProductsWrapper;
