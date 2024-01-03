const { fetchData } = require('../../utils/fetchData');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('Affirmations API', () => {
	it('Should return valid JSON data', async () => {
		const randomAffirmation = await fetchData('https://www.affirmations.dev/');
		assert.typeOf(randomAffirmation, 'object');
		expect(randomAffirmation).to.have.all.keys('affirmation');
	});
});
