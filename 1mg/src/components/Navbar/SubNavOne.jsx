import styles from "../../styles/SubNavOne.module.css";

import { Link } from "react-router-dom";
import SignUpLogin from "../SignUpLogin/SignUpLogin";
import { useDispatch, useSelector } from "react-redux";
import { IoPersonOutline } from "react-icons/io5";
import { LogoutAction } from "../../redux/Auth/AuthAction";

const SubNavOne = () => {
  const isAuth = useSelector((store) => store.auth.isAuth);
  const dispatch = useDispatch();

  const logoutFunc = () => {
    LogoutAction(dispatch);
  };
  return (
    <div className={styles.subnavone}>
      <div className={styles.left}>
        <div className={styles.header}>
          <Link to="/">
            <img
              src="https://www.1mg.com/images/tata_1mg_logo.svg"
              alt="1mg logo"
            />
          </Link>
        </div>
        <div className={styles.routes}>
          <div className={styles.item}>
            <Link to="#">MEDICINES</Link>
          </div>
          <div className={styles.item}>
            <Link to="#">
              LAB TESTS <span>SAFE</span>
            </Link>
          </div>
          <div className={styles.item}>
            <Link to="#">CONSULT DOCTORS</Link>
          </div>
          <div className={styles.item}>
            <Link to="#">COVID-19</Link>
          </div>
          <div className={styles.item}>
            <Link to="#">AYURVEDA</Link>
          </div>
          <div className={styles.item}>
            <Link to="#">
              CARE PLAN <span>SAVE MORE</span>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={`${styles.login} ${styles.element}`}>
          {isAuth ? (
            <>
              <IoPersonOutline />|
              <div className={styles.logout_container}>
                <p onClick={logoutFunc}>Log Out</p>
              </div>
            </>
          ) : (
            <SignUpLogin />
          )}
        </div>
        <div className={styles.element}>
          <Link to="#">Offers</Link>
        </div>
        <div className={`${styles.element} ${styles.cartcontainer}`}>
          <Link to="/checkout">
            <img src="https://onemg.gumlet.io/cart-icon-rebrand_vp4k0f.svg" />
          </Link>
        </div>
        <div className={styles.element}>
          <Link to="#">Need Help?</Link>
        </div>
      </div>
    </div>
  );
};

export default SubNavOne;
