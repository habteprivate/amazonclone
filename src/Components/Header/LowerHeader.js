import React from "react";

import { AiOutlineMenu } from "react-icons/ai";
import classes from "./header.module.css";

function LowerHeader() {
  return (
    <div className={classes.lower__container}>
      <ul>
        <li calssName={classes.oulinemenu}>
          <AiOutlineMenu />
          <p>All</p>
        </li>
        <li>Today's Deal</li>
        <li>Customer Service</li>
        <li>Regestary </li>
        <li>Gift Cards</li>
        <li>Sale</li>
      </ul>
    </div>
  );
}

export default LowerHeader;
