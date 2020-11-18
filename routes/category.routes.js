const { Router } = require("express");
const bodyParser = require("body-parser");
const Category = require("../models/Category");

const router = Router();
const jsonBody = bodyParser.json();

router.get("/", jsonBody, async (req, res) => {
  try {
    const category = await Category.find({});
    if (category) {
      return res.status(200).json(category);
    }
    return res.status(400).json({ message: "Что то пошло не так" });
  } catch (e) {
    res.status(500).json({ message: "Что то пошло не так" });
  }
});
router.post("/add_category", jsonBody, async (req, res) => {
  try {
    const { name } = req.body;
    const candidate = await Category.findOne({ name: name });
    if (candidate) {
      return res.status(400).json({ message: "Дубликат категории" });
    }
    const findAll = await Category.find({});
    let count = findAll.length;
    const category = new Category({
      id: ++count,
      name: name,
    });
    await category.save();
    res.status(200).json({ message: "Успешно" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Что то пошло не так" });
  }
});
router.delete("/dell_category/:id", jsonBody, async (req, res) => {
  try {
    const id = req.params.id;
    const candidate = await Category.findById(id);
    if (candidate) {
      await Category.deleteOne({ _id: id });
      return res.status(200).json({ message: "Удаленно" });
    }
    res.status(400).json({ message: "Такой категории нет" });
  } catch (e) {
    res.status(500).json({ message: "Что то пошло не так" });
  }
});
module.exports = router;
