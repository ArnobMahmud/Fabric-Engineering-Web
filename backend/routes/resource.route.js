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

  getAllAM3_1,
  getAllIM3_1,
  getAllWP3_1,
  getAllEcon3_1,
  getAllYM3_1,
  getAllKnit3_1,

  getAllACE3_2,
  getAllACFM3_2,
  getAllACM3_2,
  getAllFSD3_2,
  getAllWV3_2,

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

  getAM3_1,
  getIM3_1,
  getWP3_1,
  getEcon3_1,
  getYM3_1,
  getKnit3_1,

  getACE3_2,
  getACFM3_2,
  getACM3_2,
  getFSD3_2,
  getWV3_2,

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

  createAM3_1,
  createIM3_1,
  createWP3_1,
  createEcon3_1,
  createYM3_1,
  createKnit3_1,

  createACE3_2,
  createACFM3_2,
  createACM3_2,
  createFSD3_2,
  createWV3_2,

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

  deleteAM3_1,
  deleteIM3_1,
  deleteWP3_1,
  deleteEcon3_1,
  deleteYM3_1,
  deleteKnit3_1,

  deleteACE3_2,
  deleteACFM3_2,
  deleteACM3_2,
  deleteFSD3_2,
  deleteWV3_2,
} = require("../controller/resource.control");

/* Get All Request */

/* L1 T1 */
router.route("/resources/bce1-1").get(limiter, getAllBCE1_1);
router.route("/resources/phy1-1").get(limiter, getAllPhysics1_1);
router.route("/resources/chem1-1").get(limiter, getAllChemistry1_1);
router.route("/resources/math1-1").get(limiter, getAllMath1_1);
router.route("/resources/ntf1-1").get(limiter, getAllNTF1_1);

/* L1 T2 */
router.route("/resources/phy1-2").get(limiter, getAllPhysics1_2);
router.route("/resources/chem1-2").get(limiter, getAllChemistry1_2);
router.route("/resources/math1-2").get(limiter, getAllMath1_2);
router.route("/resources/cp1-2").get(limiter, getAllCP1_2);
router.route("/resources/pse1-2").get(limiter, getAllPSE1_2);
router.route("/resources/em1-2").get(limiter, getAllEM1_2);

/* L2 T1 */
router.route("/resources/stat2-1").get(limiter, getAllStat2_1);
router.route("/resources/ym2-1").get(limiter, getAllYM2_1);
router.route("/resources/fme2-1").get(limiter, getAllFME2_1);
router.route("/resources/mmtf2-1").get(limiter, getAllMMTF2_1);
router.route("/resources/wvgpp2-1").get(limiter, getAllWvgPP2_1);
router.route("/resources/fyt2-1").get(limiter, getAllFYT2_1);

/* L2 T2 */
router.route("/resources/wv2-2").get(limiter, getAllWV2_2);
router.route("/resources/wp2-2").get(limiter, getAllWP2_2);
router.route("/resources/feee2-2").get(limiter, getAllFEEE2_2);
router.route("/resources/fmkt2-2").get(limiter, getAllFMkt2_2);
router.route("/resources/am2-2").get(limiter, getAllAM2_2);
router.route("/resources/tp2-2").get(limiter, getAllTP2_2);

/* L3 T1 */
router.route("/resources/am3-1").get(limiter, getAllAM3_1);
router.route("/resources/ym3-1").get(limiter, getAllYM3_1);
router.route("/resources/im3-1").get(limiter, getAllIM3_1);
router.route("/resources/knit3-1").get(limiter, getAllKnit3_1);
router.route("/resources/econ3-1").get(limiter, getAllEcon3_1);
router.route("/resources/wp3-1").get(limiter, getAllWP3_1);

/* L3 T2 */
router.route("/resources/acm3-2").get(limiter, getAllACM3_2);
router.route("/resources/acfm3-2").get(limiter, getAllACFM3_2);
router.route("/resources/acm3-2").get(limiter, getAllACM3_2);
router.route("/resources/fsd3-2").get(limiter, getAllFSD3_2);
router.route("/resources/wv3-2").get(limiter, getAllWV3_2);

/* Post Request */
/* L1 T1 */
router.route("/createResource/bce1-1").post(limiter, createBCE1_1);
router.route("/createResource/phy1-1").post(limiter, createPhysics1_1);
router.route("/createResource/chem1-1").post(limiter, createChemistry1_1);
router.route("/createResource/math1-1").post(limiter, createMath1_1);
router.route("/createResource/ntf1-1").post(limiter, createNTF1_1);

