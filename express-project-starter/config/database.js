const {
  db: { username, password, database, host },
} = require('./index');

module.exports = {
  development: {
    username,
    password,
    database,
    host,
    dialect: 'postgres',
  },
  production: {
    use_env_variable: 'postgres://ocyhcjtubhlcza:8dac876477f48f8e5e8f76ff80f04a877c1aebde3ffe3ee4cb41e91f34087400@ec2-52-87-107-83.compute-1.amazonaws.com:5432/dclfbaio1semk7',
    dialect: 'postgres',
    seederStorage: 'sequelize',
  }
};
