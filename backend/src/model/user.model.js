const { default: mongoose } = require("mongoose");

const User = mongoose.model("users", {
  // user: mongoose.Schema.Types.ObjectId,
  email: String,
  password: String,
  createdAt: Date,
});
module.exports = {
  User,
};
