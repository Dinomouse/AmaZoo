import { query } from "../db/index.js";

export async function getOrders(id) {
  const res = await query(`SELECT * FROM orders WHERE user_id=$1 ;`, [id]);
  const ordersArray = res.rows;
  console.log("get request completed");
  return ordersArray;
}

export async function postOrders({
  order_id,
  user_id,
  date_time,
  item_type,
  item_price,
  item_amount,
}) {
  const res = await query(
    `INSERT INTO orders(order_id,user_id,date_time,item_type,item_price,item_amount) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *;`,
    [order_id, user_id, date_time, item_type, item_price, item_amount]
  );
  console.log("Post request completed");
}

//INSERT INTO orders(order_id,user_id,date_time,item_type,item_price,item_amount)
