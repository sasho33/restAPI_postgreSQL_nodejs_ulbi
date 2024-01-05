const express = require('express');
const userRouter = require('./routes/user.routes');

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World Nodemon');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
