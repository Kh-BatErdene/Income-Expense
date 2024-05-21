const { default: mongoose } = require("mongoose");

const Records = mongoose.model("Records", {
  userEmail: String,
  recordIcon: { type: String, require: false },
  isExpense: Boolean,
  inputText: String,
  cateColor: { type: String, require: false },
  amount: Number,
  time: { type: String, require: false },
  date: { type: String, require: false },
});
module.exports = {
  Records,
};
