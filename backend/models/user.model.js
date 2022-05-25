const mongosse = require("mongoose");

const Schema = mongosse.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlenght: 3,
    },
  },
  {
    timestamops: true,
  }
);

const User = mongosse.model("User", userSchema);

module.exports = User;
