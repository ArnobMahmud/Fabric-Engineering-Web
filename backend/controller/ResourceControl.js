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

/* Delete Request */

const deleteBCE1_1 = async (req, res) => {
  console.log(req.params);
  let data = await BCE1_1_ResourceModel.deleteOne(req.params);
  res.send(data);
};

const deletePhysics1_1 = async (req, res) => {
  console.log(req.params);
  let data = await Physics1_1_ResourceModel.deleteOne(req.params);
  res.send(data);
};
const deleteChemistry1_1 = async (req, res) => {
  console.log(req.params);
  let data = await Chemistry1_1_ResourceModel.deleteOne(req.params);
  res.send(data);
};
const deleteMath1_1 = async (req, res) => {
  console.log(req.params);
  let data = await Math1_1_ResourceModel.deleteOne(req.params);
  res.send(data);
};
const deleteNtf1_1 = async (req, res) => {
  console.log(req.params);
  let data = await NTF1_1_ResourceModel.deleteOne(req.params);
  res.send(data);
};

const deletePhysics1_2 = async (req, res) => {
  console.log(req.params);
  let data = await Physics1_2_ResourceModel.deleteOne(req.params);
  res.send(data);
};
const deleteChemistry1_2 = async (req, res) => {
  console.log(req.params);
  let data = await Chemistry1_2_ResourceModel.deleteOne(req.params);
  res.send(data);
};
const deleteMath1_2 = async (req, res) => {
  console.log(req.params);
  let data = await Math1_2_ResourceModel.deleteOne(req.params);
  res.send(data);
};
const deleteCP1_2 = async (req, res) => {
  console.log(req.params);
  let data = await CP1_2_ResourceModel.deleteOne(req.params);
  res.send(data);
};
const deleteEM1_2 = async (req, res) => {
  console.log(req.params);
  let data = await EM1_2_ResourceModel.deleteOne(req.params);
  res.send(data);
};
const deletePSE1_2 = async (req, res) => {
  console.log(req.params);
  let data = await PSE1_2_ResourceModel.deleteOne(req.params);
  res.send(data);
};

/* Update Request */

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

  deleteBCE1_1,
  deletePhysics1_1,
  deleteChemistry1_1,
  deleteMath1_1,
  deleteNtf1_1,

  deletePhysics1_2,
  deleteChemistry1_2,
  deleteMath1_2,
  deleteEM1_2,
  deleteCP1_2,
  deletePSE1_2,
};
