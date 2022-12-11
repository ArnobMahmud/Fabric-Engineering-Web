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
  MMTF2_1_ResourceModel,
  WvgPP2_1_ResourceModel,
  FYT2_1_ResourceModel,
  WP2_2_ResourceModel,
  WV2_2_ResourceModel,
  FEEE2_2_ResourceModel,
  FMkt2_2_ResourceModel,
  AM2_2_ResourceModel,
  TP2_2_ResourceModel,
} = require("../models/resource.model");

/*-------------------------------------*/
/*-------------------------------------*/

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

const getAllMMTF2_1 = (req, res) => {
  MMTF2_1_ResourceModel.find({}, (err, result) => {
    if (err) {
      res.status(500).json({ msg: err });
    } else {
      res.status(200).json(result);
      console.log(result);
    }
  });
};

const getAllWvgPP2_1 = (req, res) => {
  WvgPP2_1_ResourceModel.find({}, (err, result) => {
    if (err) {
      res.status(500).json({ msg: err });
    } else {
      res.status(200).json(result);
      console.log(result);
    }
  });
};
const getAllFYT2_1 = (req, res) => {
  FYT2_1_ResourceModel.find({}, (err, result) => {
    if (err) {
      res.status(500).json({ msg: err });
    } else {
      res.status(200).json(result);
      console.log(result);
    }
  });
};
/* L2 T2 */
const getAllWV2_2 = (req, res) => {
  WV2_2_ResourceModel.find({}, (err, result) => {
    if (err) {
      res.status(500).json({ msg: err });
    } else {
      res.status(200).json(result);
      console.log(result);
    }
  });
};
const getAllAM2_2 = (req, res) => {
  AM2_2_ResourceModel.find({}, (err, result) => {
    if (err) {
      res.status(500).json({ msg: err });
    } else {
      res.status(200).json(result);
      console.log(result);
    }
  });
};
const getAllFEEE2_2 = (req, res) => {
  FEEE2_2_ResourceModel.find({}, (err, result) => {
    if (err) {
      res.status(500).json({ msg: err });
    } else {
      res.status(200).json(result);
      console.log(result);
    }
  });
};
const getAllFMkt2_2 = (req, res) => {
  FMkt2_2_ResourceModel.find({}, (err, result) => {
    if (err) {
      res.status(500).json({ msg: err });
    } else {
      res.status(200).json(result);
      console.log(result);
    }
  });
};
const getAllWP2_2 = (req, res) => {
  WP2_2_ResourceModel.find({}, (err, result) => {
    if (err) {
      res.status(500).json({ msg: err });
    } else {
      res.status(200).json(result);
      console.log(result);
    }
  });
};
const getAllTP2_2 = (req, res) => {
  TP2_2_ResourceModel.find({}, (err, result) => {
    if (err) {
      res.status(500).json({ msg: err });
    } else {
      res.status(200).json(result);
      console.log(result);
    }
  });
};

/*-------------------------------------*/
/*-------------------------------------*/

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

