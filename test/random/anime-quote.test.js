const { fetchData } = require('../../utils/fetchData');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('Animechan API', () => {
	it('Should return valid JSON data', async () => {
		const randomAnimeQuote = await fetchData('https://animechan.xyz/api/random');
		if (randomAnimeQuote) {
			assert.typeOf(randomAnimeQuote, 'object');
			expect(randomAnimeQuote).to.have.all.keys('anime', 'character', 'quote');
		} else {
			console.log(Error('Rate limit reached for Animechan API'));
		}
	});
});
//
