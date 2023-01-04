import AllFilters from "../components/AllFilters";
import ProductsWrapper from "../components/ProductsWrapper";
import styles from "../styles/Vitamins.module.css";

const Vitamins = () => {
  return (
    <main>
      <section className={styles.product}>
        <div className={styles.filterWrapper}>
          <AllFilters category="Vitamins" />
        </div>
        <div className={styles.productWrapper}>
          <ProductsWrapper category="Vitamins" />
        </div>
      </section>
    </main>
  );
};

export default Vitamins;
