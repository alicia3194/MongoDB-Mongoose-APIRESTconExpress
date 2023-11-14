const express = require("express");
const providersRouters = express.Router();
const providersControllers = require("../controllers/providers.controller");

// middleware that is specific to this router
providersRouters.get("/", providersControllers.getProviders);
providersRouters.post("/", providersControllers.createProviders);
providersRouters.put("/:id", providersControllers.editProviders);
providersRouters.delete("/:id", providersControllers.deleteProviders);

module.exports = providersRouters;
