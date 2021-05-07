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
