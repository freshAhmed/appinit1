
import express from 'express';
import  {config}  from './config/config.mjs';
import glob from 'glob';
import mongoose from 'mongoose'
import {Apphandler} from './config/express.mjs'
// mongoose.connect(config.db);
// const db = mongoose.connection;
// db.on('error', () => {
//   throw new Error('unable to connect to database at ' + config.db);
// });

  
const app = express();

Apphandler(app,config)

app.listen(config.port, () => {
  console.log('Express server listening on port ' + config.development.port);
});

