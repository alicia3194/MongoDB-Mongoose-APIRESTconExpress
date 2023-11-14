const express = require("express");
const productsRouters = express.Router();
const productsControllers = require("../controllers/products.controller");

// middleware that is specific to this router
productsRouters.get("/", productsControllers.getProduct);
productsRouters.post("/", productsControllers.createProduct);
productsRouters.put("/:title", productsControllers.editProduct);
productsRouters.delete("/:title", productsControllers.deleteProduct);

module.exports = productsRouters;
