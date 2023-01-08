import React from 'react';
import style from "../../styles/SingleProduct.module.css"

const LabTest = () => {
  return (
    <div className={style.LabTests_container}>
        <div>
           <img src="https://1mgstaticfiles.s3.amazonaws.com/skuicons/labs.png" alt="consult doctor" className={style.LabTests_image}/>
        </div>
        <div className={style.LabTests_content}>
            <a href="#" className={style.LabTests_btn} target="_blank">BOOK A LAB TEST ONLINE</a>
        </div>
    </div>
  )
}

export default LabTest;