// lib/db.js

import mongoose from 'mongoose';

const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;
  
  try {
    // await mongoose.connect("mongodb://localhost:27017/blogDB", {
    await mongoose.connect("mongodb://adeel:asdzxc123@ac-gzaofpb-shard-00-00.rsu6py3.mongodb.net:27017,ac-gzaofpb-shard-00-01.rsu6py3.mongodb.net:27017,ac-gzaofpb-shard-00-02.rsu6py3.mongodb.net:27017/?ssl=true&replicaSet=atlas-137x1j-shard-0&authSource=admin&retryWrites=true&w=majority&appName=nodeclaus", {

      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    throw new Error("Error connecting to MongoDB");
  }
};

export default connectDB;
