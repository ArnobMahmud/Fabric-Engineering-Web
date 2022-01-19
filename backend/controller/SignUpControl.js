const { SignUpTemplate } = require("../models/SignUpModel");

const SignUpControl = async (req, res) => {
  const signedUpUser = new SignUpTemplate({
    fullName: req.body.fullName,
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
  });
  await signedUpUser
    .save()
    .then((data) => {
      res.json(data);
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { SignUpControl };
