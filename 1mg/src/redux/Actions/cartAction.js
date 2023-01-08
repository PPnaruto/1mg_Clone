//here item is that when user click on add to cart button

const ADD = (item) =>{
    return{
        type:"ADD_CART", //then we call these fun in reducers
        payload:item
    }
}

const DLT = (id) =>{
    const carts = JSON.parse(localStorage.getItem('Cartdata'));  // get the current cart from local storage
    const updatedCart = carts.filter(item => item.id !== id);  // remove the item with the specified ID
    localStorage.setItem('Cartdata', JSON.stringify(updatedCart));  // update the cart in local storage
    console.log("ID" ,id);
    return{
        type:"RMV_CART", //then we call these fun in reducers
        payload:id
    }
}


export { ADD ,DLT};
