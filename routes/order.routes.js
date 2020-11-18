const { Router } = require("express");
const bodyParser = require("body-parser");
const router = Router();
const jsonBody = bodyParser.json();

router.post("/add_order", jsonBody, async (req, res) => {
  try {
  } catch (e) {
    console.log(e);
    res.status(500);
  }
});

module.exports = router;
