import "./basket.css";
import basket from "../../images/basket.svg";

function Basket({ myBasket }) {
  return (
    <div className="basket-container">
      <object
        type={"image/svg+xml"}
        data={basket}
        className="basket"
        aria-label="basket"
      ></object>
      <div className="basket-number">
        {myBasket.length < 10 ? myBasket.length : "9+"}
      </div>
    </div>
  );
}

export default Basket;

//
