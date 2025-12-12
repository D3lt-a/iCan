require('dotenv').config();
const { MongoClient } = require('mongodb');

let database;

const db = async () => {

    if (database) {
        return database;
    }

    const uri = process.env.MONGODB_URI
    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log("✅ Connected to MongoDB");
        
        database = client.db(process.env.MONGODB_DB_NAME);
        return database;
    } catch (error) {
        console.error("⛔ Failed to connect to MongoDB", error);
    }
}

module.exports = db;