import { useDispatch  , useSelector} from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import  {DLT} from "../../redux/Actions/cartAction";
import "./checkoutStyles.css";
import { useState } from "react";

function Checkout() {

    const data = JSON.parse(localStorage.getItem('Cartdata'));
    console.log(data);

    const dispatch = useDispatch();
    const history = useNavigate();

    //quantity
    const[quantity ,setQuantity] = useState(1);

    const[totalprice,setTotalprice] = useState(0);
    // const data = useSelector(state => state.carts)
    // useEffect(() => {
    //     console.log('The cart has changed!');
    //   }, [data]);
    return (
        <div className="main">
            <div className="top">
                <img src="https://www.1mg.com/images/tata_1mg_logo.svg" width="124" height="35" />
                <input type="text" name="search" />
                
            </div>
            <span class="CartStepperMobile__label___3iasr">My Cart</span>

            <div className='row d-flex justify-content-center align-items-center'>
                {
                    data.map((element, id) => {
                       
                        let price=0;
                        //let totalprice = 0

                                              

                        const dlt = (id) =>{
                            dispatch(DLT(id));
                            history("/checkout");

                            console.log(id);
                        }
                        
                        
                        if(element.discount === null){
                            price = element.price;
                            console.log(price);
                        }
                        else{
                            price = element.price - ((element.price * element.discount) / 100);
                            
                            console.log(price);
                        }
                        
                        return (
                            <div className='box'>
                            <div className='top'>

                                <div className='box_text'>
                                    <h3> {element.title}</h3>
                                    <h5>{element.desc}</h5>
                                    <p style={{ fontSize: 10, cursor: "pointer" }} onClick={()=>dlt(element.id)}>
                                        <i className='fas fa-trash'> REMOVE </i></p>
                                </div>
                                <div>
                                    <h4>₹{price}</h4>
                                    {element.price !== price && <h4 style={{textDecoration:"line-through" ,color:"#9E9E9E" }}>MRP {element.price}</h4>}
                                    <div className="inc" style={{width:100, cursor:"pointer",background:"#ddd",color:"#111"}}>
                                        <span style={{fontSize:15}}  onClick={()=>{setQuantity(prev => prev-1)}}>-</span>
                                        <span style={{fontSize:10}}>{quantity}</span>
                                        <span style={{fontSize:15}} onClick={()=>{setQuantity(prev => prev+1)}}>+</span>
                                    </div>
                                </div>
                                <br></br>
                                <br></br>
                            </div>
                            </div>
                        )
                    })
                }
                </div>
        </div>
    )

}
export default Checkout;