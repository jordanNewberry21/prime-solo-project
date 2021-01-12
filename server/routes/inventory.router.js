const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
  const sqlText = `SELECT * FROM "product";`;
  pool.query(sqlText).then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log('error retrieving inventory list from DB.....', error);
  });
});


router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
