
// const app = {
//     port: process.env.PORT || 3000
// }

// export default app;

import { createPool } from 'mysql2/promise';
import { config } from "dotenv";

config();

//pasar esto al .env
const pool = createPool({
    // host: 'localhost',
    // port: 3307,
    // user: 'root',
    // database: 'dicsys'

    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
})

export default pool;