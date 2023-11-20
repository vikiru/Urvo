const { fetchData } = require('../../utils/fetchData');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('Digimon API', () => {
	it('Should return valid JSON data', async () => {
		const digimonSearch = await fetchData('https://digimon-api.vercel.app/api/digimon/name/Agumon');
		const digimon = digimonSearch[0];
		assert.typeOf(digimon, 'object');
		expect(digimon).to.include.all.keys('name', 'img', 'level');
	});
});
