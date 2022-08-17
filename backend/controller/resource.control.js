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
  Stat2_1_ResourceModel,
  YM2_1_ResourceModel,
  FME2_1_ResourceModel,
} = require("../models/resource.model");

/* Get Request */
/* L1 T1 */
const getAllBCE1_1 = (req, res) => {
  BCE1_1_ResourceModel.find({}, (err, result) => {
    if (err) {
      res.status(500).json({ msg: err });
    } else {
      res.status(200).json(result);
      console.log(result);
    }
  });
};
const getAllPhysics1_1 = (req, res) => {
  Physics1_1_ResourceModel.find({}, (err, result) => {
    if (err) {
      res.status(500).json({ msg: err });
    } else {
      res.status(200).json(result);
      console.log(result);
    }
  });
};
const getAllChemistry1_1 = (req, res) => {
  Chemistry1_1_ResourceModel.find({}, (err, result) => {
    if (err) {
      res.status(500).json({ msg: err });
    } else {
      res.status(200).json(result);
      console.log(result);
    }
  });
};
const getAllMath1_1 = (req, res) => {
  Math1_1_ResourceModel.find({}, (err, result) => {
    if (err) {
      res.status(500).json({ msg: err });
    } else {
      res.status(200).json(result);
      console.log(result);
    }
  });
};
const getAllNTF1_1 = (req, res) => {
  NTF1_1_ResourceModel.find({}, (err, result) => {
    if (err) {
      res.status(500).json({ msg: err });
    } else {
      res.status(200).json(result);
      console.log(result);
    }
  });
};

/* L1 T2 */
const getAllPhysics1_2 = (req, res) => {
  Physics1_2_ResourceModel.find({}, (err, result) => {
    if (err) {
      res.status(500).json({ msg: err });
    } else {
      res.status(200).json(result);
      console.log(result);
    }
  });
};
const getAllChemistry1_2 = (req, res) => {
  Chemistry1_2_ResourceModel.find({}, (err, result) => {
    if (err) {
      res.status(500).json({ msg: err });
    } else {
      res.status(200).json(result);
      console.log(result);
    }
  });
};
const getAllMath1_2 = (req, res) => {
  Math1_2_ResourceModel.find({}, (err, result) => {
    if (err) {
      res.status(500).json({ msg: err });
    } else {
      res.status(200).json(result);
      console.log(result);
    }
  });
};
const getAllCP1_2 = (req, res) => {
  CP1_2_ResourceModel.find({}, (err, result) => {
    if (err) {
      res.status(500).json({ msg: err });
    } else {
      res.status(200).json(result);
      console.log(result);
    }
  });
};
const getAllEM1_2 = (req, res) => {
  EM1_2_ResourceModel.find({}, (err, result) => {
    if (err) {
      res.status(500).json({ msg: err });
    } else {
      res.status(200).json(result);
      console.log(result);
    }
  });
};
const getAllPSE1_2 = (req, res) => {
  PSE1_2_ResourceModel.find({}, (err, result) => {
    if (err) {
      res.status(500).json({ msg: err });
    } else {
      res.status(200).json(result);
      console.log(result);
    }
  });
};

/* L2 T1*/
const getAllStat2_1 = (req, res) => {
  Stat2_1_ResourceModel.find({}, (err, result) => {
    if (err) {
      res.status(500).json({ msg: err });
    } else {
      res.status(200).json(result);
      console.log(result);
    }
  });
};

const getAllYM2_1 = (req, res) => {
  YM2_1_ResourceModel.find({}, (err, result) => {
    if (err) {
      res.status(500).json({ msg: err });
    } else {
      res.status(200).json(result);
      console.log(result);
    }
  });
};

