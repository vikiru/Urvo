const { fetchData } = require('../../utils/fetchData');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('Urban Dictionary API', () => {
	it('Should return valid JSON data', async () => {
		const termSearch = await fetchData('https://api.urbandictionary.com/v0/define?term=test');
		const term = termSearch.list[0];
		assert.typeOf(term, 'object');
		expect(term).to.include.all.keys('definition', 'thumbs_up', 'thumbs_down');
	});
});
