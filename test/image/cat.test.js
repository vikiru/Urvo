const { fetchData } = require('../../utils/fetchData');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('Some Random API - Cat', function () {
	it('Should return valid JSON data', async function () {
		const randomCat = await fetchData('https://some-random-api.com/animal/cat');
		assert.typeOf(randomCat, 'object');
		expect(randomCat).to.have.all.keys('image', 'fact');
	});
});
