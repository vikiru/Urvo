const { fetchData } = require('../../utils/fetchData');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('JikanAPI - Manga', () => {
	it('Should return valid JSON data', async () => {
		const query = new URLSearchParams([
			['q', `Vagabond`],
			['limit', '1'],
		]);
		const mangaSearch = await fetchData(`https://api.jikan.moe/v4/manga?${query}`);
		expect(mangaSearch.data).to.have.lengthOf(1);
		const result = mangaSearch.data[0];

		assert.typeOf(result, 'object');
		expect(result).to.include.all.keys('images', 'url', 'title', 'type', 'status', 'chapters', 'score');
	});
});
