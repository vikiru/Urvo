const { fetchData } = require('../../utils/fetchData');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('Advice Slip JSON API', () => {
	it('Should return valid JSON data', async () => {
		const randomAdvice = await fetchData('https://api.adviceslip.com/advice');
		const slip = randomAdvice.slip;
		assert.typeOf(slip, 'object');
		expect(slip).to.have.all.keys('id', 'advice');
	});
});
