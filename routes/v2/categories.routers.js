const express = require('express');
const faker = require('faker');
const router = express.Router();

router.get('/', (req, res) => {
  const categories = [];
  const { size } = req.query;
  const limit = size || 10;

  for (let index = 0; index < limit; index++) {
    categories.push({
      vehicle: faker.vehicle.vehicle(),
      model: faker.vehicle.model()
    });
  }
  res.json(categories);
})


module.exports = router;