const createMMTF2_1 = async (req, res) => {
  try {
    const resource = req.body;
    const newResource = new MMTF2_1_ResourceModel(resource);
    await newResource.save();

    res.status(200).json({ resource });
    console.log(resource);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createWvgPP2_1 = async (req, res) => {
  try {
    const resource = req.body;
    const newResource = new WvgPP2_1_ResourceModel(resource);
    await newResource.save();

    res.status(200).json({ resource });
    console.log(resource);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createFYT2_1 = async (req, res) => {
  try {
    const resource = req.body;
    const newResource = new FYT2_1_ResourceModel(resource);
    await newResource.save();

    res.status(200).json({ resource });
    console.log(resource);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
/* L2 T2 */
const createWV2_2 = async (req, res) => {
  try {
    const resource = req.body;
    const newResource = new WV2_2_ResourceModel(resource);
    await newResource.save();

    res.status(200).json({ resource });
    console.log(resource);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const createWP2_2 = async (req, res) => {
  try {
    const resource = req.body;
    const newResource = new WP2_2_ResourceModel(resource);
    await newResource.save();

    res.status(200).json({ resource });
    console.log(resource);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const createAM2_2 = async (req, res) => {
  try {
    const resource = req.body;
    const newResource = new AM_2_2_ResourceModel(resource);
    await newResource.save();

    res.status(200).json({ resource });
    console.log(resource);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const createFMkt2_2 = async (req, res) => {
  try {
    const resource = req.body;
    const newResource = new FMkt2_2_ResourceModel(resource);
    await newResource.save();

    res.status(200).json({ resource });
    console.log(resource);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const createFEEE2_2 = async (req, res) => {
  try {
    const resource = req.body;
    const newResource = new FEEE2_2_ResourceModel(resource);
    await newResource.save();

    res.status(200).json({ resource });
    console.log(resource);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const createTP2_2 = async (req, res) => {
  try {
    const resource = req.body;
    const newResource = new TP2_2_ResourceModel(resource);
    await newResource.save();

    res.status(200).json({ resource });
    console.log(resource);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

/*-------------------------------------*/
/*-------------------------------------*/

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

const getMMTF2_1 = async (req, res) => {
  try {
    const { id: resourceID } = req.params;
    const resource = await MMTF2_1_ResourceModel.findOne({
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

const getWvgPP2_1 = async (req, res) => {
  try {
    const { id: resourceID } = req.params;
    const resource = await WvgPP2_1_ResourceModel.findOne({
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

const getFYT2_1 = async (req, res) => {
  try {
    const { id: resourceID } = req.params;
    const resource = await FYT2_1_ResourceModel.findOne({
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
/* L2 T2 */
const getWV2_2 = async (req, res) => {
  try {
    const { id: resourceID } = req.params;
    const resource = await WV2_2_ResourceModel.findOne({
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
const getWP2_2 = async (req, res) => {
  try {
    const { id: resourceID } = req.params;
    const resource = await WP2_2_ResourceModel.findOne({
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
const getAM2_2 = async (req, res) => {
  try {
    const { id: resourceID } = req.params;
    const resource = await AM2_2_ResourceModel.findOne({
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
const getFEEE2_2 = async (req, res) => {
  try {
    const { id: resourceID } = req.params;
    const resource = await FEEE2_2_ResourceModel.findOne({
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
const getFMkt2_2 = async (req, res) => {
  try {
    const { id: resourceID } = req.params;
    const resource = await FMkt2_2_ResourceModel.findOne({
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
const getTP2_2 = async (req, res) => {
  try {
    const { id: resourceID } = req.params;
    const resource = await TP2_2_ResourceModel.findOne({
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

/*-------------------------------------*/
/*-------------------------------------*/

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
const deleteMMTF2_1 = async (req, res) => {
  console.log(req.params);
  let data = await MMTF2_1_ResourceModel.deleteOne(req.params);
  res.send(data);
};
const deleteWvgPP2_1 = async (req, res) => {
  console.log(req.params);
  let data = await WvgPP2_1_ResourceModel.deleteOne(req.params);
  res.send(data);
};
const deleteFYT2_1 = async (req, res) => {
  console.log(req.params);
  let data = await FYT2_1_ResourceModel.deleteOne(req.params);
  res.send(data);
};
/* L2 T2 */
const deleteWV2_2 = async (req, res) => {
  console.log(req.params);
  let data = await WV2_2_ResourceModel.deleteOne(req.params);
  res.send(data);
};
const deleteAM2_2 = async (req, res) => {
  console.log(req.params);
  let data = await AM2_2_ResourceModel.deleteOne(req.params);
  res.send(data);
};
const deleteFEEE2_2 = async (req, res) => {
  console.log(req.params);
  let data = await FEEE2_2_ResourceModel.deleteOne(req.params);
  res.send(data);
};
const deleteFMkt2_2 = async (req, res) => {
  console.log(req.params);
  let data = await FMkt2_2_ResourceModel.deleteOne(req.params);
  res.send(data);
};
const deleteTP2_2 = async (req, res) => {
  console.log(req.params);
  let data = await TP2_2_ResourceModel.deleteOne(req.params);
  res.send(data);
};
const deleteWP2_2 = async (req, res) => {
  console.log(req.params);
  let data = await WP2_2_ResourceModel.deleteOne(req.params);
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
  getAllMMTF2_1,
  getAllWvgPP2_1,
  getAllFYT2_1,

  getAllWP2_2,
  getAllWV2_2,
  getAllAM2_2,
  getAllFEEE2_2,
  getAllTP2_2,
  getAllFMkt2_2,

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
  createMMTF2_1,
  createWvgPP2_1,
  createFYT2_1,

  createWP2_2,
  createWV2_2,
  createTP2_2,
  createFEEE2_2,
  createAM2_2,
  createFMkt2_2,

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
  getMMTF2_1,
  getWvgPP2_1,
  getFYT2_1,

  getWV2_2,
  getWP2_2,
  getAM2_2,
  getFMkt2_2,
  getFEEE2_2,
  getTP2_2,

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
  deleteMMTF2_1,
  deleteWvgPP2_1,
  deleteFYT2_1,

  deleteAM2_2,
  deleteWV2_2,
  deleteWP2_2,
  deleteTP2_2,
  deleteFEEE2_2,
  deleteFMkt2_2,
};
