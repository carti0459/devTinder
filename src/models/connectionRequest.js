const mongoose = require("mongoose");

const connectionRequestSchema = new mongoose.Schema(
  {
    fromUserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref : "User",
      required: true,
    },
    toUserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref : "User",
      requires: true,
    },
    status: {
      type: String,
      requires: true,
      enum: {
        values: ["ignored", "interested", "accepted", "rejected"],
        message: "{VALUE} is incorrect status type",
      },
    },
  },
  {
    timestamps: true,
  }
);

connectionRequestSchema.index({ fromUserId: 1, toUserId: 1});

const ConnectionRequest = new mongoose.model(
    "ConnectionRequest" , 
    connectionRequestSchema
);

connectionRequestSchema.pre("save", function(next) {
  const connectionRequest = this;
  // Check if the fromUserId is same as toUserId
  if(connectionRequest.fromUserId.equals(connectionRequest.toUserId)) {
    throw new Error("You cannot send a connection request to yourself");  
  }
  next();
})

module.exports = ConnectionRequest;
