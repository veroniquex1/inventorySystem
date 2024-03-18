import { createConnection } from "mysql";
import { config } from "dotenv";
config()

let connection = createConnection({
    host: process.env.db_host,
    database: process.env.db_name,
    user: process.env.db_userName,
    password: process.env.db_userPass,
    multipleStatements: true,
});

export {
    connection
}