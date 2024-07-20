import connectDB from './db';
import BlogPost from '../Models/BlogPost';  // Ensure the correct path

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb', // Set desired value here
    },
  },
};

export default async function handler(req, res) {
  try {
    await connectDB();
    console.log('Database connection established');

    const { method } = req;
    console.log(`Received ${method} request`);
debugger
    switch (method) {
      case 'POST':
        
          const { userid, blogtitle, blogdescription, blgIMG_64, publishdate } = req.body;
          console.log('Request body:', req.body);

          if (!userid || !blogtitle || !blogdescription || !blgIMG_64 || !publishdate) {
            console.log('Validation failed');
            return res.status(400).json({ error: 'All fields are required' });
          }
          debugger

          const newPost = new BlogPost({
            userid,
            blogtitle,
            blogdescription,
            blgIMG_64,
            publishdate,
          });

          const savedPost = await newPost.save();
          console.log('Post saved:', savedPost);

          res.status(201).json({ success: true, data: savedPost });
        
        
      default:
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${method} Not Allowed`);
        break;
    }
  } catch (error) {
    console.error('Database connection error:', error); // Log the error object
    res.status(500).json({ error: 'Database connection error', message: error.message });
  }
}
