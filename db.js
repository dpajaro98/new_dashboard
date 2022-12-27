import * as dotenv from 'dotenv'

dotenv.config()
import {mysql} from 'mysql';



function conecta_db(){
  const connect_DB = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DB,
  });
  

}

export default conecta_db;


