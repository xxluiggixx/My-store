const express = require('express');
const faker = require('faker');
const router = express.Router();


router.get('/', (req, res) => {
  const user =[];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    user.push({
      name: faker.name.firstName(),
      lastname: faker.name.lastName(),
      job: faker.name.jobTitle()
    })
  }
  res.json(user);
});


module.exports = router;
