import express from 'express';
import docs from './api/docs.js';
const app = express();
const port = 3000;

app.use('/', docs)
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
