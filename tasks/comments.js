const fs = require('fs');
const regex = RegExp('<html>');
const comment = '<!--[if lt IE 7]><html class="no-js lt-ie10 lt-ie9 lt-ie8 lt-ie7" lang="en"><![endif]--><!--[if IE 7]><html class="no-js lt-ie10 lt-ie9 lt-ie8" lang="en"><![endif]--><!--[if IE 8]><html class="no-js lt-ie10 lt-ie9" lang="en"><![endif]--><!--[if IE 9]><html class="no-js lt-ie10" lang="en"><![endif]--><!--[if gt IE 9]><!--> <html class="no-js" lang="en"> <!--<![endif]-->';

const addCommentsToIndex = (newFile, originalFile) => {
  fs.readFile(originalFile, 'utf8', (err, data) => {
    if (err) throw err;
    const htmlSearch = regex.exec(data);
    const htmlIndex = htmlSearch.index;
    const htmlToReplace = data.substring(htmlIndex);
    const htmlWithComments = data.replace(htmlSearch, comment);

    fs.writeFile (originalFile, htmlWithComments, (err, data) => {
      if (err) throw err;
      return 0;
    });
  });
}

addCommentsToIndex('./public/index.html', './public/index.html');
