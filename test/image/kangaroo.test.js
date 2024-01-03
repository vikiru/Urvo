const { fetchData } = require('../../utils/fetchData');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('Some Random API - Kangaroo', () => {
	it('Should return valid JSON data', async () => {
		const randomKangaroo = await fetchData('https://some-random-api.com/animal/kangaroo');
		assert.typeOf(randomKangaroo, 'object');
		expect(randomKangaroo).to.have.all.keys('image', 'fact');
	});
});