/* L1 T2 */
router.route("/createResource/phy1-2").post(limiter, createPhysics1_2);
router.route("/createResource/chem1-2").post(limiter, createChemistry1_2);
router.route("/createResource/math1-2").post(limiter, createMath_2);
router.route("/createResource/cp1-2").post(limiter, createCP1_2);
router.route("/createResource/em1-2").post(limiter, createEM1_2);
router.route("/createResource/pse1-2").post(limiter, createPSE1_2);

/* L2 T1 */
router.route("/createResource/stat2-1").post(limiter, createStat2_1);
router.route("/createResource/ym2-1").post(limiter, createYM2_1);
router.route("/createResource/fme2-1").post(limiter, createFME2_1);
router.route("/createResource/mmtf2-1").post(limiter, createMMTF2_1);
router.route("/createResource/wvgpp2-1").post(limiter, createWvgPP2_1);
router.route("/createResource/fyt2-1").post(limiter, createFYT2_1);

/* L2 T2 */
router.route("/createResource/wv2-2").post(limiter, createWV2_2);
router.route("/createResource/wp2-2").post(limiter, createWP2_2);
router.route("/createResource/tp2-2").post(limiter, createTP2_2);
router.route("/createResource/feee2-2").post(limiter, createFEEE2_2);
router.route("/createResource/fmkt2-2").post(limiter, createFMkt2_2);
router.route("/createResource/am2-2").post(limiter, createAM2_2);

/* L3 T1 */
router.route("/createResource/am3-1").post(limiter, createAM3_1);
router.route("/createResource/ym3-1").post(limiter, createYM3_1);
router.route("/createResource/im3-1").post(limiter, createIM3_1);
router.route("/createResource/econ3-1").post(limiter, createEcon3_1);
router.route("/createResource/knit3-1").post(limiter, createKnit3_1);
router.route("/createResource/wp3-1").post(limiter, createWP3_1);

/* L3 T2 */
router.route("/createResource/ace3-2").post(limiter, createACE3_2);
router.route("/createResource/acfm3-2").post(limiter, createACFM3_2);
router.route("/createResource/scm3-2").post(limiter, createACM3_2);
router.route("/createResource/fsd3-2").post(limiter, createFSD3_2);
router.route("/createResource/wv3-2").post(limiter, createWV3_2);

/* Get by ID Request */
/* L1 T1 */
router.route("/resource/bce1-1/:id").get(limiter, getBCE1_1);
router.route("/resource/phy1-1/:id").get(limiter, getPhysics1_1);
router.route("/resource/chem1-1/:id").get(limiter, getChemistry1_1);
router.route("/resource/math1-1/:id").get(limiter, getMath1_1);
router.route("/resource/ntf1-1/:id").get(limiter, getNTF1_1);

/* L1 T2 */
router.route("/resource/phy1-2/:id").get(limiter, getPhysics1_2);
router.route("/resource/chem1-2/:id").get(limiter, getChemistry1_2);
router.route("/resource/math1-2/:id").get(limiter, getMath1_2);
router.route("/resource/cp1-2/:id").get(limiter, getCP1_2);
router.route("/resource/pse1-2/:id").get(limiter, getPSE1_2);
router.route("/resource/em1-2/:id").get(limiter, getEM1_2);

/* L2 T1 */
router.route("/resource/stat2-1/:id").get(limiter, getStat2_1);
router.route("/resource/ym2-1/:id").get(limiter, getYM2_1);
router.route("/resource/fme2-1/:id").get(limiter, getFME2_1);
router.route("/resource/mmtf2-1/:id").get(limiter, getMMTF2_1);
router.route("/resource/wvgpp2-1/:id").get(limiter, getWvgPP2_1);
router.route("/resource/fyt2-1/:id").get(limiter, getFYT2_1);

/* L2 T2 */
router.route("/resource/wp2-2/:id").get(limiter, getWP2_2);
router.route("/resource/wv2-2/:id").get(limiter, getWV2_2);
router.route("/resource/am2-2/:id").get(limiter, getAM2_2);
router.route("/resource/tp2-2/:id").get(limiter, getTP2_2);
router.route("/resource/feee2-2/:id").get(limiter, getFEEE2_2);
router.route("/resource/fmkt2-2/:id").get(limiter, getFMkt2_2);

