import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';

const url = process.env.DATA_BASE_URL;
const connectDb = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); 
  }
};

export default connectDb;
