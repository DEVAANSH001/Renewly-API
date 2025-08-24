import mongoose from "mongoose";
import {DB_URL , NODE_ENV} from '../config/env.js'


if (!DB_URL) {
  console.error(" DB_URL is not defined in environment variables");
}

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URL, {
      
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  
  } catch (error) {
    console.error(" MongoDB connection error:", error.message);
    process.exit(1);
  }
};


mongoose.connection.on("connected", () => {
  console.log("📡 Mongoose connected to DB");
});

mongoose.connection.on("error", (err) => {
  console.error(" Mongoose connection error:", err);
});

mongoose.connection.on("disconnected", () => {
  console.warn("  Mongoose disconnected from DB");
});


process.on("SIGINT", async () => {
  await mongoose.connection.close();
  console.log(" Mongoose connection closed on app termination");
  process.exit(0);
});

export default connectDB;
