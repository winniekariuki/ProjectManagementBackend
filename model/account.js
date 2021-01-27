const mongoose = require("mongoose");

const AccountSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
AccountSchema.index({ name: 1 });
// export model user with UserSchema
module.exports = mongoose.model("account", AccountSchema);
