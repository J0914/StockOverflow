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
        {authorId: 16, questionTitle: 'source of historical stock data', questionText: 'I\'m trying to make a stock market simulator (perhaps eventually growing into a predicting AI), but I\'m having trouble finding data to use. I\'m looking for a (hopefully free) source of historical stock market data.', createdAt: new Date(), updatedAt: new Date()},
        {authorId: 6, questionTitle: 'How can I get stock quotes using Google Finance API?', questionText: 'I\'m looking for access to financial data from Google services.', createdAt: new Date(), updatedAt: new Date()},
        {authorId: 15, questionTitle: 'I dont know what crypto is', questionText: 'What the heck is crypto?', createdAt: new Date(), updatedAt: new Date()},
        {authorId: 13, questionTitle: 'Stock portfolio database design to support stock split/merge', questionText: 'In my current design, I don\'t have an extra table for storing the stock symbol. I generate a list of stock symbols (using some stock api) for the user to pick when they try to create a new transaction record, and I think that this approach may cause some problem when there is stock split/merge, because I may not be able to retrieve the stock price again using the same symbol. I would like to know how I should modify my table, in order to support the stock split/merge case?', createdAt: new Date(), updatedAt: new Date()},
        {authorId: 14, questionTitle: 'How to fetch stock price from Australia Stock Exchange', questionText: 'How can I fetch a stock\'s price from the Australian Stock Exchange (ASX): www.asx.com.au', createdAt: new Date(), updatedAt: new Date()},
        {authorId: 7, questionTitle: 'in stock trading how to masure quantity of stock', questionText: 'I am working on stock market analysis and prediction using machine learning methods, especially with reinforcement learning. I am trying to predict short, long and flat. (buy, hold, sell) . (any suggestion or material is appreciated), currently, I am giving historical data into my agent and agent predict buy, sell or hold signal. my question is how to measure stock quantity. e.g. if my model gives a buy signal, how to measure how much stock I should buy.', createdAt: new Date(), updatedAt: new Date()},
        {authorId: 13, questionTitle: 'Troubled Getting Cryptocurrency Data API in R', questionText: 'I really want to get updated historical data of cryptocurrency, my goal is to predict the thing with some timeseries analysis, but with these packages I kept getting error message, for coinmarketcapr it\'s understandable because apparently my API subscription plan doesn\'t cover the historical data', createdAt: new Date(), updatedAt: new Date()},
        {authorId: 2, questionTitle: 'Finding correlation between cryptocurrency data', questionText: 'I want to find the correlation between high of two currencies. For example Correlation between High of Bitcoin and Ethereum. How it can be done in pandas ?', createdAt: new Date(), updatedAt: new Date()},
        {authorId: 12, questionTitle: 'Cryptocurrency Malware on Centos 7', questionText: 'My VPS server that hosted in Google Cloud regullary attacked by cryptocurrency Malware. It running from "/tmp/init" and taking all CPU resources. What I do is kill the process and remove /tmp/init file. I dont know how, but after several days, /tmp/init will appear again and running.', createdAt: new Date(), updatedAt: new Date()},
        {authorId: 3, questionTitle: 'Cryptocurrency wallet create by programming and validate it?', questionText: 'I want to create my own cryptocurrency wallet. I know about private and public key concept which is used in the wallet but I could not understand how my wallet verified other public address? How my … wallet verified other users? How coinomi manage their wallet to store all kind of currency? Can anyone explain the full logic of wallet?', createdAt: new Date(), updatedAt: new Date()},
        {authorId: 11, questionTitle: 'How can I create a cryptocurrency mining software?', questionText: 'I am tring to create a cryptocurrency mining software, I want to challange myself. I understand the main concept of it, but I don’t know where to start. Is there any API I should use? And how do I connect to a mining pool? It\'s worth mentioning I prefer creating miners for altcoins and not only bitcoin.', createdAt: new Date(), updatedAt: new Date()},
        {authorId: 6, questionTitle: 'I just bought some stocks', questionText: 'I’ve bought a stock at Rs 200. Right now, it’s trading at Rs 160. What should I do next?', createdAt: new Date(), updatedAt: new Date()},
        {authorId: 10, questionTitle: 'I want to see more info for a company.', questionText: 'Where can I get the company’s financial report and other information?', createdAt: new Date(), updatedAt: new Date()},
        {authorId: 4, questionTitle: 'What are some good companies to invest in?', questionText: 'How to find good companies as there are thousands of publicly listed companies in the Indian stock market?', createdAt: new Date(), updatedAt: new Date()},
        {authorId: 9, questionTitle: 'This is taking foreverrrr', questionText: 'What is the appropriate amount of time to spend while researching stocks?', createdAt: new Date(), updatedAt: new Date()},
        {authorId: 16, questionTitle: 'Should I invest in upcoming IPO?', questionText: 'Should I invest in upcoming IPO?', createdAt: new Date(), updatedAt: new Date()},
        {authorId: 8, questionTitle: 'OMG HELP', questionText: 'My stock is down by 60%. How much further down can it can go??', createdAt: new Date(), updatedAt: new Date()},
        {authorId: 3, questionTitle: 'question about caps', questionText: 'Is investing in small caps more profitable than large caps?', createdAt: new Date(), updatedAt: new Date()},
        {authorId: 7, questionTitle: 'So... my stock is doing really well.', questionText: 'I’ve invested in a stock at Rs 100 and it has given me a return of 58% last year. How long should I hold this stocks?', createdAt: new Date(), updatedAt: new Date()},
        {authorId: 10, questionTitle: 'Can someone explain a stop loss to me?', questionText: 'Should I use a stop loss on my investments?', createdAt: new Date(), updatedAt: new Date()},
        {authorId: 2, questionTitle: 'blockChains are awesome!', questionText: 'Who doesn\'t love blockChains??', createdAt: new Date(), updatedAt: new Date()},
        {authorId: 3, questionTitle: 'I want to code some moneeyyy', questionText: 'How do I make my own cryptocurrency?', createdAt: new Date(), updatedAt: new Date()},
        {authorId: 4, questionTitle: 'I wanna learn about cryptocurrency!', questionText: 'How do I even get started learning about crypto?', createdAt: new Date(), updatedAt: new Date()},
        {authorId: 16, questionTitle: 'I\'m very confused about crypto and blockchains help me please!', questionText: 'Honestly I don\'t have any idea what they mean, could someone give me a summary or an ELI5?', createdAt: new Date(), updatedAt: new Date()},
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
