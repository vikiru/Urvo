const { fetchData } = require('../../utils/fetchData');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('Some Random API - Bird', () => {
	it('Should return valid JSON data', async () => {
		const randomBird = await fetchData('https://some-random-api.com/animal/bird');
		assert.typeOf(randomBird, 'object');
		expect(randomBird).to.have.all.keys('image', 'fact');
	});
});
