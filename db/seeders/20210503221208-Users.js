'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {userName: 'Demo', email: 'demo@demo.com', hashedPassword: '$2a$10$c1s4qxp/LYwOcpP/rZYyaOYQo0YKKAecUR09ZcYJZ.KcnybDWUTku', createdAt: new Date(), updatedAt: new Date() },
      {userName: 'Andrew.L', email: 'andrew@isAwesome.com', hashedPassword: '$2a$10$c1s4qxp/LYwOcpP/rZYyaOYQo0YKKAecUR09ZcYJZ.KcnybDWUTku', createdAt: new Date(), updatedAt: new Date() },
      {userName: 'Vic.T', email: 'vic@isdabest.com', hashedPassword: '$2a$10$c1s4qxp/LYwOcpP/rZYyaOYQo0YKKAecUR09ZcYJZ.KcnybDWUTku', createdAt: new Date(), updatedAt: new Date() },
      {userName: 'Jimson.M', email: 'jimson@theAllKnowing.com', hashedPassword: '$2a$10$c1s4qxp/LYwOcpP/rZYyaOYQo0YKKAecUR09ZcYJZ.KcnybDWUTku', createdAt: new Date(), updatedAt: new Date() },
      {userName: 'Jordyn.S', email: 'jordyn@alright.com', hashedPassword: '$2a$10$c1s4qxp/LYwOcpP/rZYyaOYQo0YKKAecUR09ZcYJZ.KcnybDWUTku', createdAt: new Date(), updatedAt: new Date() },
      {userName: 'Zach.Y', email: 'zach@attack.com', hashedPassword: '$2a$10$c1s4qxp/LYwOcpP/rZYyaOYQo0YKKAecUR09ZcYJZ.KcnybDWUTku', createdAt: new Date(), updatedAt: new Date() },
      {userName: 'Bill.A', email: 'bill@nyethescienceguy.com', hashedPassword: '$2a$10$c1s4qxp/LYwOcpP/rZYyaOYQo0YKKAecUR09ZcYJZ.KcnybDWUTku', createdAt: new Date(), updatedAt: new Date() },
      {userName: 'Sylvia.O', email: 'Sylvia@isamazing.com', hashedPassword: '$2a$10$c1s4qxp/LYwOcpP/rZYyaOYQo0YKKAecUR09ZcYJZ.KcnybDWUTku', createdAt: new Date(), updatedAt: new Date() },
      {userName: 'Nate.B', email: 'Nate@isagenius.com', hashedPassword: '$2a$10$c1s4qxp/LYwOcpP/rZYyaOYQo0YKKAecUR09ZcYJZ.KcnybDWUTku', createdAt: new Date(), updatedAt: new Date() },
      {userName: 'Lauren.G', email: 'Laren@issosweet.com', hashedPassword: '$2a$10$c1s4qxp/LYwOcpP/rZYyaOYQo0YKKAecUR09ZcYJZ.KcnybDWUTku', createdAt: new Date(), updatedAt: new Date() },
      {userName: 'John.S', email: 'john@isanerd.com', hashedPassword: '$2a$10$c1s4qxp/LYwOcpP/rZYyaOYQo0YKKAecUR09ZcYJZ.KcnybDWUTku', createdAt: new Date(), updatedAt: new Date() },
      {userName: 'Jacob.L', email: 'jacob@thedeveloper.com', hashedPassword: '$2a$10$c1s4qxp/LYwOcpP/rZYyaOYQo0YKKAecUR09ZcYJZ.KcnybDWUTku', createdAt: new Date(), updatedAt: new Date() },
      {userName: 'Eb.T', email: 'eb@hasaquestion.com', hashedPassword: '$2a$10$c1s4qxp/LYwOcpP/rZYyaOYQo0YKKAecUR09ZcYJZ.KcnybDWUTku', createdAt: new Date(), updatedAt: new Date() },
      {userName: 'Chris.R', email: 'chris@hasacutedog.com', hashedPassword: '$2a$10$c1s4qxp/LYwOcpP/rZYyaOYQo0YKKAecUR09ZcYJZ.KcnybDWUTku', createdAt: new Date(), updatedAt: new Date() },
      {userName: 'Ananya.H', email: 'ananya@lovestech.com', hashedPassword: '$2a$10$c1s4qxp/LYwOcpP/rZYyaOYQo0YKKAecUR09ZcYJZ.KcnybDWUTku', createdAt: new Date(), updatedAt: new Date() },
      {userName: 'Amber.B', email: 'amber@isamermaid.com', hashedPassword: '$2a$10$c1s4qxp/LYwOcpP/rZYyaOYQo0YKKAecUR09ZcYJZ.KcnybDWUTku', createdAt: new Date(), updatedAt: new Date() },
      {userName: 'Jefferson.G', email: 'jefferson@dbmigrate.com', hashedPassword: '$2a$10$c1s4qxp/LYwOcpP/rZYyaOYQo0YKKAecUR09ZcYJZ.KcnybDWUTku', createdAt: new Date(), updatedAt: new Date() },
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
