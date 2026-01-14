import process from 'node:process';

const Sequelize = require('sequelize');
require('dotenv').config();
const { DB_USER, DB_PASS } = process.env;
const User = require('./models/Users.js');

const sequelize = new Sequelize('database', DB_USER, DB_PASS, {
  host: 'localhost',
  dialect: 'sqlite',
  logging: false,
  storage: 'database.sqlite',
});

(async () => {
  try {
    await User.sync();
    console.log('User sync successful');
  } catch (error) {
    console.error(error);
  }
})();
