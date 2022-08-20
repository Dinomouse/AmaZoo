import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar";
import ProfilePage from "../ProfilePage";
import HomePage from "../HomePage";
import FootBar from "../FootBar";
import Search from "../Search";
import MyBasket from "../MyBasket";
import About from "../About";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const [myBasket, setMyBasket] = useState([]);
  const [basketCounter, setBasketCounter] = useState([]);
  const [orders, setOrders] = useState([]);

  function animalClick(animal, price, length) {
    setMyBasket([
      ...myBasket,
      { animal: animal, length: length, price: price },
    ]);
  }

  function totalCounter(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
      total += Number(array[i][0].split(" ")[3].slice(1)) * Number(array[i][1]);
      console.log(total);
    }

    return total;
  }

  async function confirmPurchase() {
    let randomOrderNumber = Math.floor(Math.random() * 1000000);
    let emptyArray = [];

    for (let i = 0; i < basketCounter.length; i++) {
      await axios({
        method: "post",
        url: `https://amazooo.herokuapp.com/orders`,
        data: {
          order_id: randomOrderNumber,
          user_id: `${user.sub.split("|")[1]}`,
          date_time: new Date().toLocaleString(),
          item_type: basketCounter[i][0].split("£")[0],
          item_price: `${basketCounter[i][0].split("£")[1]}`,
          item_amount: basketCounter[i][1],
        },
      });
      emptyArray.push({
        order_id: randomOrderNumber,
        user_id: `${user.sub.split("|")[1]}`,
        date_time: new Date().toLocaleString(),
        item_type: basketCounter[i][0].split("£")[0],
        item_price: `$${basketCounter[i][0].split("£")[1]}`,
        item_amount: basketCounter[i][1],
      });
    }
    setOrders([...orders, emptyArray]);
    setMyBasket([]);
  }

  function collapsibleToggle(e) {
    e.open = !e.open;
    setOrders([...orders]);
  }

  useEffect(function localGet() {
    const localData = JSON.parse(localStorage.getItem("myBasket"));
    setMyBasket(localData);
  }, []);

  useEffect(() => {
    if (myBasket) {
      localStorage.setItem("myBasket", JSON.stringify(myBasket));
    }
  }, [myBasket]);

  return (
    <div className="App">
      <Router>
        <Navbar
          user={user}
          isAuthenticated={isAuthenticated}
          isLoading={isLoading}
        />
        <Routes>
          <Route
            path="/"
            element={<HomePage isAuthenticated={isAuthenticated} />}
          ></Route>
          <Route path="/About" element={<About />}></Route>
          <Route
            path="/Profile"
            element={
              <ProfilePage
                user={user}
                orders={orders}
                collapsibleToggle={collapsibleToggle}
                isLoading={isLoading}
                totalCounter={totalCounter}
                setOrders={setOrders}
                myBasket={myBasket}
              />
            }
          ></Route>
          <Route
            path="/MyBasket"
            element={
              <MyBasket
                myBasket={myBasket}
                setMyBasket={setMyBasket}
                basketCounter={basketCounter}
                setBasketCounter={setBasketCounter}
                confirmPurchase={confirmPurchase}
                totalCounter={totalCounter}
              />
            }
          ></Route>
          <Route
            path="/Search"
            element={<Search animalClick={animalClick} />}
          ></Route>
          <Route path="/Learn" element={<div>Learn</div>}></Route>
        </Routes>

        <FootBar
          isAuthenticated={isAuthenticated}
          user={user}
          myBasket={myBasket}
        ></FootBar>
      </Router>
    </div>
  );
}

export default App;
