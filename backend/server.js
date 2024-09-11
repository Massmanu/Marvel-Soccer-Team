const express = require('express');
const axios = require('axios');
const crypto = require('crypto');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

// Generate the timestamp, hash, and query parameters
const generateAuthParams = () => {
    const ts = new Date().getTime();
    const publicKey = process.env.MARVEL_PUBLIC_KEY;
    const privateKey = process.env.MARVEL_PRIVATE_KEY;
    const hash = crypto
        .createHash('md5')
        .update(ts + privateKey + publicKey)
        .digest('hex');
    return `ts=${ts}&apikey=${publicKey}&hash=${hash}`;
};

// Route to fetch Marvel characters
app.get('/api/characters', async (req, res) => {
    try {
        const authParams = generateAuthParams();
        const { data } = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?${authParams}`);
        res.json(data.data.results);
    } catch (error) {
        console.error('Error fetching Marvel characters:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
