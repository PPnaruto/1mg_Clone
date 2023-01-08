const initdata={
    Products: JSON.parse(localStorage.getItem('Cartdata1'))||[] ,
}

let Addtocart_reducer=(state=initdata,action)=>{
    console.log(action);
    switch(action.type){

        case "ADD_TO_CART":
            state={
                ...state,
                Products:[...state.Products,action.payload],
            }
            
        break;
        case "INCREASE_QUANTITY":
            const items = state.Products.map(e => {
                if(e.state.id === action.payload){
                    e.qty += 1;
                }
                return e;
            })
            state={
                ...state,
                Products:items
            }
            break;
            case "DECREASE_QUANTITY":
                const products = state.Products.map(e => {
                    if(e.state.id === action.payload){
                        e.qty -= 1;
                    }
                    return e;
                })
                state={
                    ...state,
                    Products:products
                }
                break;
    }
    //localStorage.setItem('Cartdata1', JSON.stringify(state));
    return state;

}

export default Addtocart_reducer;