const express = require("express");
const router = express.Router();
const {
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
  deleteCP1_2,
  deleteEM1_2,
  deletePSE1_2,
} = require("../controller/ResourceControl");

/* Get Request */
router.get("/getResources/bce1-1", getBCE1_1);
router.get("/getResources/phy1-1", getPhysics1_1);
router.get("/getResources/chem1-1", getChemistry1_1);
router.get("/getResources/math1-1", getMath1_1);
router.get("/getResources/ntf1-1", getNTF1_1);

router.get("/getResources/phy1-2", getPhysics1_2);
router.get("/getResources/chem1-2", getChemistry1_2);
router.get("/getResources/math1-2", getMath1_2);
router.get("/getResources/cp1-2", getCP1_2);
router.get("/getResources/pse1-2", getPSE1_2);
router.get("/getResources/em1-2", getEM1_2);

/* Post Request */
router.post("/createResource/bce1-1", createBCE1_1);
router.post("/createResource/phy1-1", createPhysics1_1);
router.post("/createResource/chem1-1", createChemistry1_1);
router.post("/createResource/math1-1", createMath1_1);
router.post("/createResource/ntf1-1", createNTF1_1);

router.post("/createResource/phy1-2", createPhysics1_2);
router.post("/createResource/chem1-2", createChemistry1_2);
router.post("/createResource/math1-2", createMath_2);
router.post("/createResource/cp1-2", createCP1_2);
router.post("/createResource/em1-2", createEM1_2);
router.post("/createResource/pse1-2", createPSE1_2);

/* Delete Request */
router.delete("/deleteResource/bce1-1/:_id", deleteBCE1_1);
router.delete("/deleteResource/phy1-1/:_id", deletePhysics1_1);
router.delete("/deleteResource/chem1-1/:_id", deleteChemistry1_1);
router.delete("/deleteResource/math1-1/:_id", deleteMath1_1);
router.delete("/deleteResource/ntf1-1/:_id", deleteNtf1_1);

router.delete("/deleteResource/phy1-2/:_id", deletePhysics1_2);
router.delete("/deleteResource/chem1-2/:_id", deleteChemistry1_2);
router.delete("/deleteResource/math1-2/:_id", deleteMath1_2);
router.delete("/deleteResource/cp1-2/:_id", deleteCP1_2);
router.delete("/deleteResource/em1-2/:_id", deleteEM1_2);
router.delete("/deleteResource/pse1-2/:_id", deletePSE1_2);

module.exports = router;
