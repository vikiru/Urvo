const { fetchData } = require('../../utils/fetchData');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('Some Random API - Fox', () => {
	it('Should return valid JSON data', async () => {
		const randomFox = await fetchData('https://some-random-api.com/animal/fox');
		assert.typeOf(randomFox, 'object');
		expect(randomFox).to.have.all.keys('image', 'fact');
	});
});
