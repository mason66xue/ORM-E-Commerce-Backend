// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const { belongsToMany } = require('./Product');

// Products belongsTo Category
Product.hasOne(Category,{
primaryKey: 'product_id',
onDelete: 'CASCADE'

});

// Categories have many Products
Category.hasMany(Product,{
  primaryKey: 'product_id',
  onDelete:'CASCADE',

});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag,{
  primaryKey: 'tag_id',
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product,{
  primaryKey: 'tag_id',
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
