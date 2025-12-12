require('dotenv').config();
const { MongoClient } = require('mongodb');

const db = async () => {
    const uri = process.env.MONGODB_URI
    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log("✅ Connected to MongoDB");
        return client.db(process.env.MONGODB_DB_NAME);
    } catch (error) {
        console.error("⛔ Failed to connect to MongoDB", error);
    }
}

module.exports = db;