const express = require("express");
const homeRouter = express.Router();
const homeController = require("../app/controllers/homeController");
homeRouter.get("/home", homeController.show);
module.exports = homeRouter;
