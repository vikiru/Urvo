const { fetchData } = require('../../utils/fetchData');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('Random Duck API', () => {
	it('Should return valid JSON data', async () => {
		const randomDuck = await fetchData('https://random-d.uk/api/v2/random');
		assert.typeOf(randomDuck, 'object');
		expect(randomDuck).to.have.all.keys('url', 'message');
	});
});
