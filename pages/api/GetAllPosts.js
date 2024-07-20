import connectDB from './db';
import BlogPost from '../Models/BlogPost'; // Ensure the correct path

export default async function handler(req, res) {
  try {
    await connectDB();
    console.log("Database connected");

    const data = await BlogPost.find();
    if (data.length === 0) {
      console.log("No data found");
      return res.status(404).json({ message: 'No data found for this category' });
    }

    console.log("Data retrieved: ", data);
    res.json(data);
  } catch (err) {
    console.error("Error occurred: ", err);
    res.status(500).json({ message: err.message });
  }
}
