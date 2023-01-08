import { Routes, Route } from "react-router-dom";
import Checkout from "../components/Checkout/checkout";
import CardDetails from "../components/Checkout/CardDetails";
import SearchResults from "../components/Checkout/search";
import Cart from "../components/Checkout/Cart";
import Home from "./Home";
import Vitamins from "./Vitamins";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/vitamins" element={<Vitamins />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/carddetails" element={<CardDetails/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/search" element={<SearchResults/>} />
    </Routes>
  );
};

export default AllRoutes;
