const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://karthiknair2004:rnp406472@clusternode.pkstphr.mongodb.net/?retryWrites=true&w=majority&appName=CLusterNode/devTinder"
  );
};

module.exports = connectDB;

