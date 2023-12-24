const {
  Statistics2_1_NotesModel,
  FYT2_1_NotesModel,
  MMTF2_1_NotesModel,
  YM2_1_NotesModel,
  WPP2_1_NotesModel,
  FME2_1_NotesModel,

  AM2_2_NotesModel,
  FEEE2_2_NotesModel,
  FMkt2_2_NotesModel,
  TP2_2_NotesModel,
  WV2_2_NotesModel,
  WP2_2_NotesModel,
} = require("../models/notes.model");

/* Get Request */
const getAllStatistics2_1 = (req, res) => {
  Statistics2_1_NotesModel.find({}, (err, result) => {
    if (err) {
      res.status(500).json({ msg: err });
    } else {
      res.status(200).json(result);
      console.log(result);
    }
  });
};
const getAllFYT2_1 = (req, res) => {
  FYT2_1_NotesModel.find({}, (err, result) => {
    if (err) {
      res.status(500).json({ msg: err });
    } else {
      res.status(200).json(result);
      console.log(result);
    }
  });
};
const getAllMMTF2_1 = (req, res) => {
  MMTF2_1_NotesModel.find({}, (err, result) => {
    if (err) {
      res.status(500).json({ msg: err });
    } else {
      res.status(200).json(result);
      console.log(result);
    }
  });
};
const getAllYM2_1 = (req, res) => {
  YM2_1_NotesModel.find({}, (err, result) => {
    if (err) {
      res.status(500).json({ msg: err });
    } else {
      res.status(200).json(result);
      console.log(result);
    }
  });
};
const getAllWPP2_1 = (req, res) => {
  WPP2_1_NotesModel.find({}, (err, result) => {
    if (err) {
      res.status(500).json({ msg: err });
    } else {
      res.status(200).json(result);
      console.log(result);
    }
  });
};
const getAllFME2_1 = (req, res) => {
  FME2_1_NotesModel.find({}, (err, result) => {
    if (err) {
      res.status(500).json({ msg: err });
    } else {
      res.status(200).json(result);
      console.log(result);
    }
  });
};

const getAllAM2_2 = (req, res) => {
  AM2_2_NotesModel.find({}, (err, result) => {
    if (err) {
      res.status(500).json({ msg: err });
    } else {
      res.status(200).json(result);
      console.log(result);
    }
  });
};
const getAllFEEE2_2 = (req, res) => {
  FEEE2_2_NotesModel.find({}, (err, result) => {
    if (err) {
      res.status(500).json({ msg: err });
    } else {
      res.status(200).json(result);
      console.log(result);
    }
  });
};
const getAllFMkt2_2 = (req, res) => {
  FMkt2_2_NotesModel.find({}, (err, result) => {
    if (err) {
      res.status(500).json({ msg: err });
    } else {
      res.status(200).json(result);
      console.log(result);
    }
  });
};
const getAllTP2_2 = (req, res) => {
  TP2_2_NotesModel.find({}, (err, result) => {
    if (err) {
      res.status(500).json({ msg: err });
    } else {
      res.status(200).json(result);
      console.log(result);
    }
  });
};
const getAllWV2_2 = (req, res) => {
  WV2_2_NotesModel.find({}, (err, result) => {
    if (err) {
      res.status(500).json({ msg: err });
    } else {
      res.status(200).json(result);
      console.log(result);
    }
  });
};
const getAllWP2_2 = (req, res) => {
  WP2_2_NotesModel.find({}, (err, result) => {
    if (err) {
      res.status(500).json({ msg: err });
    } else {
      res.status(200).json(result);
      console.log(result);
    }
  });
};

/* Post Request */

