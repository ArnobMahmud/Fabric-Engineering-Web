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
const FYT2_1_ResourceModel = mongoose.model("fyt2-1_resource", ResourceSchema);

/* Level 2 - Term 2 */
const WP2_2_ResourceModel = mongoose.model("wp2-2_resource", ResourceSchema);
const WV2_2_ResourceModel = mongoose.model("wv2-2_resource", ResourceSchema);
const AM2_2_ResourceModel = mongoose.model("am2-2_resource", ResourceSchema);
const FEEE2_2_ResourceModel = mongoose.model(
  "feee2-2_resource",
  ResourceSchema
);
const FMkt2_2_ResourceModel = mongoose.model(
  "fmkt2-2_resource",
  ResourceSchema
);
const TP2_2_ResourceModel = mongoose.model("tp2-2_resource", ResourceSchema);

/* Level 3 - Term 1 */
const YM3_1_ResourceModel = mongoose.model("ym3-1_resource", ResourceSchema);
const AM3_1_ResourceModel = mongoose.model("am3-1_resource", ResourceSchema);
const Econ3_1_ResourceModel = mongoose.model(
  "econ3-1_resource",
  ResourceSchema
);
const Knit3_1_ResourceModel = mongoose.model(
  "knit3-1_resource",
  ResourceSchema
);
const IM3_1_ResourceModel = mongoose.model("im3-1_resource", ResourceSchema);
const WP3_1_ResourceModel = mongoose.model("wp3-1_resource", ResourceSchema);

/* Level 3 - Term 2 */
const ACE3_2_ResourceModel = mongoose.model("ace3-2_resource", ResourceSchema);
const ACFM3_2_ResourceModel = mongoose.model(
  "acfm3-2_resource",
  ResourceSchema
);
const ACM3_2_ResourceModel = mongoose.model("acm3-2_resource", ResourceSchema);
const FSD3_2_ResourceModel = mongoose.model("fsd3-2_resource", ResourceSchema);
const WV3_2_ResourceModel = mongoose.model("wv3-2_resource", ResourceSchema);

/* Level 4 - Term 1 */
const SOC4_1_ResourceModel = mongoose.model("soc4-1_resource", ResourceSchema);
const FTQC4_1_ResourceModel = mongoose.model(
  "ftqc4-1_resource",
  ResourceSchema
);
const Knit4_1_ResourceModel = mongoose.model(
  "knit4-1_resource",
  ResourceSchema
);
const SFP4_1_ResourceModel = mongoose.model("sfp4-1_resource", ResourceSchema);
const TAM4_1_ResourceModel = mongoose.model("tam4-1_resource", ResourceSchema);

/* Level 4 - Term 2 */
const NWvn4_2_ResourceModel = mongoose.model(
  "nwvn4-2_resource",
  ResourceSchema
);
const TT4_2_ResourceModel = mongoose.model("tt4-2_resource", ResourceSchema);
const ES4_2_ResourceModel = mongoose.model("es4-2_resource", ResourceSchema);
const PPC4_2_ResourceModel = mongoose.model("ppc4-2_resource", ResourceSchema);
const FEPW4_2_ResourceModel = mongoose.model(
  "fepw4-2_resource",
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
  FYT2_1_ResourceModel,

  WP2_2_ResourceModel,
  WV2_2_ResourceModel,
  FEEE2_2_ResourceModel,
  FMkt2_2_ResourceModel,
  AM2_2_ResourceModel,
  TP2_2_ResourceModel,

  YM3_1_ResourceModel,
  WP3_1_ResourceModel,
  Knit3_1_ResourceModel,
  AM3_1_ResourceModel,
  IM3_1_ResourceModel,
  Econ3_1_ResourceModel,

  ACE3_2_ResourceModel,
  ACFM3_2_ResourceModel,
  ACM3_2_ResourceModel,
  FSD3_2_ResourceModel,
  WV3_2_ResourceModel,

  SOC4_1_ResourceModel,
  FTQC4_1_ResourceModel,
  Knit4_1_ResourceModel,
  SFP4_1_ResourceModel,
  TAM4_1_ResourceModel,

  NWvn4_2_ResourceModel,
  TT4_2_ResourceModel,
  ES4_2_ResourceModel,
  PPC4_2_ResourceModel,
  FEPW4_2_ResourceModel,
};
