exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { name: "Hamburger", dish_id: 1 },
        { name: "Cheeseburger", dish_id: 1 },
        { name: "Beef broth Pho", dish_id: 3 },
        { name: "Chicken broth Pho", dish_id: 3 },
        { name: "Chocolate Ice Cream", dish_id: 2 },
        { name: "Vanilla Ice Cream", dish_id: 2 }
      ]);
    });
};