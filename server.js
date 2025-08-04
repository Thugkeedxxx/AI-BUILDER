const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/generate-app', async (req, res) => {
  const { prompt, email } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Missing prompt' });
  }

  // Simulate fake AI output
  const code = `
    // Generated App for: ${prompt}
    const app = () => {
      console.log("Welcome to your AI-built app!");
    };
    app();`;

  return res.json({ code });
});

app.listen(PORT, () => {
  console.log(`🔥 THUGKEED AI App Builder running on port ${PORT}`);
});￼Enter
