import React from 'react';
import style from "../../styles/SingleProduct.module.css";

const Additional = () => {
  return (
    <div className={style.OtcIcons_container}>
        <ul className={style.icon_list}>
            <li className={style.icon_list_item}>
                <div><img src="https://1mgstaticfiles.s3.amazonaws.com/skuicons/star.png" alt="icon" className={style.item_image}/>
                    <div class="OtcIcons__item-text___2c0ur">Authentic Products</div>
                </div>
            </li>
            <li className={style.icon_list_item}>
                <div><img src="https://1mgstaticfiles.s3.amazonaws.com/skuicons/group.png" alt="icon" className={style.item_image}/>
                <div class="OtcIcons__item-text___2c0ur">Great Savings</div>
                </div>
            </li>
            <li className={style.icon_list_item}>
                <div><img src="https://1mgstaticfiles.s3.amazonaws.com/skuicons/delivery.png" alt="icon" className={style.item_image}/>
                <div class="OtcIcons__item-text___2c0ur">Home Delivery</div>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default Additional