const { fetchData } = require('../../utils/fetchData');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('Some Random API - Raccoon', function () {
	it('Should return valid JSON data', async function () {
		const randomRaccoon = await fetchData('https://some-random-api.com/animal/raccoon');
		assert.typeOf(randomRaccoon, 'object');
		expect(randomRaccoon).to.have.all.keys('image', 'fact');
	});
});
