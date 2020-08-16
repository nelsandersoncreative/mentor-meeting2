const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use('/', (req, res) => {
  res.send("hello from back-end server");
});

app.listen(9000, () => console.log('Server is listening on PORT 9000'));