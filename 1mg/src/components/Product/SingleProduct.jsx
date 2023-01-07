import styles from "../../styles/SingleProduct.module.css";

import Rating from "./Rating";

const SingleProduct = (props) => {
  const { image, title, desc, rating, price, discount } = props;
  const final_price = Math.round(price - price * (discount / 100));
  return (
    <div className={styles.product}>
      <div className={styles.image}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.title}>
        <p>{title}</p>
      </div>
      <div className={styles.desc}>
        <p>{desc}</p>
      </div>
      <div className={styles.rating}>
        <Rating rating={rating} />
      </div>
      <div className={styles.discount}>
        <p>MRP</p>
        <span>₹{price}</span>
        <p>{discount}% OFF</p>
      </div>
      <div className={styles.mrp}>
        <p>
          <span>MRP</span> ₹{final_price}
        </p>
        <button>ADD</button>
      </div>
    </div>
  );
};

export default SingleProduct;
