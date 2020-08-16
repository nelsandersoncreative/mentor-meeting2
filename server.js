const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send("hello from back-end server");
});

app.listen(8000, () => console.log('Server is listening on PORT 8000'));