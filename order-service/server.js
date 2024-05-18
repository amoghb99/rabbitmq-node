const express = require('express');
const bodyParser = require('body-parser');
const { sendOrder } = require('./producer');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/order', (req, res) => {
  const order = req.body;
  sendOrder(order);
  res.send('Order received');
});

app.listen(PORT, () => {
  console.log(`Order service running on http://localhost:${PORT}`);
});
