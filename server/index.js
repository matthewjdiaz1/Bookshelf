const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/api/bookshelf', function (req, res) {
  const book = req.params.author
  book.fetch(chord, function (err, data) {
    if (err) {
      console.log('server data', data);
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(port, () => console.log(`App listening on port ${port}.`));
