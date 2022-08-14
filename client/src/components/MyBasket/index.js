import "./myBasket.css";

function MyBasket({ myBasket }) {
  return (
    <div className="my-basket-container">
      <h3 className="my-basket-title">Your Basket:</h3>
      <div className="my-basket-list">
        {myBasket.map((e) => (
          <div className="my-basket-list-item">{e}</div>
        ))}
      </div>
    </div>
  );
}

export default MyBasket;
