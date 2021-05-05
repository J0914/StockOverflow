'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('QuestionVotes', [
      {userId: 1, questionId: 1, score: 10, createdAt: new Date(), updatedAt: new Date()},
      {userId: 2, questionId: 2, score: 15, createdAt: new Date(), updatedAt: new Date()},
      {userId: 3, questionId: 3, score: 20, createdAt: new Date(), updatedAt: new Date()},
      {userId: 4, questionId: 4, score: 25, createdAt: new Date(), updatedAt: new Date()}
    ]);
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
    return queryInterface.bulkDelete('QuestionVotes', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
