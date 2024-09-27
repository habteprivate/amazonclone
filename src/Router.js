import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Auths from "./Pages/Auth/Auth.js";
import Payment from "./Pages/Payments/Payment";
import Orders from "./Pages/Order/Order";
import Cart from "./Pages/Cart/Cart";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Results from "./Pages/Results/Results.jsx";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
const stripePromise = loadStripe(
  "pk_test_51Q31zIHGOuKWcO3HIKYvLPO9PVR54x7CmCB82y3SFZQdDWunPsCuy2xiKcgr6uIEg9F4Gx56hxquvYutLbCc3RNs00MQSIalWG"
);
function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auths />} />
        <Route
          path="/payments"
          element={
            <ProtectedRoute
              msg={"You must log in to pay"}
              redirect={"/payments"}
            >
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute
              msg={"You must log in to access your orders"}
              redirect={"/orders"}
            >
              <Orders />
            </ProtectedRoute>
          }
        />

        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/category/:categoryName" element={<Results />} />
      </Routes>
    </Router>
  );
}

export default Routing;
