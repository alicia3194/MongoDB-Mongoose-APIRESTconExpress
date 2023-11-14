const Providers = require("../models/providers");

// CREATE
const createProviders = async (req, res) => {
  try {
    const data = req.body;
    const providers = await Providers.create(data);
    res.status(201).json({ message: "Proveedor creado" }, providers);
  } catch (error) {
    res.status(400).json({ msj: `ERROR: ${error}` });
  }
};

// READ
const getProviders = async (req, res) => {
  try {
    const providers = await Providers.find({}).exec();
    res.status(200).json(providers);
  } catch (error) {
    res.status(400).json({ msj: `ERROR: ${error}` });
  }
};

// UPATE
const editProviders = (req, res) => {
  const edit = req.body;
  res.status(200).send({
    message: `proveedor actualizado: ${edit.provider}`,
  });
};

// DELETE
const deleteProviders = (req, res) => {
  res.status(200).send("Producto borrado!. Has borrado:" + req.params.id);
};

const providersController = {
  createProviders,
  getProviders,
  editProviders,
  deleteProviders,
};

module.exports = providersController;
