const { fetchData } = require('../../utils/fetchData');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('Some Random API - Whale', function () {
	it('Should return valid JSON data', async function () {
		const randomWhale = await fetchData('https://some-random-api.com/img/whale');
		assert.typeOf(randomWhale, 'object');
		expect(randomWhale).to.have.all.keys('link');
	});
});
