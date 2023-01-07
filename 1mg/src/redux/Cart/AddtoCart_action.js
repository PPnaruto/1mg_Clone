
let Addtocart_action=(data,dispatch)=>{
    dispatch({
        type:"ADD_TO_CART",
        payload:data,
    })
}

export default Addtocart_action;