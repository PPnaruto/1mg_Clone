import INIT_STATE from "./initialstate";
export const cartReducers = (state = INIT_STATE, action) => {

         
               switch(action.type){
                    // case "ADD_CART":
                    //     return{
                    //         ...state,  //we use spread operator here because we need to store the previous data also in cart
                    //         carts:[...state.carts,action.payload] // previous and new data both will be store in cart.
                    //     }

                    case "RMV_CART":
                        // console.log(state.carts); 
                        const updatedCart = JSON.parse(localStorage.getItem('Cartdata'));
                        return{
                            ...state,
                            carts:updatedCart
                            
                        }
                    default:
                        return state
                }
                
            }
        
            