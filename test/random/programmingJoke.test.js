const { fetchData } = require('../../utils/fetchData');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('JokeAPI - Programming Joke', () => {
	it('Should return valid JSON data', async () => {
		const randomJoke = await fetchData(
			'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single',
		);
		assert.typeOf(randomJoke, 'object');
		expect(randomJoke).to.include.all.keys('joke');
	});
});
