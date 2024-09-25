
import React, { useState,useContext } from "react";
import { Link,useNavigate } from "react-router-dom";
import Classes from "./auth.module.css";
import { auth } from "../../Utility/FireBase";
import { signInWithEmailAndPassword , createUserWithEmailAndPassword } from "firebase/auth";
import { CircleLoader } from "react-spinners";

import {DataContext} from "../../Components/Data Provider/DataProvider"
import { Type } from "../../Utility/action.type";

const Auth = () => {
  // Corrected useState declarations with square brackets
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Error, SetError] = useState("");
  
  const [loading, setloading] = useState(
    {
      signIn:false,
      signUp:false
    }
  );

  const [{ user }, dispatch] = useContext(DataContext);

  const naviage=useNavigate()

// console.log(Email,Password);
const AuthHandler = async (e) => {
  e.preventDefault(); // Corrected to preventDefault()

  if (e.target.name === "signin") {
    setloading({...loading,signIn:true})
    signInWithEmailAndPassword(auth, Email, Password)
      .then((userInfo) => {
        // console.log(userInfo); // Log user info
        dispatch({
          Type: Type.SET_USER,
          payload: userInfo.user,
        });
        setloading({ ...loading, signIn:false });
        naviage("/");
      })
      .catch((error) => {
        // Catch block moved here
        // console.error("Error signing in:", error); // Log error details
        SetError (error.message)
        setloading({ ...loading, signIn: false });
      });
  } else {
    setloading({ ...loading, signUp: true });
   createUserWithEmailAndPassword(auth, Email, Password)
     .then((userInfo) => {
      //  console.log(userInfo); // Log user info
      
     dispatch({
       Type: Type.SET_USER,
       payload: userInfo.user,
     });
setloading({ ...loading, signUp: false });
naviage("/");
     })
     .catch((error) => {
       // Catch block moved here
      //  console.log(error); // Log error details
       SetError(error.message);
       setloading({ ...loading, signUp: false });
     });
  }
};

  return (
    <section className={Classes.login}>
      <Link>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon logo"
        />
      </Link>
      <div className={Classes.login__container}>
        <h1>Sign In</h1>
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email" // Use lowercase 'id'
            />
          </div>
          <div>
            <label>Password</label>
            <input
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              type="password" // Ensure 'type' is lowercase
              id="password" // Use lowercase 'id'
            />
          </div>
          <button
            type="submit"
            onClick={AuthHandler}
            name="signin"
            className={Classes.login__signin}
          >
            {loading.signIn ? (
              <CircleLoader Color="#ffff"></CircleLoader>
            ) : (
              "Sign In"
            )}
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice, and our
          Interest-Based Ads Notice.
        </p>
        <button
          type="submit"
          name="signup"
          onClick={AuthHandler}
          className={Classes.Login__register}
        >
          {loading.signUp ? (
            <CircleLoader Color="#ffff"></CircleLoader>
          ) : (
            "Create your Amazon account"
          )}
        </button>
        {Error && (
          <small style={{ paddingTop: "5PX", color: "red" }}>{Error}</small>
        )}
      </div>
    </section>
  );
};

export default Auth;

