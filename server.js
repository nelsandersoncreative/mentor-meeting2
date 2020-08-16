const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.use('/', (req, res) => {
  res.send("hello from back-end server");
});

app.listen(port, () => console.log(`Server is listening on PORT ${port}`));