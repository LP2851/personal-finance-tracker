const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.BACKEND_PORT;

app.get("/test", (req, res) => {
  res.send({ message: "This is a test" });
})
app.listen(port, () => {
  console.log('Server is up on port ' + port)
})