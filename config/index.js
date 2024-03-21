import {
    createPool
} from "mysql";
import { config } from "dotenv";
config()

let connection = createPool({
    host: process.env.DB_host,
    database: process.env.DB_name,
    user: process.env.DB_userName,
    password: process.env.DB_userPwd,
    port: '4500',
    multipleStatements: true,
});

export {
    connection
}