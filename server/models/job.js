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
    jobType: { type: String, default: "Full-time" },
    experienceLevel: {
      type: String,
      default: "Mid-Level",
    },
    role: {
      type: String,
      default: "Frontend Developer",
    },
    jobDescription: {
      type: String,
      default: "",
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

