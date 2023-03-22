const express = require('express');
const app = express();

app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/', (req, res) => {
  res.render('index.html');
});

app.get('/add/:num1/:num2', (req, res) => {
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);
  const result = num1 + num2;
  res.send(`${num1} + ${num2} = ${result}`);
});

app.get('/sub/:num1/:num2', (req, res) => {
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);
  const result = num1 - num2;
  res.send(`${num1} - ${num2} = ${result}`);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});