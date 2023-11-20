const { fetchData } = require('../../utils/fetchData');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('Some Random API - Panda', function () {
	it('Should return valid JSON data', async function () {
		const randomPanda = await fetchData('https://some-random-api.com/animal/panda');
		assert.typeOf(randomPanda, 'object');
		expect(randomPanda).to.have.all.keys('image', 'fact');
	});
});
