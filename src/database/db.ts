import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const db = mysql.createPool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
}).promise();

async function  checkConnection() {
    try {
        const connected = await db.getConnection();
        console.log('The Db is Connected')
        connected.release()
    } catch (error) {
        console.log("The Db is not Connected");        
    }
    
}

checkConnection()

export default db;

