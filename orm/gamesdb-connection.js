const { Sequelize } = require('sequelize');
const config = require('./gamesdb-connection-config');

// protocol://user:password@server:port/databaseName
// const connection = new Sequelize('mysql://root:root1234@localhost:3306/demos');
const connection = new Sequelize(
  `mysql://${config.userName}:${config.password}@localhost:3000/${config.database}`,
  { logging: false},
);

module.exports = connection;
