const { fetchData } = require('../../utils/fetchData');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('Game of Thrones API', () => {
	it('Should return valid JSON data', async () => {
		const thronesCharacter = await fetchData('https://thronesapi.com/api/v2/Characters/2');
		assert.typeOf(thronesCharacter, 'object');
		expect(thronesCharacter).to.include.all.keys('firstName', 'lastName', 'fullName', 'title', 'imageUrl', 'family');
	});
});
