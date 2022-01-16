const {
  BCE1_1_ResourceModel,
  Physics1_1_ResourceModel,
  Chemistry1_1_ResourceModel,
  Math1_1_ResourceModel,
  NTF1_1_ResourceModel,
  Physics1_2_ResourceModel,
  Chemistry1_2_ResourceModel,
  Math1_2_ResourceModel,
  CP1_2_ResourceModel,
  PSE1_2_ResourceModel,
  EM1_2_ResourceModel,
} = require("../models/ResourceModel");

/* Get Request */
const getBCE1_1 = (req, res) => {
  BCE1_1_ResourceModel.find({}, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
      console.log(result);
    }
  });
};
const getPhysics1_1 = (req, res) => {
  Physics1_1_ResourceModel.find({}, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
      console.log(result);
    }
  });
};
const getChemistry1_1 = (req, res) => {
  Chemistry1_1_ResourceModel.find({}, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
      console.log(result);
    }
  });
};
const getMath1_1 = (req, res) => {
  Math1_1_ResourceModel.find({}, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
      console.log(result);
    }
  });
};
const getNTF1_1 = (req, res) => {
  NTF1_1_ResourceModel.find({}, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
      console.log(result);
    }
  });
};

const getPhysics1_2 = (req, res) => {
  Physics1_2_ResourceModel.find({}, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
      console.log(result);
    }
  });
};
const getChemistry1_2 = (req, res) => {
  Chemistry1_2_ResourceModel.find({}, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
      console.log(result);
    }
  });
};
const getMath1_2 = (req, res) => {
  Math1_2_ResourceModel.find({}, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
      console.log(result);
    }
  });
};
const getCP1_2 = (req, res) => {
  CP1_2_ResourceModel.find({}, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
      console.log(result);
    }
  });
};
const getEM1_2 = (req, res) => {
  EM1_2_ResourceModel.find({}, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
      console.log(result);
    }
  });
};
const getPSE1_2 = (req, res) => {
  PSE1_2_ResourceModel.find({}, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
      console.log(result);
    }
  });
};

/* Post Request */

const createBCE1_1 = async (req, res) => {
  const resource = req.body;
  const newResource = new BCE1_1_ResourceModel(resource);
  await newResource.save();

  res.json(resource);
  console.log(resource);
};
const createPhysics1_1 = async (req, res) => {
  const resource = req.body;
  const newResource = new Physics1_1_ResourceModel(resource);
  await newResource.save();

  res.json(resource);
  console.log(resource);
};
const createChemistry1_1 = async (req, res) => {
  const resource = req.body;
  const newResource = new Chemistry1_1_ResourceModel(resource);
  await newResource.save();

  res.json(resource);
  console.log(resource);
};
const createMath1_1 = async (req, res) => {
  const resource = req.body;
  const newResource = new Math1_1_ResourceModel(resource);
  await newResource.save();

  res.json(resource);
  console.log(resource);
};
const createNTF1_1 = async (req, res) => {
  const resource = req.body;
  const newResource = new NTF1_1_ResourceModel(resource);
  await newResource.save();

  res.json(resource);
  console.log(resource);
};

const createPhysics1_2 = async (req, res) => {
  const resource = req.body;
  const newResource = new Physics1_2_ResourceModel(resource);
  await newResource.save();

  res.json(resource);
  console.log(resource);
};
const createChemistry1_2 = async (req, res) => {
  const resource = req.body;
  const newResource = new Chemistry1_2_ResourceModel(resource);
  await newResource.save();

  res.json(resource);
  console.log(resource);
};
const createMath_2 = async (req, res) => {
  const resource = req.body;
  const newResource = new Math1_2_ResourceModel(resource);
  await newResource.save();

  res.json(resource);
  console.log(resource);
};
const createCP1_2 = async (req, res) => {
  const resource = req.body;
  const newResource = new CP1_2_ResourceModel(resource);
  await newResource.save();

  res.json(resource);
  console.log(resource);
};
const createEM1_2 = async (req, res) => {
  const resource = req.body;
  const newResource = new EM1_2_ResourceModel(resource);
  await newResource.save();

  res.json(resource);
  console.log(resource);
};
const createPSE1_2 = async (req, res) => {
  const resource = req.body;
  const newResource = new PSE1_2_ResourceModel(resource);
  await newResource.save();

  res.json(resource);
  console.log(resource);
};

module.exports = {
  getBCE1_1,
  getPhysics1_1,
  getChemistry1_1,
  getMath1_1,
  getNTF1_1,

  getPhysics1_2,
  getChemistry1_2,
  getMath1_2,
  getCP1_2,
  getEM1_2,
  getPSE1_2,

  createBCE1_1,
  createPhysics1_1,
  createChemistry1_1,
  createMath1_1,
  createNTF1_1,

  createPhysics1_2,
  createChemistry1_2,
  createMath_2,
  createCP1_2,
  createEM1_2,
  createPSE1_2,
};
