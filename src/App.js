import React from "react"
import { Routes, Route } from "react-router";
import Cart from "./views/Cart";
import Mainpage from "./views/Mainpage";
import ProductDetail from "./views/ProductDetail";

function App() {

  return (
    <Routes>
      <Route exact path="/" element={<Mainpage />}/>
      <Route exact path="/:productId" element={<ProductDetail />} />
      <Route exact path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
