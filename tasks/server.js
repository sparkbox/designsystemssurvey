const express = require('express');
const enforceSSL = require('express-enforces-ssl');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 3000;

if (process.env.ENFORCE_SSL) {
  app.enable('trust proxy');
  app.use(enforceSSL());
}

app.use(compression()); //gzip

app.use('/', express.static('dist'));

//404 redirects to home page
app.use(function (req, res, next) {
  res.status(404).redirect('/');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
