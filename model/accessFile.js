const knex = require('knex');
const knexConfig = require('../knexfile.js');

db = knex(knexConfig.development);

module.exports = {
    getDishes,
    addDish,
    getDish,
    getRecipes,
    addRecipe
}

function getDishes() {
    return db('dishes');
  }
  
  function getDish(id) { // include list of related recipes
    return db('dishes').where("dishes.id",id)
}
  
  function addDish(dish) {
    return db('dishes')
      .insert(dish)
      .returning('id')
  }
  

  function getRecipes () {
    return db('recipes')
  }
  
  function addRecipe(recipe) {
      return db('recipes')
      .insert(recipe)
  }

  
