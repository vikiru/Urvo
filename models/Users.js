const { Sequelize, DataTypes } = require('sequelize');
const { DB_USER, DB_PASS } = require('../config.json');
const sequelize = new Sequelize('database', DB_USER, DB_PASS, {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	storage: 'database.sqlite',
});

const User = sequelize.define('Users', {
	id: {
		type: DataTypes.STRING,
		primaryKey: true,
		allowNull: false,
	},
	balance: {
		type: DataTypes.INTEGER,
		allowNull: false,
		defaultValue: 0,
	},
	troops: {
		type: DataTypes.INTEGER,
		allowNull: false,
		defaultValue: 0,
	},
	timestamps: false,
});

module.exports = User;
