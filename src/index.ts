import express from 'express';
import apiRouter from './routes/routes';
import errorHandler from './controllers/errorController';

const bodyParser = require('body-parser');

const app = express();
app.get('/', (_req, res) => {
  res.send('Hello Typescript world!');
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const PORT = process.env.PORT || 5000;
app.use('/api', apiRouter);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
