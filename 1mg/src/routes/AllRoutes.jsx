import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Vitamins from "./Vitamins";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/vitamins" element={<Vitamins />} />
    </Routes>
  );
};

export default AllRoutes;
