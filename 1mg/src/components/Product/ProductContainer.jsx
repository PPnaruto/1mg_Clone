import styles from "../../styles/ProductContainer.module.css";

import SingleProduct from "./SingleProduct";
import Loader from "../Loader";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const ProductContainer = ({ sort }) => {
  const [products, setProducts] = useState([]);
  const data = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.isLoading);
  const brand_filter = useSelector((state) => state.utils.brand_filter);
  const age_filter = useSelector((state) => state.utils.age_filter);
  const gender_filter = useSelector((state) => state.utils.gender_filter);

  useEffect(() => {
    let array = data;

    if (
      brand_filter.length > 0 ||
      age_filter.length > 0 ||
      gender_filter.length > 0
    ) {
      if (brand_filter.length > 0) {
        array = array.filter((element) => brand_filter.includes(element.brand));
      }
      if (age_filter.length > 0) {
        array = array.filter((element) => age_filter.includes(element.age));
      }
      if (gender_filter.length > 0) {
        array = array.filter((element) =>
          gender_filter.includes(element.gender)
        );
      }
    }

    switch (sort) {
      case "id":
        array.sort((a, b) => a.id - b.id);
        break;
      case "rating":
        array.sort((a, b) => b.rating - a.rating);
        break;
      case "low-high":
        array.sort((a, b) => a.price - b.price);
        break;
      case "high-low":
        array.sort((a, b) => b.price - a.price);
        break;
      case "discount":
        array.sort((a, b) => b.discount - a.discount);
        break;
    }

    setProducts([...array]);
  }, [data, sort, brand_filter, age_filter, gender_filter]);

  return (
    <div className={styles.container}>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.products}>
          {products.map((element) => (
            <SingleProduct
              key={element.id}
              id={element.id}
              image={element.image}
              title={element.title}
              desc={element.desc}
              rating={element.rating}
              price={element.price}
              discount={element.discount}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductContainer;
