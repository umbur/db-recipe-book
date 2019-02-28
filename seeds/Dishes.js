
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').del()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        { name: "Hamburger", Id:1 },
        { name: "Ice Cream", Id:2 },
        { name: "Pho", Id:3 }
      ]);
    });
};
