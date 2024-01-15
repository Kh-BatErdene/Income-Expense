const { default: mongoose } = require("mongoose");

const Records = mongoose.model("Records", {
  userEmail: String,
  recordIcon: String,
  inputText: String,
  color: String,
  amount: Number,
  time: Date,
});
module.exports = {
  Records,
};
