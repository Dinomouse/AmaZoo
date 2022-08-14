import { useState, useEffect } from "react";
import "./myBasket.css";

function MyBasket({ myBasket }) {
  const [basketCounter, setBasketCounter] = useState([]);

  function totalCounter(array) {
    let total = 0;
    for (let i = 0; i < basketCounter.length; i++) {
      total += Number(array[i][0].split(" ")[3].slice(1)) * Number(array[i][1]);
    }
    return total;
  }

  useEffect(() => {
    let counter = {};

    myBasket.forEach(function (obj) {
      var key = `${obj.animal + " " + obj.length + " £" + obj.price}`;
      counter[key] = (counter[key] || 0) + 1;
    });

    setBasketCounter(Object.entries(counter));
  }, [myBasket]);

  console.log(basketCounter);
  return (
    <div className="my-basket-container">
      <h3 className="my-basket-title">Your Basket:</h3>
      <div className="my-basket-list">
        {basketCounter == 0
          ? "Your basket is currently empty."
          : basketCounter.map((e, index) => (
              <div key={Math.random(100000)} className="my-basket-list-item">
                <div className="basket-order-item">{e[0]}</div>
                <div className="basket-order-number">{"x" + e[1]}</div>
              </div>
            ))}
      </div>
      <div className="basket-total">
        <h3>
          {"Basket Total: £" +
            totalCounter(basketCounter).toLocaleString("en-US")}
        </h3>
        <button className="confirm">Confirm Purchase</button>
      </div>
    </div>
  );
}

export default MyBasket;
