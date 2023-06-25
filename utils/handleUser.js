const User = require('../models/Users');

/**
 * Retrieve a user by their id, if no user present - create a new user and return that user
 * @param {*} id
 * @returns A user corresponding to the given id
 */
async function handleUser(id) {
	const validUser = await User.findOne({ where: { id: id } });
	if (!validUser) {
		const user = await User.create({ id: id });
		return user;
	} else {
		return validUser;
	}
}

module.exports.handleUser = handleUser;
