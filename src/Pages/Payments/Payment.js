import React, { useContext, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import Classes from "./peyment.module.css";
import { DataContext } from "../../Components/Data Provider/DataProvider";
import Productcard from "../../Components/Product/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";

const Payment = () => {
  const [{ user, basket }] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const stripe = useStripe();
  const elements = useElements();
  const [carderror, setcarderror] = useState(null);

  const handlechange = (e) => {
    e?.error?.message ? setcarderror(e?.error?.message) : setcarderror("");
  };
  return (
    <Layout>
      {/* header */}
      <div className={Classes.payment__header}>
        {" "}
        Check out ({totalItem}) items
      </div>
      {/* payment method  */}
      <section className={Classes.Payment}>
        {/* Address */}
        <div className={Classes.flex}>
          <h3>Delevery Address</h3>
          <div>{user.email}</div>
          <div>123 react road</div>
          <div>MaryLand, Silversprig </div>
        </div>
        <hr />
        {/* product */}
        <div className={Classes.flex}>
          <h3> Review item and delivery</h3>
          <div>
            {basket?.map((item) => (
              <Productcard product={item} flex="true" />
            ))}
          </div>
        </div>
        <hr />
        {/* card form */}
        {carderror && <small style={{ color: "red" }}>{carderror}</small>}
        <div className={Classes.flex}>
          <h3>Payment Method</h3>
          <div className={Classes.payment__card__container}>
            <div className={Classes.payment__details}>
              <form action="">
                <CardElement onChange={handlechange} />
                {/* price */}
                <div className={Classes.payment__prices}>
                  <div>
                    <span style={{disply:"flex",gap:"10px"}}>
                      <p>Total Order |</p> <CurrencyFormat amount={total} />
                    </span>
                  </div>
                  <button>Pay Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Payment;
