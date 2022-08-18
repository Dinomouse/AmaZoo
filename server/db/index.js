import pg from "pg";

const connectionString = process.env.DATBASE_URL;

const pool = new pg.Pool({
  connectionString,
  ssl: { rejectUnauthorized: false },
});

export function query(text, params, callback) {
  return pool.query(text, params, callback);
}

// console.log(await query("SELECT NOW()"));
