const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/secure-data', (req, res) => {
    const { user_id, data } = req.body;
    // আপনার সিকিউরিটি লজিক এখানে লিখুন
    res.status(200).json({ status: "Success", message: "Data received instantly!" });
});

module.exports = app; // Vercel-এর জন্য এটি জরুরি
