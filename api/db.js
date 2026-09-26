import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGODB_URI || 'mongodb+srv://noobhari777_db_user:8Zmf2beITlIKRRYI@cluster0.ojpzwrj.mongodb.net/kgnr_db?retryWrites=true&w=majority&appName=Cluster0';

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = new MongoClient(uri, {
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
  });

  await client.connect();
  const db = client.db('kgnr_db');

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}

export function extractYouTubeId(url) {
  if (!url) return null;
  const cleanUrl = url.trim();
  
  // Match youtube.com/watch?v=ID, youtu.be/ID, youtube.com/embed/ID, youtube.com/shorts/ID
  const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;
  const match = cleanUrl.match(regExp);
  if (match && match[1]) {
    return match[1];
  }
  
  // If user pasted just an 11-char ID
  if (/^[a-zA-Z0-9_-]{11}$/.test(cleanUrl)) {
    return cleanUrl;
  }
  
  return null;
}
