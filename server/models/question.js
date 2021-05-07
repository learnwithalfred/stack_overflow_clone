const mongoose = require("mongoose");

const questionSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    imageUrl: {
      type: String,
      default: "",
    }
  },
  { timestamps: true }
);

questionSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

questionSchema.set("toJSON", {
  virtuals: true,
});
exports.Question = mongoose.model("Question", questionSchema);
