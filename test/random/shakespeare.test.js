const { fetchData } = require('../../utils/fetchData');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('PoetryDB API', () => {
	it('Should return valid JSON data', async () => {
		const result = await fetchData('https://poetrydb.org/author,title,random/Shakespeare;Sonnet;1');
		const randomSonnet = result[0];
		assert.typeOf(randomSonnet, 'object');
		expect(randomSonnet).to.include.all.keys('title', 'author', 'lines');
	});
});
