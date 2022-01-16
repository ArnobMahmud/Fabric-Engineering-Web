const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

const resources = require("./routes/ResourceRoute");
dotenv.config({ path: "./config.env" });

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(bodyParser.json({ extended: "false" }));
app.use(bodyParser.urlencoded({ extended: "false" }));

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
app.get("/", (req, res) => {
  console.log(`[Test!]`);
  res.send(`Hello from Backend!`);
});

/* localhost */
app.listen(PORT, () => {
  console.log(`Server is running on port : http://localhost:${PORT}`);
});
