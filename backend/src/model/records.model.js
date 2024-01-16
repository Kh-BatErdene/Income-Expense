const { default: mongoose } = require("mongoose");

const Records = mongoose.model("Records", {
  userEmail: String,
  recordIcon: String,
  isExpense: Boolean,
  inputText: String,
  cateColor: String,
  amount: Number,
  time: String,
  date: Date,
});
module.exports = {
  Records,
};
