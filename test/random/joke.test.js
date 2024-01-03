const { fetchData } = require('../../utils/fetchData');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('Official JokeAPI', () => {
	it('Should return valid JSON data', async () => {
		const randomJoke = await fetchData('https://official-joke-api.appspot.com/jokes/random');
		assert.typeOf(randomJoke, 'object');
		expect(randomJoke).to.include.all.keys('setup', 'punchline');
	});
});
