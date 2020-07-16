const express = require('express')
const app = express()
var homeRouter = require("../routes/home")

module.exports = function(app) {
  app.use(express.json());
  app.use("/home", homeRouter);
};
