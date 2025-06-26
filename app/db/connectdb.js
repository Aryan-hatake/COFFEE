
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    
  } catch (error) {
    console.error(error.message);
    throw error
  }
}

export default connectDB