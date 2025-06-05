const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://karthiknair2004:rahulrandi@clusternode.pkstphr.mongodb.net/"
  );
};

module.exports = connectDB;

