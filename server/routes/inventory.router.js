const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
  const sqlText = `SELECT * FROM "product";`;
  pool.query(sqlText).then(result => {
    res.send(result.rows);
  }).catch((error) => {
    console.log('error retrieving inventory list from DB.....', error);
  });
});


router.post('/', (req, res) => {
  console.log(req.body);
  const sqlText = `INSERT INTO "product" ("name", "description", "price", "image") 
                  VALUES ($1, $2, $3, $4);`;
  pool.query(sqlText, [req.body.name, req.body.description, req.body.price, req.body.imgUrl])
      .then(result => {
        res.sendStatus(201);
      }).catch(err => {
        console.log('error adding item to inventory......', error);
        res.sendStatus(500);
      })
});

module.exports = router;
