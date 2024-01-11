import mysql from 'mysql';
import dotenv from 'dotenv';
import validateEnv from '@utils/validateEnv';

dotenv.config();
validateEnv();

const HOST = process.env.HOST;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_SCHEMA = process.env.DB_SCHEMA;

class Db {
  instance: mysql.Connection;

  constructor() {
    this.instance = mysql.createConnection({
      host: HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_SCHEMA
    });
  };

  connect() {
    this.instance.connect((err) => {
      if (err) {
          console.log('Erro connecting to database...', err)
          return
      }
      console.log('Connection established!')
    });
  }

  desconnect() {
    this.instance.end((err) => {
      if(err) {
          console.log('Erro to finish connection...', err)
          return 
      }
      console.log('The connection was finish...')
    });
  }
}

export {Db};