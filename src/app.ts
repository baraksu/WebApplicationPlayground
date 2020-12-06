import * as dotenv from 'dotenv';
import express from 'express';
import ExpressRotuer from './express.router';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

dotenv.config();

mongoose.connect(`mongodb://localhost/books`, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
        }   , () => {
    console.log('connect to database');
        });

const app = express();
// tslint:disable-next-line: deprecation
app.use(bodyParser.json());
// tslint:disable-next-line: deprecation
app.use(bodyParser.urlencoded({extended: true}));


const expressRoutes = new ExpressRotuer(app);
expressRoutes.init();


app.listen(process.env.PORT || 2500, () => {
  console.log(`Express server app listening on port ${process.env.PORT}!`);
});
