const express = require("express");
const limiter = require("../middleware/RateLimit");
const router = express.Router();
const {
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
} = require("../controller/resource.control");

/* Get All Request */
router.route("/resources/bce1-1").get(limiter, getAllBCE1_1);
router.route("/resources/phy1-1").get(limiter, getAllPhysics1_1);
router.route("/resources/chem1-1").get(limiter, getAllChemistry1_1);
router.route("/resources/math1-1").get(limiter, getAllMath1_1);
router.route("/resources/ntf1-1").get(limiter, getAllNTF1_1);

router.route("/resources/phy1-2").get(limiter, getAllPhysics1_2);
router.route("/resources/chem1-2").get(limiter, getAllChemistry1_2);
router.route("/resources/math1-2").get(limiter, getAllMath1_2);
router.route("/resources/cp1-2").get(limiter, getAllCP1_2);
router.route("/resources/pse1-2").get(limiter, getAllPSE1_2);
router.route("/resources/em1-2").get(limiter, getAllEM1_2);

/* Post Request */
router.route("/createResource/bce1-1").post(limiter, createBCE1_1);
router.route("/createResource/phy1-1").post(limiter, createPhysics1_1);
router.route("/createResource/chem1-1").post(limiter, createChemistry1_1);
router.route("/createResource/math1-1").post(limiter, createMath1_1);
router.route("/createResource/ntf1-1").post(limiter, createNTF1_1);

router.route("/createResource/phy1-2").post(limiter, createPhysics1_2);
router.route("/createResource/chem1-2").post(limiter, createChemistry1_2);
router.route("/createResource/math1-2").post(limiter, createMath_2);
router.route("/createResource/cp1-2").post(limiter, createCP1_2);
router.route("/createResource/em1-2").post(limiter, createEM1_2);
router.route("/createResource/pse1-2").post(createPSE1_2);

/* Get by ID Request */
router.route("/resource/bce1-1/:id").get(limiter, getBCE1_1);
router.route("/resource/phy1-1/:id").get(limiter, getPhysics1_1);
router.route("/resource/chem1-1/:id").get(limiter, getChemistry1_1);
router.route("/resource/math1-1/:id").get(limiter, getMath1_1);
router.route("/resource/ntf1-1/:id").get(limiter, getNTF1_1);

router.route("/resource/phy1-2/:id").get(limiter, getPhysics1_2);
router.route("/resource/chem1-2/:id").get(limiter, getChemistry1_2);
router.route("/resource/math1-2/:id").get(limiter, getMath1_2);
router.route("/resource/cp1-2/:id").get(limiter, getCP1_2);
router.route("/resource/pse1-2/:id").get(limiter, getPSE1_2);
router.route("/resource/em1-2/:id").get(limiter, getEM1_2);

/* Delete Request */
router.route("/deleteResource/bce1-1/:_id").delete(limiter, deleteBCE1_1);
router.route("/deleteResource/phy1-1/:_id").delete(limiter, deletePhysics1_1);
router
  .route("/deleteResource/chem1-1/:_id")
  .delete(limiter, deleteChemistry1_1);
router.route("/deleteResource/math1-1/:_id").delete(limiter, deleteMath1_1);
router.route("/deleteResource/ntf1-1/:_id").delete(limiter, deleteNtf1_1);

router.route("/deleteResource/phy1-2/:_id").delete(limiter, deletePhysics1_2);
router
  .route("/deleteResource/chem1-2/:_id")
  .delete(limiter, deleteChemistry1_2);
router.route("/deleteResource/math1-2/:_id").delete(limiter, deleteMath1_2);
router.route("/deleteResource/cp1-2/:_id").delete(limiter, deleteCP1_2);
router.route("/deleteResource/em1-2/:_id").delete(limiter, deleteEM1_2);
router.route("/deleteResource/pse1-2/:_id").delete(limiter, deletePSE1_2);

module.exports = router;
