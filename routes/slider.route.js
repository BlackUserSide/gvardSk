const { Router } = require("express");
const Slider = require("../models/Slider");
const bodyParser = require("body-parser");

const router = Router();
const jsonBody = bodyParser.json();

router.get("/", jsonBody, async (req, res) => {
  try {
    console.log(1);
    const slider = await Slider.find({});
    if (slider) {
      return res.status(200).json(slider);
    }
    res.status(400).json({ message: "Что то пошло не так как надо" });
  } catch (e) {
    res.status(500).json({ message: "Ошибка на сервере" });
  }
});

module.exports = router;
