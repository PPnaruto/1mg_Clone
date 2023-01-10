import React from "react";
import style from "../styles/NotFound.module.css";

const NotFound = () => {
  return (
    <div className={style.NotFound_container}>
      <div>
        <img src="https://onemg.gumlet.io/404_kfxqlu.svg" alt="" />
      </div>
      <div>
        <h1> 404 </h1>
        <h1>Page Not Found</h1>
      </div>
    </div>
  );
};

export default NotFound;
