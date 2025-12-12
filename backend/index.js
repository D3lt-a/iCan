require('dotenv').config();
const db = require('./config/db');
const express = require('express');

const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT

app.get('/', (req, res) => {
    res.send('The Server is Running!!');
});

app.use('/user', userRoutes);

app.listen(PORT, async () => {
    await db();
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});