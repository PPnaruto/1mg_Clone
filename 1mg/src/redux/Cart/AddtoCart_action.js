
let Addtocart_action=(state,price,qty,dispatch)=>{
    dispatch({
        type:"ADD_TO_CART",
        payload:{
            state,
            Actual_price:price,
            qty
        },
    })
}

export default Addtocart_action;