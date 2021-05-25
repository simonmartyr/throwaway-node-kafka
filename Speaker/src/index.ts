const app = require('./config/express');
const producer = require('./config/kafka');
const port = process.env.PORT || 4040;

app.listen(port, async () => {
  console.log(`Speaker app listening at http://localhost:${port}`);
  await producer.connect();
});