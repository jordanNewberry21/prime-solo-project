const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => { // get all items route
  const sqlText = `SELECT * FROM "product";`;
  pool.query(sqlText).then(result => {
    res.send(result.rows);
  }).catch((error) => {
    console.log('error retrieving inventory list from DB.....', error);
  });
});

router.get('/:id', (req, res) => { // get item details route
  console.log('req.params......', req.params);
  const sqlText = `SELECT * FROM "product"
                  WHERE id=$1;`;
  let itemId = req.params.id;
  pool.query(sqlText, [itemId])
      .then((result) => {
        res.send(result.rows);
      }).catch((error) => {
        console.log('error retrieving movie details', error);
      });
})


router.post('/', (req, res) => {
  console.log('req.body......', req.body); // checking post item
  let item = req.body
  const sqlText = `INSERT INTO "product" ("name", "description", "price", "image") 
                  VALUES ($1, $2, $3, $4);`; // sql query with data sanitization
  pool.query(sqlText, [item.name, item.description, item.price, item.url])
      .then(result => {
        res.sendStatus(201);
      }).catch(error => {
        console.log('error adding item to inventory......', error);
        res.sendStatus(500);
      })
});

router.put('/:id', (req, res) => {
  console.log('req.params......', req.params);
  console.log('req.body......', req.body); // checking post item to be updated
  let id = req.params.id;
  let itemToUpdate = req.body;
  const sqlText = `UPDATE "product"
                  SET "name"=$1, "description"=$2, "price"=$3, "image"=$4
                  WHERE id=$5;`;
  pool.query(sqlText, [itemToUpdate.name, itemToUpdate.description, itemToUpdate.price, itemToUpdate.url, id])
      .then(result => {
        res.sendStatus(203);
      }).catch(error => {
        console.log('error updating item in inventory........', error);
        res.sendStatus(500);
      })

});

router.delete('/:id', (req, res) => {
  console.log('req.params......', req.params);
  let id = req.params.id;
  const sqlText = `DELETE FROM "product" WHERE id=$1;`;
  pool.query(sqlText, [id])
      .then(result => {
        res.sendStatus(200);
      }).catch(error => {
        console.log('error deleting item from inventory........', error);
        res.sendStatus(500);
      })

  res.sendStatus(200);
});

module.exports = router;
