const { fetchData } = require('../../utils/fetchData');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('Disney API', () => {
	it('Should return valid JSON data', async () => {
		const query = new URLSearchParams([['name', 'Beast']]);
		const searchResult = await fetchData(`https://api.disneyapi.dev/character?${query}`);
		const disneyCharacter = searchResult.data[0];

		assert.typeOf(disneyCharacter, 'object');
		expect(disneyCharacter).to.include.all.keys('films', 'videoGames', 'parkAttractions', 'name', 'imageUrl');
	});
});
