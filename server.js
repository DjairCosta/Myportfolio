const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const api = require('./backend/routes');

const app = express();

app.use(bodyParser.json());

console.log("Name for database MongoDB", process.env.MONGO_DB);
console.log("Name for user MongoDB", process.env.MONGO_USER);


app.get('/', (req, res) => {
  res.json({
    'success': true

  });

});


app.use('/api', api)

const PORT = process.env.PORT;
app.listen(PORT);