import INIT_STATE from "./initialstate";
export const cartReducers = (state = INIT_STATE, action) => {

         
               switch(action.type){
                    case "RMV_CART":
                        // console.log(state.carts); 
                        const updatedCart = JSON.parse(localStorage.getItem('Cartdata1'));
                        return{
                            ...state,
                            carts:updatedCart
                            
                        }
                    case "INC":

                    return {
                        ...state,
                        carts: state.carts.map(item => {
                          if (item.state.id === action.payload.id) {
                            return {
                              ...item,
                              qty: item.qty + 1
                            };
                          }
                          return item;
                        })
                      };
                        
                        // const carts = JSON.parse(localStorage.getItem('Cartdata1'));  // get the current cart from local storage
                        // const upCarts = carts.filter(item => item.state.id === action.payload.id);  // inc the item with the specified ID
                        // localStorage.setItem('Cartdata1', JSON.stringify(upCarts)); 
                        // // const ItemIndex = state.Products.findIndex((item)=> item.state.id === action.payload.id);
                        // if(upCarts>=0 ){
                        //     state.carts.qty +=1
                        // }else{
                        //     const temp = {...action.payload,qty:1}
                        //     return{
                        //         ...state,
                        //         carts:[...state.Products, temp]
                        //     }
                        // }
                    case "RMV_ONE":


                    return {
                        ...state,
                        carts: state.carts.map(item => {
                          if (item.state.id === action.payload.id) {
                            return {
                              ...item,
                              qty: item.qty - 1
                            };
                          }
                          return item;
                        })
                      };
                        // const ItemIndex_dec = state.carts.findIndex((item)=> item.state.id === action.payload.id);
                        // console.log(ItemIndex_dec);

                        // if(state.carts.qty >= 1){
                        //     const dltitem = state.carts[ItemIndex_dec].qty -= 1
                        //     console.log([...state.carts,dltitem]);

                        //     return{
                        //         ...state,
                        //         carts:[...state.carts]
                        //     }
                        // }else if(state.carts.qty === 1){
                        //     const updatedCart = JSON.parse(localStorage.getItem('Cartdata1'));
                        // return{
                        //     ...state,
                        //     carts:updatedCart
                            
                        // }
                        // }

                    default:
                        return state
                }
                
            }
        
            