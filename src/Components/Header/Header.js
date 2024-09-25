import React, { useContext } from "react";

import classes from "./header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";
import { DataContext } from "../Data Provider/DataProvider";
import {auth} from "../../Utility/FireBase"

const Header = () => {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  return (
    <>
      <section className={classes.fixedHeader}>
        <section>
          <div className={classes.header__container}>
            {/* logo */}
            <div className={classes.logo__container}>
              <Link to="/">
                <img
                  src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
                  alt="amazon logo"
                />
              </Link>
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
                <Link to="/" className={classes.Language}>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                    alt=""
                  />
                  <select>
                    <option value="/">EN</option>
                  </select>
                </Link>
                {/* three components */}
                <Link to={!user && "/auth"} className={classes.sign}>
                  <div>
                    {user ? (
                      <>
                        <p>Hello, {user?.email?.split("@")[0]}</p>
                        <span onClick={() => auth.signOut()}>Sign Out</span>
                      </>
                    ) : (
                      <>
                        <p>Hello, Sign in</p>
                        <span>Account & Lists</span>
                      </>
                    )}
                  </div>
                </Link>
                {/* orders */}
                <Link to="/orders">
                  <p>returns</p>
                  <span>& Orders</span>
                </Link>

                <Link to="/cart" className={classes.cart}>
                  <BiCart size={35} />
                  <span>{totalItem}</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <LowerHeader />
      </section>
    </>
  );
};

export default Header;
