const express = require("express");
const route = express.Router();
const questionController = require("./controllers/questionController");

route.get("/", (req, res) => {
  res.render("index", { page: "enter-room" });
});

route.get("/room", (req, res) => {
  res.render("room", { page: "create-pass" });
});

route.get("/create-pass", (req, res) => {
  res.render("create-pass");
});

route.post("/room/:room/:question/:action", questionController.index);

module.exports = route;
