const { fetchData } = require('../../utils/fetchData');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('Some Random API - Fox', function () {
	it('Should return valid JSON data', async function () {
		const randomFox = await fetchData('https://some-random-api.com/animal/fox');
		assert.typeOf(randomFox, 'object');
		expect(randomFox).to.have.all.keys('image', 'fact');
	});
});
