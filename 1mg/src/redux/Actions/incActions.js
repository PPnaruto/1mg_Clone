

//Complete the reducer function logic inside the curly braces {}
const initialData = qty;
const reducer = (state = initialData , action) => {
    switch(action.type){
        case "INC":
        return state = action.payload + state
        console.log(state);
        
        // break;
        case "REDUCE":
          return  state= state - action.payload 
        // break;
        default:
          return state;
            
    }
};

export { reducer };
