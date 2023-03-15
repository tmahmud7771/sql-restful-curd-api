const { Model } = require("sequelize");
const db = require("../models");

// Create main Model

const Product = db.products;
const Review = db.reviews;

//main work

//1. Create a new Product

const addProduct = async (req, res) => {
  let info = {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  };

  const product = await Product.create(info);
  res.status(200).send(product);
  console.log(product);
};

const getAllProducts = async (req, res) => {
  let products = await Product.findAll({
    attributes: ["title", "price"],
  });
  res.status(200).send(products);
};

const getOneProduct = async (req, res) => {
  let id = req.params.id;
  let product = await Product.findOne({ where: { id: id } });
  res.status(200).send(product);
};

// update

const updateProduct = async (req, res) => {
  let id = req.params.id;

  const product = await product.update(req.body, { where: { id: id } });

  res.status(200).send(product);
};

//delete by id

const deleteProduct = async (req, res) => {
  let id = req.params.id;
  await Product.destory({ where: { id: id } });
  res.status(200).send("Product deleted");
};

//publish product

const getPublishedProduct = async (req, res) => {
  const products = await Product.findAll({ where: { published: true } });
  res.send(200).send(products);
};

module.exports = {
  addProduct,
  getAllProducts,
  getOneProduct,
  updateProduct,
  deleteProduct,
  getPublishedProduct,
};
