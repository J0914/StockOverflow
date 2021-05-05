'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
      return queryInterface.bulkInsert('Questions', [
        {authorId: 1, questionTitle: 'I dont know what crypto is', questionText: 'What the heck is crypto?', createdAt: new Date(), updatedAt: new Date()},
        {authorId: 2, questionTitle: 'blockChains are awesome!', questionText: 'Who doesn\'t love blockChains??', createdAt: new Date(), updatedAt: new Date()},
        {authorId: 3, questionTitle: 'I want to code some moneeyyy', questionText: 'How do I make my own cryptocurrency?', createdAt: new Date(), updatedAt: new Date()},
        {authorId: 4, questionTitle: 'I wanna learn about cryptocurrency!', questionText: 'How do I even get started learning about crypto?', createdAt: new Date(), updatedAt: new Date()}
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
      return queryInterface.bulkDelete('Questions', null, {});
  }
};
