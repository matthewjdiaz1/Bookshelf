const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'carforce',
  host: 'localhost',
  database: 'bookshelf',
  password: '',
  port: 5432,
});

const getBooksByAuthor = (req, res) => {
  const author = req.params.author;
  console.log('author:', author);
  // console.log(req.params);
  // const authorTest = 'Tim';
  pool.query(`SELECT * FROM books where author ILIKE '%${author}%'`, (error, results) => {
    if (error) {
      throw error;
    }
    // console.log(results);
    res.status(200).json(results.rows);
  });
}

module.exports = {
  getBooksByAuthor,
}