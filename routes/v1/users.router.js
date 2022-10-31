const express = require('express');
const UsersService = require('../../service/user.service');

const router = express.Router();
const service = new UsersService();


router.get('/', async (req, res) => {
  const users = await service.find()
  res.json(users);
});

router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const user = service.findOne(id);
    res.json(user);

  } catch (error) {
    res.json({
      message: error.message
    })
  }
})

router.patch('/:id',(req, res) => {
  const { id } = req.params;
  const body = req.body;
  const user = service.update(id, body)
  res.json(user)
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const user =  service.delete(id);
  res.json(user)
})



module.exports = router;

