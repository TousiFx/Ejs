const express = require("express");
const app = express();
const path = require("path");

let port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/ig/:username", (req, res) => {
  let { username } = req.params;
  console.log(username);
});
app.get("/rolldice", (req, res) => {
  let diceRoll = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice", { diceRoll });
});
app.listen(port, () => {
  console.log("the required comes from brower");
});
