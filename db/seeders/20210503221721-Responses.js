'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Responses', [
      {questionId: 1, userId: 16, responseText: 'I know a lot about the stock market, follow my social media for free advice!', createdAt: new Date(), updatedAt: new Date()},
      {questionId: 1, userId: 2, responseText: 'Someone told me you should just sell everything and buy lots of crypto and then you will be rich, so i\'m following that advice!', createdAt: new Date(), updatedAt: new Date()},
      {questionId: 1, userId: 3, responseText: 'I read a book about cryptocurrency the otherday so im clearly an expert. Just listen to what I say and you will be rich in the next decade!', createdAt: new Date(), updatedAt: new Date()},
      {questionId: 1, userId: 4, responseText: 'I know a lot about the stock market, follow my social media for free advice!', createdAt: new Date(), updatedAt: new Date()},
      {questionId: 1, userId: 5, responseText: 'Someone told me you should just sell everything and buy lots of crypto and then you will be rich, so i\'m following that advice!', createdAt: new Date(), updatedAt: new Date()},
      {questionId: 2, userId: 6, responseText: 'I read a book about cryptocurrency the otherday so im clearly an expert. Just listen to what I say and you will be rich in the next decade!', createdAt: new Date(), updatedAt: new Date()},
      {questionId: 2, userId: 7, responseText: 'holy moly that\'s a great question, maybe you should try googling it??', createdAt: new Date(), updatedAt: new Date()},
      {questionId: 2, userId: 8, responseText: 'How do you not know what crypto is?', createdAt: new Date(), updatedAt: new Date()},
      {questionId: 2, userId: 9, responseText: 'I know a lot about the stock market, follow my social media for free advice!', createdAt: new Date(), updatedAt: new Date()},
      {questionId: 2, userId: 10, responseText: 'Someone told me you should just sell everything and buy lots of crypto and then you will be rich, so i\'m following that advice!', createdAt: new Date(), updatedAt: new Date()},
      {questionId: 3, userId: 11, responseText: 'I read a book about cryptocurrency the otherday so im clearly an expert. Just listen to what I say and you will be rich in the next decade!', createdAt: new Date(), updatedAt: new Date()},
      {questionId: 3, userId: 12, responseText: 'holy moly that\'s a great question, maybe you should try googling it??', createdAt: new Date(), updatedAt: new Date()},
      {questionId: 3, userId: 13, responseText: 'I know a lot about the stock market, follow my social media for free advice!', createdAt: new Date(), updatedAt: new Date()},
      {questionId: 3, userId: 14, responseText: 'Someone told me you should just sell everything and buy lots of crypto and then you will be rich, so i\'m following that advice!', createdAt: new Date(), updatedAt: new Date()},
      {questionId: 3, userId: 15, responseText: 'I read a book about cryptocurrency the otherday so im clearly an expert. Just listen to what I say and you will be rich in the next decade!', createdAt: new Date(), updatedAt: new Date()},
      {questionId: 3, userId: 16, responseText: 'holy moly that\'s a great question, maybe you should try googling it??', createdAt: new Date(), updatedAt: new Date()},
      {questionId: 4, userId: 15, responseText: 'I know a lot about the stock market, follow my social media for free advice!', createdAt: new Date(), updatedAt: new Date()},
      {questionId: 4, userId: 14, responseText: 'Someone told me you should just sell everything and buy lots of crypto and then you will be rich, so i\'m following that advice!', createdAt: new Date(), updatedAt: new Date()},
      {questionId: 4, userId: 13, responseText: 'I read a book about cryptocurrency the otherday so im clearly an expert. Just listen to what I say and you will be rich in the next decade!', createdAt: new Date(), updatedAt: new Date()},
      {questionId: 4, userId: 12, responseText: 'holy moly that\'s a great question, maybe you should try googling it??', createdAt: new Date(), updatedAt: new Date()},
      {questionId: 4, userId: 11, responseText: 'How do you not know what crypto is?', createdAt: new Date(), updatedAt: new Date()},
      {questionId: 5, userId: 10, responseText: 'I know a lot about the stock market, follow my social media for free advice!', createdAt: new Date(), updatedAt: new Date()},
      {questionId: 5, userId: 9, responseText: 'Someone told me you should just sell everything and buy lots of crypto and then you will be rich, so i\'m following that advice!', createdAt: new Date(), updatedAt: new Date()},
      {questionId: 5, userId: 8, responseText: 'I read a book about cryptocurrency the otherday so im clearly an expert. Just listen to what I say and you will be rich in the next decade!', createdAt: new Date(), updatedAt: new Date()},
      {questionId: 5, userId: 7, responseText: 'holy moly that\'s a great question, maybe you should try googling it??', createdAt: new Date(), updatedAt: new Date()},
      {questionId: 5, userId: 6, responseText: 'How do you not know what crypto is?', createdAt: new Date(), updatedAt: new Date()},
      {questionId: 6, userId: 5, responseText: 'I know a lot about the stock market, follow my social media for free advice!', createdAt: new Date(), updatedAt: new Date()},
      {questionId: 6, userId: 4, responseText: 'Someone told me you should just sell everything and buy lots of crypto and then you will be rich, so i\'m following that advice!', createdAt: new Date(), updatedAt: new Date()},
      {questionId: 6, userId: 2, responseText: 'How do you not know what crypto is?', createdAt: new Date(), updatedAt: new Date()},
      {questionId: 6, userId: 3, responseText: 'amirite lol', createdAt: new Date(), updatedAt: new Date()},
      {questionId: 6, userId: 4, responseText: 'you just code it, easyyyyy', createdAt: new Date(), updatedAt: new Date()},
      {questionId: 7, userId: 15, responseText: 'uhh.. ask Elon.', createdAt: new Date(), updatedAt: new Date()},
      {questionId: 7, userId: 4, responseText: 'uhh.. ask Elon.', createdAt: new Date(), updatedAt: new Date()},
      {questionId: 7, userId: 4, responseText: 'uhh.. ask Elon.', createdAt: new Date(), updatedAt: new Date()},
      {questionId: 7, userId: 4, responseText: 'uhh.. ask Elon.', createdAt: new Date(), updatedAt: new Date()},
      {questionId: 8, userId: 4, responseText: 'uhh.. ask Elon.', createdAt: new Date(), updatedAt: new Date()},
      {questionId: 8, userId: 4, responseText: 'uhh.. ask Elon.', createdAt: new Date(), updatedAt: new Date()},
      {questionId: 8, userId: 4, responseText: 'uhh.. ask Elon.', createdAt: new Date(), updatedAt: new Date()},
      {questionId: 8, userId: 4, responseText: 'uhh.. ask Elon.', createdAt: new Date(), updatedAt: new Date()},
      {questionId: 8, userId: 4, responseText: 'uhh.. ask Elon.', createdAt: new Date(), updatedAt: new Date()},
      {questionId: 8, userId: 4, responseText: 'uhh.. ask Elon.', createdAt: new Date(), updatedAt: new Date()},
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
