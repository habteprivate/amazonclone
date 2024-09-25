
// import './App.css';
// import './index.css'
// // import Header from './Components/Header/Header';
// // import CarouselEffect from "./Components/Carousel effect/Carousel";
// // import Catagory from "./Components/Catagory/Catagory";
// // import Product from './Components/Product/Product';

// import Routing from './Router'

// function App() {
//   return (
//     <>

//     <Routing/>
  
//     </>
//   );
// }

// export default App;




import "./App.css";
import "./index.css";
import Routing from "./Router";
import { DataContext } from "./Components/Data Provider/DataProvider";
import { Type } from "./Utility/action.type";
import  {auth} from "./Utility/FireBase";
import { useContext, useEffect } from "react";


function App() {
  const [{ user }, dispatch] = useContext(DataContext);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // console.log(authUser);
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, []);

  return (
    <>
      <Routing />
    </>
  );
}

export default App;
