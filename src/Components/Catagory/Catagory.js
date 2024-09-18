import React from "react";
import {categoryinfo } from "../Catagory/Catagoryinfo";
import CatagoryCard from "./CatagoryCard";
import classes from './catagory.module.css'

const Catagory = () => {
  return (
    <section className={classes.Catagory__container}>
      {/* {console.log(categoryinfo)}; */}
      {categoryinfo.map((info) => (
        <CatagoryCard data={info} />
      ))}
    </section>
  );
};

export default Catagory;
