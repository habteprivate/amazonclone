import React from "react";

import classes from './catagory.module.css'
import { Link } from "react-router-dom";

const CatagoryCard = ({data}) => {
  return ( 
    <div className={classes.CatagoryCard}>
      <Link to={`/category/${data.name}`}>
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt="" />
        <p>Shop Now</p>
      </Link>
    </div>
  );
};

export default CatagoryCard;
