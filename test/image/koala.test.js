const { fetchData } = require('../../utils/fetchData');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('Some Random API - Koala', () => {
	it('Should return valid JSON data', async () => {
		const randomKoala = await fetchData('https://some-random-api.com/animal/koala');
		assert.typeOf(randomKoala, 'object');
		expect(randomKoala).to.have.all.keys('image', 'fact');
	});
});
