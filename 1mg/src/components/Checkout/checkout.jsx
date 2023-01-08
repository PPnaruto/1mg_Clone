import { useDispatch  , useSelector} from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {DecreasequantityAction, IncreasequantityAction} from "../../redux/Cart/AddtoCart_action"
import  {DLT} from "../../redux/Actions/cartAction";
import "./checkoutStyles.css";
import { useState } from "react";

function Checkout() {

    const data = useSelector((state)=> state.cart.Products);


    // const data = JSON.parse(localStorage.getItem('Cartdata1'));
    console.log(data);

    const dispatch = useDispatch();
    const history = useNavigate();

    const [total,setTotal] = useState(0);
    useEffect(()=>{
        const itemprice = JSON.parse(localStorage.getItem('Cartdata1'))||[];
        const total_price = itemprice.reduce((acc,ele)=>{
            // console.log(ele.Actual_price);
            return acc + ((ele.Actual_price)*(ele.qty));
        },0)
        setTotal(total_price);
    },[data])
    return (
        <div className="main1">
       
            <span class="CartStepperMobile__label___3iasr">My Cart</span>

            <div className='row d-flex justify-content-center align-items-center' style={{boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"}}>
                {
                    data.map((element, id) => {
                        let price=0;
                        //let totalprice = 0

                        //add data
                        const send=(id)=>{
                            dispatch(IncreasequantityAction(id));
                        }

                        //remove one
                        const remove =(id)=>{
                            dispatch(DecreasequantityAction(id))
                        }
                                              
                        //delete
                        const dlt = (id) =>{
                            dispatch(DLT(id));
                            history("/checkout");

                            // console.log(id);
                        }
                        
                        
                        if(element.discount === null){
                            price = element.Actual_price;
                            // console.log(price);
                        }
                        else{
                            price = Math.floor(element.Actual_price - ((element.Actual_price * element.state.discount) / 100));
                            
                            // console.log(price);
                        }
                        
                        return (
                           
                            <div className='top'>
                                

                                <div className='box_text'>
                                    <h3> {element.state.title}</h3>
                                    <h5>{element.state.desc}</h5>
                                    <p style={{ fontSize: 10, cursor: "pointer" }} onClick={()=>dlt(element.state.id)}>
                                        <i className='fas fa-trash'> REMOVE </i></p>
                                </div>
                                <div className="price_box">
                                    <h4>₹{price}</h4>
                                    {element.state.price !== price && <h4 style={{textDecoration:"line-through" ,color:"#9E9E9E" ,fontSize:"10px"}}>MRP {element.Actual_price}</h4>}
                                    <div className="inc" style={{width:100, cursor:"pointer",background:"#FF6F61",color:"#111"}}>
                                        <span style={{fontSize:15}}  onClick={()=>remove(id)}>-</span>
                                        <span style={{fontSize:14}}>{element.qty}</span>
                                        <span style={{fontSize:15}} onClick={()=>send(id)}>+</span>
                                    </div>
                                    
                                </div>
                                <hr></hr>
                                
                            </div>
                            
                        )
                    })
                }
                <div>
                    Total Price:- <span>{total}</span>
                </div>
                </div>
        </div>
    )

}
export default Checkout;