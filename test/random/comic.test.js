const { fetchData } = require('../../utils/fetchData');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('xkcd Comics', () => {
	it('Should return valid JSON data', async () => {
		const comic = await fetchData('https://xkcd.com/1/info.0.json');
		assert.typeOf(comic, 'object');
		expect(comic).to.have.all.keys(
			'month',
			'num',
			'link',
			'year',
			'news',
			'safe_title',
			'transcript',
			'alt',
			'img',
			'title',
			'day',
		);
	});
});
