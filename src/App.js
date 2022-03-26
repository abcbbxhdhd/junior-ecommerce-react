import React from "react"
import { Routes, Route } from "react-router";
import Cart from "./views/Cart";
import Mainpage from "./views/Mainpage";
import ProductDetail from "./views/ProductDetail";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Mainpage />}/>
      <Route path="/:productId" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
