const Sequelize = require('sequelize');
const { DB_USER, DB_PASS } = require('./config.json');
const User = require('./models/Users');

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
