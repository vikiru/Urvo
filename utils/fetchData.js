const { fetchData } = require('../../utils/fetchData');

/**
 * Fetch a given URL and return the response data as an object.
 * @param {*} URL
 * @returns JSON Response Data
 */
async function fetchData(URL) {
	try {
		const data = await fetch(URL).then((response) => response.json());
		return data;
	} catch (error) {
		console.log(error);
	}
}

module.exports.fetchData = fetchData;
