const { fetchData } = require('../../utils/fetchData');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('Some Random API - Bird', function () {
	it('Should return valid JSON data', async function () {
		const randomBird = await fetchData('https://some-random-api.com/animal/bird');
		assert.typeOf(randomBird, 'object');
		expect(randomBird).to.have.all.keys('image', 'fact');
	});
});
