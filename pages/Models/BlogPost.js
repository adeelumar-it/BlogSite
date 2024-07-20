import mongoose from 'mongoose';

const BlogPostSchema = new mongoose.Schema({
  userid: {
    type: String,
  },
  blogtitle: {
    type: String,
    required: true,
  },
  blogdescription: {
    type: String,
    required: true,
  },
  blgIMG_64: {
    type: String,
    required: true,
  },
  publishdate: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const BlogPost = mongoose.models.BlogPost || mongoose.model('BlogPost', BlogPostSchema);

export default BlogPost;
