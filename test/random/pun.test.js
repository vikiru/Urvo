const { fetchData } = require('../../utils/fetchData');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('JokeAPI - Pun', () => {
	it('Should return valid JSON data', async () => {
		const randomPun = await fetchData(
			'https://v2.jokeapi.dev/joke/Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single',
		);
		assert.typeOf(randomPun, 'object');
		expect(randomPun).to.include.all.keys('joke');
	});
});
