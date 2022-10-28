const express = require('express')
const routerApiV1 = require('./routes/v1')
const routerApiV2 = require('./routes/v2')

const app = express()
const port = 3000

app.use(express.json());
routerApiV1(app);
routerApiV2(app);

app.listen(port, () => {
  console.log(`My port: ${port}`);
})
