import { query } from "../index.js";

const data = [
  {
    order_id: "orderid1",
    user_id: "1234",
    date_time: "18/08/2022",
    item_type: "Orangutan 1 year",
    item_price: 10.99,
    item_amount: 5,
  },
  {
    order_id: "orderid1",
    user_id: "1234",
    date_time: "18/08/2022",
    item_type: "Orangutan 1 year",
    item_price: 10.99,
    item_amount: 5,
  },
  {
    order_id: "orderid1",
    user_id: "1234",
    date_time: "18/08/2022",
    item_type: "Orangutan 1 year",
    item_price: 10.99,
    item_amount: 5,
  },
  {
    order_id: "orderid2",
    user_id: "1234",
    date_time: "19/08/2022",
    item_type: "Leopard 5 years",
    item_price: 10.99,
    item_amount: 5,
  },
  {
    order_id: "orderid2",
    user_id: "1234",
    date_time: "19/08/2022",
    item_type: "Leopard 5 years",
    item_price: 10.99,
    item_amount: 5,
  },
  {
    order_id: "orderid2",
    user_id: "1234",
    date_time: "19/08/2022",
    item_type: "Leopard 5 years",
    item_price: 10.99,
    item_amount: 5,
  },
];

for (let i = 0; i < data.length; i++) {
  await query(
    "INSERT INTO orders(order_id,user_id,date_time,item_type,item_price,item_amount) VALUES ($1,$2,$3,$4,$5,$6)",
    [
      data[i].order_id,
      data[i].user_id,
      data[i].date_time,
      data[i].item_type,
      data[i].item_price,
      data[i].item_amount,
    ]
  );
}
console.log("Populated orders table");
