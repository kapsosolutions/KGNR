import dotenv from 'dotenv';
dotenv.config();

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const { username, password } = body || {};

    const envUser = process.env.ADMIN_USERNAME || 'admin';
    const envPass = process.env.ADMIN_PASSWORD || 'admin123';

    if (username === envUser && password === envPass) {
      // Create a deterministic session token
      const token = Buffer.from(`${username}:${Date.now()}:${process.env.JWT_SECRET || 'kgnr_token'}`).toString('base64');

      return res.status(200).json({
        success: true,
        message: 'Authentication successful',
        token,
        user: {
          username: envUser,
          role: 'Admin'
        }
      });
    }

    return res.status(401).json({
      success: false,
      error: 'Invalid username or password'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message || 'Authentication error'
    });
  }
}
