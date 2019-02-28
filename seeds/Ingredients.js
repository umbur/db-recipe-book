exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { name: "Ground beef" },
        { name: "Ground meat" },
        { name: "Cheese" },
        { name: "Tomato" },
        { name: "Chocolate Chips" },
        { name: "Chocolate" },
        { name: "Vanilla" },
        { name: "Milk" },
        { name: "Onions" },
        { name: "Star anise" },
        { name: "Beef bone broth" },
        { name: "Chicken bone broth" },
        { name: "Rice noodles" }
      ]);
    });
};