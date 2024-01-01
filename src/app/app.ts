import express from 'express';
import apiRouter from '../routes/routes';
import errorHandler, { defaultErrorHandler } from '../controllers/errorController';

const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', apiRouter);
app.use(errorHandler);
app.use(defaultErrorHandler);

export default app;
