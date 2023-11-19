const { fetchData } = require('../../utils/fetchData');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('Some Random API - Dog', function () {
	it('Should return valid JSON data', async function () {
		const randomDog = await fetchData('https://some-random-api.com/animal/dog');
		assert.typeOf(randomDog, 'object');
		expect(randomDog).to.have.all.keys('image', 'fact');
	});
});
