import React from 'react';
import style from "../../styles/SingleProduct.module.css";

const DeliveryBox = () => {
  return (
    <div className={style.style_box}>
        <div className={style.style_headerText}>
            <span style={{color:"#3B3B3B"}}>Earliest delivery by</span> 
            <span style={{color:"#00B62F"}}>10pm, Tomorrow</span>
        </div>
        <div className={style.style_deliveryBox} >
            <div className={style.style_deliveryHeader}>Delivering to:</div>
            <div className={style.style_delivery_cta}>
                <span className={style.style_deliveryText}>110020, New Delhi</span>
                <span className={style.style_margin} >
                    <img src="https://onemg.gumlet.io/jj74lyp3teqhlxoo1qkz.svg"/>
                </span>
            </div>
        </div>
   </div>
  )
}

export default DeliveryBox;