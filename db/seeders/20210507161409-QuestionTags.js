'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('QuestionTags', [
      {questionId: 1, tagId: 1, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 1, tagId: 2, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 1, tagId: 3, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 1, tagId: 4, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 2, tagId: 6, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 2, tagId: 5, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 2, tagId: 4, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 2, tagId: 3, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 3, tagId: 2, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 3, tagId: 1, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 3, tagId: 5, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 3, tagId: 4, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 3, tagId: 3, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 5, tagId: 1, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 5, tagId: 2, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 5, tagId: 3, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 5, tagId: 4, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 6, tagId: 5, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 6, tagId: 4, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 6, tagId: 3, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 6, tagId: 2, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 6, tagId: 1, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 7, tagId: 6, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 7, tagId: 5, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 7, tagId: 4, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 7, tagId: 3, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 7, tagId: 2, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 4, tagId: 1, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 4, tagId: 2, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 4, tagId: 3, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 4, tagId: 4, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 8, tagId: 6, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 8, tagId: 5, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 8, tagId: 4, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 8, tagId: 3, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 9, tagId: 2, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 9, tagId: 1, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 9, tagId: 5, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 9, tagId: 4, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 9, tagId: 3, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 10, tagId: 1, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 10, tagId: 2, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 10, tagId: 3, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 10, tagId: 4, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 11, tagId: 5, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 11, tagId: 4, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 11, tagId: 3, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 11, tagId: 2, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 11, tagId: 1, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 12, tagId: 6, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 12, tagId: 5, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 12, tagId: 4, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 12, tagId: 3, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 12, tagId: 2, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 13, tagId: 1, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 13, tagId: 2, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 13, tagId: 3, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 13, tagId: 4, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 15, tagId: 6, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 15, tagId: 5, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 15, tagId: 4, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 15, tagId: 3, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 14, tagId: 2, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 14, tagId: 1, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 14, tagId: 5, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 14, tagId: 4, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 14, tagId: 3, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 16, tagId: 1, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 16, tagId: 2, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 16, tagId: 3, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 16, tagId: 4, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 17, tagId: 5, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 17, tagId: 4, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 17, tagId: 3, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 17, tagId: 2, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 17, tagId: 1, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 18, tagId: 6, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 18, tagId: 5, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 18, tagId: 4, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 18, tagId: 3, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 18, tagId: 2, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 19, tagId: 1, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 19, tagId: 2, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 19, tagId: 3, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 19, tagId: 4, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 20, tagId: 6, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 20, tagId: 5, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 20, tagId: 4, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 20, tagId: 3, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 21, tagId: 2, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 21, tagId: 1, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 21, tagId: 5, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 21, tagId: 4, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 21, tagId: 3, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 22, tagId: 1, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 22, tagId: 2, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 22, tagId: 3, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 22, tagId: 4, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 23, tagId: 5, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 23, tagId: 4, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 23, tagId: 3, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 23, tagId: 2, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 23, tagId: 1, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 24, tagId: 6, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 24, tagId: 5, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 24, tagId: 4, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 24, tagId: 3, createdAt: new Date(), updatedAt: new Date()},
      {questionId: 24, tagId: 2, createdAt: new Date(), updatedAt: new Date()},
    ], {});
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
    return queryInterface.bulkDelete('QuestionTags', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
