const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint


router.get('/', async (req, res) => {
  try {
    // find all tags
    // be sure to include its associated Product data
    const tags = await Tag.findAll({
      include: Product
    });
    res.json(tags)
  }
  catch (err) {
    console.log(err)
  }
});


router.get('/:id', async (req, res) => {
  try {
    // find a single tag by its `id`
    // be sure to include its associated Product data
    const tag = await Tag.findOne({
      where: { id: req.params.id },
      include: Product
    });

    if (tag) {
      req.json(tag);
    }
    else {
      res.json({ message: 'Tag not found' });
    }
  }
  catch (err) {
    console.log(err)
  }
});


router.post('/', async (req, res) => {
  try{
  // create a new tag
  const newTag = await Tag.create(req.body);

  res.json(newTag);
  }
  catch (err) {
    console.log(err);
  }
});

router.put('/:id', async (req, res) => {
  try{
  // update a tag's name by its `id` value
    const updatedTag = await Tag.update(
      {name: req.body.name},
      {where: { id: req.params.id}}
    );

    if(updatedTag[0] === 1) {
      res.json({ message: 'Tag updates successfully!'})
    }
    else {
      res.json({ message: 'Tag not found'})
    }
  }
  catch (err) {
    console.log(err);
  }
});

router.delete('/:id', async (req, res) => {
  try{
  // delete on tag by its `id` value
    const deletedTag = await Tag.destroy({
      where: {id: req.params.id }
    });

    if (deletedTag === 1 ) {
      res.json({ message: 'Tag deleted successfully!'})
    }
    else {
      res.json({ message: 'Tag not found'})
    }
  }
  catch (err) {
    console.log(err);
  }
});

module.exports = router;
