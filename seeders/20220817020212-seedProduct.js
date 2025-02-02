'use strict';
const fs = require("fs");

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     const products = JSON.parse(fs.readFileSync("./data/product.json", "utf-8"));
     products.forEach((product) => {
      product.createdAt = product.updatedAt = new Date();
     });
 
     await queryInterface.bulkInsert("Products", products);
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete("Products", {});
  }
};
