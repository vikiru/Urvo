const { fetchData } = require('../../utils/fetchData');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('Bored API', () => {
	it('Should return valid JSON data', async () => {
		const randomActivity = await fetchData('http://www.boredapi.com/api/activity/');
		assert.typeOf(randomActivity, 'object');
		expect(randomActivity).to.have.all.keys(
			'activity',
			'type',
			'participants',
			'price',
			'link',
			'key',
			'accessibility',
		);
	});
});
