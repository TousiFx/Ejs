const express = require("express");
const app = express();

let port = 8080;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home.ejs");
});
app.get("/home", (req, res) => {
  res.send("this is hello page");
});
app.listen(port, () => {
  console.log(`listening or port ${port}`);
});
