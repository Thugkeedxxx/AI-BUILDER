const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // Make sure your index.html is in /public

// Fake AI app generator endpoint
app.post('/generate-app', (req, res) => {
  const { prompt } = req.body;
  const generatedCode = `// App generated for prompt: "${prompt}"\n\nfunction startApp() {\n  console.log("Hello from THUGKEED AI!");\n}`;
  res.json({ code: generatedCode });
});

app.listen(PORT, () => {
  console.log(`🔥 THUGKEED AI Builder running on port ${PORT}`);
});
