const router = require('express').Router();
const { Category, Product } = require('../../models');


router.get('/categories',  async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try{
    const categories = await Category.findAll({
      include: Product
    })
    res.json(categories);
    
  }
  catch (err) {
    console.log(err)
  }
  
});

router.get('/category/:id', async (req, res) => {
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


router.post('/category', async (req, res) => {
  try {
  // create a new category
  const newCategory = await Category.create(req.body);

  res.json(newCategory);
  }
  catch (err) {
    console.log(err)
  }

});

router.put('/category/:id', async (req, res) => {
  try{
  // update a category by its `id` value
  

  if(updatedCategory[0] > 0) {
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


router.delete('/category/:id', async (req, res) => {
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
