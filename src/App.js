import Navbar from "./Components/Navbar.js";
import New from "./Components/New Products/New.js";
import Payment from "./Components/Payment/Payment.js";
import Trending from "./Components/Trending Products/Trending.js";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContextApi } from "./context/UserContext"
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./firebase/firebaseConfig"
function App() {
  const { currentUser } = useContext(UserContextApi)
  const [document, setDocument] = useState([])
  console.log(document)
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   const getData = async () => {
  //     await axios
  //       .get("https://fakestoreapi.com/products")
  //       .then((res) => setData(res.data))
  //       .catch((err) => console.log(err));
  //   };

  //   return () => {
  //     getData();
  //   };
  // }, []);

  useEffect(() => {
    const getData = async () => {
      onSnapshot(
        collection(db, "products"),
        (snapshot) => {
          setDocument(snapshot.docs.map(doc => doc.data()))
        },
        (error) => {
          console.log(error)
        });

    }
    getData()
  }, [])


  return (
    <div className="App">
      <Navbar />
      {/* <TopSlider /> */}
      <Trending data={document} />
      <New data={document} />
      <Payment data={document} />


    </div>
  );
}

export default App;
