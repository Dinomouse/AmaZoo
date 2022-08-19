import "./orders.css";
import axios from "axios";
import { useEffect } from "react";

function ProfilePage({
  user,
  orders,
  collapsibleToggle,
  isLoading,
  setOrders,
}) {
  useEffect(() => {
    async function getOrders() {
      const response = await axios.get(
        `https://amazooo.herokuapp.com/orders/${user?.sub.split("|")[1]}`
      );
      const data = await response.data.payload;

      const groupBy = (array, key) => {
        // Return the end result
        return array.reduce((result, currentValue) => {
          // If an array already present for key, push it to the array. Else create an array and push the object
          (result[currentValue[key]] = result[currentValue[key]] || []).push(
            currentValue
          );
          return result;
        }, {});
      };
      const orders_grouped = groupBy(data, "order_id");
      var newArrayDataOfOjbect = Object.values(orders_grouped);
      console.log(newArrayDataOfOjbect);
      setOrders(newArrayDataOfOjbect);
    }
    getOrders();
  }, [user]);

  return (
    <div className="profile-page">
      {isLoading ? (
        <div>Loading profile information...</div>
      ) : (
        <h2>{`Welcome Back, ${user.name.split(" ")[0]}`} </h2>
      )}
      <div className="orders-container">
        <div className="orders-scroll-container">
          <h3>{"Your Orders:"}</h3>
          {orders == 0
            ? "Orders loading:"
            : orders.map((e) => (
                <>
                  {" "}
                  <>
                    <div
                      className="order-item"
                      key={e[0].order_id}
                      onClick={() => {
                        collapsibleToggle(e);
                      }}
                    >
                      {`#AMZ${e[0].order_id}  
                  Total:$${e.reduce((accumulator, object) => {
                    return (
                      accumulator +
                      Number(
                        object.item_price.replace(/[^0-9.-]+/g, "") *
                          Number(object.item_amount)
                      )
                    );
                  }, 0)} Date:${e[0].date_time}`}
                    </div>
                    <div className={e.open ? "open" : "not-open"}>
                      {e.map((item) => (
                        <div
                          key={item.transaction_id}
                          className="order-item-line"
                        >{`${item.item_type} ${item.item_price} X${item.item_amount}`}</div>
                      ))}
                    </div>
                  </>
                </>
              ))}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
