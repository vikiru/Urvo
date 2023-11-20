const { fetchData } = require('../../utils/fetchData');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('JikanAPI - Manhua', () => {
	it('Should return valid JSON data', async () => {
		const query = new URLSearchParams([
			['q', `Soul Land`],
			['limit', '1'],
			['type', 'manhua'],
		]);
		const manhuaSearch = await fetchData(`https://api.jikan.moe/v4/manga?${query}`);
		expect(manhuaSearch.data).to.have.lengthOf(1);
		const result = manhuaSearch.data[0];

		assert.typeOf(result, 'object');
		expect(result).to.include.all.keys('images', 'url', 'title', 'type', 'status', 'chapters', 'score');
	});
});
