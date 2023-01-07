import React from 'react';
import style from "../../styles/SingleProduct.module.css"

const ConsultDoctor = () => {
  return (
    
    <div className={style.ConsultDoctor_container}>
        <div>
                <div><img src="https://onemg.gumlet.io/Doctor_xqon4h.png" alt="consult doctor" className={style.ConsultDoctor_image}/> </div>    
        </div>
        <div className={style.ConsultDoctor__content}>
            <a href="/online-consultation" className={style.ConsultDoctor_btn} target="_blank">CONSULT A DOCTOR ONLINE</a>
        </div>
    </div>
  )
}

export default ConsultDoctor;