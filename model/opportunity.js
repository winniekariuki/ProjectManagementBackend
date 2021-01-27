const mongoose = require("mongoose");

const OpportunitySchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  account: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'account',
    required: true
  },
  amountStage: {
    type: String,
    required:true
},
},
{
  timestamps: true,
}
);

// export model user with UserSchema
module.exports = mongoose.model("opportunity", OpportunitySchema);