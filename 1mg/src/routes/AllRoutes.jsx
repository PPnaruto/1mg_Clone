import { Routes, Route } from "react-router-dom";
import SingleProduct from "../routes/SingleProduct";
import Checkout from "../components/Checkout/checkout";
import Home from "./Home";
import Vitamins from "./Vitamins";
import Diabetes from "./Diabetes";
import Healthcare from "./Healthcare";
import Personal from "./Personal";
import Ayurveda from "./Ayurveda";
import Homeopathy from "./Homeopathy";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/singleproduct" element={<SingleProduct/>}/>
      <Route path="/products/vitamins" element={<Vitamins />} />
      <Route path="/products/diabetes" element={<Diabetes />} />
      <Route path="/products/healthcare" element={<Healthcare />} />
      <Route path="/products/personal" element={<Personal />} />
      <Route path="/products/ayurveda" element={<Ayurveda />} />
      <Route path="/products/homeopathy" element={<Homeopathy />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
};

export default AllRoutes;
