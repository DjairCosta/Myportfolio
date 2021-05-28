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


app.use('/api', api);

if (process.env.MODE_ENV === 'production') {
  // Express vai entregar as assets de produção
  // Como por exemplo: mais.js ou o main.css
  app.user(express.static('frontend/build'));

  // Express vai entregar o index.html, se não reconhecer a rota
  const path = require('path')
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  })
}


const PORT = process.env.PORT;
app.listen(PORT);