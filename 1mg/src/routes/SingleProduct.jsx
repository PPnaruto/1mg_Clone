import React from 'react';
import { useState,useEffect } from 'react';
import style from "../styles/SingleProduct.module.css";
import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'

 const SingleProduct = () => {

    const [state,setState] = useState({});
    useEffect(()=>{
        fetch(' http://localhost:8080/products/1')
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            setState(data);
        });
    },[])
  return (
    <div style={{display:"flex", justifyContent:"space-around"}} className={style.parent} >
        <div className={style.product_info}>
            <div>
                 <img src={state.image} alt="" />
            </div>
            <div>
                <h2>{state.title}</h2>
                <p>{state.brand} Pvt Ltd.</p>
                <div style={{display:"flex",gap:"20px"}}>
                    <button>{state.rating}  <FontAwesomeIcon icon={faStar} /></button>
                    <p>{Math.floor(Math.random()*50)} ratings & {Math.floor(Math.random()*10)} reviews</p>
                </div>
                <p>Pack Size (3)</p>
                <div style={{display:"flex",gap:"30px",marginTop:"20px"}}>
                    <div className={style.tab_qty}><p>30 tablets</p> <span>Rs.{state.price}</span></div>
                    <div className={style.tab_qty}><p>60 tablets</p><span>Rs.{state.price*2}</span></div>
                    <div className={style.tab_qty}><p>90 tablets</p><span>Rs.{state.price*3}</span></div>
                </div>
                <h4>Product Heighlights</h4>
                <p><ul>
                    <li><span style={{fontWeight:"bold"}}> To support your overall health:</span> Centrum Women, a multivitamin and multimineral daily supplement is formulated with 23 essential vitamins and minerals to support overall health</li>
                    <li><span style={{fontWeight:"bold"}}>Formulated with plant-based botanical for radiance:</span> Centrum Women, multivitamin and multimineral with scientifically studied ingredients and plant-based botanical hyaluronate for healthy skin</li>
                    <li><span style={{fontWeight:"bold"}}>Supports immunity:</span>  These multivitamins and multimineral tablets contain vitamins C, D3, B12 and zinc for immunity support. It helps the immune system to help fight off infections</li>
                    <li><span style={{fontWeight:"bold"}}>Stronger bones:</span>  Centrum Women, a multivitamin and multimineral supplement has calcium, vitamin D3 and magnesium that helps to build bones and supports strong bone health. Consume 1 tablet daily</li></ul></p>
                
                
            </div>
           
        </div>
        <div className={style.price_info}>
           
           <div style={{border:"1px solid black"}}>
            <div>
                <p>{Math.floor(Math.random()*500)} people bought this recently</p>
            </div>
            <div>
                <p style={{textDecoration:"line-through"}}>MRP <span>Rs. {Math.floor((state.price*100)/(100-state.discount))}</span></p>
                <h1>Rs. {state.price}</h1>
                <p>inclusive all taxes</p>
                <div>
                    <select name="" id="">
                        <option value="1">1 bottle</option>
                        <option value="2">2 bottle</option>
                        <option value="3">3 bottle</option>
                    </select> of 30 tablets
                </div>
                <button className={style.cart_button}>Add to cart</button>
            </div>
           </div>
        </div>
    </div>
  )
}

export default SingleProduct;