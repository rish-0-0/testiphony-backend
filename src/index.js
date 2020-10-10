const express = require('express');
const PORT = process.env.PORT || 5555;
const cors = require('cors');
const app = express();
const router = require('./router');

app.use(cors());

app.use('/api/v1',router);
app.use((_, res) => {
  res.status(404).send({errorMessage: "404 Route Not Found"});
});
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));