/* L3 T1 */
router.route("/resource/am3-1/:id").get(limiter, getAM3_1);
router.route("/resource/ym3-1/:id").get(limiter, getYM3_1);
router.route("/resource/im3-1/:id").get(limiter, getIM3_1);
router.route("/resource/econ3-1/:id").get(limiter, getEcon3_1);
router.route("/resource/knit3-1/:id").get(limiter, getKnit3_1);
router.route("/resource/wp3-1/:id").get(limiter, getWP3_1);

/* L3 T2 */
router.route("/resource/ace3-2/:id").get(limiter, getACE3_2);
router.route("/resource/acfm3-2/:id").get(limiter, getACFM3_2);
router.route("/resource/acm3-2/:id").get(limiter, getACM3_2);
router.route("/resource/fsd3-2/:id").get(limiter, getFSD3_2);
router.route("/resource/wv3-2/:id").get(limiter, getWV3_2);

/* Delete Request */
/* L1 T1 */
router.route("/deleteResource/bce1-1/:_id").delete(limiter, deleteBCE1_1);
router.route("/deleteResource/phy1-1/:_id").delete(limiter, deletePhysics1_1);
router
  .route("/deleteResource/chem1-1/:_id")
  .delete(limiter, deleteChemistry1_1);
router.route("/deleteResource/math1-1/:_id").delete(limiter, deleteMath1_1);
router.route("/deleteResource/ntf1-1/:_id").delete(limiter, deleteNtf1_1);

/* L1 T2 */
router.route("/deleteResource/phy1-2/:_id").delete(limiter, deletePhysics1_2);
router
  .route("/deleteResource/chem1-2/:_id")
  .delete(limiter, deleteChemistry1_2);
router.route("/deleteResource/math1-2/:_id").delete(limiter, deleteMath1_2);
router.route("/deleteResource/cp1-2/:_id").delete(limiter, deleteCP1_2);
router.route("/deleteResource/em1-2/:_id").delete(limiter, deleteEM1_2);
router.route("/deleteResource/pse1-2/:_id").delete(limiter, deletePSE1_2);

/* L2 T1 */
router.route("/deleteResource/stat2-1/:_id").delete(limiter, deleteStat2_1);
router.route("/deleteResource/ym2-1/:_id").delete(limiter, deleteYM2_1);
router.route("/deleteResource/fme2-1/:_id").delete(limiter, deleteFME2_1);
router.route("/deleteResource/mmtf2-1/:_id").delete(limiter, deleteMMTF2_1);
router.route("/deleteResource/wvgpp2-1/:_id").delete(limiter, deleteWvgPP2_1);
router.route("/deleteResource/fyt2-1/:_id").delete(limiter, deleteFYT2_1);

/* L2 T1 */
router.route("/deleteResource/wv2-2/:_id").delete(limiter, deleteWV2_2);
router.route("/deleteResource/wp2-2/:_id").delete(limiter, deleteWP2_2);
router.route("/deleteResource/am2-2/:_id").delete(limiter, deleteAM2_2);
router.route("/deleteResource/feee2-2/:_id").delete(limiter, deleteFEEE2_2);
router.route("/deleteResource/fmkt2-2/:_id").delete(limiter, deleteFMkt2_2);
router.route("/deleteResource/tp2-2/:_id").delete(limiter, deleteTP2_2);

/* L3 T1 */
router.route("/deleteResource/am3-1/:_id").delete(limiter, deleteAM3_1);
router.route("/deleteResource/ym3-1/:_id").delete(limiter, deleteYM3_1);
router.route("/deleteResource/im3-1/:_id").delete(limiter, deleteIM3_1);
router.route("/deleteResource/knit3-1/:_id").delete(limiter, deleteKnit3_1);
router.route("/deleteResource/econ3-1/:_id").delete(limiter, deleteEcon3_1);
router.route("/deleteResource/wp3-1/:_id").delete(limiter, deleteWP3_1);

/* L3 T2 */
router.route("/deleteResource/ace3-2/:_id").delete(limiter, deleteACE3_2);
router.route("/deleteResource/acfm3-2/:_id").delete(limiter, deleteACFM3_2);
router.route("/deleteResource/acm3-2/:_id").delete(limiter, deleteACM3_2);
router.route("/deleteResource/fsd3-2/:_id").delete(limiter, deleteFSD3_2);
router.route("/deleteResource/wv3-2/:_id").delete(limiter, deleteWV3_2);

module.exports = router;
