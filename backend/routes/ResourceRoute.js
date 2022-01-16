const express = require("express");
const router = express.Router();;
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

module.exports = router;
