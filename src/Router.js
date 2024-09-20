import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing"
import SignIn from "./Pages/Auth/Signup";
import Payment from "./Pages/Payments/Payment";
import Orders from "./Pages/Order/Order";
import Cart from "./Pages/Cart/Cart";

export default Routing;
function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<SignIn />} />
        <Route path="/payments" element={<Payment />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}


