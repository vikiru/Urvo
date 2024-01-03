const { fetchData } = require('../../utils/fetchData');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('Agify.io API', () => {
	it('Should return valid JSON data', async () => {
		const result = await fetchData('https://api.agify.io/?name=bob');
		assert.typeOf(result, 'object');
		expect(result).to.include.all.keys('name', 'age');
	});
});

describe('Genderize.io API', () => {
	it('Should return valid JSON data', async () => {
		const result = await fetchData('https://api.genderize.io?name==bob');
		assert.typeOf(result, 'object');
		expect(result).to.include.all.keys('name', 'gender');
	});
});

describe('Nationalize.io API', () => {
	it('Should return valid JSON data', async () => {
		const result = await fetchData('https://api.nationalize.io?name=bob');
		assert.typeOf(result, 'object');
		expect(result).to.include.all.keys('name', 'country');
	});
});
