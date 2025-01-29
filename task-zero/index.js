
const express = require('express');
const cors = require('cors')

const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
  origin: 'https://hng12-javascript.vercel.app/', 
  methods: ['GET'], 
};

app.use(cors(corsOptions));

app.use(express.json())

app.get('/', (req, res) => {
  const email = "imoudoh2025@gmail.com";
  const current_datetime = new Date().toISOString(); // ISO 8601 in UTC
  const github_url = "https://github.com/PearlPerfect/hng12-javascript";

  const response = {
    email,
    current_datetime,
    github_url,
  };

  res.status(200).json(response);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});