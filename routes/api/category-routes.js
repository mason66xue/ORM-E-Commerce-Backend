const router = require('express').Router();
const { json } = require('sequelize/types');
const { Category, Product, Tag } = require('../../models');
const { restore } = require('../../models/Product');

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
      include: [{model: Product}, {model: Tag}],
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

router.post('/', async(req, res) => {
 // create a new category
 try{
  const categorynData = await Category.create(req.body);
  res.status(200),json(err);
 }catch (err){
  res.status(400).json(err);
 }
});

router.put('/:id', async(req, res) => {
  // update a category by its `id` value
  try{
  const categorynData =await Category.findByPk(req.params.id);
  res.status(200).json(categorynData);
  } catch (err){
    res.status(400).json(err);
  }
});

router.delete('/:id', async(req, res) => {
  // delete a category by its `id` value
try{
  const categorynData = await Category.update(req.body,{
    where:{
      id: req.params.id,
    },
    individualHooks: true
  });
  if (!categorynData[0]){
    res.status (404).json({message:'No id'});
    return;
  }
  res.status (200).json(categorynData);
} catch (err){
  res.status(500).json(err);
}
});

module.exports = router;
