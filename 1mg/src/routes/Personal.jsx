import { useEffect } from "react";
import { useDispatch } from "react-redux";

import AllFilters from "../components/Product/AllFilters";
import ProductsWrapper from "../components/Product/ProductsWrapper";
import { fetchData } from "../redux/Product/action";

import styles from "../styles/Vitamins.module.css";

const Personal = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData("Personal"));
  }, []);

  return (
    <main>
      <section className={styles.product}>
        <div className={styles.filterWrapper}>
          <AllFilters />
        </div>
        <div className={styles.productWrapper}>
          <ProductsWrapper category="Personal" />
        </div>
      </section>
    </main>
  );
};
export default Personal;
