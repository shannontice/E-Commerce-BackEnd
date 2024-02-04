const router = require('express').Router();
const { Category, Product } = require('../../models');


router.get('/',  async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try{
    const categories = await Category.findAll({
      include: Product
    })
    res.json(users);
    
  }
  catch (err) {
    console.log(err)
  }
  
});

router.get('/:id', async (req, res) => {
  try{
  // find one category by its `id` value
  const category = await Category.findOne({
    where: {
      id: req.params.id
    },
    include: Product
  });
  if(category) {
    res.json(category);
  }
  else{
    res.json({message: 'Category not found,'})
  }
  }
  catch (err) {
    console.log(err)
  }
});


router.post('/', async (req, res) => {
  try {
  // create a new category
  const newCategory = await Category.create(req.body);

  res.json(newCategory);
  }
  catch (err) {
    console.log(err)
  }

});

router.put('/:id', async (req, res) => {
  try{
  // update a category by its `id` value
  const updatedCategory = await Category.update(req.body, {
    where: {id: req.params.id}
  });

  if(updatedCategory[0]===1) {
    res.json({
      message: 'Category updates successfully!'
    })
  }
  else {
    res.json({
      message: 'Category not found'
    })
  }
  }
  catch (err) {
    console.log(err)
  }
});

router.delete('/:id', async (req, res) => {
  try{
  // delete a category by its `id` value
  const deletedCategory = await Category.destroy({
    where: { id: req.params.id}
  });

  if(deletedCategory === 1) {
    res.json({ message: 'Category deleted successfully!'})
  }
  else{
    res.json({message: 'Category not found'})
  }
  }
  catch (err) {
    console.log(err)
  }
});

module.exports = router;
