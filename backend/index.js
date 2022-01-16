const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const app = express();
const resources = require("./routes/ResourceRoute");
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({ extended: "false" }));
app.use(bodyParser.urlencoded({ extended: "false" }));

app.use(cors());
app.use("/api", resources);

/* MongoDB Atlas Connection */
try {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`Mongoose connected!`);
} catch (err) {
  console.log(err);
}

/* Root Path */
app.get("/", (_, res) => {
  console.log(`[Test!]`);
  res.send(`Hello from Backend!`);
});

/* localhost */
app.listen(PORT, () => {
  console.log(`Server is running on port : http://localhost:${PORT}`);
});
