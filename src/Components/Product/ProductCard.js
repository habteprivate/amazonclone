import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import Classes from './product.module.css'

const ProductCard = ({ product }) => {
  const { image,title, id, rating, price } = product;
  return (
    <div className={`${Classes.Card__container}`}>
      <a href="/">
        <img src={image} />
      </a>
      <div>
        <h3>{title}</h3>
        <div className={Classes.rating}>
          {/* rating */}
          <Rating value={rating.rate} precision={0.1} />
          {/* count */}
          <small>{rating.count}</small>
        </div>
        <div>
          
          <CurrencyFormat amount={price} />
        </div>
        <button className= {Classes.button}>add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
