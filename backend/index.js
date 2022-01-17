const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

const resources = require("./routes/ResourceRoute");
dotenv.config({ path: "./config.env" });

/* Environment */
const app = express();
const PORT = process.env.PORT || 5000;

/* Middleware */
app.use(cors());
app.use(bodyParser.json({ extended: "false" }));
app.use(bodyParser.urlencoded({ extended: "false" }));

/* static files */
app.use(express.static("public"));
app.use("/css", express.static(path.join(__dirname + "public/css")));
app.use("/js", express.static(path.join(__dirname + "public/js")));
app.use("/img", express.static(path.join(__dirname + "public/assets")));

/* eJs handling */
app.set("view engine", "ejs");

/* Resource handling */
app.use("/api", resources);

/* MongoDB Cluster Connection */
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
  // res.send(`Hello from the Back-end!`); 
  res.render('home', {});
});

/* localhost | server port */
app.listen(PORT, () => {
  console.log(`Server is running on port : http://localhost:${PORT}`);
});
