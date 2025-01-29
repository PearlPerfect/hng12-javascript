
const express = require('express');


const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
  const email = "imoudoh2025@gmail.com";
  const current_datetime = new Date().toISOString(); // ISO 8601 in UTC
  const github_url = "https://github.com/PearlPerfect/hng12-javascript";

  const response = {
    email,
    current_datetime,
    github_url,
  };

  res.json(response);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});