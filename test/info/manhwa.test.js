const { fetchData } = require('../../utils/fetchData');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('JikanAPI - Manhwa', () => {
	it('Should return valid JSON data', async () => {
		const query = new URLSearchParams([
			['q', `Solo Leveling`],
			['limit', '1'],
			['type', 'manhwa'],
		]);
		const manhwaSearch = await fetchData(`https://api.jikan.moe/v4/manga?${query}`);
		expect(manhwaSearch.data).to.have.lengthOf(1);
		const result = manhwaSearch.data[0];

		assert.typeOf(result, 'object');
		expect(result).to.include.all.keys('images', 'url', 'title', 'type', 'status', 'chapters', 'score');
	});
});
