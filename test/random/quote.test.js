const { fetchData } = require('../../utils/fetchData');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('Dummy JSON API - Quote', () => {
	it('Should return valid JSON data', async () => {
		const randomQuote = await fetchData('https://dummyjson.com/quotes/random');
		assert.typeOf(randomQuote, 'object');
		expect(randomQuote).to.include.all.keys('quote', 'author');
	});
});
