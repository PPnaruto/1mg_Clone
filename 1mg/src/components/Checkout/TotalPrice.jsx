import React from 'react'
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import "../../styles/checkoutStyles.css";


function TotalPrice({total,discountPrice}) {
    const amountleft = total - discountPrice;
    const buttonRef = useRef();
    const[couponPrice,setCouponPrice] = useState(discountPrice);
    console.log(couponPrice , discountPrice);

    useEffect(() => {
        setCouponPrice(discountPrice);
    },[discountPrice])
    const applyCoupon = (event) => {
        event.preventDefault();
        discountPrice = discountPrice -150;
        setCouponPrice(discountPrice);
        console.log(discountPrice);
        buttonRef.current.disabled=true;
    }

    


    // const handleChange = (event) =>{
    //     setCouponValue (event.target.value)
    // }
   


    
    
  return (
    <div>
        <div className='top-left'>
            <img class="icon-img" src="https://onemg.gumlet.io/image/upload/v1625657833/ekjkxafxcqqg0oinr3fu.png" alt="Coupon Image" />
            <span><b>You can save extra ₹157 on this order</b></span>
            <h4>Become a member</h4>
            <h5>Care plan membership ₹165 </h5>
            <div className='btnPrice'>
                <button>Know More</button>
                <button>Add to Cart</button>
            </div>
        </div>
        <div className='coupan-main'>
            <div className='coupan'>
                <img src="https://res.cloudinary.com/du8msdgbj/image/upload/v1607414999/marketing/cvtnx1zh5we6atn3m7i0.svg" alt="Coupon Image" class="Coupon__coupon-icon___3TrLZ" />
                <h3>Apply Coupon</h3>
            </div>
            <div className='coupan-input'>
                    <input type="text" placeholder='Enter coupon number' />
                    <button style={{border:"none", width:"70px",color: "#FFFFFF"}} onClick={applyCoupon} ref={buttonRef}>Apply</button>
            </div>
        </div>
        <div className='health'>
            <h3>Check the health of your vital organs</h3>
            <h4>Book Good Health Silver Package for just ₹649</h4>
            <p>Get the tests done easily from your home. This package will help you in identifying potential disorders and deficiencies at an early stage.</p>
            <h6>Pay later on home sample collection</h6>
        </div>
        <div className='Payment'>
            <div className='payment-box'>
                <h2>Item Total(MRP)</h2>
                <h2>₹{total}</h2>
            </div>
            <div className='payment-box'>
                <h2>Price Discount</h2>
                <h2>-₹{amountleft}</h2>

            </div>
            <div className='payment-box'>
                <h2>Shipping Fee</h2>
                <h2>As per delivery address</h2>

            </div>
            <div className='payment-box'>
                <h3> To be paid</h3>
                <h3>₹{couponPrice}</h3>

            </div>
            <div className='payment-box' style={{background: "#e4f6e7"}}>
                <h4>Total Savings</h4>
                <h4 style={{color:"#1aab2a"}} >₹{amountleft}</h4>

            </div>

        </div>
        <div className='bottom'>
            <button style={{width:"100%" , borderRadius: "0px"}}>CHECKOUT</button>
        </div>
    </div>
  )
}

export default TotalPrice;