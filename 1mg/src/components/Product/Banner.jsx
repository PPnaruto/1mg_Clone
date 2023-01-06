import styles from "../../styles/Banner.module.css";

const Banner = ({ image }) => {
  return (
    <div className={styles.banner}>
      <img src={image} alt="banner" />
    </div>
  );
};

export default Banner;
