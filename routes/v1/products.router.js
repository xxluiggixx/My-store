const express = require('express')
const ProductsService = require('../../service/products.service')

const router = express.Router();
const service = new ProductsService()


router.get("/", async (req, res) => {
  const products = await service.find()
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Soy un filtro')

})
router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const product = service.findOne(id);
    res.json(product);

  } catch (error) {
    res.json({
      message: error.message
    })
  }
});

router.post('/',(req, res) => {
  const body = req.body;
  const newProduct = service.create(body);
  res.status(201).json(newProduct)
})

router.put('/:id',async (req, res)=>{
  const { id } = req.params;
  const body = req.body;
  const product = await service.update(id,body);
  res.json({
    message: 'update',
    data: product
  })
})

router.patch('/:id',(req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = service.update(id, body)
  res.json(product)
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const product =  service.delete(id);
  res.json(product)
})




module.exports = router;
