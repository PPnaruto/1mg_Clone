import styles from "../../styles/SubNavTwo.module.css";

import { ImLocation } from "react-icons/im";
import { MdMyLocation } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SubNavTwo = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const redirect = (search) => {
    navigate(`/products?search=${search}`);
  };

  const fillSearch = (e) => {
    const key = e.key;
    const value = e.target.value;
    setSearch(value);
    if (key == "Enter") redirect(value);
  };

  const handleClick = (e) => {
    redirect(search);
  };

  return (
    <div className={styles.subnavtwo}>
      <div className={styles.left}>
        <div className={styles.city}>
          <div className={styles.item}>
            <ImLocation />
          </div>
          <div className={styles.item}>New Delhi</div>
          <div className={styles.item}>
            <MdMyLocation />
          </div>
        </div>
        <div className={styles.search}>
          <div className={styles.input}>
            <input
              type="text"
              placeholder="Search for Medicines and Health Products"
              onKeyDown={fillSearch}
            />
          </div>
          <div className={styles.button}>
            <FiSearch onClick={handleClick} />
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.rightitem}>
          <img src="https://onemg.gumlet.io/quick_buy_rebrand_lqpnce.svg" />
          <p> QUICK BUY! Get 25% off on medicines*</p>
        </div>
        <div className={styles.rightitem}>
          <button>Quick Order</button>
        </div>
      </div>
    </div>
  );
};

export default SubNavTwo;
