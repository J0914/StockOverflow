'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tags', [
      {name: 'crypto', description: 'A cryptocurrency, crypto-currency, or crypto is a digital asset designed to work as a medium of exchange wherein individual coin ownership records are stored in a ledger existing in a form of a computerized database using strong cryptography to secure transaction records, to control the creation of additional coins, and to verify the transfer of coin ownership.', createdAt: new Date(), updatedAt: new Date()},
      {name: 'block-chain', description: 'A blockchain is a growing list of records, called blocks, that are linked together using cryptography.[1][2][3][4] Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data (generally represented as a Merkle tree). ', createdAt: new Date(), updatedAt: new Date()},
      {name: 'stock market', description: 'A stock market, equity market, or share market is the aggregation of buyers and sellers of stocks (also called shares), which represent ownership claims on businesses; these may include securities listed on a public stock exchange, as well as stock that is only traded privately, such as shares of private companies which are sold to investors through equity crowdfunding platforms.', createdAt: new Date(), updatedAt: new Date()},
      {name: 'data mining', description: 'Data mining is a process of extracting and discovering patterns in large data sets involving methods at the intersection of machine learning, statistics, and database systems.', createdAt: new Date(), updatedAt: new Date()},
      {name: 'mutual funds', description: 'A mutual fund is an open-end professionally managed investment fund that pools money from many investors to purchase securities. Mutual funds are "the largest proportion of equity of U.S. corporations."', createdAt: new Date(), updatedAt: new Date()},
      {name: 'other', description: 'Anything that doesn\'t fall into the other categories!', createdAt: new Date(), updatedAt: new Date()},
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
