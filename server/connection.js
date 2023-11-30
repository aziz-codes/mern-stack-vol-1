import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    const url = process.env.MONGODB_URL;
    await mongoose.connect(url);
    console.log("MongoDB connected");
  } catch (err) {
    console.log("Error Connecting MongoDB" + err.message);
    process.exit(1);
  }
};
export default connectDB;
