import React from 'react';
import style from "../../styles/SingleProduct.module.css";
import Addtocart_action from '../../redux/Cart/AddtoCart_action';
import { useDispatch } from 'react-redux';
import store from '../../redux/store';

const AddtoCart = ({state}) => {
    const dispatch = useDispatch();
     const handleclick=()=>{
        Addtocart_action(state,dispatch);
        alert("Product Added Succesfully");
        show();
    }
    const show =()=>{
        console.log(store.getState());
    }
  return (
    <div className={style.cart_box} >
                <div className={style.buy_rate_info} style={{backgroundColor:" #edf9ee"}}>
                    <span><img src="https://www.1mg.com/images/social_cue.svg" alt="social-cue"/></span>
                    <p style={{fontSize:"12px"}}>{Math.floor(Math.random()*500)} people bought this recently</p>
                </div>
                <div>
                    <div style={{padding:"10px"}}>
                        <div className={style.price_val}>
                           <input type="radio"checked />
                            <p style={{fontSize:"23px"}}>Rs. {state.price}</p>
                            <p style={{textDecoration:"line-through",fontSize:"16px"}}>MRP <span>Rs. {Math.floor((state.price*100)/(100-state.discount))}</span></p>
                            <span className={style.discount_val}>{state.discount}% off</span>
                        </div>
                        <div className={style.price_val} style={{display:"flex",alignItems:"center"}}>
                            <input type="radio" value="{state.price}" />
                            <p style={{fontSize:"23px"}}>Rs. {state.price} </p>
                            <span style={{fontSize:"12px"}}>+ free shipping and 5% Extra NeuCoins with </span>
                            <img style={{width:"50px",height:"20px",border:"1px solid red"}} src="https://onemg.gumlet.io/v1613645053/marketing/phb2bz61etrdmuurfdoq.png" alt="image_care plan" />   
                        </div>
                        
                        
                        <p style={{fontSize:"12px",marginTop:"20px"}}>Inclusive of all taxes</p>
                        <div className={style.packets_box}>
                            <select name="" id="">
                                <option value="1">1 bottle</option>
                                <option value="2">2 bottle</option>
                                <option value="3">3 bottle</option>
                            </select> of 30 tablets
                        </div>
                        <button className={style.cart_button} onClick={handleclick}>Add to cart</button>
                    </div>
                </div>
                
           </div>
   
  )
}

export default AddtoCart;