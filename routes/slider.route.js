const { Router } = require("express");
const Slider = require("../models/Slider");
const bodyParser = require("body-parser");

const router = Router();
const jsonBody = bodyParser.json();

router.get("/", jsonBody, async (req, res) => {
  try {
    const slider = await Slider.find({});
    if (slider) {
      return res.status(200).json(slider);
    }
    res.status(400).json({ message: "Что то пошло не так как надо" });
  } catch (e) {
    res.status(500).json({ message: "Ошибка на сервере" });
  }
});

router.delete("/deleteImage:id", jsonBody, async (req, res) => {
  try {
    const id = req.params
    if(id){
      const response =  await Slider.deleteOne({id});

      console.log(response);

      res.status(200).json({ message: "deleted" });
    }else{
      res.status(404).json({ message: "id not found" });
    }
  } catch (e) {
    res.status(500).json({ message: "Ошибка на сервере" });
  }
});

router.post("/addImage", jsonBody, async (req, res) => {
  try {
    const {srcImage} = req.body
    const newImage = new Slider({image:srcImage})
    newImage.save()
    res.status(201).json({message: 'image add'})
  } catch (e) {
    res.status(500).json({ message: "Ошибка на сервере" });
  }
});

module.exports = router;
