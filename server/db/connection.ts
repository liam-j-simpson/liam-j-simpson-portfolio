import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'

dotenv.config()

const url = process.env.MONGODB_URI
const dbName = process.env.DB_NAME

let client: MongoClient

export async function connectToDb() {
  try {
    if (!url || !dbName) {
      throw new Error('Missing MONGODB_URI or DB_NAME in environment variables')
    }
    if (!client) {
      client = new MongoClient(url)
      await client.connect()
      console.log('Connected successfully to MongoDB')
    }
    return client.db(dbName)
  } catch (err) {
    console.error('Could not connect to MongoDB:', err)
    throw err
  }
}

export async function closeConnection() {
  if (client) {
    await client.close()
    console.log('MongoDB connection closed')
  }
}
