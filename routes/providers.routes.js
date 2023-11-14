const express = require("express");
const providersRouters = express.Router();
const providersControllers = require("../controllers/providers.controller");

// middleware that is specific to this router
providersRouters.get("/", providersControllers.getProviders);
providersRouters.post("/", providersControllers.createProviders);
providersRouters.put("/:title", providersControllers.editProviders);
providersRouters.delete("/:title", providersControllers.deleteProviders);

module.exports = providersRouters;
