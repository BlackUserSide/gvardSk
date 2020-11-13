const router = Router();
const bodyParser = require("body-parser");

const jsonBody = bodyParser.json();

router.post("/addProd", jsonBody, async (res, req) => {
  try {
    const { name, price } = req.body;
  } catch (e) {
    res.status(500);
  }
});
