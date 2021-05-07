const mongoose = require("mongoose");

const companySchema = mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    briefIntro: {
      type: String,
      default: "",
    },
    companyPicture: {
      type: String,
      default: "Frontend Developer",
    },
    aboutCompany: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

companySchema.virtual("id").get(function () {
  return this._id.toHexString();
});

companySchema.set("toJSON", {
  virtuals: true,
});
exports.Company = mongoose.model("Company", companySchema);

