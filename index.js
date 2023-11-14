const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000;

const productsRouters = require("./routes/products.routes");
const providersRouters = require("./routes/providers.routes");

app.use(express.json());

app.use("/api/products", productsRouters);
app.use("/api/providers", providersRouters);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
