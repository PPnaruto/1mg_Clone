// import React, { useState } from 'react'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { useDispatch ,useSelector} from 'react-redux';
// import Data from "./Data";
// // import { ADD } from '../../redux/Actions/cartAction';

// const Cart = () => {
//     const [data, setData] = useState(Data);
//     // console.log(data);
//     const dispatch = useDispatch();

//     const send = (e) =>{
//         console.log(e);
//         dispatch(ADD(e));//here we dispatch(store) our data to add

//     }
//     const getdata = useSelector((state)=> state.cartReducers.carts);
//     console.log(getdata);
//     localStorage.setItem('Cartdata', JSON.stringify(getdata));
//     return (
//         <>
//             <div>Cart</div>
//             <div className='container mt-3'>
//                 <h2>Add to cart</h2>

//                 <div className='row d-flex justify-content-center align-items-center'>
//                     {
//                         data.map((element, id) => {
//                             return (
//                                 <>
//                                     <Card style={{ width: '18rem' }}>
//                                         <Card.Img variant="top" src={element.image} />
//                                         <Card.Body>
//                                             <Card.Title> {element.title}</Card.Title>
//                                             <Card.Text>
//                                                 {element.desc}
//                                             </Card.Text>
//                                             <Card.Text>
//                                                 Price: {element.price}
//                                             </Card.Text>
    
//                                             <Button variant="primary" onClick={()=> send(element)}>Add To Cart</Button>
//                                         </Card.Body>
//                                     </Card>
//                                 </>
//                             )
//                         })
//                     }
//                 </div>



//             </div>
//         </>
//     )
// }

// export default Cart