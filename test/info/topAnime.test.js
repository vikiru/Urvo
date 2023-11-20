const { fetchData } = require('../../utils/fetchData');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('JikanAPI - Top Anime', () => {
	it('Should return valid JSON data', async () => {
		const query = new URLSearchParams([['limit', 1]]);
		const animeSearch = await fetchData(`https://api.jikan.moe/v4/top/anime?${query}`);
		expect(animeSearch.data).to.have.lengthOf(1);
		const result = animeSearch.data[0];

		assert.typeOf(result, 'object');
		expect(result).to.include.all.keys(
			'images',
			'url',
			'trailer',
			'title',
			'type',
			'status',
			'episodes',
			'score',
			'rating',
		);
	});
});
