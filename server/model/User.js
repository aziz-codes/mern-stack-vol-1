import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique,
    required,
  },
  username: {
    type: String,
    required,
    unique,
  },
  password: {
    type: String,
    required,
  },
});
const User = mongoose.model("users", userSchema);

export default User;
