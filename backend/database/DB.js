const mongoose = require("mongoose");

const connectDB = () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Mongoose connected!`);
  } catch (err) {
    console.log(`Error: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
