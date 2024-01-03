const { fetchData } = require('../../utils/fetchData');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('Harry Potter API', () => {
	it('Should return valid JSON data', async () => {
		const result = await fetchData('https://hp-api.onrender.com/api/character/9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8');
		const potterCharacter = result[0];
		assert.typeOf(potterCharacter, 'object');
		expect(potterCharacter).to.include.all.keys('name', 'species', 'gender', 'house', 'ancestry', 'patronus', 'image');
	});
});
