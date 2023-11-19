const { fetchData } = require('../../utils/fetchData');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('Some Random API - Red Panda', function () {
	it('Should return valid JSON data', async function () {
		const randomRedPanda = await fetchData('https://some-random-api.com/animal/red_panda');
		assert.typeOf(randomRedPanda, 'object');
		expect(randomRedPanda).to.have.all.keys('image', 'fact');
	});
});
