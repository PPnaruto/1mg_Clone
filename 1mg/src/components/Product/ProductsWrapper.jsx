import styles from "../../styles/ProductsWrapper.module.css";

import { useSearchParams } from "react-router-dom";

import BreadCrum from "./BreadCrum";
import Banner from "./Banner";
import ProductContainer from "./ProductContainer";

const ProductsWrapper = ({ category }) => {
  const [search_param, setSearchParam] = useSearchParams();
  const sort = search_param.get("sort") || "id";
  const brand_filter = search_param.get("brand_filter") || "none";
  const age_filter = search_param.get("age_filter") || "none";
  const gender_filter = search_param.get("gender_filter") || "none";
  const random_index = Math.round(Math.random() * 2);

  const handleSelect = (e) => {
    const value = e.target.value;
    setSearchParam({ brand_filter, age_filter, gender_filter, sort: value });
  };

  return (
    <div className={styles.wrapper}>
      <BreadCrum category={category} />
      <div className={styles.header}>
        <h1>{category.toUpperCase()}</h1>
      </div>
      <div className={styles.banner}>
        <Banner image={banner_images[category][random_index]} />
      </div>
      <div className={styles.filterContainer}></div>
      <div className={styles.action}>
        <p>All Products</p>
        <div className={styles.sort}>
          <p>Sort By</p>
          <select onChange={handleSelect} value={sort}>
            <option value="id">Relevance</option>
            <option value="rating">Average Customer Rating</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
            <option value="discount">Discount</option>
          </select>
        </div>
      </div>
      <div className={styles.productContainer}>
        <ProductContainer sort={sort} />
      </div>
    </div>
  );
};

const banner_images = {
  Vitamins: [
    "https://onemg.gumlet.io/ea27e8f7-acd9-435c-bf8a-0829473fe4cf_1672644081.jpg?w=1062&h=124&format=auto",
    "https://onemg.gumlet.io/3e2ea140-5335-41be-9634-ca9abb61867e_1667453850.jpg?w=1062&format=auto",
    "https://onemg.gumlet.io/bafbdec0-6aff-4ac8-b28c-02b3c702b005_1672645137.png?w=1062&h=124&format=auto",
  ],
  Diabetes: [
    "https://onemg.gumlet.io/cd78485d-3fd0-4fe3-8e96-45de85355677_1667547668.png?w=1062&format=auto",
    "https://onemg.gumlet.io/529389bb-ad23-4482-b3ee-b510e9c61763_1667382153.jpg?w=1062&format=auto",
    "https://onemg.gumlet.io/81ac0f01-674e-4569-b47f-326d0103bfc6_1669038800.jpg?w=1062&h=124&format=auto",
  ],
  Healthcare: [
    "https://onemg.gumlet.io/35244277-850f-45dd-b0d2-bda4db31f917_1670913541.jpg?w=1062&h=124&format=auto",
    "https://onemg.gumlet.io/778ab97c-8dd4-4ddf-bafc-dc91a4e7436c_1672651187.jpg?w=1062&format=auto",
    "https://onemg.gumlet.io/81ac0f01-674e-4569-b47f-326d0103bfc6_1669038800.jpg?w=1062&h=124&format=auto",
  ],

  Personal: [
    "https://onemg.gumlet.io/0460c9f0-9952-4a9b-88d8-f285bc7ba712_1667481734.jpg?w=1062&format=auto",
    "https://onemg.gumlet.io/bb29eb26-0875-4e06-91a6-c3a24cb52498_1667284528.png?w=1062&format=auto",
    "https://onemg.gumlet.io/9955b222-2f09-47e1-a279-f2d509615777_1672815120.jpg?w=1062&h=124&format=auto",
  ],

  Ayurveda: [
    "https://onemg.gumlet.io/0f322ea5-1acc-4d82-a949-3951eed293a6_1667477491.jpg?w=1062&format=auto",
    "https://onemg.gumlet.io/cb992a73-b70a-4c94-8269-dc4f14200197_1667287779.jpg?w=1062&h=124&format=auto",
    "https://onemg.gumlet.io/2633fa91-0c72-491a-8f97-9f9f37deac6a_1672753655.jpg?w=1062&format=auto",
  ],

  Homeopathy: [
    "https://onemg.gumlet.io/0331218b-26b0-4fb1-9b01-6528af055b25_1667477634.jpg?w=1062&format=auto",
    "https://onemg.gumlet.io/c0a6a2ef-7fa4-4d42-b7df-fb90828aa145_1667474655.jpg?w=1062&format=auto",
    "https://onemg.gumlet.io/0f322ea5-1acc-4d82-a949-3951eed293a6_1667477491.jpg?w=1062&format=auto",
  ],
};

export default ProductsWrapper;
