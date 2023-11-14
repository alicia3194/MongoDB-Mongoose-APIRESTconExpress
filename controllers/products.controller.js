const Products = require("../models/products");

// CREATE
const createProduct = async (req, res) => {
  try {
    const data = req.body;
    let product = await new Products(data).save();

    await product.populate("provider", "_id -_id").execPopulate();

    res.status(200).json({ message: "Producto creado", product: product });
  } catch (error) {
    console.log(`ERROR: ${error.stack}`);
    res.status(400).json({ msj: `ERROR: ${error}` });
  }
};

// READ
const getProduct = async (req, res) => {
  try {
    const products = await Products.find({}, "-_id").populate(
      "provider",
      "company_name cif addres -_id"
    );
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ msj: `ERROR: ${error}` });
  }
};

// UPATE
const editProduct = (req, res) => {
  const editP = req.body;
  res.status(200).send({
    message: `producto actualizado: ${editP.company_name}`,
  });
};
// DELETE
const deleteProduct = (req, res) => {
  res.status(200).send("Producto borrado!. Has borrado:" + req.params.title);
};

const productController = {
  createProduct,
  getProduct,
  editProduct,
  deleteProduct,
};

module.exports = productController;
