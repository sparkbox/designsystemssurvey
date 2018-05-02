const express = require('express');
const enforceSSL = require('express-enforces-ssl');
const compression = require('compression');
const mime = require('mime');

const app = express();
const PORT = process.env.PORT || 3000;

if (process.env.ENFORCE_SSL) {
  app.enable('trust proxy');
  app.use(enforceSSL());
}

app.use(compression()); //gzip

app.use('/', setHeaders, express.static('dist'));

//404 redirects to home page
app.use(function (req, res, next) {
  res.status(404).redirect('/');
});

// Expires Headers
function setHeaders(req, res, next) {
  if (process.env.NODE_ENV === 'production') {
    const cacheControl = {
      'image/png': 24*60*60, //24 hours
      'image/svg+xml': 24*60*60, //24 hours
      'image/jpg': 24*60*60, //24 hours
      'image/jpeg': 24*60*60, //24 hours
      'text/css': 24*60*60, //24 hours
      'application/javascript': 24*60*60, //24 hours
      'text/html': 0 //never
    }

    var mimeType = mime.lookup(req.path);

    var milliseconds = cacheControl[mimeType] || 0;
    var header = 'public, max-age=' + milliseconds.toString();

    res.setHeader('Cache-Control', header);
  }

  next();
}

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
