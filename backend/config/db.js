import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.Mongo_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Connection failed:", error);
  }
};
export default  connectDB;