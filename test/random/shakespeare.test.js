const { fetchData } = require('../../utils/fetchData');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('PoetryDB API', () => {
	it('Should return valid JSON data', async () => {
		const randomSonnet = await fetchData('https://poetrydb.org/author,title,random/Shakespeare;Sonnet;1');
		assert.typeOf(randomSonnet, 'object');
		expect(randomSonnet).to.include.all.keys('title', 'author', 'lines');
	});
});
