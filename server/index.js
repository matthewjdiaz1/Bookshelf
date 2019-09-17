const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./queries.js');
const path = require('path');
const port = 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/../client/public')));

app.get('/api/bookshelf/:author', db.getBooksByAuthor);

app.listen(port, () => console.log(`App listening on port ${port}.`));
