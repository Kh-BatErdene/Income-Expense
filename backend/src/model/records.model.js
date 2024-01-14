const { default: mongoose } = require("mongoose");

const Records = mongoose.model("Records", {
  userEmail: String,
  inputIcon: String,
  inputText: String,
  amount: Number,
  time: String,
});
module.exports = {
  Records,
};
