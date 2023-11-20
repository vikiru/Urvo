const memeParser = require('../../utils/memeParser');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;

describe('Memegen.link API - Daily Struggle Meme', () => {
	it('Should return valid meme image', async () => {
		const leftButton = memeParser.parseText('Wake Up');
		const rightButton = memeParser.parseText('Snooze Alarm');
		const format = '.png';
		const memeImage = `https://api.memegen.link/images/ds/${leftButton}/${rightButton}${format}`;

		chai
			.request(memeImage)
			.get('/')
			.end((err, res) => {
				expect(res).to.have.status(200);
			});
	});
});
