const mongoose = require("mongoose");
const { Schema } = require("mongoose");

require("../config/db_mongo"); // Conexión a BBDD MongoDB

const objectSchema = {
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  provider: {
    type: Schema.Types.ObjectId,
    ref: "Providers",
  },
};
// Crear el esquema
const productSchema = mongoose.Schema(objectSchema);

// Crear el modelo --> Colección
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
