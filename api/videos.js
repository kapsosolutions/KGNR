import { ObjectId } from 'mongodb';
import { connectToDatabase, extractYouTubeId } from './db.js';

const INITIAL_SEED_VIDEOS = [
  {
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    videoId: 'dQw4w9WgXcQ',
    title: 'KGN.R Signature Gold Finishing & Craftsmanship Showcase',
    description: 'Explore the high-precision rotary buffing and master goldsmithing techniques in our Nellore atelier.',
    category: 'Craftsmanship',
    createdAt: new Date().toISOString()
  },
  {
    youtubeUrl: 'https://www.youtube.com/watch?v=ScMzIvxBSi4',
    videoId: 'ScMzIvxBSi4',
    title: '22K Traditional Temple Deity Mukhavata Artistry',
    description: 'Witness master artisan Rabbani Shaik shaping pure gold sacred temple ornaments with 25+ years legacy.',
    category: 'Temple Heritage',
    createdAt: new Date().toISOString()
  },
  {
    youtubeUrl: 'https://www.youtube.com/watch?v=9bZkp7q19f0',
    videoId: '9bZkp7q19f0',
    title: 'Precision Diamond Buffing & Ultrasonic Cleansing Process',
    description: 'Zero gold loss particulate recovery chamber and diamond lustre inspection for bridal ornaments.',
    category: 'Finishing Tech',
    createdAt: new Date().toISOString()
  },
  {
    youtubeUrl: 'https://www.youtube.com/watch?v=kJQP7kiw5Fk',
    videoId: 'kJQP7kiw5Fk',
    title: 'Chinna Bazaar Master Benchmark - Custom Bridal Sets',
    description: 'From intricate South Indian antique chokers to certified 916 hallmarked bangles.',
    category: 'Bridal Vault',
    createdAt: new Date().toISOString()
  },
  {
    youtubeUrl: 'https://www.youtube.com/watch?v=fJ9rUzIMcZQ',
    videoId: 'fJ9rUzIMcZQ',
    title: 'Restoration of Heritage Antique Jewellery & Stones',
    description: 'Careful preservation of family heirloom ornaments without affecting original hallmark seals.',
    category: 'Restoration',
    createdAt: new Date().toISOString()
  },
  {
    youtubeUrl: 'https://www.youtube.com/watch?v=3JZ_D3ELwOQ',
    videoId: '3JZ_D3ELwOQ',
    title: 'Atelier Walkthrough: Chinna Bazaar, Nellore Workshop',
    description: 'Tour our benchwork facilities and consultation counters serving jewellers across Andhra Pradesh & Tamil Nadu.',
    category: 'Atelier Story',
    createdAt: new Date().toISOString()
  }
];

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const { db } = await connectToDatabase();
    const collection = db.collection('videos');

    if (req.method === 'GET') {
      const { action } = req.query || {};
      
      let videos = await collection.find({}).sort({ createdAt: -1 }).toArray();

      // If database is completely empty on first load, seed with initial realistic videos
      if (videos.length === 0) {
        await collection.insertMany(INITIAL_SEED_VIDEOS.map(v => ({ ...v, createdAt: new Date() })));
        videos = await collection.find({}).sort({ createdAt: -1 }).toArray();
      }

      return res.status(200).json({
        success: true,
        count: videos.length,
        videos: videos.map(v => ({
          id: v._id.toString(),
          youtubeUrl: v.youtubeUrl,
          videoId: v.videoId,
          title: v.title,
          description: v.description,
          category: v.category || 'Atelier',
          createdAt: v.createdAt
        }))
      });
    }

    if (req.method === 'POST') {
      const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      const { action, youtubeUrl, title, description, category } = body || {};

      // Seed action
      if (action === 'seed') {
        await collection.deleteMany({});
        await collection.insertMany(INITIAL_SEED_VIDEOS.map(v => ({ ...v, createdAt: new Date() })));
        const seeded = await collection.find({}).sort({ createdAt: -1 }).toArray();
        return res.status(200).json({
          success: true,
          message: 'Seeded sample videos successfully',
          videos: seeded.map(v => ({
            id: v._id.toString(),
            youtubeUrl: v.youtubeUrl,
            videoId: v.videoId,
            title: v.title,
            description: v.description,
            category: v.category || 'Atelier',
            createdAt: v.createdAt
          }))
        });
      }

      if (!youtubeUrl) {
        return res.status(400).json({ success: false, error: 'YouTube URL is required' });
      }

      const videoId = extractYouTubeId(youtubeUrl);
      if (!videoId) {
        return res.status(400).json({ success: false, error: 'Invalid YouTube URL or Video ID could not be identified' });
      }

      const newVideo = {
        youtubeUrl: youtubeUrl.trim(),
        videoId,
        title: (title || 'KGN.R Atelier Craftsmanship Video').trim(),
        description: (description || 'Watch our master goldsmithing benchwork and ornament finishing showcase.').trim(),
        category: (category || 'Atelier').trim(),
        createdAt: new Date()
      };

      const result = await collection.insertOne(newVideo);

      return res.status(201).json({
        success: true,
        message: 'Video added successfully to database',
        video: {
          id: result.insertedId.toString(),
          ...newVideo
        }
      });
    }

    if (req.method === 'DELETE') {
      const id = req.query?.id || (req.body && (typeof req.body === 'string' ? JSON.parse(req.body).id : req.body.id));
      if (!id) {
        return res.status(400).json({ success: false, error: 'Video ID is required for deletion' });
      }

      const result = await collection.deleteOne({ _id: new ObjectId(id) });
      if (result.deletedCount === 0) {
        return res.status(404).json({ success: false, error: 'Video not found in database' });
      }

      return res.status(200).json({ success: true, message: 'Video deleted successfully' });
    }

    return res.status(405).json({ success: false, error: `Method ${req.method} Not Allowed` });
  } catch (error) {
    console.error('API /videos error:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Internal Server Error connecting to MongoDB'
    });
  }
}
