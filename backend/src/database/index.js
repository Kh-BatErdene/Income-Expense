const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://BatErdene:89129494Bb!@cluster0.hqlmqgw.mongodb.net/Geld?retryWrites=true&w=majority"
    );
    console.log("Succesfully Connected");
  } catch (err) {
    console.log(err);
  }
};
module.exports = {
  connectDatabase,
};
