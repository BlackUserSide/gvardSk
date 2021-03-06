const express = require("express");
const config = require("config");
const mongoose = require("mongoose");

const app = express();
const PORT = config.get("port") || 6000;

app.use("/api/auth", require("./routes/auth_routes"));
app.use("/api/slider", require("./routes/slider.route"));

async function start() {
  try {
    await mongoose.connect(config.get("mongoUrl"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    app.listen(PORT, () => console.log(`app start on port ${PORT}`));
  } catch (e) {
    console.log("Server Err" + e.message);
    process.exit(1);
  }
}
start();
