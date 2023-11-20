const { fetchData } = require('../../utils/fetchData');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('Random Useless Facts API', () => {
	it('Should return valid JSON data', async () => {
		const randomFact = await fetchData('https://uselessfacts.jsph.pl/api/v2/facts/random');
		assert.typeOf(randomFact, 'object');
		expect(randomFact).to.include.all.keys('text');
	});
});
