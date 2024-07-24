
import connectDB from './db';
import User from '../user';

export default async function handler(req, res) {
  await connectDB();

  const { method } = req;

  switch (method) {
    case 'POST':
      try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
          return res.status(400).json({ error: 'Missing required fields' });
        }

        const user = await User.create({ name, email, password });

        res.status(201).json({ success: true, data: user });
      } catch (error) {
        if (error.code === 11000) {
          // Duplicate email
          return res.status(400).json({ error: 'Email already exists' });
        }
        res.status(500).json({ error: 'Server error' });
      }
      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
