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
  pool.query(sqlText, [req.body.name, req.body.description, req.body.price, req.body.url])
      .then(result => {
        res.sendStatus(201);
      }).catch(error => {
        console.log('error adding item to inventory......', error);
        res.sendStatus(500);
      })
});

router.put('/:id', (req, res) => {
  console.log('req.params.id.....', req.params.id);
  console.log('req.params......', req.params);

  res.sendStatus(200);
});

router.delete('/:id', (req, res) => {
  console.log('req.params.id.....', req.params.id);
  console.log('req.params......', req.params);

  res.sendStatus(200);
});

module.exports = router;
