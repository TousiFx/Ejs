const express = require("express");
const app = express();

let port = 8080;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("this is root");
});
app.listen(port, () => {
  console.log(`listening or port ${port}`);
});
