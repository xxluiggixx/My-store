const express = require('express')
const faker = require('faker')

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
  if (id !== 999 ){
    res.status(404).json({
      message: "Not Found"
    })
  }else {

    res.json({
      id,
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(),10),
      description: faker.commerce.productDescription(),
      image: faker.image.imageUrl()
    });
  }
});

router.post('/',(req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body
  })
})

router.patch('/:id',(req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id,
  })
})

router.delete('/:id',(req, res) => {
  const { id } = req.params;
  res.json({
    message: 'delete',
    id,
  })
})




module.exports = router;
