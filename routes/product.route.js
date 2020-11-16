const { Router } = require("express");
const bodyParser = require("body-parser");
const Product = require("../models/Product");
const { Types } = require("mongoose");

const router = Router();
const jsonBody = bodyParser.json();

router.get("/", jsonBody, async (req, res) => {
  try {
    const products = await Product.find({});
    if (products) {
      return res.status(200).json(products);
    }
    res.status(400).json({ message: "Что то пошло не так" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Что то пошло не так" });
  }
});
router.post("/add", jsonBody, async (req, res) => {
  try {
    const { name, price, discount, category, quantity, image } = req.body;

    const product = new Product({
      name,
      price,
      discount,
      category,
      quantity,
      image,
    });
    await product.save();
    res.status(200).json({ message: "Успешно" });
  } catch (e) {
    res.status(500).json({ message: "Что то пошло не так" });
  }
});
router.delete("/del/:id", jsonBody, async (req, res) => {
  try {
    const id = req.params;
    const candidate = await Product.findOne({ _id: id });
    res.status(200).json({ data: candidate });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Что то пошло не так" });
  }
});
router.get("/get_by_id/:id", jsonBody, async (req, res) => {
  try {
    const id = req.params.id;
    const candidate = await Product.findById(id);
    if (candidate) {
      return res.status(200).json(candidate);
    }
    return res.status(400).json({ message: "Нет такого товара" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Что то пошло не так" });
  }
});
module.exports = router;
