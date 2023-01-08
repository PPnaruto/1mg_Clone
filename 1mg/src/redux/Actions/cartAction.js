//here item is that when user click on add to cart button

const INC = (id) =>{
    
    return{
        type:"INC", //then we call these fun in reducers
        payload:id
    }
}

const DLT = (id) =>{
    const carts = JSON.parse(localStorage.getItem('Cartdata1'));  // get the current cart from local storage
    const updatedCart = carts.filter(item => item.state.id !== id);  // remove the item with the specified ID
    localStorage.setItem('Cartdata1', JSON.stringify(updatedCart));  // update the cart in local storage
    console.log("ID" ,id);
    return{
        type:"RMV_CART", //then we call these fun in reducers
        payload:id
    }
}
 
//remove individual item
const REMOVE = (id) =>{
    // const carts = JSON.parse(localStorage.getItem('Cartdata1'));  // get the current cart from local storage
    // const updatedCart = carts.filter(item => item.state.id !== id);  // remove the item with the specified ID
    // localStorage.setItem('Cartdata1', JSON.stringify(updatedCart));  // update the cart in local storage
    // console.log("ID" ,id);
    return{
        type:"RMV_ONE", //then we call these fun in reducers
        payload:id
    }
}


export {INC,DLT,REMOVE};
