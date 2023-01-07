import React from 'react';
import { useState,useEffect } from 'react';
import style from "../styles/SingleProduct.module.css";
import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Youtubevideo from '../components/SingleProduct/youtubevideo';
import Product_detail_info from '../components/SingleProduct/Productdetailinfo';
import LabTest from '../components/SingleProduct/LabTest';
import ConsultDoctor from '../components/SingleProduct/ConsultDoctor';
import Additional from '../components/SingleProduct/Additional';
import {useDispatch} from "react-redux";
import Addtocart_action from '../redux/Cart/AddtoCart_action';
import store from '../redux/store';

 const SingleProduct = () => {

    const [state,setState] = useState({});
    const [data,setData] = useState([]);
    const dispatch = useDispatch();
    useEffect(()=>{
        fetch(' http://localhost:8080/products/1')
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            setState(data);
        });
    },[]);
    const handleclick=()=>{
        Addtocart_action(state,dispatch);
        alert("Product Added Succesfully");
        show();
    }
    const show =()=>{
        console.log(store.getState());
    }
  return (
    <div style={{border:"10px solid blue"}}>
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
                    <p>Inclusive of all taxes</p>
                    <div>
                        <select name="" id="">
                            <option value="1">1 bottle</option>
                            <option value="2">2 bottle</option>
                            <option value="3">3 bottle</option>
                        </select> of 30 tablets
                    </div>
                    <button className={style.cart_button} onClick={handleclick}>Add to cart</button>
                </div>
           </div>
           {/* <div style={{border:"1px solid red"}}>
                <span style={{color:"#3B3B3B"}}>Earliest delivery by</span>
                <span style={{color:"#00B62F"}}>10pm, Tomorrow</span>
                <br /><br />
                <p>Delivering to: 424037,Pune </p>
           </div> */}
           <div className={style.style__box___1ez55}>
            <div className={style.style__headerText___3sw_C}>
                <span style={{color:"#3B3B3B"}}>Earliest delivery by</span> 
                <span style={{color:"#00B62F"}}>10pm, Tomorrow</span>
            </div>
                <div className={style.style__deliveryBox___g_mGG} >
                    <div className={style.style__deliveryHeader___1KRla}>Delivering to:</div>
                    <div className={style.style__delivery_cta___1C7Gt}>
                        <span className={style.style__deliveryText___1f5Qp}>110020, New Delhi</span>
                        <span className={style.style__marginLeft-4} >
                            <img src="https://onemg.gumlet.io/jj74lyp3teqhlxoo1qkz.svg"/>
                        </span>
                    </div>
                </div>
           </div>
           <div>
                <img src="https://onemg.gumlet.io/8aea5d70-3f52-4c65-91ce-d30622dec7fa_1670222777.jpg?w=536&amp;h=123&amp;format=auto"/>
           </div>
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
                    <div className={style.AdditionalOffers__show_buttons}><span>Show more <img src="https://onemg.gumlet.io/t2plj2wvywoglfwll4cm_y7momq.svg" alt="show_more"/></span></div>
            </div>
        </div>
    </div>
    <div style={{border:"10px solid black",display:"flex"}}>
        <div> 
            <Youtubevideo/>
            <div className={style.Product_detail_info} style={{border:"1px solid black",width:"800px"}}>
                    <Product_detail_info/>
            </div>
        </div>
        <div style={{border:"3px solid violet",width:"30%"}}>
          <LabTest/>
          <ConsultDoctor/>
          <Additional/>
        </div>      
    </div>
   
    </div>
  )
}

export default SingleProduct;