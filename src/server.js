const express = require("express");
const route = require("./routes");
const path = require("path");

const port = 3000;
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(route);

app.listen(port, () => {
  console.log("RODANDO");
});
