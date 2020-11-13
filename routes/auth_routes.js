const { Router } = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const configReq = require("config");
const { check, validationResult } = require("express-validator");
const router = Router();
const bodyParser = require("body-parser");

const jsonBody = bodyParser.json();
router.post(
  "/register",
  [
    check("email", "Неверный Email").isEmail(),
    check("password", "Пароль должен быть больше 6 символов").isLength({
      min: 6,
    }),
  ],
  jsonBody,
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const { email, password } = req.body;
      const candidate = await User.findOne({ email });
      if (candidate) {
        return res.status(400).json({ message: "Такой пользователь уже есть" });
      }
      const hsPass = await bcrypt.hash(password, 12);
      const user = new User({ email, password: hsPass });
      await user.save();

      res.status(201).json({ message: "Пользователь создан" });
    } catch (e) {
      res.status(500).json({ message: "Что то пошло не так" });
    }
  }
);
router.post(
  "/login",
  [
    check("email", "email incorrect").isEmail(),
    check("password", "pass incorrect").exists(),
  ],
  jsonBody,
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty) {
        return res.status(400).json({ errors: errors.array() });
      }
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Нет такого пользователя" });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Пароль не верный" });
      }
      const token = jwt.sign({ userId: user.id }, configReq.get("secretKey"), {
        expiresIn: "1h",
      });
      res.json({ token: token });
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: "Что-то пошло не так" });
    }
  }
);

module.exports = router;
