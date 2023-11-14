const mongoose = require("mongoose");
require("../config/db_mongo"); // Conexión a BBDD MongoDB

const objectSchema = {
  company_name: {
    type: String,
    required: true,
  },
  cif: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
  url_web: {
    type: String,
    required: true,
  },
};

// Crear el esquema
const providersSchema = mongoose.Schema(objectSchema);

// Crear el modelo --> Colección
const Providers = mongoose.model("Providers", providersSchema);

module.exports = Providers;
