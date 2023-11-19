const { fetchData } = require('../../utils/fetchData');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('Coffee API', function () {
	it('Should return valid JSON data', async function () {
		const randomCoffee = await fetchData('https://coffee.alexflipnote.dev/random.json');
		assert.typeOf(randomCoffee, 'object');
		expect(randomCoffee).to.have.all.keys('file');
	});
});
