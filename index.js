const express = require("express");

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Collin');
})

console.log("... SERVER IS RUNNING ...");

app.listen(3000);