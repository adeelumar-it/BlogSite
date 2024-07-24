// pages/api/login.js

import connectDB from './db'; // Ensure this path is correct
import User from '../user'; // Ensure this path is correct
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  await connectDB();

  const { method } = req;

  switch (method) { 
    case 'POST':
      try {
        const { email, password } = req.body;

        if (!email || !password) {
          return res.status(400).json({ error: 'Email and password are required' });
        }

        // const user = await User.findOne({ email });
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            //check if password matches
            const result = req.body.password === user.password;
            if(result){
                res.status(200).json({ success: true, data: { id: user._id, name: user.name, email: user.email } });
            }
        }
        if (!user) {
          return res.status(401).json({ error: 'Invalid email or password' });
        }

        // const isMatch = await bcrypt.compare(password, user.password);
        // if (!isMatch) {
        //   return res.status(401).json({ error: 'Invalid email or password' });
        // }

        // res.status(200).json({ success: true, data: { id: user._id, name: user.name, email: user.email } });
      } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ error: 'Server error' });
      }
      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}