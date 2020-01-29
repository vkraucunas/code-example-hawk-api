const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
const baseUrl = 'http://localhost:8000/api/hawk';

app.get('/', (req, res, next) => {
  axios
    .get(`${baseUrl}/list`)
    .then(({ data }) => {
      return data;
    })
    .then((x) => {
      res.json(x);
    })
    .catch((err) => {
      next(err);
    });
});

app.post('/', (req, res, next) => {
  console.log(req.body);

  axios
    .post(baseUrl, req.body)
    .then((data) => {
      // res.json(data);
    })
    .catch((err) => {
      next(err);
    });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(5280);
