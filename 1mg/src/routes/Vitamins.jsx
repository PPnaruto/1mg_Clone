import { useEffect } from "react";
import { useDispatch } from "react-redux";

import AllFilters from "../components/Product/AllFilters";
import ProductsWrapper from "../components/Product/ProductsWrapper";
import { fetchData } from "../redux/Product/action";

import styles from "../styles/Vitamins.module.css";

const Vitamins = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData("Vitamins"));
  }, []);

  return (
    <main>
      <section className={styles.product}>
        <div className={styles.filterWrapper}>
          <AllFilters />
        </div>
        <div className={styles.productWrapper}>
          <ProductsWrapper category="Vitamins" />
        </div>
      </section>
    </main>
  );
};
export default Vitamins;