const getAllFME2_1 = (req, res) => {
  FME2_1_ResourceModel.find({}, (err, result) => {
    if (err) {
      res.status(500).json({ msg: err });
    } else {
      res.status(200).json(result);
      console.log(result);
    }
  });
};
/* Post Request */
/* L1 T1 */
const createBCE1_1 = async (req, res) => {
  try {
    const resource = req.body;
    const newResource = new BCE1_1_ResourceModel(resource);
    await newResource.save();

    res.status(200).json({ resource });
    console.log(resource);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const createPhysics1_1 = async (req, res) => {
  try {
    const resource = req.body;
    const newResource = new Physics1_1_ResourceModel(resource);
    await newResource.save();

    res.status(200).json({ resource });
    console.log(resource);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const createChemistry1_1 = async (req, res) => {
  try {
    const resource = req.body;
    const newResource = new Chemistry1_1_ResourceModel(resource);
    await newResource.save();

    res.status(200).json({ resource });
    console.log(resource);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const createMath1_1 = async (req, res) => {
  try {
    const resource = req.body;
    const newResource = new Math1_1_ResourceModel(resource);
    await newResource.save();

    res.status(200).json({ resource });
    console.log(resource);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const createNTF1_1 = async (req, res) => {
  try {
    const resource = req.body;
    const newResource = new NTF1_1_ResourceModel(resource);
    await newResource.save();

    res.status(200).json({ resource });
    console.log(resource);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

/* L1 T2 */
const createPhysics1_2 = async (req, res) => {
  try {
    const resource = req.body;
    const newResource = new Physics1_2_ResourceModel(resource);
    await newResource.save();

    res.status(200).json({ resource });
    console.log(resource);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const createChemistry1_2 = async (req, res) => {
  try {
    const resource = req.body;
    const newResource = new Chemistry1_2_ResourceModel(resource);
    await newResource.save();

    res.status(200).json({ resource });
    console.log(resource);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const createMath_2 = async (req, res) => {
  try {
    const resource = req.body;
    const newResource = new Math1_2_ResourceModel(resource);
    await newResource.save();

    res.status(200).json({ resource });
    console.log(resource);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const createCP1_2 = async (req, res) => {
  try {
    const resource = req.body;
    const newResource = new CP1_2_ResourceModel(resource);
    await newResource.save();

    res.status(200).json({ resource });
    console.log(resource);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const createEM1_2 = async (req, res) => {
  try {
    const resource = req.body;
    const newResource = new EM1_2_ResourceModel(resource);
    await newResource.save();

    res.status(200).json({ resource });
    console.log(resource);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const createPSE1_2 = async (req, res) => {
  try {
    const resource = req.body;
    const newResource = new PSE1_2_ResourceModel(resource);
    await newResource.save();

    res.status(200).json({ resource });
    console.log(resource);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

/* L2 T1 */
const createStat2_1 = async (req, res) => {
  try {
    const resource = req.body;
    const newResource = new Stat2_1_ResourceModel(resource);
    await newResource.save();

    res.status(200).json({ resource });
    console.log(resource);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const createYM2_1 = async (req, res) => {
  try {
    const resource = req.body;
    const newResource = new YM2_1_ResourceModel(resource);
    await newResource.save();

    res.status(200).json({ resource });
    console.log(resource);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const createFME2_1 = async (req, res) => {
  try {
    const resource = req.body;
    const newResource = new FME2_1_ResourceModel(resource);
    await newResource.save();

    res.status(200).json({ resource });
    console.log(resource);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

/* Get by ID Request */
/* L1 T1 */
const getBCE1_1 = async (req, res) => {
  try {
    const { id: resourceID } = req.params;
    const resource = await BCE1_1_ResourceModel.findOne({ _id: resourceID });
    if (!resource) {
      res.status(500).json({ msg: `No resource with id : ${resourceID}` });
    } else {
      res.status(200).json({ resource });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const getPhysics1_1 = async (req, res) => {
  try {
    const { id: resourceID } = req.params;
    const resource = await Physics1_1_ResourceModel.findOne({
      _id: resourceID,
    });
    if (!resource) {
      res.status(500).json({ msg: `No resource with id : ${resourceID}` });
    } else {
      res.status(200).json({ resource });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const getChemistry1_1 = async (req, res) => {
  try {
    const { id: resourceID } = req.params;
    const resource = await Chemistry1_1_ResourceModel.findOne({
      _id: resourceID,
    });
    if (!resource) {
      res.status(500).json({ msg: `No resource with id : ${resourceID}` });
    } else {
      res.status(200).json({ resource });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const getMath1_1 = async (req, res) => {
  try {
    const { id: resourceID } = req.params;
    const resource = await Math1_1_ResourceModel.findOne({
      _id: resourceID,
    });
    if (!resource) {
      res.status(500).json({ msg: `No resource with id : ${resourceID}` });
    } else {
      res.status(200).json({ resource });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const getNTF1_1 = async (req, res) => {
  try {
    const { id: resourceID } = req.params;
    const resource = await NTF1_1_ResourceModel.findOne({
      _id: resourceID,
    });
    if (!resource) {
      res.status(500).json({ msg: `No resource with id : ${resourceID}` });
    } else {
      res.status(200).json({ resource });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

/* L1 T2 */
const getPhysics1_2 = async (req, res) => {
  try {
    const { id: resourceID } = req.params;
    const resource = await Physics1_2_ResourceModel.findOne({
      _id: resourceID,
    });
    if (!resource) {
      res.status(500).json({ msg: `No resource with id : ${resourceID}` });
    } else {
      res.status(200).json({ resource });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const getChemistry1_2 = async (req, res) => {
  try {
    const { id: resourceID } = req.params;
    const resource = await Chemistry1_2_ResourceModel.findOne({
      _id: resourceID,
    });
    if (!resource) {
      res.status(500).json({ msg: `No resource with id : ${resourceID}` });
    } else {
      res.status(200).json({ resource });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const getMath1_2 = async (req, res) => {
  try {
    const { id: resourceID } = req.params;
    const resource = await Math1_2_ResourceModel.findOne({
      _id: resourceID,
    });
    if (!resource) {
      res.status(500).json({ msg: `No resource with id : ${resourceID}` });
    } else {
      res.status(200).json({ resource });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const getEM1_2 = async (req, res) => {
  try {
    const { id: resourceID } = req.params;
    const resource = await EM1_2_ResourceModel.findOne({
      _id: resourceID,
    });
    if (!resource) {
      res.status(500).json({ msg: `No resource with id : ${resourceID}` });
    } else {
      res.status(200).json({ resource });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const getCP1_2 = async (req, res) => {
  try {
    const { id: resourceID } = req.params;
    const resource = await CP1_2_ResourceModel.findOne({
      _id: resourceID,
    });
    if (!resource) {
      res.status(500).json({ msg: `No resource with id : ${resourceID}` });
    } else {
      res.status(200).json({ resource });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const getPSE1_2 = async (req, res) => {
  try {
    const { id: resourceID } = req.params;
    const resource = await PSE1_2_ResourceModel.findOne({
      _id: resourceID,
    });
    if (!resource) {
      res.status(500).json({ msg: `No resource with id : ${resourceID}` });
    } else {
      res.status(200).json({ resource });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

/* L2 T1 */
const getStat2_1 = async (req, res) => {
  try {
    const { id: resourceID } = req.params;
    const resource = await Stat2_1_ResourceModel.findOne({
      _id: resourceID,
    });
    if (!resource) {
      res.status(500).json({ msg: `No resource with id : ${resourceID}` });
    } else {
      res.status(200).json({ resource });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const getYM2_1 = async (req, res) => {
  try {
    const { id: resourceID } = req.params;
    const resource = await YM2_1_ResourceModel.findOne({
      _id: resourceID,
    });
    if (!resource) {
      res.status(500).json({ msg: `No resource with id : ${resourceID}` });
    } else {
      res.status(200).json({ resource });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const getFME2_1 = async (req, res) => {
  try {
    const { id: resourceID } = req.params;
    const resource = await FME2_1_ResourceModel.findOne({
      _id: resourceID,
    });
    if (!resource) {
      res.status(500).json({ msg: `No resource with id : ${resourceID}` });
    } else {
      res.status(200).json({ resource });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
/* Delete Request */
/* L1 T1 */
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

/* L1 T2 */
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

/* L2 T1 */
const deleteStat2_1 = async (req, res) => {
  console.log(req.params);
  let data = await Stat2_1_ResourceModel.deleteOne(req.params);
  res.send(data);
};
const deleteYM2_1 = async (req, res) => {
  console.log(req.params);
  let data = await YM2_1_ResourceModel.deleteOne(req.params);
  res.send(data);
};
const deleteFME2_1 = async (req, res) => {
  console.log(req.params);
  let data = await FME2_1_ResourceModel.deleteOne(req.params);
  res.send(data);
};

/* Update Request */

module.exports = {
  getAllBCE1_1,
  getAllPhysics1_1,
  getAllChemistry1_1,
  getAllMath1_1,
  getAllNTF1_1,

  getAllPhysics1_2,
  getAllChemistry1_2,
  getAllMath1_2,
  getAllCP1_2,
  getAllEM1_2,
  getAllPSE1_2,

  getAllStat2_1,
  getAllYM2_1,
  getAllFME2_1,

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

  createStat2_1,
  createYM2_1,
  createFME2_1,

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

  getStat2_1,
  getYM2_1,
  getFME2_1,

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

  deleteStat2_1,
  deleteYM2_1,
  deleteFME2_1,
};
