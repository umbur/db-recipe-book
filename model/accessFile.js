const knex = require("knex");
const knexConfig = require("./knexfile.js");
const db = require('../knexfile.js')


function getDishes() {
    return db('dishes')
}

function addDish(dish) {
    return db('dishes')
    .insert(dish)
    .then(id => id[0])
}

function getDish(id) {
    return db(dishes)
    .where('id', id)
}

function getRecipes() {
    return db('recipes')
}

function addRecipe(recipe) {
    return db('recipes')
    .insert(recipe)
    .then(id => id[0])
}

module.exports = {
    getDishes,
    addDish,
    getDish,
    getRecipes,
    addRecipe
}