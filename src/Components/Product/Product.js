import React, { useEffect,useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import Classes from "./product.module.css"

const Product = () => {
  const [Products, setproducts ] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setproducts(res.data);
      })
      .catch(console.error());
  }, []);

  return (  <section className={Classes.Product__container}>
   { Products.map((singleproduct) => {
    return <ProductCard product={singleproduct} key={singleproduct.id}/>
   })
   

   }
 
  </section>)
};

export default Product;
