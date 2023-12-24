const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const resources = require("./routes/resource.route");
const notes = require("./routes/notes.route");
const rateLimiter = require("./middleware/RateLimit");

const connectDB = require("./database/DB");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

/* Environment */
const app = express();
const PORT = process.env.PORT || 5000;

/* DataBase Connection */
connectDB();

/* Middleware */
app.use(cors());
app.use(bodyParser.json({ extended: "false" }));
app.use(bodyParser.urlencoded({ extended: "false" }));
app.use(rateLimiter);

/* Static Files */
app.use(express.static("public"));
app.use("/css", express.static(path.join(__dirname + "public/css")));
app.use("/img", express.static(path.join(__dirname + "public/assets")));
app.use("favicon.ico", express.static(path.join("public/favicon")));

/* EJS Handling */
app.set("view engine", "ejs");

/* API Handling */
app.use("/api/v1", resources);
app.use("/api/v1", notes);

/* Root Path */
app.get("/", (req, res) => {
  console.log(`[Test!]`);
  res.render("home", {});
});

app.get("/source", (req, res) => {
  res.render("source", {});
});

/* localhost | Server Port */
app.listen(PORT, () => {
  console.log(`Server is running on port : http://localhost:${PORT}`);
});
