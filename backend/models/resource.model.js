const mongoose = require("mongoose");

const ResourceSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  lecturer: {
    type: String,
    required: true,
  },
  discussedTopics: {
    type: String,
    required: true,
  },
  driveLink: {
    type: String,
    required: true,
  },
});

/* Level 1 - Term 1 */
const BCE1_1_ResourceModel = mongoose.model("bce1-1_resource", ResourceSchema);
const Physics1_1_ResourceModel = mongoose.model(
  "physics1-1_resource",
  ResourceSchema
);
const Chemistry1_1_ResourceModel = mongoose.model(
  "chemistry1-1_resource",
  ResourceSchema
);
const Math1_1_ResourceModel = mongoose.model(
  "math1-1_resource",
  ResourceSchema
);
const NTF1_1_ResourceModel = mongoose.model("ntf1-1_resource", ResourceSchema);

/* Level 1 - Term 2 */
const Physics1_2_ResourceModel = mongoose.model(
  "physics1-2_resource",
  ResourceSchema
);
const Chemistry1_2_ResourceModel = mongoose.model(
  "chemistry1-2_resource",
  ResourceSchema
);
const Math1_2_ResourceModel = mongoose.model(
  "math1-2_resource",
  ResourceSchema
);
const CP1_2_ResourceModel = mongoose.model("cp1-2_resource", ResourceSchema);
const PSE1_2_ResourceModel = mongoose.model("pse1-2_resource", ResourceSchema);
const EM1_2_ResourceModel = mongoose.model("em1-2_resource", ResourceSchema);

/* Level 2 - Term 1 */
const Stat2_1_ResourceModel = mongoose.model(
  "stat2-1_resource",
  ResourceSchema
);
const YM2_1_ResourceModel = mongoose.model("ym2-1_resource", ResourceSchema);
const FME2_1_ResourceModel = mongoose.model("fme2-1_resource", ResourceSchema);
const MMTF2_1_ResourceModel = mongoose.model(
  "mmtf2-1_resource",
  ResourceSchema
);
const WvgPP2_1_ResourceModel = mongoose.model(
  "wvgpp2-1_resource",
  ResourceSchema
);
module.exports = {
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
};
