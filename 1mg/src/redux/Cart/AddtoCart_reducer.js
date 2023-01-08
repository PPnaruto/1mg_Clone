const initdata={
    Products:[],
}

let Addtocart_reducer=(state=initdata,action)=>{
    switch(action.type){
        case "ADD_TO_CART":
            state={
                ...state,
                Products:[...state.Products,action.payload],
            }
    }

    return state;

}

export default Addtocart_reducer;