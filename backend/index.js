require('dotenv').config();
const db = require('./config/db');
const express = require('express');

const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT

app.get('/', (req, res) => {
    res.send('The Server is Running!!');
});

const test = async () =>{
    const database = await db();
    const collection = database.collection('user');
    await collection.insertOne({
        username: "Admin User",
        useremail: "admin@gmail.com",
        userpasskey:"admin123",
        role: "apprentice",
        goal:"Full Stack Developer"
    })
    const collections = await database.listCollections().toArray();
    console.log("Collections:", collections.map(c => c.name));
}

app.use('/user', userRoutes);

app.listen(PORT, async () => {
    await db();
    await test();
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});