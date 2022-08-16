import "./orders.css";

function ProfilePage({
  user,
  orders,
  totalCounter,
  collapsibleToggle,
  isLoading,
}) {
  function counter(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
      total += Number(array[i][0].split(" ")[3].slice(1)) * Number(array[i][1]);
      console.log(total);
    }
    console.log(total);
    return total;
  }

  return (
    <div className="profile-page">
      {isLoading ? (
        <div>Loading profile information...</div>
      ) : (
        <h2>{`Welcome Back, ${user.name.split(" ")[0]}`} </h2>
      )}
      <div className="orders-container">
        {orders.map((e) => (
          <>
            {" "}
            <div
              className="order-item"
              onClick={() => {
                collapsibleToggle(e);
              }}
            >
              {e.date + ` Order: ${e.id} Total:£${totalCounter(e.order)}  `}
            </div>
            <div className={e.open ? "open" : "not-open"}>
              <p>
                {e.order.map((item) => (
                  <div>{`${item[0]}  x${item[1]}`}</div>
                ))}
              </p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

//

export default ProfilePage;
