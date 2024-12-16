import { createPool } from "mysql2/promise";
import { config } from "dotenv";

config();

const pool = createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
});

export default pool;
