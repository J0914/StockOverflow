'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tags', [
      {name: 'crypto', createdAt: new Date(), updatedAt: new Date()},
      {name: 'block-chain', createdAt: new Date(), updatedAt: new Date()},
      {name: 'stock market', createdAt: new Date(), updatedAt: new Date()},
      {name: 'data mining', createdAt: new Date(), updatedAt: new Date()},
      {name: 'mutual funds', createdAt: new Date(), updatedAt: new Date()},
      {name: 'other', createdAt: new Date(), updatedAt: new Date()},
    ])
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tags', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
