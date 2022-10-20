import Navbar from "./Components/Navbar.js";
import New from "./Components/New Products/New.js";
import Payment from "./Components/Payment/Payment.js";
// import TopSlider from "./Components/Top_Slider.js";
import Trending from "./Components/Trending Products/Trending.js";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContextApi } from "./context/UserContext"
import { Route, Router, Routes } from "react-router-dom";
import Admin from "./Pages/Admin.js";
function App() {
  const { currentUser } = useContext(UserContextApi)


  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      await axios
        .get("https://fakestoreapi.com/products")
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    };

    return () => {
      getData();
    };
  }, []);
  return (
    <div className="App">
      <Navbar />
      {/* <TopSlider /> */}
      <Trending data={data} />
      <New data={data} />
      <Payment data={data} />


    </div>
  );
}

export default App;
