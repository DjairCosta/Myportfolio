const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const api = require('./backend/routes');

const app = express();

app.use(bodyParser.json());

app.use('/api', api);

if (process.env.NODE_ENV === 'production') {
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