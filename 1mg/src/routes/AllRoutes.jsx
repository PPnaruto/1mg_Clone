import { Routes, Route } from "react-router-dom";
import SingleProduct from "../routes/SingleProduct";
import Checkout from "../components/Checkout/checkout";
import Home from "./Home";
import Vitamins from "./Vitamins";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/singleproduct" element={<SingleProduct/>}/>
      <Route path="/products/vitamins" element={<Vitamins />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
};

export default AllRoutes;
