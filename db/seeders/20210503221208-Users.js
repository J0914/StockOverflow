'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {userName: 'DemoUser', email: 'demo@StockOverflow.com', hashedPassword: '$2a$10$c1s4qxp/LYwOcpP/rZYyaOYQo0YKKAecUR09ZcYJZ.KcnybDWUTku', createdAt: new Date(), updatedAt: new Date() },
      {userName: 'Andrew.L', email: 'andrew@isAwesome.com', hashedPassword: '$2a$10$c1s4qxp/LYwOcpP/rZYyaOYQo0YKKAecUR09ZcYJZ.KcnybDWUTku', createdAt: new Date(), updatedAt: new Date() },
      {userName: 'Vic.T', email: 'vic@isdabest.com', hashedPassword: '$2a$10$c1s4qxp/LYwOcpP/rZYyaOYQo0YKKAecUR09ZcYJZ.KcnybDWUTku', createdAt: new Date(), updatedAt: new Date() },
      {userName: 'Jimson.M', email: 'Jimson@theAllKnowing.com', hashedPassword: '$2a$10$c1s4qxp/LYwOcpP/rZYyaOYQo0YKKAecUR09ZcYJZ.KcnybDWUTku', createdAt: new Date(), updatedAt: new Date() },
      {userName: 'Jordyn.S', email: 'Jordyn@alright.com', hashedPassword: '$2a$10$c1s4qxp/LYwOcpP/rZYyaOYQo0YKKAecUR09ZcYJZ.KcnybDWUTku', createdAt: new Date(), updatedAt: new Date() }
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
    return queryInterface.bulkDelete('Users', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
