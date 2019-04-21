import express = require('express');

// Create a new express application instance
const app: express.Application = express();

app.get('/', (req, res) => {
  // res.writeHead(200, {'Content-Type': 'text/html'});
  res.send('Hello world!');
});

app.get('/json/', (req, res) => {
  res.json({ msg: 'Hello world!' });
});

module.exports = app.listen(3000,  () => {
  console.log('Example app listening on port 3000!');
});
