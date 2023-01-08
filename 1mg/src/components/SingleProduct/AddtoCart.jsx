import React from 'react';
import style from "../../styles/SingleProduct.module.css";
import {Addtocart_action} from '../../redux/Cart/AddtoCart_action';
import { useDispatch,useSelector } from 'react-redux';
import store from '../../redux/store';
import { useEffect,useState } from 'react';



const AddtoCart = ({state,price}) => {
    const data = useSelector((seletor)=>{
        return seletor.cart.Products;
    })
   
    const [cartitem,setCartitem] = useState([]);
    const [qty,setQty] = useState(1);
    const dispatch = useDispatch();
    useEffect(()=>{
         setCartitem(JSON.parse(localStorage.getItem("Cartdata1"))||[]);
         console.log("Hi");
    },[data])
     const handleclick=()=>{
           const filtered= data.filter((e)=>{
                return (e.Actual_price===price && e.qty===qty && e.state.title===state.title)       
            })
            if(filtered.length==0){
                localStorage.setItem("Cartdata1",JSON.stringify([...cartitem,{
                    state:state,
                    Actual_price:price,
                    qty:qty
                }]));
                Addtocart_action(state,price,qty,dispatch);
                alert("Product Added Succesfully");
            }else{
                alert("Product is already Added");
            }   
        show();
    }
    const show =()=>{
        console.log(store.getState());
    }
    const handleqtychange=(e)=>{
        if(e.target.value === "1"){
            setQty(1);
        }else if(e.target.value === "2"){ 
            setQty(2);
        }else if(e.target.value === "3"){
            setQty(3);
        }
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
                           <input type="radio" checked name="value" />
                            <p style={{fontSize:"23px"}}>Rs. {Math.floor(price-(price*(state.discount/100)))}</p>
                            <p style={{textDecoration:"line-through",fontSize:"16px"}}>MRP <span>Rs. {price}</span></p>
                            <span className={style.discount_val}>{state.discount}% off</span>
                        </div>
                        <div className={style.price_val} style={{display:"flex",alignItems:"center"}}>
                            <input type="radio" name="value" />
                            <p style={{fontSize:"23px"}}>Rs. {Math.floor(price-(price*(state.discount/100)))} </p>
                            <span style={{fontSize:"12px"}}>+ free shipping and 5% Extra NeuCoins with </span>
                            <img style={{width:"50px",height:"20px",border:"1px solid red"}} src="https://onemg.gumlet.io/v1613645053/marketing/phb2bz61etrdmuurfdoq.png" alt="image_care plan" />   
                        </div>
                        
                        
                        <p style={{fontSize:"12px",marginTop:"20px"}}>Inclusive of all taxes</p>
                        <div className={style.packets_box}>
                            <select name="" id="" onChange={handleqtychange}>
                                <option value="1">1 Pack</option>
                                <option value="2">2 Pack</option>
                                <option value="3">3 Pack</option>
                            </select> of 30 {state.product_form}
                        </div>
                        <button className={style.cart_button} onClick={handleclick}>Add to cart</button>
                    </div>
                </div>
                
           </div>
   
  )
}

export default AddtoCart;