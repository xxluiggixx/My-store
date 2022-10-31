const express = require('express')
const { faker } = require('@faker-js/faker');

const router = express.Router();


router.get("/", (req, res) => {
  const products = []
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(),10),
      description: faker.commerce.productDescription(),
      image: faker.image.imageUrl()
    })

  }
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Soy un filtro')

})
router.get('/:id', (req, res) => {
  const { id } = req.params;
  //console.log(req)
  res.json({
    id,
    name: faker.commerce.productName(),
    price: parseInt(faker.commerce.price(),10),
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl()
  });
});

router.post('/',(req, res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body
  })
})


module.exports = router;
