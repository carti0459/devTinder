const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://karthiknair2004:VmHxAFxcr6r23cF7@clusternode.pkstphr.mongodb.net/"
  );
};

module.exports = connectDB;

