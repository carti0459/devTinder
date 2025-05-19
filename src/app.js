const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/signup", async (req, res) => {
  // Creating a new instance of the User model
  const user = new User({
    firstName: "Karthik",
    lastName: "Nair",
    emailId: "karthiknair2004@gmail.com",
    password: "123456",
  });
  try {
    await user.save();
    res.send("User added successfully");
  } catch (err) {
    res.status(400).send("Error adding user");
  }
});

connectDB()
  .then(() => {
    console.log("Database connection established");
    app.listen(7777, () => {
      console.log("Server is running on port 7777");
    });
  })
  .catch((err) => {
    console.error("Database connection error:");
  });

app.use("/user", (req, res) => {
  res.send("Route Handler1");
});
