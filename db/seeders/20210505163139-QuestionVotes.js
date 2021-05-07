'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('QuestionVotes', [
      {userId: 2, questionId: 1, score: 1, createdAt: new Date(), updatedAt: new Date()},
      {userId: 3, questionId: 1, score: -1, createdAt: new Date(), updatedAt: new Date()},
      {userId: 4, questionId: 1, score: 1, createdAt: new Date(), updatedAt: new Date()},
      {userId: 5, questionId: 1, score: -1, createdAt: new Date(), updatedAt: new Date()},
      {userId: 6, questionId: 2, score: 1, createdAt: new Date(), updatedAt: new Date()},
      {userId: 7, questionId: 2, score: 1, createdAt: new Date(), updatedAt: new Date()},
      {userId: 8, questionId: 3, score: 1, createdAt: new Date(), updatedAt: new Date()},
      {userId: 9, questionId: 3, score: -1, createdAt: new Date(), updatedAt: new Date()},
      {userId: 10, questionId: 3, score: 1, createdAt: new Date(), updatedAt: new Date()},
      {userId: 11, questionId: 3, score: 1, createdAt: new Date(), updatedAt: new Date()},
      {userId: 12, questionId: 4, score: -1, createdAt: new Date(), updatedAt: new Date()},
      {userId: 13, questionId: 4, score: 1, createdAt: new Date(), updatedAt: new Date()},
      {userId: 14, questionId: 4, score: -1, createdAt: new Date(), updatedAt: new Date()},
      {userId: 15, questionId: 5, score: 1, createdAt: new Date(), updatedAt: new Date()},
      {userId: 16, questionId: 5, score: 1, createdAt: new Date(), updatedAt: new Date()},
      {userId: 15, questionId: 5, score: 1, createdAt: new Date(), updatedAt: new Date()},
      {userId: 14, questionId: 5, score: -1, createdAt: new Date(), updatedAt: new Date()},
      {userId: 13, questionId: 6, score: 1, createdAt: new Date(), updatedAt: new Date()},
      {userId: 12, questionId: 6, score: 1, createdAt: new Date(), updatedAt: new Date()},
      {userId: 11, questionId: 6, score: -1, createdAt: new Date(), updatedAt: new Date()},
      {userId: 10, questionId: 7, score: 1, createdAt: new Date(), updatedAt: new Date()},
      {userId: 9, questionId: 7, score: 1, createdAt: new Date(), updatedAt: new Date()},
      {userId: 8, questionId: 7, score: -1, createdAt: new Date(), updatedAt: new Date()},
      {userId: 7, questionId: 7, score: 1, createdAt: new Date(), updatedAt: new Date()},
      {userId: 6, questionId: 7, score: 1, createdAt: new Date(), updatedAt: new Date()},
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
