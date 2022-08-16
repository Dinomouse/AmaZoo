import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar";
import ProfilePage from "../ProfilePage";
import HomePage from "../HomePage";
import FootBar from "../FootBar";
import Search from "../Search";
import MyBasket from "../MyBasket";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";

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
    console.log(total);
    return total;
  }

  function confirmPurchase() {
    setOrders([
      ...orders,
      {
        id: Math.floor(Math.random() * 10000),
        date: new Date().toLocaleString(),
        order: basketCounter,
        open: false,
      },
    ]);
  }

  useEffect(() => {
    setMyBasket([]);
  }, [orders]);

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
            element={<HomePage isAuthenticated={isAuthenticated}></HomePage>}
          ></Route>
          <Route path="/About" element={<div>About</div>}></Route>
          <Route
            path="/Profile"
            element={
              <ProfilePage
                user={user}
                orders={orders}
                collapsibleToggle={collapsibleToggle}
                isLoading={isLoading}
                totalCounter={totalCounter}
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
          <Route path="/Zoo" element={<div>Zoo</div>}></Route>
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
