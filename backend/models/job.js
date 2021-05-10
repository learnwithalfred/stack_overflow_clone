const mongoose = require("mongoose");

const jobSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    postedOn: {
      type: Date,
      default: Date.now(),
    },
    jobType: { type: String },
    experienceLevel: {
      type: String
    },
    role: {
      type: String,
    },
    jobDescription: {
      type: String,
    },
  },
  { timestamps: true }
);

jobSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

jobSchema.set("toJSON", {
  virtuals: true,
});
exports.Job = mongoose.model("Job", jobSchema);
