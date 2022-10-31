const express = require('express');
const CategoriesService = require('../../service/categories.service');

const router = express.Router();
const service = new CategoriesService();

router.get('/', (req, res) => {
  const categories = service.find();
  res.json(categories);
})

router.get('/:id', (req, res) =>{
  try {
    const { id } = req.params;
    const categorie = service.findOne(id);
    res.json(categorie);

  } catch (error) {
    res.status(404).json({
      message: error.message
  })
}
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const categorie = service.delete(id);
  res.json(categorie)
})
  router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const categorie = service.update(id,body);
    res.json(categorie);
  })
module.exports = router;
