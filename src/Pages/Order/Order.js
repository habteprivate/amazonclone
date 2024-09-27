import React, { useContext, useEffect, useState } from "react";

import classes from "./order.module.css";

import Layout from "../../Components/Layout/Layout";
import { DataContext } from "../../Components/Data Provider/DataProvider";
import { db } from "../../Utility/FireBase";
import ProductCard from "../../Components/Product/ProductCard";
import { collection,query,orderBy,onSnapshot } from "firebase/firestore";

function Orders() {
  const [{ user }, dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState([]);
  

  useEffect(() => {
    if (user) {
      const ordersRef = collection(db, "user", user.uid, "orders");
      const ordersQuery = query(ordersRef, orderBy("created", "desc"));
      const unsubscribe = onSnapshot(ordersQuery, (snapshot) => {
        // console.log(snapshot);
        setOrders(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
      // db.collection("users")
      //   .doc(user.uid)
      //   .collection("orders")
      //   .orderBy("created", "desc")
      //   .onSnapshot((snapshot) => {
      //     console.log(snapshot);

      //     setOrders(
      //       snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      //     );
      //   });
    } else {
      setOrders([]);
    }
  }, []);
// console.log(orders);
  return (
    <layOut>
      <section className={classes.container}>
        <div className={classes.orders__container}>
          <h2>Your orders</h2>
          {orders?.length == 0 && (
            <div style={{ padding: "20px", fontSize: "16px" }}>
              {" "}
              You don't have orders yet.
            </div>
          )}
          {/* ordered items */}
          <div>
            {orders?.map((eachOrder, i) => {
              return (
                <div key={i}>
                  <hr />
                  <p>Order ID: {eachOrder?.id}</p>
                  {eachOrder?.data?.basket?.map((order) => {
                    return (
                      <ProductCard flex={true} product={order} key={order.id} />
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </layOut>
  );
}

export default Orders;
