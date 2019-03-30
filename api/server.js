const express = require("express");
const helmet = require("helmet");

const server = express();
server.use(express.json());
server.use(helmet());

const db = require('../model/accessFile.js');



// End points for Dishes table
//GET Dishes
server.get('/api/dishes', (req, res) => {
    db.getDishes()
    .then(response => {
      //console.log(response)
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json(err)
    })
  })

  
server.get('/api/dishes/:id', (req, res) => {
    const id = req.params.id;
    db.getDish(id)
    .then(response => {
        if(response.length > 0){
            res.status(200).json(response)
        } else {
            res.status(404).json({ error: "There is no Dish with the provided id" });
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

//POST DISH
server.post('/api/dishes', async (req, res) => {
    db.addDish(req.body)
        .then(dish => {
          res.status(201).json(dish);
        })
    .catch(err => res.status(500).json(err));
  });

//GET recipes including the dish they belong to
server.get('/api/recipes', (req, res) => {
    db.getRecipes()
    .then(recipe =>{
      res.status(200).json(recipe);
    })
      .catch(err => res.status(500).json(err));
    });

      //POST recipe and return the id of the new recipe.

  server.post('/api/recipes', async (req, res) => {
    db.addRecipe(req.body)
        .then(recipe => {
          res.status(201).json(recipe);
        })
    .catch(err => res.status(500).json({Error: 'Please make sure you are have both name and dish_id and that name is not already exists' }));
  });
  

module.exports = server;
 