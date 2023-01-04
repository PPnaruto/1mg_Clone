import { Routes, Route } from "react-router-dom";
import Checkout from "../components/Checkout/checkout";
import Home from "./Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout/>} />
    </Routes>
  );
};

export default AllRoutes;
