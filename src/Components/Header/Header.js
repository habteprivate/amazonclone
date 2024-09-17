import React from "react";
import classes from "./header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from './LowerHeader'

const Header = () => {
  return (
    <>
      <section>
        <section>
          <div className={classes.header__container}>
            {/* logo */}
            <div className={classes.logo__container}>
              <a href="/">
                <img
                  src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
                  alt="amazon logo"
                />
              </a>
              <div className={classes.Delivery}>
                <span>
                  <SlLocationPin size={20} />
                </span>
                <div>
                  <p>Delivered to</p>
                  <span>USA</span>
                </div>
              </div>
            </div>

            <div className={classes.Search}>
              <select name="" id="">
                <option value="">All</option>
              </select>{" "}
              <input type="text" name="" Id="" palceholder="Search Product" />
              <BsSearch size={25} />
            </div>

            {/* right side  */}
            <div>
              {/* right side link */}
              <div className={classes.order_container}>
                <a href="/" className={classes.Language}>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                    alt=""
                  />
                  <select>
                    <option value="/">EN</option>
                  </select>
                </a>
                {/* three components */}
                <a href="/" className={classes.sign}>
                  <p>Sign In</p>
                  <span>Account & Lists</span>
                </a>
                {/* orders */}
                <a href="/">
                  <p>returns</p>
                  <span>& Orders</span>
                </a>

                <a href="/" className={classes.cart}>
                  <BiCart size={35} />
                  <span>0</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <LowerHeader/>
      </section>
    </>
  );
};

export default Header;
