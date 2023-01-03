const route = require('express').Router();
const AppController = require("../controllers/App.controller")


route.get('', AppController.Salam);

module.exports = route;