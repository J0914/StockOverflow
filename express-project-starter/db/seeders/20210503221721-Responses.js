'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Responses', [
      {questionId: 1, userId: 2, responseText: 'How do you not know what crypto is?', createdAt: new Date(), updatedAt: new Date()},
      {questionId: 2, userId: 3, responseText: 'amirite lol', createdAt: new Date(), updatedAt: new Date()},
      {questionId: 3, userId: 4, responseText: 'you just code it, easyyyyy', createdAt: new Date(), updatedAt: new Date()},
      {questionId: 4, userId: 1, responseText: 'uhh.. ask Elon.', createdAt: new Date(), updatedAt: new Date()}
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
    return queryInterface.bulkDelete('Responses', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
