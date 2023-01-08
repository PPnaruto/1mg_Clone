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
    localStorage.setItem("Cartdata",JSON.stringify(state));
    return state;

}

export default Addtocart_reducer;