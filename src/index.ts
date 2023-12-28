import express from 'express';
import apiRouter from './routes/routes';
import errorHandler, { defaultErrorHandler } from './controllers/errorController';

const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const PORT = process.env.PORT || 5000;
app.use('/api', apiRouter);
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
app.use(errorHandler);
app.use(defaultErrorHandler);
