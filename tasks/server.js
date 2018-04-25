const express = require('express');
const enforceSSL = require('express-enforces-ssl');
const compression = require('compression');
const auth = require('marshmallows');

const app = express();
const PORT = process.env.PORT || 3000;

if (process.env.ENFORCE_SSL) {
  app.enable('trust proxy');
  app.use(enforceSSL());
}

app.use(compression()); //gzip

// Basic Auth
app.use('/', auth, express.static('dist'));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
