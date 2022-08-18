import { query } from "../index.js";

const createTableString = `CREATE TABLE IF NOT EXISTS orders (transaction_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,order_id VARCHAR(50) ,
user_id TEXT,date_time VARCHAR(50),item_type VARCHAR(50), item_price MONEY, item_amount INT);`;

await query(createTableString);
console.log("Created AMAZOO ORDERS table");