const createStatistics2_1 = async (req, res) => {
  try {
    const note = req.body;
    const newNote = new Statistics2_1_NotesModel(note);
    await newNote.save();

    res.status(200).json({ note });
    console.log(note);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const createFYT2_1 = async (req, res) => {
  try {
    const note = req.body;
    const newNote = new FYT2_1_NotesModel(note);
    await newNote.save();

    res.status(200).json({ note });
    console.log(note);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const createMMTF2_1 = async (req, res) => {
  try {
    const note = req.body;
    const newNote = new MMTF2_1_NotesModel(note);
    await newNote.save();

    res.status(200).json({ note });
    console.log(note);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const createYM2_1 = async (req, res) => {
  try {
    const note = req.body;
    const newNote = new YM2_1_NotesModel(note);
    await newNote.save();

    res.status(200).json({ note });
    console.log(note);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const createWPP2_1 = async (req, res) => {
  try {
    const note = req.body;
    const newNote = new WPP2_1_NotesModel(note);
    await newNote.save();

    res.status(200).json({ note });
    console.log(note);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const createFME2_1 = async (req, res) => {
  try {
    const note = req.body;
    const newNote = new FME2_1_NotesModel(note);
    await newNote.save();

    res.status(200).json({ note });
    console.log(note);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createAM2_2 = async (req, res) => {
  try {
    const note = req.body;
    const newNote = new AM2_2_NotesModel(note);
    await newNote.save();

    res.status(200).json({ note });
    console.log(note);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const createFEEE2_2 = async (req, res) => {
  try {
    const note = req.body;
    const newNote = new FEEE2_2_NotesModel(note);
    await newNote.save();

    res.status(200).json({ note });
    console.log(note);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const createFMkt2_2 = async (req, res) => {
  try {
    const note = req.body;
    const newNote = new FMkt2_2_NotesModel(note);
    await newNote.save();

    res.status(200).json({ note });
    console.log(note);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const createTP2_2 = async (req, res) => {
  try {
    const note = req.body;
    const newNote = new TP2_2_NotesModel(note);
    await newNote.save();

    res.status(200).json({ note });
    console.log(note);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const createWV2_2 = async (req, res) => {
  try {
    const note = req.body;
    const newNote = new WV2_2_NotesModel(note);
    await newNote.save();

    res.status(200).json({ note });
    console.log(note);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const createWP2_2 = async (req, res) => {
  try {
    const note = req.body;
    const newNote = new WP2_2_NotesModel(note);
    await newNote.save();

    res.status(200).json({ note });
    console.log(note);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
/* Get by ID Request */

const getStatistics2_1 = async (req, res) => {
  try {
    const { id: noteID } = req.params;
    const note = await Statistics2_1_NotesModel.findOne({
      _id: noteID,
    });
    if (!note) {
      res.status(500).json({ msg: `No resource with id : ${noteID}` });
    } else {
      res.status(200).json({ note });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const getFYT2_1 = async (req, res) => {
  try {
    const { id: noteID } = req.params;
    const note = await FYT2_1_NotesModel.findOne({
      _id: noteID,
    });
    if (!note) {
      res.status(500).json({ msg: `No resource with id : ${noteID}` });
    } else {
      res.status(200).json({ note });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const getMMTF2_1 = async (req, res) => {
  try {
    const { id: noteID } = req.params;
    const note = await MMTF2_1_NotesModel.findOne({
      _id: noteID,
    });
    if (!note) {
      res.status(500).json({ msg: `No resource with id : ${noteID}` });
    } else {
      res.status(200).json({ note });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const getYM2_1 = async (req, res) => {
  try {
    const { id: noteID } = req.params;
    const note = await YM2_1_NotesModel.findOne({
      _id: noteID,
    });
    if (!note) {
      res.status(500).json({ msg: `No resource with id : ${noteID}` });
    } else {
      res.status(200).json({ note });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const getWPP2_1 = async (req, res) => {
  try {
    const { id: noteID } = req.params;
    const note = await WPP2_1_NotesModel.findOne({
      _id: noteID,
    });
    if (!note) {
      res.status(500).json({ msg: `No resource with id : ${noteID}` });
    } else {
      res.status(200).json({ note });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const getFME2_1 = async (req, res) => {
  try {
    const { id: noteID } = req.params;
    const note = await FME2_1_NotesModel.findOne({
      _id: noteID,
    });
    if (!note) {
      res.status(500).json({ msg: `No resource with id : ${noteID}` });
    } else {
      res.status(200).json({ note });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getAM2_2 = async (req, res) => {
  try {
    const { id: noteID } = req.params;
    const note = await AM2_2_NotesModel.findOne({
      _id: noteID,
    });
    if (!note) {
      res.status(500).json({ msg: `No resource with id : ${noteID}` });
    } else {
      res.status(200).json({ note });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const getFEEE2_2 = async (req, res) => {
  try {
    const { id: noteID } = req.params;
    const note = await FEEE2_2_NotesModel.findOne({
      _id: noteID,
    });
    if (!note) {
      res.status(500).json({ msg: `No resource with id : ${noteID}` });
    } else {
      res.status(200).json({ note });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const getFMkt2_2 = async (req, res) => {
  try {
    const { id: noteID } = req.params;
    const note = await FMkt2_2_NotesModel.findOne({
      _id: noteID,
    });
    if (!note) {
      res.status(500).json({ msg: `No resource with id : ${noteID}` });
    } else {
      res.status(200).json({ note });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const getTP2_2 = async (req, res) => {
  try {
    const { id: noteID } = req.params;
    const note = await TP2_2_NotesModel.findOne({
      _id: noteID,
    });
    if (!note) {
      res.status(500).json({ msg: `No resource with id : ${noteID}` });
    } else {
      res.status(200).json({ note });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const getWV2_2 = async (req, res) => {
  try {
    const { id: noteID } = req.params;
    const note = await WV2_2_NotesModel.findOne({
      _id: noteID,
    });
    if (!note) {
      res.status(500).json({ msg: `No resource with id : ${noteID}` });
    } else {
      res.status(200).json({ note });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const getWP2_2 = async (req, res) => {
  try {
    const { id: noteID } = req.params;
    const note = await WP2_2_NotesModel.findOne({
      _id: noteID,
    });
    if (!note) {
      res.status(500).json({ msg: `No resource with id : ${noteID}` });
    } else {
      res.status(200).json({ note });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

/* Delete Request */
const deleteStatistics2_1 = async (req, res) => {
  console.log(req.params);
  let data = await Statistics2_1_NotesModel.deleteOne(req.params);
  res.send(data);
};
const deleteFYT2_1 = async (req, res) => {
  console.log(req.params);
  let data = await FYT2_1_NotesModel.deleteOne(req.params);
  res.send(data);
};
const deleteMMFT2_1 = async (req, res) => {
  console.log(req.params);
  let data = await MMTF2_1_NotesModel.deleteOne(req.params);
  res.send(data);
};
const deleteYM2_1 = async (req, res) => {
  console.log(req.params);
  let data = await YM2_1_NotesModel.deleteOne(req.params);
  res.send(data);
};
const deleteWPP2_1 = async (req, res) => {
  console.log(req.params);
  let data = await WPP2_1_NotesModel.deleteOne(req.params);
  res.send(data);
};
const deleteFME2_1 = async (req, res) => {
  console.log(req.params);
  let data = await FME2_1_NotesModel.deleteOne(req.params);
  res.send(data);
};

const deleteAM2_2 = async (req, res) => {
  console.log(req.params);
  let data = await AM2_2_NotesModel.deleteOne(req.params);
  res.send(data);
};
const deleteFEEE2_2 = async (req, res) => {
  console.log(req.params);
  let data = await FEEE2_2_NotesModel.deleteOne(req.params);
  res.send(data);
};
const deleteFMkt2_2 = async (req, res) => {
  console.log(req.params);
  let data = await FMkt2_2_NotesModel.deleteOne(req.params);
  res.send(data);
};
const deleteTP2_2 = async (req, res) => {
  console.log(req.params);
  let data = await TP2_2_NotesModel.deleteOne(req.params);
  res.send(data);
};
const deleteWV2_2 = async (req, res) => {
  console.log(req.params);
  let data = await WV2_2_NotesModel.deleteOne(req.params);
  res.send(data);
};
const deleteWP2_2 = async (req, res) => {
  console.log(req.params);
  let data = await WP2_2_NotesModel.deleteOne(req.params);
  res.send(data);
};

module.exports = {
  getAllStatistics2_1,
  getAllFYT2_1,
  getAllMMTF2_1,
  getAllYM2_1,
  getAllWPP2_1,
  getAllFME2_1,

  getAllAM2_2,
  getAllFEEE2_2,
  getAllFMkt2_2,
  getAllTP2_2,
  getAllWV2_2,
  getAllWP2_2,

  createStatistics2_1,
  createFYT2_1,
  createMMTF2_1,
  createYM2_1,
  createWPP2_1,
  createFME2_1,

  createAM2_2,
  createFEEE2_2,
  createFMkt2_2,
  createTP2_2,
  createWV2_2,
  createWP2_2,

  getStatistics2_1,
  getFYT2_1,
  getMMTF2_1,
  getYM2_1,
  getWPP2_1,
  getFME2_1,

  getAM2_2,
  getFEEE2_2,
  getFMkt2_2,
  getTP2_2,
  getWV2_2,
  getWP2_2,

  deleteStatistics2_1,
  deleteFYT2_1,
  deleteMMFT2_1,
  deleteYM2_1,
  deleteWPP2_1,
  deleteFME2_1,

  deleteAM2_2,
  deleteFEEE2_2,
  deleteFMkt2_2,
  deleteTP2_2,
  deleteWV2_2,
  deleteWP2_2,
};
