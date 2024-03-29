const { default: mongoose } = require("mongoose");

const Category = mongoose.model("Category", {
  userEmail: String,
  Category_name: String,
  iconId: Number,
  Icon: { type: String, require: false },
  color: String,
  amount: Number,
  time: String,
  data: String,
});
module.exports = {
  Category,
};
