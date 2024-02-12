const express = require("express");
const cors = require('cors');
const assert = require("assert")
const {encoding_for_model} = require("tiktoken");
var bodyParser = require('body-parser')
const app = express();

app.use(cors());
app.use(bodyParser.json())

app.post('/api/tokens', (req, res) => {
    const userText = req.body.text;
    const enc = encodingForModel("gpt-4-vision-preview");
    const answer = enc.encode(userText);
    res.json({ tokens: answer.length });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
