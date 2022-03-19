const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  driveLink: {
    type: String,
    required: true,
  },
});

const Statistics2_1_NotesModel = mongoose.model("stat2-1_notes", NoteSchema);
const FYT2_1_NotesModel = mongoose.model("fyt2-1_notes", NoteSchema);
const MMTF2_1_NotesModel = mongoose.model("mmtf2-1_notes", NoteSchema);
const YM2_1_NotesModel = mongoose.model("ym2-1_notes", NoteSchema);
const WPP2_1_NotesModel = mongoose.model("wpp2-1_notes", NoteSchema);
const FME2_1_NotesModel = mongoose.model("fme2-1_notes", NoteSchema);

const AM2_2_NotesModel = mongoose.model("am2-2_notes", NoteSchema);
const FEEE2_2_NotesModel = mongoose.model("feee2-2_notes", NoteSchema);
const FMkt2_2_NotesModel = mongoose.model("fmkt2-2_notes", NoteSchema);
const TP2_2_NotesModel = mongoose.model("tp2-2_notes", NoteSchema);
const WV2_2_NotesModel = mongoose.model("wv2-2_notes", NoteSchema);
const WP2_2_NotesModel = mongoose.model("wp2-2_notes", NoteSchema);

module.exports = {
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
};
