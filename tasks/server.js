const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Basic Auth
  if (process.env.NODE_ENV === 'production') {
    const auth = require('http-auth');
    const basic = auth.basic({
      realm: "Sparkbox Design Systems Survey",
      file: __dirname + "/../.htpasswd"
    });

  app.use(auth.connect(basic));
}

app.use('/', express.static('dist'));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
