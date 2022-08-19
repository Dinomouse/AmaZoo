import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./myBasket.css";

function MyBasket({
  myBasket,
  setMyBasket,
  basketCounter,
  confirmPurchase,
  setBasketCounter,
  totalCounter,
}) {
  useEffect(() => {
    let counter = {};

    myBasket.forEach(function (obj) {
      var key = `${obj.animal + " " + obj.length + " £" + obj.price}`;
      counter[key] = (counter[key] || 0) + 1;
    });

    setBasketCounter(Object.entries(counter));
  }, [myBasket]);

  function clearBasket() {
    setMyBasket([]);
  }

  return (
    <div className="my-basket-container">
      <h3 className="my-basket-title">Your Basket:</h3>
      <div className="my-basket-list">
        {basketCounter == 0
          ? "Your basket is currently empty."
          : basketCounter.map((e, index) => (
              <>
                <div
                  key={Math.random(10000000)}
                  className="my-basket-list-item"
                >
                  <div className="basket-order-item">{e[0]}</div>
                  <div className="basket-order-number">{"x" + e[1]}</div>
                </div>
              </>
            ))}
      </div>
      <div className="basket-total">
        <h3>
          {"Basket Total: $" +
            totalCounter(basketCounter).toLocaleString("en-US")}
        </h3>
        {basketCounter.length > 0 && (
          <>
            <Link to="/Profile">
              <button className="confirm" onClick={confirmPurchase}>
                Confirm Purchase
              </button>
            </Link>
            <button className="empty-basket" onClick={clearBasket}>
              Clear Basket
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default MyBasket;
