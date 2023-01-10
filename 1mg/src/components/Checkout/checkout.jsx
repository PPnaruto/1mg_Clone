import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  DecreasequantityAction,
  IncreasequantityAction,
  DeleteitemAction,
} from "../../redux/Cart/AddtoCart_action";
import TotalPrice from "./TotalPrice";
import "../../styles/checkoutStyles.css";
import { useState } from "react";

function Checkout() {
  const data = useSelector((state) => state.cart.Products);

  // const data = JSON.parse(localStorage.getItem('Cartdata1'));
  console.log(data);

  const dispatch = useDispatch();
  const history = useNavigate();

  const [total, setTotal] = useState(0);
  useEffect(() => {
    const itemprice = JSON.parse(localStorage.getItem("Cartdata1")) || [];
    const total_price = itemprice.reduce((acc, ele) => {
      // console.log(ele.Actual_price);
      return acc + ele.Actual_price * ele.qty;
    }, 0);
    setTotal(total_price);
  }, [data]);

  //discount Price
  const [discount, setDiscount] = useState(0);
  useEffect(() => {
    const itemprice = JSON.parse(localStorage.getItem("Cartdata1")) || [];
    const discPrice = itemprice.reduce((acc, element) => {
      // console.log(ele.Actual_price);
      return (
        acc +
        Math.floor(
          element.Actual_price -
            (element.Actual_price * element.state.discount) / 100
        ) *
          element.qty
      );
    }, 0);
    setDiscount(discPrice);
  }, [data]);

  //remaining Price

  //add data
  const send = (id) => {
    dispatch(IncreasequantityAction(id));
  };

  //remove one
  const remove = (id) => {
    dispatch(DecreasequantityAction(id));
  };

  //delete element
  const dlt = (id) => {
    dispatch(DeleteitemAction(id));
    history("/checkout");

    // console.log(id);
  };
  return (
    <div className="main1">
      <span
        className="Cart"
        style={{
          fontSize: "20px",
          fontWeight: "500",
          color: "#FF6F61",
          marginTop: "40px",
        }}
      >
        My Cart
      </span>
      <div className="parent-cart">
        <div className="parent-child">
          {data.map((element, id) => {
            let price = 0;
            //let totalprice = 0
            if (element.discount === null) {
              price = element.Actual_price;
              // console.log(price);
            } else {
              price = Math.floor(
                element.Actual_price -
                  (element.Actual_price * element.state.discount) / 100
              );
            }

            return (
              <div className="top">
                <div className="box_text">
                  <h3> {element.state.title}</h3>
                  <h5>
                    Brand: {element.state.brand} && Category:{" "}
                    {element.state.category}{" "}
                  </h5>
                  <p
                    style={{
                      fontSize: 13,
                      fontFamily: "Arial, Helvetica, sans-serif",
                      cursor: "pointer",
                    }}
                    onClick={() => dlt(id)}
                  >
                    <i className="fas fa-trash"> REMOVE </i>
                  </p>
                </div>
                <div className="price_box">
                  <h4>₹{price}</h4>
                  {element.state.price !== price && (
                    <h4
                      style={{
                        textDecoration: "line-through",
                        color: "#9E9E9E",
                        fontSize: "10px",
                      }}
                    >
                      MRP {element.Actual_price}
                    </h4>
                  )}
                  <div
                    className="inc"
                    style={{
                      width: 100,
                      cursor: "pointer",
                      background: "#FF6F61",
                      color: "#111",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 15,
                        background: "#FF6F61",
                        color: "#FFFFFF",
                      }}
                      onClick={() => remove(id)}
                    >
                      -
                    </span>
                    <span
                      style={{
                        fontSize: 14,
                        background: "#FF6F61",
                        color: "#FFFFFF",
                      }}
                    >
                      {element.qty}
                    </span>
                    <span
                      style={{
                        fontSize: 15,
                        background: "#FF6F61",
                        color: "#FFFFFF",
                      }}
                      onClick={() => send(id)}
                    >
                      +
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <TotalPrice total={total} discountPrice={discount} />
        </div>
      </div>
    </div>
  );
}
export default Checkout;
