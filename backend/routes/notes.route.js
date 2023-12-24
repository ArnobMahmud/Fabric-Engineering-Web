const express = require("express");
const limiter = require("../middleware/RateLimit");
const router = express.Router();
const {
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
} = require("../controller/notes.control");

/* Get All Request */
router.route("/notes/stat2-1").get(limiter, getAllStatistics2_1);
router.route("/notes/fyt2-1").get(limiter, getAllFYT2_1);
router.route("/notes/mmtf2-1").get(limiter, getAllMMTF2_1);
router.route("/notes/ym2-1").get(limiter, getAllYM2_1);
router.route("/notes/wpp2-1").get(limiter, getAllWPP2_1);
router.route("/notes/fme2-1").get(limiter, getAllFME2_1);

router.route("/notes/am2-2").get(limiter, getAllAM2_2);
router.route("/notes/feee2-2").get(limiter, getAllFEEE2_2);
router.route("/notes/fmkt2-2").get(limiter, getAllFMkt2_2);
router.route("/notes/tp2-2").get(limiter, getAllTP2_2);
router.route("/notes/wv2-2").get(limiter, getAllWV2_2);
router.route("/notes/wp2-2").get(limiter, getAllWP2_2);

/* Post Request */
router.route("/createNote/stat2-1").post(limiter, createStatistics2_1);
router.route("/createNote/fyt2-1").post(limiter, createFYT2_1);
router.route("/createNote/mmtf2-1").post(limiter, createMMTF2_1);
router.route("/createNote/ym2-1").post(limiter, createYM2_1);
router.route("/createNote/wpp2-1").post(limiter, createWPP2_1);
router.route("/createNote/fme2-1").post(limiter, createFME2_1);

router.route("/createNote/am2-2").post(limiter, createAM2_2);
router.route("/createNote/feee2-2").post(limiter, createFEEE2_2);
router.route("/createNote/fmkt2-2").post(limiter, createFMkt2_2);
router.route("/createNote/tp2-2").post(limiter, createTP2_2);
router.route("/createNote/wv2-2").post(limiter, createWV2_2);
router.route("/createNote/wp2-2").post(limiter, createWP2_2);

/* Get by ID Request */
router.route("/note/stat2-1/:id").get(limiter, getStatistics2_1);
router.route("/note/fyt2-1/:id").get(limiter, getFYT2_1);
router.route("/note/mmtf2-1/:id").get(limiter, getMMTF2_1);
router.route("/note/ym2-1/:id").get(limiter, getYM2_1);
router.route("/note/wpp2-1/:id").get(limiter, getWPP2_1);
router.route("/note/fme2-1/:id").get(limiter, getFME2_1);

router.route("/note/am2-2/:id").get(limiter, getAM2_2);
router.route("/note/feee2-2/:id").get(limiter, getFEEE2_2);
router.route("/note/fmkt2-2/:id").get(limiter, getFMkt2_2);
router.route("/note/tp2-2/:id").get(limiter, getTP2_2);
router.route("/note/wv2-2/:id").get(limiter, getWV2_2);
router.route("/note/wp2-2/:id").get(limiter, getWP2_2);

/* Delete Request */
router.route("/deleteNote/stat2-1/:_id").delete(limiter, deleteStatistics2_1);
router.route("/deleteNote/fyt2-1/:_id").delete(limiter, deleteFYT2_1);
router.route("/deleteNote/mmtf2-1/:_id").delete(limiter, deleteMMFT2_1);
router.route("/deleteNote/ym2-1/:_id").delete(limiter, deleteYM2_1);
router.route("/deleteNote/wpp2-1/:_id").delete(limiter, deleteWPP2_1);
router.route("/deleteNote/fme2-1/:_id").delete(limiter, deleteFME2_1);

router.route("/deleteNote/am2-2/:_id").delete(limiter, deleteAM2_2);
router.route("/deleteNote/feee2-2/:_id").delete(limiter, deleteFEEE2_2);
router.route("/deleteNote/fmkt2-2/:_id").delete(limiter, deleteFMkt2_2);
router.route("/deleteNote/tp2-2/:_id").delete(limiter, deleteTP2_2);
router.route("/deleteNote/wv2-2/:_id").delete(limiter, deleteWV2_2);
router.route("/deleteNote/wp2-2/:_id").delete(limiter, deleteWP2_2);

module.exports = router;
