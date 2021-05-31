const app = require('./config/express');
import { run } from './config/kafka';
const port = process.env.PORT || 4040;

app.listen(port, async () => {
  console.log(`Speaker app listening at http://localhost:${port}`);
  await run();
});