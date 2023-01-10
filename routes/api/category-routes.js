const router = require('express').Router();
const { Category, Product, Tag } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
  // find all categories
  try{
    const categorynData= await Category.findAll({
      include: [{model:Product },{model: Tag}],
    });
    res.status(200).json(categorynData);
  }catch(err){
    res.status(500).json(err);
  }
  // be sure to include its associated Products
});

router.get('/:id', async(req, res) => {
  // find one category by its `id` value
  try{
    const categorynData = await Category.findByPk(req.params.id,{
      include: [{model: Product},{model: Tag}],
    });
    if (!categorynData){
      res.status(404).json({message: 'No id'});
      return; 
    }
    
    res.status(200).json(categorynData);
    }catch(err){
      res.status(500).json(err);
    }
  
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
