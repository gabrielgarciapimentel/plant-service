//Importing project dependancies that we installed earlier
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { Db } from './db/index';
import { Request, Response } from 'express';

//Configure mySql db instance
const db = new Db();

//intializing the express app 
const app = express();

//using the dependancies
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  db.connect();
  db.instance.query('SELECT * FROM user', (err, rows) => {
    if (err) throw err

    console.log('Users: ', rows, '\n\n')
  });
  db.desconnect();

  res.status(200).send('(plant-service) 🌱');
})



//exporting app
export default app;