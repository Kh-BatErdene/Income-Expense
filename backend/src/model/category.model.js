const { default: mongoose } = require("mongoose");

const Category = mongoose.model("Category", {
  userEmail: String,
  Category_name: String,
  iconId: Number,
  Icon: String,
});
module.exports = {
  Category,
};
