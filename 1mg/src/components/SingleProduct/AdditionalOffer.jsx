import React from 'react';
import style from "../../styles/SingleProduct.module.css";

const AdditionalOffer = () => {
  return (
    <div className={style.AdditionalOffers__offer_container}>
                <h2 className={style.AdditionalOffers__offer_heading}>Additional offers </h2>
                <div>
                    <div className={style.AdditionalOffers__offer_content}>
                        <div className={style.AdditionalOffers__offer_icon}>
                            <div class="">
                                <img className={style.AdditionalOffers__offer_image} src="https://onemg.gumlet.io/vibatg4xwiuep6bhonzs.svg" alt="additional_offer_flag"/>
                            </div>
                        </div>
                        <div className={style.AdditionalOffers__offer_detail}>
                                <b>Paytm Wallet</b>: Pay with Paytm Wallet on Tata 1mg for ₹999 or more and get 5% cashback up to ₹75. Offer ends 6th January 2023.
                        </div>
                    </div>
                </div>
                    <div className={style.AdditionalOffers__show_buttons}><span>Show more</span></div>
            </div>
  )
}

export default AdditionalOffer;