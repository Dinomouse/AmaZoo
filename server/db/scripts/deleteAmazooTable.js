import { query } from "../index.js";

const sqlString = `DROP TABLE IF EXISTS orders;`;
await query(sqlString);
