import { Routes, Route } from "react-router-dom";
import SingleProduct from "../components/SingleProduct";
import Home from "./Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/singleproduct" element={<SingleProduct/>}/>
    </Routes>
  );
};

export default AllRoutes;
